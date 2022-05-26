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