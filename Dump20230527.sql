-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: job_recommendation
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `academiclevels`
--

DROP TABLE IF EXISTS `academiclevels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `academiclevels` (
  `id` varchar(255) NOT NULL,
  `academicLevelName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academiclevels`
--

LOCK TABLES `academiclevels` WRITE;
/*!40000 ALTER TABLE `academiclevels` DISABLE KEYS */;
INSERT INTO `academiclevels` VALUES ('24549c4d-a429-4bbd-81c4-b57ea16bc008','Cao đẳng nghề/ Cao đẳng chuyên  nghiệp','2023-05-27 13:45:04','2023-05-27 13:45:04'),('2c4caee0-8b49-4d4d-bce5-f6712cc4b3f1','Sơ cấp nghề/ chứng chỉ học nghề ngắn hạn','2023-05-27 13:45:04','2023-05-27 13:45:04'),('58d4abbc-be8d-4950-92f3-c50eccc9d7ae','Không có trình độ chuyên môn kỹ thuật','2023-05-27 13:45:04','2023-05-27 13:45:04'),('9cc8d8e4-4dce-402b-95c4-0e825251a114','Đại học','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ab560a2f-44ec-48d8-b34e-6ecdc58532ca','Bằng nghề dài hạn/Trung cấp nghề/Trung cấp chuyên nghiệp','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c73b4173-2515-4992-9880-6783792ac10a','Thạc sĩ','2023-05-27 13:45:04','2023-05-27 13:45:04'),('e0d3db41-b4ec-4283-ba8a-806da4c68aaf','Chứng chỉ/Chứng nhận học nghề (dưới 3 tháng)','2023-05-27 13:45:04','2023-05-27 13:45:04'),('fa08c66b-8cf2-43fb-9e7a-ba6eeac318b4','Tiến sĩ','2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `academiclevels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidatecareers`
--

DROP TABLE IF EXISTS `candidatecareers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatecareers` (
  `candidateId` varchar(255) NOT NULL,
  `careerId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`candidateId`,`careerId`),
  KEY `careerId` (`careerId`),
  CONSTRAINT `candidatecareers_ibfk_1` FOREIGN KEY (`candidateId`) REFERENCES `candidates` (`id`),
  CONSTRAINT `candidatecareers_ibfk_2` FOREIGN KEY (`careerId`) REFERENCES `careers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatecareers`
--

LOCK TABLES `candidatecareers` WRITE;
/*!40000 ALTER TABLE `candidatecareers` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidatecareers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidatedistricts`
--

DROP TABLE IF EXISTS `candidatedistricts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatedistricts` (
  `candidateId` varchar(255) NOT NULL,
  `districtId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`candidateId`,`districtId`),
  KEY `districtId` (`districtId`),
  CONSTRAINT `candidatedistricts_ibfk_1` FOREIGN KEY (`candidateId`) REFERENCES `candidates` (`id`),
  CONSTRAINT `candidatedistricts_ibfk_2` FOREIGN KEY (`districtId`) REFERENCES `districts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatedistricts`
--

LOCK TABLES `candidatedistricts` WRITE;
/*!40000 ALTER TABLE `candidatedistricts` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidatedistricts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidateposts`
--

DROP TABLE IF EXISTS `candidateposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidateposts` (
  `candidateId` varchar(255) NOT NULL,
  `postId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`candidateId`,`postId`),
  KEY `postId` (`postId`),
  CONSTRAINT `candidateposts_ibfk_1` FOREIGN KEY (`candidateId`) REFERENCES `candidates` (`id`),
  CONSTRAINT `candidateposts_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidateposts`
--

LOCK TABLES `candidateposts` WRITE;
/*!40000 ALTER TABLE `candidateposts` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidateposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidates`
--

DROP TABLE IF EXISTS `candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidates` (
  `id` varchar(255) NOT NULL,
  `candidateName` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `CVImage` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `homeAddress` text,
  `gender` tinyint(1) DEFAULT NULL,
  `experienceYear` int DEFAULT NULL,
  `academicLevelId` varchar(255) DEFAULT NULL,
  `candidateCivilId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `candidateCivilId` (`candidateCivilId`),
  KEY `academicLevelId` (`academicLevelId`),
  CONSTRAINT `candidates_ibfk_1` FOREIGN KEY (`academicLevelId`) REFERENCES `academiclevels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careers`
--

DROP TABLE IF EXISTS `careers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careers` (
  `id` varchar(255) NOT NULL,
  `careerName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careers`
--

LOCK TABLES `careers` WRITE;
/*!40000 ALTER TABLE `careers` DISABLE KEYS */;
INSERT INTO `careers` VALUES ('0648399d-270b-4cd4-844c-c3afb7be481b','Giáo dục / Đào tạo','2023-05-27 13:45:04','2023-05-27 13:45:04'),('077bf424-1d55-4557-95d4-784cde52f987','Cơ khí / Ô tô / Tự động hóa','2023-05-27 13:45:04','2023-05-27 13:45:04'),('0b1f3b63-5abd-426f-8182-b7145d6899d1','Ngành khác','2023-05-27 13:45:04','2023-05-27 13:45:04'),('0d816981-f573-4f22-89a5-574cc26141f4','Du lịch','2023-05-27 13:45:04','2023-05-27 13:45:04'),('135df3e6-6109-4969-a99b-52e9df75df78','Tiếng Nhật','2023-05-27 13:45:04','2023-05-27 13:45:04'),('15893c80-892b-4130-9d58-d0f68d3af222','Nhà hàng / Khách sạn','2023-05-27 13:45:04','2023-05-27 13:45:04'),('15b7371b-96fd-497f-a2d2-5045cbd12196','Vệ sinh công nghiệp','2023-05-27 13:45:04','2023-05-27 13:45:04'),('18a55a05-9305-4127-8cbc-06bfef9d4c2b','Tổ Chức Sự Kiện / Du Lịch','2023-05-27 13:45:04','2023-05-27 13:45:04'),('1fd6c3ca-55b8-42bb-9800-9a746d936a8b','Vận chuyển / Giao nhận / Kho vận','2023-05-27 13:45:04','2023-05-27 13:45:04'),('2ae7785f-1bd9-455f-a601-d32cf801d076','Kế toán / Kiểm toán','2023-05-27 13:45:04','2023-05-27 13:45:04'),('2af1c128-d98a-4bee-9e3d-d21c3599af33','Tài chính / Đầu tư','2023-05-27 13:45:04','2023-05-27 13:45:04'),('2fe905a1-fe6f-4674-9e1f-cd4f353910b9','Lái xe','2023-05-27 13:45:04','2023-05-27 13:45:04'),('38e76b2f-653e-4faa-a0e7-97ab7cd8e916','Bất động sản','2023-05-27 13:45:04','2023-05-27 13:45:04'),('3a598629-70f7-4097-b5d7-9d34f8a934d7','Công nghệ thực phẩm / Dinh dưỡng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('423d2314-de3b-4f85-b3cb-6cd0e9d2cb3a','Bưu chính viễn thông','2023-05-27 13:45:04','2023-05-27 13:45:04'),('4809eba4-4fef-4dd2-b359-1511a2bcc6ee','Tư vấn / Chăm Sóc Khách Hàng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('5259d47e-8da3-4e27-a088-ca1c6600fd1b','Y tế / Chăm sóc sức khỏe','2023-05-27 13:45:04','2023-05-27 13:45:04'),('56f2274d-0d05-4796-a781-2365a6a7747e','An toàn lao động','2023-05-27 13:45:04','2023-05-27 13:45:04'),('6138ba33-2811-45b2-9f3f-5a02671068f6','Biên phiên dịch','2023-05-27 13:45:04','2023-05-27 13:45:04'),('71b9b69b-26cb-448e-868c-2e101ba3c717','Bảo hiểm','2023-05-27 13:45:04','2023-05-27 13:45:04'),('73e4221a-2a99-42d2-841e-9b19f593b46e','Mỹ thuật / Kiến trúc / Thiết kế','2023-05-27 13:45:04','2023-05-27 13:45:04'),('7bc136cd-47ae-46ed-ba5c-22a411af7d28','Luật / Pháp lý','2023-05-27 13:45:04','2023-05-27 13:45:04'),('7dd7e838-cab8-4cf2-9548-0e3a13d4f626','Spa & Massage','2023-05-27 13:45:04','2023-05-27 13:45:04'),('8527514e-dac3-4846-a4b3-4b52ed34ecd8','Lao Động Phổ Thông','2023-05-27 13:45:04','2023-05-27 13:45:04'),('87357730-c0a3-4411-a7cf-4da7e5f33272','Chứng khoán','2023-05-27 13:45:04','2023-05-27 13:45:04'),('92670b41-70e9-4cad-9f51-6d32256b0524','May mặc','2023-05-27 13:45:04','2023-05-27 13:45:04'),('9ac25fac-24f3-4e17-8233-84e427e7be77','Điện / Điện tử / Điện lạnh','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ad87d78f-6f48-46cb-a7ed-b98cd1d4dc45','An Ninh / Bảo Vệ','2023-05-27 13:45:04','2023-05-27 13:45:04'),('b0f3c4e6-5693-44fd-bba2-29fba0c30853','Công nhân','2023-05-27 13:45:04','2023-05-27 13:45:04'),('b4b4510d-9465-4bbb-a425-e89b43566f1b','Lễ tân','2023-05-27 13:45:04','2023-05-27 13:45:04'),('b59493d8-9050-482f-ae91-3669b10a3556','Thể dục - thể thao','2023-05-27 13:45:04','2023-05-27 13:45:04'),('bb35971b-013d-424a-85e4-7f3707ee253c','Hàng hải / Hàng không','2023-05-27 13:45:04','2023-05-27 13:45:04'),('be87b62f-eb47-47c7-8e25-df74c05257a7','CNTT - Phần cứng / Mạng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c095471e-00c2-4e8d-b4b4-255596c4326f','In ấn / Xuất bản','2023-05-27 13:45:04','2023-05-27 13:45:04'),('caff6d0c-5043-4cf4-82fd-a7e08827c240','Nhân sự','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ccb97cd2-d3f4-4544-8e95-a2d3f724e4de','Kinh doanh','2023-05-27 13:45:04','2023-05-27 13:45:04'),('d4a07035-568e-436c-95dd-14be88adc05d','Nông - Lâm - Thủy Sản','2023-05-27 13:45:04','2023-05-27 13:45:04'),('d685ac59-0a0a-48a7-981a-0ec3db565678','Xây dựng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('daa7a8eb-437b-43bf-95f5-dbaab96e5f9c','Nội ngoại thất','2023-05-27 13:45:04','2023-05-27 13:45:04'),('dd43132c-e057-4fb1-b819-b228d1c3c775','Quản lý chất lượng (QA/QC)','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ddc0ffd8-f414-4081-a882-a4bd944775a2','Ngân hàng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('e7dee23f-fd63-43ac-9ae3-6801f8c65e00','Sản xuất / Vận hành sản xuất','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ea9512e6-80b0-49e8-bdde-e5b315b3718b','Hành chính / Văn Phòng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('efd64906-20fe-4476-9338-dd17f79debb2','Bán hàng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('f27ac2cb-8cd3-4790-981b-2dca2a7d3692','Công nghệ sinh học','2023-05-27 13:45:04','2023-05-27 13:45:04'),('f7b35adc-7d4c-4765-b738-ce8c73ed413f','Truyền Hình / Quảng Cáo Marketing','2023-05-27 13:45:04','2023-05-27 13:45:04'),('f8102d25-33e1-44db-a02f-9a4b68b0c66d','CNTT - Phần mềm','2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `careers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` varchar(255) NOT NULL,
  `companyName` text,
  `imageLink` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `email` text,
  `phone` text,
  `address` text,
  `introduction` text,
  `companySize` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES ('089164d3-ec36-4be0-a9be-bb699ea0296c','CÔNG TY CP QUẢN LÝ DỊCH VỤ ADORA','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-cp-quan-ly-dich-vu-adora-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-cp-quan-ly-dich-vu-adora.html',NULL,NULL,'431 Hoàng Văn Thụ, P. 4, Q. Tân Bình',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('12350e51-fb50-4771-9c94-1d4d12bc78ac','Công ty TNHH MTV Khách Sạn Quốc Tế Bình Minh','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh.html',NULL,NULL,'148 Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, TPHCM',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('4871325b-b430-4c7d-af1b-420853b3d218','TNHH TM DV DÌN KÝ','https://data.hcmjob.vn/hcmjob/2023/5/12/tnhh-tm-dv-din-ky-hcmjob.vn.jpg','https://hcmjob.vn/tnhh-tm-dv-din-ky.html',NULL,NULL,'142/15 Cộng Hòa, phường 4, Quận Tân Bình',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('8cf172b6-35d7-4799-a7fb-0b3e93d8616b','CÔNG TY CỔ PHẦN ẨM THỰC NHẬT BẢN HOÀNG TÂM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam-hcmjob.vn.png','https://hcmjob.vn/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam.html',NULL,NULL,'Tầng 16, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('abb61133-8757-4bed-9d91-9f340738797e','CÔNG TY TNHH SUẤT ĂN CÔNG NGHIỆP THIÊN HÀ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha.html',NULL,NULL,'69 - 71 Đường 17, Khu phố 5, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('af3a44de-2fe6-4a49-9f4d-7645d6afadd0','Công ty Cổ Phần The Street','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-the-street-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-the-street.html',NULL,NULL,'260A Pasteur, Phường Võ Thị Sáu, Quận 3',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('bd1cd1f4-df78-4479-b6d7-7da08f081463','Công ty TNHH MTV Thành Võ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-thanh-vo-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-mtv-thanh-vo.html',NULL,NULL,'88 -90 -92 Đồng Đen, Phường 14, quận Tân Bình, Tp.HCM',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('bd630ffe-cccb-4afa-a6e5-fac9274b5878','CÔNG TY THƯƠNG MẠI THIỆN KIM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-thuong-mai-thien-kim-hcmjob.vn.jpeg','https://hcmjob.vn/cong-ty-thuong-mai-thien-kim.html',NULL,NULL,'Trương Đình Hội, P16, Quận 8, TP. HCM',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('d1719a2e-b0bb-4ea5-80f4-44479ee9cfc4','CÔNG TY TNHH FRANKIES','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-frankies-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-frankies.html',NULL,NULL,'47 Khu dân cư Vạn Phúc, Đường Đinh Thị Thi, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04'),('f28e073e-0709-4a81-a769-9ca8b52944c3','CÔNG TY CỔ PHẦN BỮA ĂN TRÊN MÂY','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-bua-an-tren-may-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-bua-an-tren-may.html',NULL,NULL,'Số 135/1/138 đường Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companycareers`
--

DROP TABLE IF EXISTS `companycareers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companycareers` (
  `companyId` varchar(255) NOT NULL,
  `careerId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`companyId`,`careerId`),
  KEY `careerId` (`careerId`),
  CONSTRAINT `companycareers_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`),
  CONSTRAINT `companycareers_ibfk_2` FOREIGN KEY (`careerId`) REFERENCES `careers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companycareers`
--

LOCK TABLES `companycareers` WRITE;
/*!40000 ALTER TABLE `companycareers` DISABLE KEYS */;
INSERT INTO `companycareers` VALUES ('089164d3-ec36-4be0-a9be-bb699ea0296c','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('089164d3-ec36-4be0-a9be-bb699ea0296c','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('12350e51-fb50-4771-9c94-1d4d12bc78ac','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('12350e51-fb50-4771-9c94-1d4d12bc78ac','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('4871325b-b430-4c7d-af1b-420853b3d218','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('4871325b-b430-4c7d-af1b-420853b3d218','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('8cf172b6-35d7-4799-a7fb-0b3e93d8616b','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('8cf172b6-35d7-4799-a7fb-0b3e93d8616b','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('abb61133-8757-4bed-9d91-9f340738797e','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('abb61133-8757-4bed-9d91-9f340738797e','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('af3a44de-2fe6-4a49-9f4d-7645d6afadd0','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('af3a44de-2fe6-4a49-9f4d-7645d6afadd0','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('bd1cd1f4-df78-4479-b6d7-7da08f081463','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('bd1cd1f4-df78-4479-b6d7-7da08f081463','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('bd630ffe-cccb-4afa-a6e5-fac9274b5878','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('bd630ffe-cccb-4afa-a6e5-fac9274b5878','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('d1719a2e-b0bb-4ea5-80f4-44479ee9cfc4','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('d1719a2e-b0bb-4ea5-80f4-44479ee9cfc4','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59'),('f28e073e-0709-4a81-a769-9ca8b52944c3','0648399d-270b-4cd4-844c-c3afb7be481b','2023-05-27 13:46:59','2023-05-27 13:46:59'),('f28e073e-0709-4a81-a769-9ca8b52944c3','077bf424-1d55-4557-95d4-784cde52f987','2023-05-27 13:46:59','2023-05-27 13:46:59');
/*!40000 ALTER TABLE `companycareers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `districts`
--

DROP TABLE IF EXISTS `districts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `districts` (
  `id` varchar(255) NOT NULL,
  `districtName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `districts`
--

LOCK TABLES `districts` WRITE;
/*!40000 ALTER TABLE `districts` DISABLE KEYS */;
INSERT INTO `districts` VALUES ('07aa8c4b-d60a-4f31-bda5-5912583ec89f','Quận 11','2023-05-27 13:45:04','2023-05-27 13:45:04'),('2d05313d-fc71-4171-bfcd-847e647c4d72','Quận 10','2023-05-27 13:45:04','2023-05-27 13:45:04'),('3eabaae7-fb03-402c-874d-27412b16a757','Quận 12','2023-05-27 13:45:04','2023-05-27 13:45:04'),('41cf9078-7c75-4ba6-ab6e-305fe573ef4a','Quận 2','2023-05-27 13:45:04','2023-05-27 13:45:04'),('5656de9d-372e-458f-ae8e-3ea88a867f62','Quận 7','2023-05-27 13:45:04','2023-05-27 13:45:04'),('57144d9f-54de-415f-9d32-909210782d4a','Quận Gò Vấp','2023-05-27 13:45:04','2023-05-27 13:45:04'),('67c0c3c8-13d7-4d6f-bb9e-836ac1132688','Huyện Nhà Bè','2023-05-27 13:45:04','2023-05-27 13:45:04'),('685588f0-bd8d-4f1f-95e6-63eb573975e2','Quận 9','2023-05-27 13:45:04','2023-05-27 13:45:04'),('7dbe5ecd-5548-4863-ad85-735c290a9eb0','Quận Bình Tân','2023-05-27 13:45:04','2023-05-27 13:45:04'),('9175307d-5335-4fa7-9058-67ff36c25abc','Quận 1','2023-05-27 13:45:04','2023-05-27 13:45:04'),('936e9eb7-3cc3-42e2-9cc0-0dbe557ce496','Quận 6','2023-05-27 13:45:04','2023-05-27 13:45:04'),('a893df3c-41a4-4091-aa5c-73cfefe0eb1e','Huyện Củ Chi','2023-05-27 13:45:04','2023-05-27 13:45:04'),('b5c3d72e-c60d-46ca-b988-3a87e1c2d9a9','Quận 5','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c1391926-ccbd-474d-97df-1f3c209b7f78','Quận Tân Bình','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c47a1d08-23b9-4d8d-afcb-4eb97245e2b1','Thủ Đức','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c6e856b1-882f-43e5-b81a-fac8ce9f7078','Quận 8','2023-05-27 13:45:04','2023-05-27 13:45:04'),('cd1d9f3a-b211-49cc-b8d3-9c9602c987d8','Huyện Cần Giờ','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ce5b8321-499b-44a5-9d0c-1ecdf641e06d','Quận 3','2023-05-27 13:45:04','2023-05-27 13:45:04'),('d2aa8a81-aa1a-4372-a5d0-6e161119da0f','Quận 4','2023-05-27 13:45:04','2023-05-27 13:45:04'),('deb6c397-1568-41c6-94f0-8ad0dff008f2','Quận Phú Nhuận','2023-05-27 13:45:04','2023-05-27 13:45:04'),('e3b4e029-a846-4936-8390-29ec920df3ce','Huyện Hóc Môn','2023-05-27 13:45:04','2023-05-27 13:45:04'),('eb8f3687-810a-4c3f-b1b0-8b4f138852be','Huyện Bình Chánh','2023-05-27 13:45:04','2023-05-27 13:45:04'),('f7a13c0b-b01a-46d2-96c6-829e4b4659b2','Quận Bình Thạnh','2023-05-27 13:45:04','2023-05-27 13:45:04'),('ffc24941-6526-4939-af67-948419cba092','Quận Tân Phú','2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `districts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions` (
  `id` varchar(255) NOT NULL,
  `positionName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES ('0aa41c19-e359-4e4f-a262-1cf599af26ca','Nhân viên/Công nhân','2023-05-27 13:45:04','2023-05-27 13:45:04'),('6d644f50-bc40-4ea1-8d72-a7c903f75ea7','Mới tốt nghiệp/Thực tập','2023-05-27 13:45:04','2023-05-27 13:45:04'),('aaa9f3c0-c4a5-4625-b5b5-54d55fe4d61a','Trưởng phòng/Kế toán trưởng','2023-05-27 13:45:04','2023-05-27 13:45:04'),('b3253ae3-c7ab-4f07-9328-6bc7fa1cc904','Phó giám đốc','2023-05-27 13:45:04','2023-05-27 13:45:04'),('c3283995-797a-4e16-939d-e460dea5c827','Giám đốc','2023-05-27 13:45:04','2023-05-27 13:45:04'),('f4d7f8f5-936a-4922-8dea-44e0d0dbbc78','Trưởng nhóm/giám sát','2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcareers`
--

DROP TABLE IF EXISTS `postcareers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postcareers` (
  `postId` varchar(255) NOT NULL,
  `careerId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`postId`,`careerId`),
  KEY `careerId` (`careerId`),
  CONSTRAINT `postcareers_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  CONSTRAINT `postcareers_ibfk_2` FOREIGN KEY (`careerId`) REFERENCES `careers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcareers`
--

LOCK TABLES `postcareers` WRITE;
/*!40000 ALTER TABLE `postcareers` DISABLE KEYS */;
/*!40000 ALTER TABLE `postcareers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postdistricts`
--

DROP TABLE IF EXISTS `postdistricts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postdistricts` (
  `postId` varchar(255) NOT NULL,
  `districtId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`postId`,`districtId`),
  KEY `districtId` (`districtId`),
  CONSTRAINT `postdistricts_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  CONSTRAINT `postdistricts_ibfk_2` FOREIGN KEY (`districtId`) REFERENCES `districts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postdistricts`
--

LOCK TABLES `postdistricts` WRITE;
/*!40000 ALTER TABLE `postdistricts` DISABLE KEYS */;
/*!40000 ALTER TABLE `postdistricts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` varchar(255) NOT NULL,
  `jobTitle` varchar(255) NOT NULL,
  `companyId` varchar(255) NOT NULL,
  `positionId` varchar(255) DEFAULT NULL,
  `salaryMin` decimal(10,0) DEFAULT NULL,
  `salaryMax` decimal(10,0) DEFAULT NULL,
  `experienceYear` int DEFAULT NULL,
  `academicLevelId` varchar(255) DEFAULT NULL,
  `ageMin` int DEFAULT NULL,
  `ageMax` int DEFAULT NULL,
  `workingTypeId` varchar(255) DEFAULT NULL,
  `workingAddress` varchar(255) DEFAULT NULL,
  `viewCount` int DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `needNumber` int DEFAULT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `jobDescribe` text,
  `benefits` text,
  `jobRequirement` text NOT NULL,
  `contact` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `companyId` (`companyId`),
  KEY `positionId` (`positionId`),
  KEY `academicLevelId` (`academicLevelId`),
  KEY `workingTypeId` (`workingTypeId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`positionId`) REFERENCES `positions` (`id`),
  CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`academicLevelId`) REFERENCES `academiclevels` (`id`),
  CONSTRAINT `posts_ibfk_4` FOREIGN KEY (`workingTypeId`) REFERENCES `workingtypes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('3837b79c-d150-4fa5-b620-41c9f6c84dbe','Trợ Lý Cửa Hàng Trưởng (F&B)','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('41535813-cfda-4e48-925f-85d4fc47c2c5','Nhân Viên Sale - Giám Sát Kinh Doanh','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('53f20285-469a-4dad-8e1a-ee1331706ad2','Nhân Viên Content Marketing ̣̣̣(Chấp Nhận Sinh Viên Mới Ra Trường)','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('5928c424-7047-4756-8970-bbad7f8c13ac','Chuyên Viên Thiết Kế (Thiết Kế Mảng Sự Kiện - Tiệc Cưới)','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('5e41a206-9c57-49ee-a612-070fc7671995','Giám Sát Nhà Hàng','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('7fe60548-54aa-4ee8-bed2-432becf960d7','Bếp Chính','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('9cc3b0a2-c04b-4b79-abcb-f8658712cb7f','Trợ Lý Giám Đốc','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('a881f248-11ee-4016-9114-be6e99e20c7f','Nhân Viên Content Marketing','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('ca38af45-4464-4e94-9ffa-bd76d1b1bf80','Nhân Viên Thu Mua','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL),('e7b55d10-4958-4140-8af8-a3fec10aa7f9','Nữ Lao Động Phổ Thông','bd1cd1f4-df78-4479-b6d7-7da08f081463',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 13:47:48','2023-05-27 13:47:48',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('create-academiclevel.js'),('create-candidate.js'),('create-candidatecareer.js'),('create-candidatedistrict.js'),('create-candidatepost.js'),('create-career.js'),('create-company.js'),('create-companycareer.js'),('create-district.js'),('create-position.js'),('create-post.js'),('create-postcareer.js'),('create-postdistrict.js'),('create-user.js'),('create-workingtype.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workingtypes`
--

DROP TABLE IF EXISTS `workingtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workingtypes` (
  `id` varchar(255) NOT NULL,
  `workingTypeName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workingtypes`
--

LOCK TABLES `workingtypes` WRITE;
/*!40000 ALTER TABLE `workingtypes` DISABLE KEYS */;
INSERT INTO `workingtypes` VALUES ('3953ae0d-abf1-45e4-a03b-ee7dbd6350af','Theo công việc','2023-05-27 13:45:04','2023-05-27 13:45:04'),('956cd28d-62bd-4b3f-9f36-4a22ec3cda0f','Theo ca','2023-05-27 13:45:04','2023-05-27 13:45:04'),('e4ee6c0f-316c-4d04-ba2e-50a50196c376','Hành chính','2023-05-27 13:45:04','2023-05-27 13:45:04');
/*!40000 ALTER TABLE `workingtypes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-27 20:48:36
