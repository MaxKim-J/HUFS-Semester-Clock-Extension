import { mount, createLocalVue } from "@vue/test-utils";
import MainClock from "./MainClock.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(require("vue-moment"));

const now = new Date();
const month = now.getMonth();

// when
describe("현재 시간이 현재 학기(current) 종강일 이전일 때", () => {
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

  it("시계에 표시되는 학기 정보(semesterInfo)가 current 학기가 된다.", () => {
    // then
    expect(cmp.vm.semesterInfo).toBe(state.semesterInfos.current);
  });

  it("학기 종강까지 남은 시간이 0 이상의 정수로 표시된다.", () => {
    // then
    const calculatedDistances = Object.entries(cmp.vm.gapTime);
    calculatedDistances.forEach(([key, value]) => {
      expect(parseInt(value)).toBeGreaterThan(-1);
    });
  });
});

describe("현재 시간이 현재 학기(current) 종강일 이후이면서 계절학기(seasonal) 종강일 이전일 때", () => {
  const state = {
    semesterInfos: {
      current: {
        act: "종강",
        id: "2020-1",
        due: now.setMonth(month - 1),
      },
      next: {
        act: "개강",
        id: "2020-2",
        due: now.setMonth(month + 3),
      },
      seasonal: {
        act: "종강",
        id: "2020 여름",
        due: now.setMonth(month + 1),
      },
    },
  };

  const store = new Vuex.Store({
    state,
  });

  const cmp = mount(MainClock, { store, localVue });

  it("시계에 표시되는 학기 정보(semesterInfo)가 next 학기가 된다.", () => {
    // then
    expect(cmp.vm.semesterInfo).toBe(state.semesterInfos.next);
  });

  it("학기 종강까지 남은 시간이 0 이상의 정수로 표시된다.", () => {
    // then
    const calculatedDistances = Object.entries(cmp.vm.gapTime);
    calculatedDistances.forEach(([key, value]) => {
      expect(parseInt(value)).toBeGreaterThan(-1);
    });
  });

  it("next 학기와 seasonal 학기를 전환하는 시계 바꾸기 버튼을 표시한다.", () => {
    // then
    expect(cmp.find(".tab-clock-main-btn").exists()).toBe(true);
  });

  it("시계 바꾸기 버튼을 클릭하면 semesterInfo가 계절학기 정보로 바뀐다.", () => {
    // then
    cmp.find(".tab-clock-main-btn").trigger("click");
    expect(cmp.vm.semesterInfo).toBe(state.semesterInfos.seasonal);
  });
});

describe("현재 시간이 계절학기(seasonal) 종강일 이후이면서 다음학기 개강일 이전일 때 ", () => {
  const state = {
    semesterInfos: {
      current: {
        act: "종강",
        id: "2020-1",
        due: now.setMonth(month - 2),
      },
      next: {
        act: "개강",
        id: "2020-2",
        due: now.setMonth(month + 1),
      },
      seasonal: {
        act: "종강",
        id: "2020 여름",
        due: now.setMonth(month - 1),
      },
    },
  };

  const store = new Vuex.Store({
    state,
  });

  const cmp = mount(MainClock, { store, localVue });

  it("시계에 표시되는 학기 정보(semesterInfo)가 next 학기가 된다.", () => {
    // then
    expect(cmp.vm.semesterInfo).toBe(state.semesterInfos.next);
  });

  it("학기 종강까지 남은 시간이 0 이상의 정수로 표시된다.", () => {
    // then
    const calculatedDistances = Object.entries(cmp.vm.gapTime);
    calculatedDistances.forEach(([key, value]) => {
      expect(parseInt(value)).toBeGreaterThan(-1);
    });
  });

  it("시계 바꾸기 버튼이 렌더링되지 않는다.", () => {
    // then
    expect(cmp.find(".tab-clock-main-btn").exists()).toBe(false);
  });
});
