import Vue from "vue";
import MainHotlinks from "./MainHotlinks.vue";
import { HOTLINK } from "../../utils/HotLinks";

test("util에서 핫링크 링크와 아이콘을 가져와 화면에 표시", () => {
  const cmp = new Vue(MainHotlinks).$mount();
  expect(cmp.hotlinkData).toBe(HOTLINK);
});
