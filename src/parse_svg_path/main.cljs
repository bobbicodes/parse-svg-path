(ns parse-svg-path.main
  (:require
   [clojure.spec.alpha :as s]
   [reagent.core :as r]
   [parse-svg-path.latex :as latex]))

(defonce path (r/atom "M89 629Q89 663 116 684T171 705Q215 705 237 681T260 634Q260 619 233 434T204 244Q201 237 175 237Q150 237 146 244Q144 248 117 433T89 629ZM90 86Q90 125 116 148T177 171Q211 169 235 146T259 86Q259 48 235 25T175 1Q138 1 114 24T90 86Z"))
(defonce textbox (r/atom @path))

(s/def ::path
       (s/+
        (s/cat :segment
               (s/cat
                :command (set "MmLlHhVvCcSsQqTtAaZz")
                :params (s/* (set "0123456789 .-,"))))))

(defn parse-params [v]
  (->> v
       (apply str)
       (re-seq #"[0-9\.\-\+]+")
       (map js/parseFloat)))

(defn valid-segment? [{:keys [command params]}]
  (case command
    ("Z" "z") (= 0 (count (parse-params params)))
    ("H" "h" "V" "v") (= 1 (count (parse-params params)))
    ("M" "m" "T" "t" "L" "l") (= 2 (count (parse-params params)))
    ("Q" "q" "S" "s") (= 4 (count (parse-params params)))
    ("C" "c") (= 6 (count (parse-params params)))
    ("A" "a") (= 7 (count (parse-params params)))))

(defn valid-path? [s]
  (every? #(valid-segment? (:segment %)) (s/conform ::path (seq s))))

(comment
   (count (parse-params ["8" "9" " " "6" "2" "9"]))
    (every? #(valid-segment? (:segment %)) (s/conform ::path (seq @textbox)))
  (reset! path (str "M" (nth (vals latex/l) 3) "Z")))

(defn x-val [[command params]]
  (case command
    ("C" "S" "Q") (nth params 2)
    "A" (nth params 5)
    "V" nil
    (first params)))

(defn y-val [[command params]]
  (case command
    ("C" "S" "Q") (nth params 3)
    "A" (nth params 6)
    "H" nil
    (second params)))

(defn dimensions [s]
  (let [path s
        x-vals (remove nil? (map x-val path))
        y-vals (remove nil? (map y-val path))]
    [(- (apply max x-vals) (apply min x-vals))
     (- (apply max y-vals) (apply min y-vals))]))

(comment
  (update [23 56 23 45] 2 inc)
  (dimensions @path)
  '(["M" (132 523)] ["Q" (98 523 98 490)] ["V" (479)] ["L" (111 451)] ["Q" (186 293 220 178)] ["L" (228 154)] ["H" (196)] ["Q" (158 154 142 157)] ["T" (103 176)] ["Q" (92 183 81 194)] ["T" (62 215 53 227)] ["Q" (51 228 38 228 19 228 19 218 19 212 38 183)] ["T" (93 121 164 83)] ["Q" (171 81 389 81 549 81 553 82 573 89 573 110 573 141 541 152 535 154 472 154)] ["H" (408)] ["L" (405 171)] ["Q" (393 243 393 290 393 342 402 383)] ["T" (421 447 431 475)] ["Q" (431 492 417 507)] ["T" (381 522)] ["Q" (370 522 363 519)] ["T" (347 495 331 435)] ["Q" (330 426 330 391 330 342 339 286)] ["T" (357 194 367 154)] ["H" (269)] ["L" (268 158)] ["Q" (268 161 249 237)] ["T" (206 398 175 495)] ["Q" (164 523 132 523)] ["Z" ()])
  (nth (vals latex/l) 1)
  )

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defonce latex-num (r/atom 0))

(defn app []
  [:div {:style {:margin "auto"
                 :width  "1000px"}}
   [:h1 "SVG Path Editor"]
   #_(let [[width height] (dimensions @path)]
     [:div
      [:p (str  width " x " height)]])
   [:div [:textarea
          {:rows      (+ 2 (/ (count @path) 60))
           :cols      60
           :value     (str @textbox)
           :on-change #(do (when (valid-path? @textbox)
                             (reset! path (-> % .-target .-value)))
                           (reset! textbox (-> % .-target .-value)))}]]
   [button "Next " #(do (swap! latex-num inc)
                        (reset! path (str "M" (nth (vals latex/l) @latex-num) "Z")))]
   [:svg {:width    1000
          :view-box "0 0 1000 1000"
          :transform "scale(1,-1)"}
    [:path {:fill "#ffaa00"
            :d    @path}]]])

(defn ^:dev/after-load start []
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))