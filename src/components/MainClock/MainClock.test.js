import { mount, createLocalVue } from "@vue/test-utils";
import MainClock from "./MainClock.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(require("vue-moment"));
const now = new Date();
const month = now.getMonth();

// when
describe("현재 시간이 current 학기 due보다 과거일 때", () => {
  // given
  const state = {
    semesterInfos: {
      current: {
        act: "종강",
        id: "2020-1",
        due: now.setMonth(month + 1),
      },
      next: {
        act: "개강",
        id: "2020-2",
        due: now.setMonth(month + 3),
      },
      seasonal: {
        act: "종강",
        id: "2020 여름",
        due: now.setMonth(month + 2),
      },
    },
  };

  const store = new Vuex.Store({
    state,
  });

  const cmp = mount(MainClock, { store, localVue });

  it("시계에 표시되는 학기 정보가 current 학기가 된다.", () => {
    // then
    expect(cmp.vm.semesterInfo).toBe(state.semesterInfos.current);
  });

  it("current 학기 종강까지 남은 시간이 0 이상의 정수로 표시된다.", () => {
    // then
    const calculatedDistances = Object.entries(cmp.vm.gapTime);
    calculatedDistances.forEach(([key, value]) => {
      expect(parseInt(value)).toBeGreaterThan(-1);
    });
  });
});

// describe("현재 시간이 current 학기 due보다 미래이면서 seasonal 학기 due보다 과거일 때", () => {
//   const state = {
//     semesterInfos: {
//       current: {
//         act: "종강",
//         id: "2020-1",
//         due: now.setMonth(month + -1),
//       },
//       next: {
//         act: "개강",
//         id: "2020-2",
//         due: now.setMonth(month + 3),
//       },
//       seasonal: {
//         act: "종강",
//         id: "2020 여름",
//         due: now.setMonth(month + 1),
//       },
//     },
//   };

//   const store = new Vuex.Store({
//     state,
//   });

//   const cmp = mount(MainClock, { store, localVue });

//   it("다음학기 개강까지 남은 시간이 표시된다.", () => {
//     const calculatedDistances = Object.entries(cmp.vm.calculatedDistances);
//     calculatedDistances.forEach(([key, value]) => {
//       expect(parseInt(value)).toBeGreaterThan(0);
//     });
//   });

//   it("시계 바꾸기 버튼을 표시한다.", () => {
//     const calculatedDistances = Object.entries(cmp.vm.calculatedDistances);
//     calculatedDistances.forEach(([key, value]) => {
//       expect(parseInt(value)).toBeGreaterThan(0);
//     });
//   });

//   it("시계 바꾸기 버튼을 클릭하면 남은 시간의 일 수가 바뀐다.", () => {
//     const calculatedDistances = Object.entries(cmp.vm.calculatedDistances);
//     calculatedDistances.forEach(([key, value]) => {
//       expect(parseInt(value)).toBeGreaterThan(0);
//     });
//   });
// });

// describe("현재 시간이 seasaonal 학기 due보다 미래일 때", () => {
//   const state = {
//     semesterInfos: {
//       current: {
//         act: "종강",
//         id: "2020-1",
//         due: new Date(2020, 5, 26, 23, 59, 59),
//       },
//       next: {
//         act: "개강",
//         id: "2020-2",
//         due: new Date(2020, 8, 1, 23, 59, 59),
//       },
//       seasonal: {
//         act: "종강",
//         id: "2020 여름",
//         due: new Date(2020, 6, 20, 23, 59, 59),
//       },
//     },
//   };

//   const store = new Vuex.Store({
//     state,
//   });

//   const cmp = mount(MainClock, { store, localVue });

//   it("seasonal 학기 종강시간이 현재보다 과거일 때 다음학기 개강까지 남은 시간만 표시된다.", () => {
//     const calculatedDistances = Object.entries(cmp.vm.calculatedDistances);
//     calculatedDistances.forEach(([key, value]) => {
//       expect(parseInt(value)).toBeGreaterThan(0);
//     });
//   });
// });
