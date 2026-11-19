window.WEDDING_CONFIG = {
  couple: {
    groom: "Tài",
    bride: "Thương",
    dateDisplay: "25 · 12 · 2026",
    pageTitle: "Tài & Thương — Wedding",
    pageDescription: "Wedding website of Tài & Thương"
  },
  theme: {
    cream: "#FBF9F4", creamSoft: "#F4F0E8", white: "#FFFDF8",
    olive: "#728255", oliveDark: "#465531", ink: "#292823",
    muted: "#766F65", champagne: "#C7B184", line: "#D9D0C0"
  },
  cover: {
    eyebrow: "THE WEDDING OF",
    invitation: "Trân trọng mời bạn đến chung vui cùng chúng mình",
    scrollLabel: "SCROLL TO DISCOVER",
    image: { src: "https://www.figma.com/api/mcp/asset/0e76b7d9-dfb2-4fbf-a1ab-770620a63b7d.png", fallback: "assets/hero.jpg" },
    imageAlt: "Tài và Thương"
  },
  story: {
    heading: "Our Story",
    intro: "Yêu Chú từ ngày cầu vai còn đỏ, đến hôm nay đã ngả vàng. Tình yêu ấy vẫn vẹn nguyên, chỉ là chàng học viên năm nào giờ đã trở thành Chồng em.",
    items: [
      { date: "06.2023", title: "Gặp gỡ", text: "Cô sinh viên trường Vinh lỡ va vào ánh mắt Chàng học viên LCH", image: { src: "https://www.figma.com/api/mcp/asset/8732efb4-5c41-4898-81df-acd1f29effe5.png", fallback: "Story 1.jpg" }, imageAlt: "Kỷ niệm gặp gỡ", crop: { width: "100%", height: "100%", top: "0%", left: "0%" } },
      { date: "09.2023", title: "Thành đôi", text: "Có người dám xin cơ hội, cũng có người dám đồng ý trao cơ hội", image: { src: "https://www.figma.com/api/mcp/asset/836cc3ca-e659-4665-9403-a5d275589121.png", fallback: "Story 2.jpg" }, imageAlt: "Kỷ niệm thành đôi", crop: { width: "100%", height: "205.61%", top: "-24.29%", left: "0.04%" } },
      { date: "12.2026", title: "Về chung", text: "Ngày chúng mình chính thức gọi nhau là Gia Đình.", image: { src: "https://www.figma.com/api/mcp/asset/06896493-881a-4136-95d3-0a49d28306e4.png", fallback: "Story 3.jpg" }, imageAlt: "Ngày về chung", crop: { width: "100%", height: "204.65%", top: "-27.91%", left: "0.22%" } }
    ]
  },
  events: {
    heading: "Wedding Event",
    dressCode: "Dress code · Neutral / Olive / Champagne",
    image: { src: "https://www.figma.com/api/mcp/asset/070d1543-a6a7-455b-9cbb-fdbd9f4c72c5.png", fallback: "assets/event-bouquet.jpg" },
    imageAlt: "Wedding event",
    items: [
      { icon: "♡", title: "Lễ Vu Quy", time: "Thứ Bảy · 26.12.2026 · 09:00", location: "Tư gia nhà gái · Nghệ An", mapLabel: "Chỉ đường nhà gái", mapUrl: "https://www.google.com/maps/search/?api=1&query=19.366184844061866,105.39700098059532" },
      { icon: "♡", title: "Tiệc Cưới", time: "Chủ Nhật · 27.12.2026 · 09:00", location: "Tư gia nhà trai · Nghệ An", mapLabel: "Chỉ đường nhà trai", mapUrl: "https://www.google.com/maps?q=19.0989534,105.4797226&entry=gps&shh=CAE&lucs=,94297699,94231188,100821555,47071704,94218641,94282134,94286869,100820247,100822504,100838877,121816461,100798797&g_ep=CAISEjI2LjQ1LjEuMDExNzM4Mjc5MBgAIIgnKnIsOTQyOTc2OTksOTQyMzExODgsMTAwODIxNTU1LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5LDEwMDgyMDI0NywxMDA4MjI1MDQsMTAwODM4ODc3LDEyMTgxNjQ2MSwxMDA3OTg3OTdCAlZO&skid=cf49b9bb-b9b2-4985-891a-ab276d135901&g_st=iz" }
    ]
  },
  gallery: {
    heading: "Gallery",
    images: [
      { src: { src: "assets/gallery-1.jpg" }, alt: "Ảnh cưới 1", layout: "portrait" },
      { src: { src: "assets/gallery-2.jpg" }, alt: "Ảnh cưới 2", layout: "portrait" },
      { src: { src: "assets/gallery-3.jpg" }, alt: "Ảnh cưới 3", layout: "wide" },
      { src: { src: "assets/gallery-4.jpg" }, alt: "Ảnh cưới 4", layout: "portrait" },
      { src: { src: "assets/gallery-5.jpg" }, alt: "Ảnh cưới 5", layout: "portrait" }
    ]
  },
  location: {
    heading: "Location",
    intro: "Chạm vào nút Chỉ đường để mở đúng vị trí Google Maps.",
    mapImage: { src: "https://www.figma.com/api/mcp/asset/4caee18a-8b0e-4b21-b31b-294de190060c.svg", fallback: "assets/map.jpg" },
    items: [
      { title: "Tư gia nhà gái", address: "Nghệ An", url: "https://www.google.com/maps/search/?api=1&query=19.366184844061866,105.39700098059532" },
      { title: "Tư gia nhà trai", address: "Nghệ An", url: "https://www.google.com/maps?q=19.0989534,105.4797226&entry=gps&shh=CAE&lucs=,94297699,94231188,100821555,47071704,94218641,94282134,94286869,100820247,100822504,100838877,121816461,100798797&g_ep=CAISEjI2LjQ1LjEuMDExNzM4Mjc5MBgAIIgnKnIsOTQyOTc2OTksOTQyMzExODgsMTAwODIxNTU1LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5LDEwMDgyMDI0NywxMDA4MjI1MDQsMTAwODM4ODc3LDEyMTgxNjQ2MSwxMDA3OTg3OTdCAlZO&skid=cf49b9bb-b9b2-4985-891a-ab276d135901&g_st=iz" }
    ]
  },
  rsvp: {
    heading: "RSVP",
    intro: "Vui lòng xác nhận sự tham dự để chúng mình chuẩn bị chu đáo nhất nhé!",
    attendYes: "Tham dự",
    attendNo: "Rất tiếc, không tham dự",
    namePlaceholder: "Họ và tên",
    guestsPlaceholder: "Số lượng người tham dự",
    messagePlaceholder: "Lời nhắn (tuỳ chọn)",
    submitLabel: "Gửi xác nhận",
    sendingLabel: "Đang gửi...",
    successMessage: "Cảm ơn bạn! Xác nhận đã được gửi.",
    errorMessage: "Chưa gửi được. Vui lòng thử lại hoặc liên hệ cô dâu/chú rể.",
    setupMessage: "RSVP chưa được nối với Web App endpoint.",
    note: "Thông tin chỉ được sử dụng để chuẩn bị cho ngày cưới.",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1Q10Q5InybL0o54QssDZPOBhj7OBpiLM7kdDxnd7YphI/edit?gid=0#gid=0",
    submitUrl: "https://script.google.com/macros/s/AKfycbyJcX_QR-UxNBx_GZnJTuiRLnKOLTtxNwP5EseCM511meaeUESUG1b1IwoyC1pRMFFqWg/exec"
  },
  gift: {
    heading: "Gift",
    intro: "Sự hiện diện của bạn đã là món quà quý giá nhất. Nếu muốn gửi thêm lời chúc, bạn có thể dùng mã QR bên dưới.",
    qrImage: "assets/qr-code.jpg",
    qrAlt: "Mã QR chuyển khoản",
    bank: "Vietcombank", accountHolder: "TA THI HOAI THUONG",
    accountNumber: "001123456789", accountDisplay: "0011 2345 6789",
    copyHint: "Chạm để sao chép số tài khoản", copiedHint: "Đã sao chép số tài khoản",
    thanks: "Cảm ơn bạn!", goodbye: "Hẹn gặp bạn trong ngày đặc biệt của chúng mình."
  },
  decor: { leaf: { src: "https://www.figma.com/api/mcp/asset/6df7f9d6-9751-4589-9267-44be8de60ff5.png", fallback: "assets/decor-leaf.svg" } }
};
