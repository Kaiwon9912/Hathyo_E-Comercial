const productData = [
    {
      name: "Dây kháng lực Miniband, dây tập mông từ cao su thiên nhiên GoodFit GF911MB",
      brand: "GoodFit",
      image: "/src/assets/images/product/daykhanh1.webp",
      price: {
        original: "15.000 ₫",
        sale: "9.000 ₫",
        discount: "40%"
      },
      description: "Những bài tập cùng dây Mini band là sự thay thế tuyệt vời cho những bài tập tạ truyền thống. Bởi giá thành rẻ, linh hoạt trong nhiều bài tập và giúp cơ bắp của bạn được hoạt động một cách khác so với tạ. Nên dây miniband đang là lựa chọn tập luyện của rất nhiều người.",
      unit: "Cái",
      origin: "Việt Nam",
      option: {
        name: "Màu sắc",
        values: [
          { color1: "Hồng (3-6 lb)" },
          { color2: "Đỏ (10-12 lb)" },
          { color3: "Xanh Dương (15-20 lb)" },
          { color4: "Xanh lá (25-30 lb)" },
          { color5: "Đen (35-40 lb)" }
        ]
      }
    },
    {
      name: "Nui ống gạo lứt",
      brand: "Tây Nguyên Food",
      image: "/src/assets/images/product/nuiong.webp",
      price: {
        original: "71.000 ₫",
        sale: "59.000 ₫",
        discount: "17%"
      },
      description: "Nui từ xưa đến nay là một món ăn truyền thống của mỗi gia đình Việt. Kết hợp giữa truyền thống và hiện đại, Tây Nguyên Food - Việt Nam mang đến Nui ống gạo lứt, với từng ống nui nho nhỏ làm từ gạo lứt, một loại gạo chứa nhiều các thành phần là “quán quân” trong thực đơn eat clean của mọi nhà. Ngâm nước 20 phút, từng ống nui sẽ nở ra, mang theo màu sắc tự nhiên của gạo. Nui dai, dẻo, giòn, hậu vị có chút ngọt, khi nấu lên sẽ bóng loáng như vòng ngọc. Thay vì dùng nui thông thường, có thể dùng nui ống gạo lứt thay thế, vừa chế biến được nhiều món, vừa hỗ trợ lối sống lành mạnh cho cả nhà.",
      unit: "Túi",
      origin: "Việt Nam",
      option: {
        name: "Khối lượng",
        values: [
          { option1: "500gram" },
          { option2: "1000gram" }
        ]
      }
    },
    {
      name: "Bánh Dinh Dưỡng Tây Nguyên Food",
      brand: "Tây Nguyên Food",
      image: "/src/assets/images/product/banhdinhduong.webp",
      price: {
        original: "75.000 ₫",
        sale: "60.000 ₫",
        discount: "20%"
      },
      description: "Bánh dinh dưỡng của Tây Nguyên Food - Việt Nam được làm thủ công từ hỗn hợp hạt hạnh nhân, bí xanh, nho Chile, điều rang nguyên vị, vừng trắng, mạch nha và đế bánh được làm bằng bột gạo mì. Vị ngọt của bánh được làm từ mạch nha - tên gọi của một loại mật dẻo được sản xuất từ nếp và mộng lúa già phơi khô, đem giã thành bột mầm, rồi đem nấu và cô đặc nhiều lần để thành mạch nha. Vì vậy, bánh dinh dưỡng của Tây Nguyên Food - Việt Nam có vị ngọt tự nhiên từ mạch nha, hoàn toàn không đường và có độ giòn tan đặc trưng từ các loại hạt. Đặc biệt rất giàu chất béo tốt, chất xơ, protein và các chất dinh dưỡng quan trọng, bánh dinh dưỡng không chỉ ngon miệng mà còn có lợi ích cho sức khỏe.",
      unit: "Hũ",
      origin: "Việt Nam",
      option: {
        name: "Khối lượng",
        values: [
          { option1: "100gr" },
          { option2: "300gr" }
        ]
      }
    },
    {
      name: "Gạo lứt dẻo điện biên",
      brand: "Tây Nguyên Food",
      image: "/src/assets/images/product/gaoluc.webp",
      price: {
        original: "68.000 ₫",
        sale: "30.000 ₫",
        discount: "0%"
      },
      description: "Gạo lứt hay còn gọi là gạo tấm, gạo đồ, gạo xào, ... là loại gạo nguyên cám, chỉ loại bỏ lớp vỏ cứng bên ngoài không ăn được và chứa ba thành phần: lớp cám, mầm gạo. và nội nhũ. Với các thành phần này, gạo lứt vẫn là quán quân trong thực đơn eat clean của mọi nhà. Điện Biên, xứ sở của những cánh đồng mênh mông và các đồng lúa công nghiệp lớn, cũng là nơi Tây Nguyên Food - Việt Nam chọn ra Gạo Lứt Dẻo Điện Biên, với từng hạt gạo màu nâu đỏ nhạt như gạch, từng hạt gạo chắc tay, bóng loáng lấp lánh. Sau khi nấu, chúng nở ra, có vị ngọt nhẹ, dẻo mềm, giòn dai. Mùi thơm của gạo sau nấu lan khắp phòng, đáp ứng đủ các tiêu chí dài - dẻo - thơm ngon.",
      unit: "Túi",
      origin: "Việt Nam",
      option: {
        name: "Khối lượng",
        values: [
          { option1: "500gram" },
          { option2: "1000gram" }
        ]
      }
    },
    {
      name: "Bánh Tráng Gạo Lứt",
      brand: "Tây Nguyên Food",
      image: "/src/assets/images/product/banhtrang.webp",
      price: {
        original: "90.000 ₫",
        sale: "72.000 ₫",
        discount: "20%"
      },
      description: "Bánh tráng gạo lứt là loại bánh được làm từ bột gạo lứt, tinh bột sắn được tráng mỏng và phơi khô. Bánh có màu nâu nhạt (gần như màu be nâu), độ dày vừa phải, dai và dễ cuốn. Bánh được làm từ gạo lứt - loại tinh bột chuyển hóa chậm, tạo cảm giác no lâu giúp hỗ trợ bạn kiểm soát cân nặng một cách hiệu quả.",
      unit: "Túi",
      origin: "Việt Nam",
      option: {
        name: "Khối lượng",
        values: [
          { option1: "500gram" },
          { option2: "1000gram" }
        ]
      }
    },
    {
      name: "Bình nước thể thao GoodFit GF05RA dung tích 800ml, chất liệu nhựa PC an toàn",
      brand: "GoodFit",
      image: "/src/assets/images/product/binhnuoc.webp",
      price: {
        original: "99.000 ₫",
        sale: "79.000 ₫",
        discount: "20%"
      },
      description: "Với những người thường xuyên chạy bộ, đạp xe, tập gym, yoga,… thì bình nước thể thao GoodFit là vật dụng không thể thiếu trong suốt quá trình tập luyện.",
      unit: "Chai",
      origin: "Việt Nam",
      option: {
        name: "Màu sắc",
        values: [
          { color1: "Xanh dương" },
          { color2: "Xanh lá" },
          { color3: "Hồng" }
        ]
      }
    },
    {
      name: "Tinh Dầu Cà Phê (Coffee Essential Oil) Heny Garden",
      brand: "Heny Garden",
      image: "/src/assets/images/product/tinhdau.webp",
      price: {
        original: "100.000 ₫",
        sale: "89.000 ₫",
        discount: "11%"
      },
      description: "Tinh dầu Cà Phê khi được khuếch tán vào trong không khí sẽ khiến hương thơm nồng nàn ấm áp lan tỏa khắp ngôi nhà bạn, mang lại một khởi đầu hoàn hảo cho ngày mới. Ngoài ra, tinh dầu Cà Phê còn có giúp cải thiện tâm trạng, giảm căng thẳng, tăng cảm giác thèm ăn, tăng cường miễn dịch, ngăn ngừa lão hóa….",
      unit: "Chai",
      origin: "Việt Nam",
      option: {
        name: "Chọn số lượng",
        values: [
          { quantity1: "1" }
        ]
      }
    },
    {
      name: "Sữa ong chúa tươi - Dalat Cordyceps",
      brand: "Dalat Cordyceps",
      image: "/src/assets/images/product/suaong.webp",
      price: {
        original: "130.000 ₫",
        sale: "117.000 ₫",
        discount: "10%"
      },
      description: "Sữa ong chúa là sản phẩm được tiết ra từ hàm của con thợ từ 7 ngày tuổi trở đi để nuôi ong chúa và ấu trùng ong chúa gồm nước, carbohydrate, giàu protein, chất béo, các loại acid amin, lipid, vitamin thành phần khác nhau, bao gồm mật hoa, chất đạm cùng các loại vitamin và khoáng chất như 20 loại axit amin; Omega-3; Glucid; Lipid; Vitamin PP,… Nhờ sử dụng thức ăn này hàng ngày mà những chú ong chúa thường có tuổi thọ gấp 40 lần so với các con ong thợ cùng sống trong bầy.",
      unit: "Hũ",
      origin: "Việt Nam",
      option: {
        name: "Trọng lượng",
        values: [
          { option1: "100gr" },
          { option2: "200gr" },
          { option3: "500gr" }
        ]
      }
    },

  ];
  
export default productData;
export { productData };