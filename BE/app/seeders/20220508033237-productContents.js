"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("productContents", [{
                productId: 1,
                content: `Điện thoại Samsung Galaxy S22 Ultra Chính hãng giá tốt tại Hà Nội, Đà Nẵng, Tp.HCM. Điện thoại cao cấp nhất trong dòng S năm nay với nhiều nâng cấp đáng giá.

            Ngày 09/02/2022, Samsung đã tung ra dòng flagship Galaxy S thế hệ tiếp theo. Máy có thiết kế đậm chất của Galaxy Note huyền thoại.`,
                isImage: false,
            },
            {
                productId: 1,
                content: "/resources/images/productContents/samsung-galaxy-s22-ultra-11.jpg",
                isImage: true,
            },
            {
                productId: 1,
                content: `Dòng điện thoại cao cấp Galaxy S22 bao gồm 3 biến thể đó là Galaxy S22, Galaxy S22 Plus và Galaxy S22 Ultra. Trong đó, Samsung Galaxy S22 Ultra chính là phiên bản kế nhiệm của Galaxy Note đã không được ra mắt năm 2021. Máy có thiết kế vuông vức, hỗ trợ bút S Pen được gắn trên máy. Mặt sau, máy có 4 camera được đặt riêng rẽ từng ống kính một, đèn Flash LED được đặt gọn giữa 2 ống kính phụ bên phải.

            So với thế hệ tiền nhiệm thì Galaxy S22 Ultra không có một đặc điểm nào được kế thừa từ Galaxy S21 Ultra mà thay vào đó nó có thiết kế gống như Galaxy Note 20 Ultra hơn.`,
                isImage: false,
            },
            {
                productId: 1,
                content: "/resources/images/productContents/so-sanh-galaxy-s22-vs-s21-ultra.jpg",
                isImage: true,
            },
            {
                productId: 1,
                content: `Galaxy S22 Ultra có tỷ lệ màn hình 19.5:9 ngắn và lùn hơn đôi chút S21 Ultra với tỷ lệ 20:9 với cùng kich thước màn hình. Máy được trang bị chịp Qualcomm Snapdragon 8 Gen 1 khác với người tiền nhiệm được trang bị con chip Exynos 2100. Máy có pin 5000 mAh cùng dung lượng với S21 Ultra nhưng hỗ trợ sạc nhanh 45W thay vì 25W trên người tiền nhiệm.`,
                isImage: false,
            },

            //model 2
            {
                productId: 6,
                content: `Điện thoại Samsung Galaxy S22 Ultra Chính hãng giá tốt tại Hà Nội, Đà Nẵng, Tp.HCM. Điện thoại cao cấp nhất trong dòng S năm nay với nhiều nâng cấp đáng giá.

            Ngày 09/02/2022, Samsung đã tung ra dòng flagship Galaxy S thế hệ tiếp theo. Máy có thiết kế đậm chất của Galaxy Note huyền thoại.`,
                isImage: false,
            },
            {
                productId: 6,
                content: "/resources/images/productContents/samsung-galaxy-s22-ultra-11.jpg",
                isImage: true,
            },
            {
                productId: 6,
                content: `Dòng điện thoại cao cấp Galaxy S22 bao gồm 3 biến thể đó là Galaxy S22, Galaxy S22 Plus và Galaxy S22 Ultra. Trong đó, Samsung Galaxy S22 Ultra chính là phiên bản kế nhiệm của Galaxy Note đã không được ra mắt năm 2021. Máy có thiết kế vuông vức, hỗ trợ bút S Pen được gắn trên máy. Mặt sau, máy có 4 camera được đặt riêng rẽ từng ống kính một, đèn Flash LED được đặt gọn giữa 2 ống kính phụ bên phải.

            So với thế hệ tiền nhiệm thì Galaxy S22 Ultra không có một đặc điểm nào được kế thừa từ Galaxy S21 Ultra mà thay vào đó nó có thiết kế gống như Galaxy Note 20 Ultra hơn.`,
                isImage: false,
            },
            {
                productId: 6,
                content: "/resources/images/productContents/so-sanh-galaxy-s22-vs-s21-ultra.jpg",
                isImage: true,
            },
            {
                productId: 6,
                content: `Galaxy S22 Ultra có tỷ lệ màn hình 19.5:9 ngắn và lùn hơn đôi chút S21 Ultra với tỷ lệ 20:9 với cùng kich thước màn hình. Máy được trang bị chịp Qualcomm Snapdragon 8 Gen 1 khác với người tiền nhiệm được trang bị con chip Exynos 2100. Máy có pin 5000 mAh cùng dung lượng với S21 Ultra nhưng hỗ trợ sạc nhanh 45W thay vì 25W trên người tiền nhiệm.`,
                isImage: false,
            },

            //model 3
            {
                productId: 11,
                content: `Điện thoại Samsung Galaxy S22 Ultra Chính hãng giá tốt tại Hà Nội, Đà Nẵng, Tp.HCM. Điện thoại cao cấp nhất trong dòng S năm nay với nhiều nâng cấp đáng giá.

            Ngày 09/02/2022, Samsung đã tung ra dòng flagship Galaxy S thế hệ tiếp theo. Máy có thiết kế đậm chất của Galaxy Note huyền thoại.`,
                isImage: false,
            },
            {
                productId: 11,
                content: "/resources/images/productContents/samsung-galaxy-s22-ultra-11.jpg",
                isImage: true,
            },
            {
                productId: 11,
                content: `Dòng điện thoại cao cấp Galaxy S22 bao gồm 3 biến thể đó là Galaxy S22, Galaxy S22 Plus và Galaxy S22 Ultra. Trong đó, Samsung Galaxy S22 Ultra chính là phiên bản kế nhiệm của Galaxy Note đã không được ra mắt năm 2021. Máy có thiết kế vuông vức, hỗ trợ bút S Pen được gắn trên máy. Mặt sau, máy có 4 camera được đặt riêng rẽ từng ống kính một, đèn Flash LED được đặt gọn giữa 2 ống kính phụ bên phải.

            So với thế hệ tiền nhiệm thì Galaxy S22 Ultra không có một đặc điểm nào được kế thừa từ Galaxy S21 Ultra mà thay vào đó nó có thiết kế gống như Galaxy Note 20 Ultra hơn.`,
                isImage: false,
            },
            {
                productId: 11,
                content: "/resources/images/productContents/so-sanh-galaxy-s22-vs-s21-ultra.jpg",
                isImage: true,
            },
            {
                productId: 11,
                content: `Galaxy S22 Ultra có tỷ lệ màn hình 19.5:9 ngắn và lùn hơn đôi chút S21 Ultra với tỷ lệ 20:9 với cùng kich thước màn hình. Máy được trang bị chịp Qualcomm Snapdragon 8 Gen 1 khác với người tiền nhiệm được trang bị con chip Exynos 2100. Máy có pin 5000 mAh cùng dung lượng với S21 Ultra nhưng hỗ trợ sạc nhanh 45W thay vì 25W trên người tiền nhiệm.`,
                isImage: false,
            },

            //model 4
            {
                productId: 15,
                content: `ZTE đang dần khẳng định vị thế của mình trên thị trường smart phone chơi game. Với sự xuất hiện của những gaming phone đình đám trên thị trường điện thoại thông minh trong năm qua là Red Magic 6 series. Và mới đây nhất, thông tin về việc dòng điện thoại tiếp nối sự thành công của Nubia Red Magic 6 series trong năm qua đã liên tục được tiết lộ. Mọi sự chú ý của người dùng đều đổ dồn về chiếc điện thoại mang tên Nubia Red Magic 7 Pro. `,
                isImage: false,
            },
            {
                productId: 15,
                content: "/resources/images/productContents/nubia-redmagic-7-pro-1.jpg",
                isImage: true,
            },
            {
                productId: 15,
                content: `Nubia Red Magic 7 Pro sẽ là chiếc điện thoại gaming hàng đầu của hãng trong năm nay nói riêng và trên toàn thế giới nói chung. Những nâng cấp về mặt trải nghiệm chơi game cũng như cấu hình phần cứng sẽ là khá đáng kể so với thế hệ Red Magic 6 trước đó.

                Cụ thể Nubia Red Magic 7 Pro sẽ được cải thiện hiệu năng đáng kể với sức mạnh của con chip hàng đầu tới từ Qualcomm mang tên Snapdragon 8 Gen 1. Không cần phải bàn cãi nhiều về vi xử lí này khi đã có quá nhiều siêu phẩm của các hãng điện thoại hàng đầu sử dụng nó. Được tích hợp bộ xử lí đồ hoạ Adreno 730 mang đến trải nghiệm mượt mà vô cùng trên những tựa game yêu cầu đồ hoạ phức tạp nhất. `,
                isImage: false,
            },
            {
                productId: 15,
                content: "/resources/images/productContents/nubia-redmagic-7-pro.jpg",
                isImage: true,
            },
            {
                productId: 15,
                content: `Máy vẫn giữ cho mình thiết kế hầm hố cùng khả năng tản nhiệt đã làm nên tên tuổi của những thế hệ trước. Nubia Red Magic 7 Pro được tiết lộ là sẽ cải thiện rất nhiều về dung lượng pin mang lại trải nghiệm giải trí kéo dài. `,
                isImage: false,
            },

            //model 5
            {
                productId: 19,
                content: ` Điện thoại Xiaomi Redmi K50 Gaming Mercedes AMG Edition thiết kế ấn tượng, hiệu năng cực khủng. Địa chỉ mua Redmi K50 Gaming AMG F1 Champion Editon giá rẻ tại Hà Nội, Đà Nẵng, Tp.HCM.

                Đường đua gaming phone những ngày đầu năm 2022 đang trở nên nóng hơn bao giờ hết với sự góp mặt của "chiến binh" đầu tiên mang tên Xiaomi Redmi K50 Gaming. Bên cạnh phiên bản tiêu chuẩn được rất nhiều người dùng yêu thích, Redmi đem tới một phiên bản đặc biệt với tên gọi Xiaomi Redmi K50 Gaming Mercedes AMG Edition khiến dân chơi hệ gaming phone đứng ngồi không yên. `,
                isImage: false,
            },
            {
                productId: 19,
                content: "/resources/images/productContents/xiaomi-redmi-k50-gaming-mercedes-amg-edition-15.jpg",
                isImage: true,
            },
            {
                productId: 19,
                content: `Redmi luôn có kế hoạch riêng khi trang bị cho phiên bản gaming một thiết kế khác biệt hoàn toàn so với phiên bản tiêu chuẩn. Nếu như Redmi K40 Gaming chúng ta có Bruce Lee King of Kung-Fu Edition với màu vàng cực mạnh mẽ, mang đậm dấu ấn của võ sĩ Lý Tiểu Long thì Redmi K50 Gaming lần này chúng ta có Mercedes AMG Edition hợp tác với đội đua nổi tiếng AMG Petronas Formula One Team, đem tới cảm giác như đang bước vào cuộc đua nảy lửa, bứt phá gaming trên từng cây số.
 
                Với phiên bản Mercedes AMG Edition lần này, chúng ta sẽ có một thiết   
                Hiệu năng chính là yếu tố giúp cho Redmi K50 Gaming Mercedes AMG Edition trở thành một trong những mẫu gaming phone có sức mạnh dẫn đầu với siêu chip Snapdragon 8 Gen 1 mạnh nhất tới từ Qualcomm ở thời điểm hiện tại. Với tiến trình 4nm hiện đại bậc nhất, GPU Adreno thế hệ mới cải tiến hiệu năng tới 52% và điện năng tiêu thụ giảm 25%, có thể sánh ngang với Apple A15 Bionic trên iPhone 13.
                
                Sự xuất hiện của Redmi K50 Gaming lần này cũng đánh dấu một bước tiến mới của Redmi trong thị trường gaming phone sôi động, sẵn sàng so găng với các thương hiệu lớn khác như Asus ROG Phone hay Nubia Red Magic.
                
                Phiên bản đặc biệt Redmi K50 Gaming Mercedes AMG Edition có duy nhất dung lượng RAM 12GB cùng 256GB bộ nhớ trong và chỉ giới hạn ở 10.000 chiếc được bán ra.  `,
                isImage: false,
            },
            //model 4
            {
                productId: 21,
                content: ` Điện thoại Asus ROG Phone 5 giá rẻ nhất Hà Nội, Tp.HCM, Đà Nẵng. Asus ROG Phone 5 xách tay BH 12 tháng. Cam kết hậu mãi tốt nhất Việt Nam!

                Asus ROG Phone 5 được trang bị con chip mạnh mẽ nhất của Qualcomm là Snapdragon 888 với tiến trình 5nm đầu tiên trên Thế Giới. Hiệu năng của máy vô cùng mạnh mẽ đi kèm với đa nhiệm vô cùng tốt bởi được cung cấp RAM 12GB ở phiên bản bộ nhớ nhỏ nhất và lên tới 16GB ở phiên bản bộ nhớ lớn. Asus ROG Phone 5 chạy hệ điều hành chuyên game ROG UI vô cùng mượt mà dựa trên Android 11 sẽ cho người dùng có trải nghiệm game tốt nhất.
                
                `,
                isImage: false,
            },
            {
                productId: 21,
                content: "/resources/images/productContents/ezgif-3-1aaf6f62cac0.jpg",
                isImage: true,
            },

            //model 7
            {
                productId: 23,
                content: ` Samsung Galaxy Tab S7 FE - Đỉnh cao giải trí
                Samsung Galaxy Tab S7 FE Chính hãng, Cấu hình tốt, giá rẻ tại Hà Nội, Đà Nẵng, Tp.HCM. Phân phối độc quyền Samsung Galaxy Tab S7 FE Chính hãng, BH 12 tháng!
                
                Samsung chính thức trình làng mẫu máy tính bảng có tên Galaxy Tab S7 FE, máy trang bị cấu hình mạnh mẽ, màn hình giải trí siêu lớn và điểm ấn tượng nhất là viên pin siêu khủng được tích hợp bên trong, giúp tăng hiệu suất làm việc nhưng vẫn có tính di động cực cao. Ngoài ra, thiết kế kim loại nguyên khối thanh lịch của Samsung Galaxy Tab S7 FE Chính hãng cùng viền máy mỏng và camera tối giản phía sau mang lại trải nghiệm cầm nắm gọn nhẹ trong tay và toát lên sự tinh tế.`,
                isImage: false,
            },
            {
                productId: 23,
                content: "/resources/images/productContents/samsung-galaxy-tab-s7-fan-editon-01.jpg",
                isImage: true,
            },
            //model 8
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};