import { mount } from "@vue/test-utils";
import MainHotlinks from "./MainHotlinks.vue";
import { HOTLINK } from "../../config/hotLinks";

describe("MainHotlinks 컴포넌트 테스트", () => {
  const cmp = mount(MainHotlinks);

  it("config폴더에서 핫링크 링크 정보를 가져온다.", () => {
    expect(cmp.vm.hotlinkData).toBe(HOTLINK);
  });

  it("핫링크 링크 정보에는 링크 아이콘, URL, 이름정보가 포함되어 있다.", () => {
    expect(cmp.vm.hotlinkData[0]).toHaveProperty("icon", "link", "name");
  });
});
