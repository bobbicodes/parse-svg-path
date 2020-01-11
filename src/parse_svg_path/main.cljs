(ns parse-svg-path.main
  (:require
   [reagent.core :as r]
   [clojure.string :as str]))

(defn parse-commands 
  "Splits an SVG path string into a sequence of commands"
  [s]
  (str/split s #"(?=[A-Z])"))

(defn parse-vals 
  "Parses the command's parameters into a sequence of numbers"
  [s]
  (map js/parseFloat (re-seq #"[\d.]+" (subs s 1))))

(defn parse-svg-path 
  "Takes an SVG path string and outputs a seq of vectors
   containing each command paired with its params"
  [s]
  (map (juxt first parse-vals) (parse-commands s)))

(defn all-vals [s]
  (map js/parseFloat (re-seq #"\d+\.?\d*|\d*\.?\d+" s)))

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
  (let [path (parse-svg-path s)
        x-vals (remove nil? (map x-val path))
        y-vals (remove nil? (map y-val path))]
    [(- (apply max x-vals) (apply min x-vals))
     (- (apply max y-vals) (apply min y-vals))]))

(defonce path (r/atom "M132 523Q98 523 98 490V479L111 451Q186 293 220 178L228 154H196Q158 154 142 157T103 176Q92 183 81 194T62 215 53 227Q51 228 38 228 19 228 19 218 19 212 38 183T93 121 164 83Q171 81 389 81 549 81 553 82 573 89 573 110 573 141 541 152 535 154 472 154H408L405 171Q393 243 393 290 393 342 402 383T421 447 431 475Q431 492 417 507T381 522Q370 522 363 519T347 495 331 435Q330 426 330 391 330 342 339 286T357 194 367 154H269L268 158Q268 161 249 237T206 398 175 495Q164 523 132 523Z"))

(comment
  (dimensions @path)
  )

(defn app []
  [:div {:style {:margin     "auto"
                 :width      "1000px"}}
   [:svg {:width 1000 :view-box "0 0 1000 1000"}
    [:path {:fill "#ffaa00"
            :d @path}]]
   (let [[width height] (dimensions @path)]
     [:div 
      [:p (str "Width: " width)]
      [:p (str "Height: " height)]])])

(defn ^:dev/after-load start []
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))