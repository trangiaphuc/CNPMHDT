"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], "");
         */
        return queryInterface.bulkInsert("productInfos", [{
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 1,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 6,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 11,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 15,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 19,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 21,
            },
            {
                operatingSystem: "Android 12, One UI 4.1",
                language: "Tiếng Việt, Đa ngôn ngữ",
                screenType: "	Dynamic AMOLED 2X",
                screenColor: "16 triệu màu",
                standerScreen: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (tối đa)6.8 inches, QHD+ (1440 x 3088 pixels), tỷ lệ 19.5:9 Corning Gorilla Glass Victus+Always-on display",
                resolution: "1440 x 3088 pixels",
                wideScreen: "6,8",
                touchTechnology: "Cảm ứng điện dung đa điểm",
                rearCamera: "108 MP, f/1.8, 24mm (góc rộng) 10 MP, f/4.9, 230mm (tele kính tiềm vọng), zoom 10x 10 MP, f/2.4, 70mm (tele), zoom 3x 12 MP, f/2.2, 13mm, 120˚ (góc siêu rộng) Quay phim: 8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                frontCamera: "40 MP, f/2.2, 26mm (góc rộng) Quay phim: 4K@30/60fps, 1080p@30fps",
                flashLight: "Có",
                cameraFeatures: "LED flash, auto-HDR, panorama",
                film: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EISIS",
                videoCalls: "	Có",
                CPUSpeed: "1x3.00 GHz & 3x2.50 GHz & 4x1.80",
                multiplier: "8 nhân",
                chipset: "Qualcomm SM8450 Snapdragon 8 Gen1 (4 nm) 8 nhân (1x3.00 GHz & 3x2.50 GHz & 4x1.80) GPU: Adreno 730",
                RAM: "8-12GB",
                GPU: "Adreno 730",
                phonebook: "	Không giới hạn",
                ROM: "128-512GB-1TB UFS 3.1",
                externalMemoryCard: "	Không",
                maximumcardSupport: "	Không",
                design: "Khung kim loại + Hai mặt kính",
                size: "	163.3 x 77.9 x 8.9 mm",
                weight: "228 g",
                vatteryType: "Li-Ion",
                batteryCapacity: "Li-Ion 5000 mAh Sạc nhanh 45W Sạc nhanh không dây Qi/PMA 15W Sạc ngược không dây 4.5W",
                removableBattery: "Không",
                thirthG: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
                fourthG: "LTE",
                simType: "2 SIM, Nano SIM",
                simnLot: "2 SIM, Nano SIM",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
                GPS: "	A-GPS, GLONASS, BDS, GALILEO",
                bluetooth: "	5.2, A2DP, LE",
                GPRS: "	Có",
                headphoneJack: "Không",
                NFC: "	Có",
                USBConnection: "USB Type-C 3.2",
                otherConnection: "	NFC",
                chargingPort: "Type-C",
                createdAt: new Date(),
                updatedAt: new Date(),
                productId: 23,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, "");
         */
    },
};