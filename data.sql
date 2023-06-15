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
INSERT INTO `academiclevels` VALUES ('22e601d5-f679-4d9c-9dd3-b574f542b059','Sơ cấp nghề/ chứng chỉ học nghề ngắn hạn','2023-05-27 09:58:00','2023-05-27 09:58:00'),('3f1357d5-20da-41d8-a9e1-7cb1c01acc4e','Cao đẳng nghề/ Cao đẳng chuyên  nghiệp','2023-05-27 09:58:00','2023-05-27 09:58:00'),('3fbeed86-193a-4920-ad52-cd5abe69b868','Tiến sĩ','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5ab934f4-5727-4aee-a1cc-a973ef3c66d4','Đại học','2023-05-27 09:58:00','2023-05-27 09:58:00'),('6bede364-f9a1-4b0f-b6b8-08e5014c4e96','Thạc sĩ','2023-05-27 09:58:00','2023-05-27 09:58:00'),('744ae3b6-09dd-4599-8a3b-670a05862032','Không có trình độ chuyên môn kỹ thuật','2023-05-27 09:58:00','2023-05-27 09:58:00'),('c694b870-5048-47b5-8551-797a1e45bdc5','Bằng nghề dài hạn/Trung cấp nghề/Trung cấp chuyên nghiệp','2023-05-27 09:58:00','2023-05-27 09:58:00'),('e0f46599-aef4-4a37-8f74-6bf51a5c8c01','Chứng chỉ/Chứng nhận học nghề (dưới 3 tháng)','2023-05-27 09:58:00','2023-05-27 09:58:00');
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
-- deleted

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
INSERT INTO `careers` VALUES ('06a6e471-e773-4747-aa5c-e05fbc1ecf61','Giáo dục / Đào tạo','2023-05-27 09:58:00','2023-05-27 09:58:00'),('09f9d8cf-d01c-4623-9507-7844c89828e8','Xây dựng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('150b546c-573d-466f-8484-c6905826689f','May mặc','2023-05-27 09:58:00','2023-05-27 09:58:00'),('1a3d7eeb-3d81-400d-b7b5-a3597a636cb7','Chứng khoán','2023-05-27 09:58:00','2023-05-27 09:58:00'),('1f543c71-6d8e-428d-a9e5-a2fe32853ce1','CNTT - Phần mềm','2023-05-27 09:58:00','2023-05-27 09:58:00'),('202e11d4-52b2-4ecf-aac5-43b32bc80ec0','Quản lý chất lượng (QA/QC)','2023-05-27 09:58:00','2023-05-27 09:58:00'),('2acac244-516f-46f2-8848-d96c47312206','Nhà hàng / Khách sạn','2023-05-27 09:58:00','2023-05-27 09:58:00'),('330f2540-0554-46cd-b16f-1b1738503078','Tiếng Nhật','2023-05-27 09:58:00','2023-05-27 09:58:00'),('45bfef2b-15e1-4408-92c9-60b452f61cb8','Hàng hải / Hàng không','2023-05-27 09:58:00','2023-05-27 09:58:00'),('4d953e62-f68e-4e9c-bae4-21c278ef1bd1','An Ninh / Bảo Vệ','2023-05-27 09:58:00','2023-05-27 09:58:00'),('4db0fb87-6877-4df7-ae74-ca30df94ea73','Sản xuất / Vận hành sản xuất','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5acee305-0ebb-4900-a6a0-2df4ae0d7b0a','Tài chính / Đầu tư','2023-05-27 09:58:00','2023-05-27 09:58:00'),('63cfd826-bb10-4235-9cda-73a71f335e5e','Vệ sinh công nghiệp','2023-05-27 09:58:00','2023-05-27 09:58:00'),('64070738-8569-48e9-a9de-f31bc5515622','Thể dục - thể thao','2023-05-27 09:58:00','2023-05-27 09:58:00'),('66fe7124-6bcb-467e-a384-bbc73991ee1d','Mỹ thuật / Kiến trúc / Thiết kế','2023-05-27 09:58:00','2023-05-27 09:58:00'),('67deabe0-22dc-4559-843b-433bdfec71ef','Công nghệ sinh học','2023-05-27 09:58:00','2023-05-27 09:58:00'),('6acb2635-6b6c-4ebe-ac85-c35ffd2b2ce3','Lái xe','2023-05-27 09:58:00','2023-05-27 09:58:00'),('72148224-2f33-47e2-b3bd-e03242091e12','An toàn lao động','2023-05-27 09:58:00','2023-05-27 09:58:00'),('7613abd5-0fa9-4b33-b6c7-42dad5243bc6','Y tế / Chăm sóc sức khỏe','2023-05-27 09:58:00','2023-05-27 09:58:00'),('76a40713-7340-4eba-8798-975e0d17a56a','Bán hàng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('77ea6620-6fd3-440f-98e1-df08c818ceda','Công nghệ thực phẩm / Dinh dưỡng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('7886b862-63e2-4398-b122-71516325b7f2','In ấn / Xuất bản','2023-05-27 09:58:00','2023-05-27 09:58:00'),('7918613c-a680-4341-843b-9d8af2e68c82','Truyền Hình / Quảng Cáo Marketing','2023-05-27 09:58:00','2023-05-27 09:58:00'),('86c45c48-94c4-4f7f-a4e8-776cfd120c12','Spa & Massage','2023-05-27 09:58:00','2023-05-27 09:58:00'),('885abbce-60d7-4712-aa84-d2b73f7f2351','Biên phiên dịch','2023-05-27 09:58:00','2023-05-27 09:58:00'),('8c83b190-db7d-42f7-9079-106f8101cbeb','Bưu chính viễn thông','2023-05-27 09:58:00','2023-05-27 09:58:00'),('9537c415-f66d-497a-bd94-7690b96df724','Kinh doanh','2023-05-27 09:58:00','2023-05-27 09:58:00'),('9658793d-b0d8-4d40-bf51-3e70a880c049','Tổ Chức Sự Kiện / Du Lịch','2023-05-27 09:58:00','2023-05-27 09:58:00'),('976aa545-a6b2-4f20-b889-1ab684c30751','CNTT - Phần cứng / Mạng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('98ac57eb-b669-48f5-981a-bccf8df015b1','Tư vấn / Chăm Sóc Khách Hàng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('9c949506-cd29-4075-8b6f-99f4d5b83f9c','Vận chuyển / Giao nhận / Kho vận','2023-05-27 09:58:00','2023-05-27 09:58:00'),('a6abd250-feb7-4ccd-84de-0ef01681ec74','Lao Động Phổ Thông','2023-05-27 09:58:00','2023-05-27 09:58:00'),('a7ed77ff-485d-4853-93fe-e32307e37d81','Nông - Lâm - Thủy Sản','2023-05-27 09:58:00','2023-05-27 09:58:00'),('b5d82427-bfc0-4cda-b241-2169f0520bae','Ngành khác','2023-05-27 09:58:00','2023-05-27 09:58:00'),('ba35a598-c89d-4e5c-8220-c2a2b018b4e7','Bảo hiểm','2023-05-27 09:58:00','2023-05-27 09:58:00'),('bc851a28-adad-4a2e-8b9b-359be51899dc','Điện / Điện tử / Điện lạnh','2023-05-27 09:58:00','2023-05-27 09:58:00'),('c7d806de-6080-4975-9913-31556371b07e','Hành chính / Văn Phòng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('c86367d0-3cbd-4a6c-a029-7d22089252dc','Bất động sản','2023-05-27 09:58:00','2023-05-27 09:58:00'),('cba243df-c0bd-4e8f-ae11-a577f290f375','Nhân sự','2023-05-27 09:58:00','2023-05-27 09:58:00'),('d0561582-820d-43df-88d5-2ca83973dbcf','Du lịch','2023-05-27 09:58:00','2023-05-27 09:58:00'),('d540660c-f7fb-4a3d-a1e6-1de5f8cd783c','Công nhân','2023-05-27 09:58:00','2023-05-27 09:58:00'),('f13354fc-875b-4c37-b7b0-e1552fff6af8','Kế toán / Kiểm toán','2023-05-27 09:58:00','2023-05-27 09:58:00'),('f190de13-8663-4cc2-a339-57598afa1106','Ngân hàng','2023-05-27 09:58:00','2023-05-27 09:58:00'),('f1bdc78a-f372-469d-a2a4-72c7e1ebd035','Nội ngoại thất','2023-05-27 09:58:00','2023-05-27 09:58:00'),('f37a733b-dbe9-49fa-9bd6-32ac56db6bfa','Luật / Pháp lý','2023-05-27 09:58:00','2023-05-27 09:58:00'),('f9fe2852-fb83-4653-bd70-205d70de6be6','Cơ khí / Ô tô / Tự động hóa','2023-05-27 09:58:00','2023-05-27 09:58:00'),('fb559325-1ac9-4178-aff4-f8f89a1c065e','Lễ tân','2023-05-27 09:58:00','2023-05-27 09:58:00');
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
INSERT INTO `companies` VALUES ('13c14c93-bb53-41e9-baa1-e605789cd044','Công ty TNHH MTV Khách Sạn Quốc Tế Bình Minh','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh.html',NULL,NULL,'148 Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, TPHCM',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('457cafb3-9f69-4dcf-94dc-122597db2f57','CÔNG TY THƯƠNG MẠI THIỆN KIM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-thuong-mai-thien-kim-hcmjob.vn.jpeg','https://hcmjob.vn/cong-ty-thuong-mai-thien-kim.html',NULL,NULL,'Trương Đình Hội, P16, Quận 8, TP. HCM',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('589ac814-3920-4678-9e55-2c74263f3418','CÔNG TY TNHH FRANKIES','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-frankies-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-frankies.html',NULL,NULL,'47 Khu dân cư Vạn Phúc, Đường Đinh Thị Thi, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('70418bb4-9e7a-4ffb-81e9-547a10398a23','CÔNG TY CỔ PHẦN ẨM THỰC NHẬT BẢN HOÀNG TÂM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam-hcmjob.vn.png','https://hcmjob.vn/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam.html',NULL,NULL,'Tầng 16, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('906dcb99-df6b-4b7d-9797-cc3d2ac1e4f8','CÔNG TY CP QUẢN LÝ DỊCH VỤ ADORA','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-cp-quan-ly-dich-vu-adora-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-cp-quan-ly-dich-vu-adora.html',NULL,NULL,'431 Hoàng Văn Thụ, P. 4, Q. Tân Bình',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('a684f043-dde3-4fb2-a8c7-c98d7803049c','Công ty TNHH MTV Thành Võ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-thanh-vo-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-mtv-thanh-vo.html',NULL,NULL,'88 -90 -92 Đồng Đen, Phường 14, quận Tân Bình, Tp.HCM',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('b1cb45a0-5b57-4c20-9f28-4e2405476572','TNHH TM DV DÌN KÝ','https://data.hcmjob.vn/hcmjob/2023/5/12/tnhh-tm-dv-din-ky-hcmjob.vn.jpg','https://hcmjob.vn/tnhh-tm-dv-din-ky.html',NULL,NULL,'142/15 Cộng Hòa, phường 4, Quận Tân Bình',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('d20ee601-dffe-431c-b3b5-37259c326cce','CÔNG TY TNHH SUẤT ĂN CÔNG NGHIỆP THIÊN HÀ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha.html',NULL,NULL,'69 - 71 Đường 17, Khu phố 5, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('e8d30153-5ec9-4ab3-8a46-11798c1f3c2b','Công ty Cổ Phần The Street','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-the-street-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-the-street.html',NULL,NULL,'260A Pasteur, Phường Võ Thị Sáu, Quận 3',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00'),('f1a0640e-d272-49d3-ba94-adfa3f7d2bd4','CÔNG TY CỔ PHẦN BỮA ĂN TRÊN MÂY','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-bua-an-tren-may-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-bua-an-tren-may.html',NULL,NULL,'Số 135/1/138 đường Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-27 09:58:00','2023-05-27 09:58:00');
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
INSERT INTO `companycareers` VALUES ('13c14c93-bb53-41e9-baa1-e605789cd044','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('13c14c93-bb53-41e9-baa1-e605789cd044','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('457cafb3-9f69-4dcf-94dc-122597db2f57','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('457cafb3-9f69-4dcf-94dc-122597db2f57','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('589ac814-3920-4678-9e55-2c74263f3418','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('589ac814-3920-4678-9e55-2c74263f3418','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('70418bb4-9e7a-4ffb-81e9-547a10398a23','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('70418bb4-9e7a-4ffb-81e9-547a10398a23','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('906dcb99-df6b-4b7d-9797-cc3d2ac1e4f8','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('906dcb99-df6b-4b7d-9797-cc3d2ac1e4f8','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('a684f043-dde3-4fb2-a8c7-c98d7803049c','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('a684f043-dde3-4fb2-a8c7-c98d7803049c','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('b1cb45a0-5b57-4c20-9f28-4e2405476572','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('b1cb45a0-5b57-4c20-9f28-4e2405476572','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('d20ee601-dffe-431c-b3b5-37259c326cce','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('d20ee601-dffe-431c-b3b5-37259c326cce','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('e8d30153-5ec9-4ab3-8a46-11798c1f3c2b','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('e8d30153-5ec9-4ab3-8a46-11798c1f3c2b','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46'),('f1a0640e-d272-49d3-ba94-adfa3f7d2bd4','06a6e471-e773-4747-aa5c-e05fbc1ecf61','2023-05-27 10:17:46','2023-05-27 10:17:46'),('f1a0640e-d272-49d3-ba94-adfa3f7d2bd4','09f9d8cf-d01c-4623-9507-7844c89828e8','2023-05-27 10:17:46','2023-05-27 10:17:46');
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
INSERT INTO `districts` VALUES ('0b6a43b1-b77b-4331-ae80-535119f9eee3','Huyện Nhà Bè','2023-05-27 09:58:00','2023-05-27 09:58:00'),('17e77259-05ab-4f74-94c8-c95cbea7b6d5','Huyện Hóc Môn','2023-05-27 09:58:00','2023-05-27 09:58:00'),('28adc5a0-cf39-44c2-92d5-3102ede0fc16','Quận Gò Vấp','2023-05-27 09:58:00','2023-05-27 09:58:00'),('29f81b4e-fac1-458e-ac75-64c9b79249e8','Huyện Củ Chi','2023-05-27 09:58:00','2023-05-27 09:58:00'),('380feb43-4a17-42ed-ab23-20a303264fcd','Quận 1','2023-05-27 09:58:00','2023-05-27 09:58:00'),('39fb6542-8957-4395-a46e-c6ff2380b5fc','Huyện Bình Chánh','2023-05-27 09:58:00','2023-05-27 09:58:00'),('3f1af54d-8317-4220-b0cd-c44cbbea6c59','Quận 4','2023-05-27 09:58:00','2023-05-27 09:58:00'),('404cebba-f747-4fa3-9d87-ed2a2aa9d80d','Quận 5','2023-05-27 09:58:00','2023-05-27 09:58:00'),('4e5dea24-4131-4574-b59b-1c307de4299a','Quận Tân Bình','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5490c15b-a60a-4df5-a9e5-0aa37c343951','Huyện Cần Giờ','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5fe53b9f-06e8-48f9-8344-78859988a864','Quận 6','2023-05-27 09:58:00','2023-05-27 09:58:00'),('67e583d4-a406-4330-a1fe-a738a73a5b1e','Quận Tân Phú','2023-05-27 09:58:00','2023-05-27 09:58:00'),('8109c180-dffe-4b46-9b8a-ec73a64ba2e3','Quận Bình Tân','2023-05-27 09:58:00','2023-05-27 09:58:00'),('837558c0-2a98-4931-bce1-cc55ddab410f','Quận 11','2023-05-27 09:58:00','2023-05-27 09:58:00'),('87f50d0c-3ff0-4f56-b057-4d508b6e3661','Quận 2','2023-05-27 09:58:00','2023-05-27 09:58:00'),('8a1366ea-f85f-4f66-af8d-45c340bc02d9','Quận 12','2023-05-27 09:58:00','2023-05-27 09:58:00'),('8ddba309-1f3f-4379-9bab-63b7e587007a','Thủ Đức','2023-05-27 09:58:00','2023-05-27 09:58:00'),('92e00b0a-51e9-4689-a42e-9b2b5c97734f','Quận 7','2023-05-27 09:58:00','2023-05-27 09:58:00'),('98eff4ae-110e-4800-8b36-b92048e9d02a','Quận 8','2023-05-27 09:58:00','2023-05-27 09:58:00'),('9d35b390-e5e1-4cc1-a139-04fe68124768','Quận 9','2023-05-27 09:58:00','2023-05-27 09:58:00'),('d4b8889f-2bbe-45f9-8344-10e556a5d06c','Quận Phú Nhuận','2023-05-27 09:58:00','2023-05-27 09:58:00'),('d7ef94b2-02d0-402d-81c2-91914cdb38d5','Quận 10','2023-05-27 09:58:00','2023-05-27 09:58:00'),('e8a37f58-7def-4b0c-9e51-1fc06d0e2304','Quận Bình Thạnh','2023-05-27 09:58:00','2023-05-27 09:58:00'),('ffbabc5a-8442-4843-ab6c-2fc7847efe52','Quận 3','2023-05-27 09:58:00','2023-05-27 09:58:00');
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
INSERT INTO `positions` VALUES ('candidates33b02fbe-b053-4765-a0c2-56d66ffd6971','Nhân viên/Công nhân','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5ad87bd9-b5d9-45f4-9595-8efa2148c2b3','Giám đốc','2023-05-27 09:58:00','2023-05-27 09:58:00'),('5d45bb5e-59ca-4616-a9d6-81f68e06c808','Phó giám đốc','2023-05-27 09:58:00','2023-05-27 09:58:00'),('73be7353-1b27-4a2d-876a-2f0fd4020879','Trưởng nhóm/giám sát','2023-05-27 09:58:00','2023-05-27 09:58:00'),('7564a4cd-2245-4735-85df-bbc211d7a7f9','Mới tốt nghiệp/Thực tập','2023-05-27 09:58:00','2023-05-27 09:58:00'),('a441e712-a6c6-4abf-94d3-fe31d7e78c4e','Trưởng phòng/Kế toán trưởng','2023-05-27 09:58:00','2023-05-27 09:58:00');
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
INSERT INTO `posts` VALUES ('07a0bafe-1091-4b01-af4d-1f01bc99e1af','Trợ Lý Giám Đốc','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('2ec4404b-f9a2-4f77-a0e3-136d0b55c0dc','Bếp Chính','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('3213dfc3-904a-496f-910d-74e1a44806b4','Giám Sát Nhà Hàng','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('416dd81c-89ba-4280-a58f-88fdeec23d5c','Nhân Viên Thu Mua','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('462ce77e-c39c-4127-95fc-5d117a61aef6','Trợ Lý Cửa Hàng Trưởng (F&B)','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('b1370d30-b02a-4d26-b3dd-fef0ff35abe6','Nhân Viên Content Marketing','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('d21f23bf-bf8c-451f-a182-f7dd5b7dc498','Nữ Lao Động Phổ Thông','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('f01bd806-3b1e-47b3-87f2-01c75f28f053','Nhân Viên Sale - Giám Sát Kinh Doanh','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('f92b8a04-5c01-41bd-a36f-be82290a0e31','Chuyên Viên Thiết Kế (Thiết Kế Mảng Sự Kiện - Tiệc Cưới)','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL),('fd6faede-f3f1-4a4d-8d4a-c2c96de66b14','Nhân Viên Content Marketing ̣̣̣(Chấp Nhận Sinh Viên Mới Ra Trường)','13c14c93-bb53-41e9-baa1-e605789cd044',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-27 09:58:52','2023-05-27 09:58:52',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
-- deleted


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
INSERT INTO `workingtypes` VALUES ('392b5b66-e8d1-41bf-9163-b2c84800ed95','Theo ca','2023-05-27 09:58:00','2023-05-27 09:58:00'),('ada023c2-bb70-4719-af38-9ed435e2da10','Hành chính','2023-05-27 09:58:00','2023-05-27 09:58:00'),('fa1040fb-5dce-4e97-a78d-589e2943b5d3','Theo công việc','2023-05-27 09:58:00','2023-05-27 09:58:00');
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

-- Dump completed on 2023-05-27 20:32:33
