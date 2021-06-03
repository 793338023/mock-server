module.exports = async (ctx) => {
  return {
    msg: "success",
    code: 200,
    data: {
      id: 1580,
      productName: "442",
      branch: { id: 1042, name: "培优佛山分校" },
      campus: [{ id: 1167, name: "外联部下的校区" }],
      year: 2021,
      grade: [{ id: 119515, name: "一年级" }],
      subject: [{ id: 119528, name: "语文" }],
      semester: { id: 119500, name: "寒假" },
      classType: { id: 119497, name: "长期类" },
      chargeClassType: { id: 119495, name: "低价班" },
      specType: "MANY_SPEC",
      includeMaterialsPrice: false,
      status: "OFF_SHELVES",
      buyLimitCount: 1,
      imgList: [
        {
          imgType: "THEME_IMG",
          imgUrl:
            "https://pyinsight-static-test.xiaojiaoyu100.com/console/assets/image/default_detail_image.png",
        },
      ],
      specList: [
        {
          id: 1603,
          name: "科目",
          valueList: [
            { id: 2294, specValue: "语" },
            { id: 2295, specValue: "数" },
          ],
        },
        {
          id: 1604,
          name: "时间段",
          valueList: [{ id: 2296, specValue: "上午" }],
        },
      ],
      specMatrix: [
        {
          id: 3736,
          specValue1: { name: "科目", value: "语" },
          specValue2: { name: "时间段", value: "上午" },
          totalPrice: 0,
          activityPrice: 0,
          stockList: [
            {
              id: 6199,
              campus: { id: 1167, name: "外联部下的校区" },
              stock: 0,
              useStock: 0,
            },
          ],
        },
        {
          id: 3737,
          specValue1: { name: "科目", value: "数" },
          specValue2: { name: "时间段", value: "上午" },
          totalPrice: 0,
          activityPrice: 0,
          stockList: [
            {
              id: 6200,
              campus: { id: 1167, name: "外联部下的校区" },
              stock: 0,
              useStock: 0,
            },
          ],
        },
      ],
      displayTag: "体验课",
      advertImage: "",
      advertUrl: "",
      teacherEntranceToastImg:
        "http://pyinsight-test.oss-cn-shenzhen.aliyuncs.com/console/upload/1622168447198-101.jpg",
      showTeacherEntranceType: "TOAST_IMAGE",
    },
    requestId: "05c61e9b",
    timestamp: 1622168282711,
  };
};
