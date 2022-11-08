const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});
describe("Books names negative result", () => {
  it("Books names not shouldb e sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Марк Твен",
        "Заводной апельсин",
        "О дивный новый мир",
        "Заводной апельсин",
      ])
    ).toEqual([
      "Заводной апельсин",
      "Заводной апельсин",
      "Марк Твен",
      "О дивный новый мир",
    ]);
  });
});
