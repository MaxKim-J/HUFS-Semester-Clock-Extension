import { mount } from "@vue/test-utils";
import MainHotlinks from "./MainHotlinks.vue";
import { HOTLINK } from "../../config/hotLinks";

describe("MainHotlinks 컴포넌트 테스트", () => {
  const cmp = mount(MainHotlinks);

  it("config폴더에서 핫링크 링크 정보 가져오기", () => {
    expect(cmp.vm.hotlinkData).toBe(HOTLINK);
  });
});
