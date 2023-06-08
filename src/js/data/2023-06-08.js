dataSetVersion = "2023-06-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Source",
    key: "source",
    tooltip: "Check this to restrict by source.",
    checked: false,
    sub: [
      { name: "Book 1", key: "b1" },
      { name: "Book 2", key: "b2" },
      { name: "Book 3", key: "b3" },
      { name: "Book 4", key: "b4" },
      { name: "Comics", key: "comics" },
      { name: "Other", key: "other" },
    ]
  },;

dataSet[dataSetVersion].characterData = [
  {
    name: "Cliffside Makorra",
    img: "c5DqpgX.png",
    opts: {
      source: [ "b1" ]
    }
  },
  {
    name: "I really like you and I think we were meant for each other!",
    img: "tJnkSzK.png",
    opts: {
      source: ["b1"]
    }
  },
  {
   name: "Love at first sight",
    img: "tJnkSzK.png",
    opts: {
      source: ["b1"]
    }
  }
];
