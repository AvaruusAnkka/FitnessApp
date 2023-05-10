import IntakeStorage from "../class/intakeStorage";

export default function getCalories() {
  const eaten = IntakeStorage.get();
  const sorted = eaten.sort((a, b) => b.date - a.date);

  let data = [];
  let subData = [];
  let total = 0;
  let currentDate = new Date(sorted[0].date).toDateString();

  for (let i = 0; i < sorted.length; i++) {
    if (currentDate !== new Date(sorted[i].date).toDateString()) {
      data.push({
        isExpanded: false,
        total: total,
        category_name: currentDate,
        subcategory: subData,
      });
      currentDate = new Date(sorted[i].date).toDateString();
      total = 0;
      subData = [];
    }

    total += Number(sorted[i].calories);
    subData.push({
      id: sorted[i].food,
      val: sorted[i].calories,
      date: sorted[i].date,
    });

    if (i === sorted.length - 1) {
      data.push({
        isExpanded: false,
        total: total,
        category_name: currentDate,
        subcategory: subData,
      });
    }
  }

  return data;
}
