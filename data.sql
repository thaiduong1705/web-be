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
INSERT INTO `academiclevels` VALUES ('32ed5adb-0214-4f43-853a-ce702474f82d','Thạc sĩ','2023-05-20 14:46:37','2023-05-20 14:46:37'),('52d5dffe-f292-41b1-b3d6-98a285d4a732','Bằng nghề dài hạn/Trung cấp nghề/Trung cấp chuyên nghiệp','2023-05-20 14:46:37','2023-05-20 14:46:37'),('56b2048b-774e-4eeb-ba39-9e5ba868d174','Chứng chỉ/Chứng nhận học nghề (dưới 3 tháng)','2023-05-20 14:46:37','2023-05-20 14:46:37'),('76a29b35-7624-405e-8609-8602dbc3a532','Không có trình độ chuyên môn kỹ thuật','2023-05-20 14:46:37','2023-05-20 14:46:37'),('93f3e991-95ea-4183-ba9b-42839e1d2840','Cao đẳng nghề/ Cao đẳng chuyên  nghiệp','2023-05-20 14:46:37','2023-05-20 14:46:37'),('a77e96f0-9f63-4a02-bbec-81e6ef62f630','Sơ cấp nghề/ chứng chỉ học nghề ngắn hạn','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c5ef0f67-f032-4c5a-8738-fa40dbfbf6bd','Tiến sĩ','2023-05-20 14:46:37','2023-05-20 14:46:37'),('f2807d6e-1b2f-4752-b811-c118a4ee9edb','Đại học','2023-05-20 14:46:37','2023-05-20 14:46:37');
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
INSERT INTO `candidatecareers` VALUES ('16baad7f-0e50-4f01-92dc-6591f7f9228b','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:39:10','2023-05-23 05:39:10'),('65f64343-fed9-45a9-b0dc-6a42fec22a6f','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-25 06:19:55','2023-05-25 06:19:55'),('ab18461d-01eb-4293-a932-87d62bd5fec0','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-24 16:18:58','2023-05-24 16:18:58'),('d98ca2eb-defe-48c9-aa5a-0d3310536146','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:54:07','2023-05-23 05:54:07'),('f76ac268-6844-43fa-92d1-e7cee25c0bbd','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:53:28','2023-05-23 05:53:28'),('fb4cc071-98a7-4551-b27e-f942ed118a93','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:42:09','2023-05-23 05:42:09');
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
INSERT INTO `candidatedistricts` VALUES ('16baad7f-0e50-4f01-92dc-6591f7f9228b','cb91a1f0-c882-49f8-9fd3-d9bf4540445a','2023-05-23 05:39:10','2023-05-23 05:39:10'),('65f64343-fed9-45a9-b0dc-6a42fec22a6f','fb7a8f56-583c-42e3-9d96-3cbdbd106857','2023-05-25 06:19:55','2023-05-25 06:19:55'),('ab18461d-01eb-4293-a932-87d62bd5fec0','102e8d94-71d8-43cb-81ce-5b3a955f4dbf','2023-05-24 16:18:58','2023-05-24 16:18:58'),('d98ca2eb-defe-48c9-aa5a-0d3310536146','cb91a1f0-c882-49f8-9fd3-d9bf4540445a','2023-05-23 05:54:07','2023-05-23 05:54:07'),('f76ac268-6844-43fa-92d1-e7cee25c0bbd','cb91a1f0-c882-49f8-9fd3-d9bf4540445a','2023-05-23 05:53:28','2023-05-23 05:53:28'),('fb4cc071-98a7-4551-b27e-f942ed118a93','cb91a1f0-c882-49f8-9fd3-d9bf4540445a','2023-05-23 05:42:09','2023-05-23 05:42:09');
/*!40000 ALTER TABLE `candidatedistricts` ENABLE KEYS */;
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
  `gender` tinyint(1) DEFAULT NULL,
  `experienceYear` int DEFAULT NULL,
  `academicLevelId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `homeAddress` text,
  PRIMARY KEY (`id`),
  KEY `academicLevelId` (`academicLevelId`),
  CONSTRAINT `candidates_ibfk_1` FOREIGN KEY (`academicLevelId`) REFERENCES `academiclevels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
INSERT INTO `candidates` VALUES ('16baad7f-0e50-4f01-92dc-6591f7f9228b','Cấn Đức Quang',4,NULL,NULL,'0908753959','quangbruh123@gmail.com',0,10,'32ed5adb-0214-4f43-853a-ce702474f82d','2023-05-23 05:39:10','2023-05-23 05:39:10',NULL),('65f64343-fed9-45a9-b0dc-6a42fec22a6f','Cấn Đức Quang',24,NULL,NULL,'0792020256','quangbruh123@gmail.com',1,12,'52d5dffe-f292-41b1-b3d6-98a285d4a732','2023-05-25 06:19:55','2023-05-25 06:19:55','123/11A XVNT'),('ab18461d-01eb-4293-a932-87d62bd5fec0','Cấn Đức Quang',2,NULL,NULL,'0908753959','quangbruh123@gmail.com',0,3,'32ed5adb-0214-4f43-853a-ce702474f82d','2023-05-24 16:18:58','2023-05-24 16:18:58','123/11A XVNT'),('d98ca2eb-defe-48c9-aa5a-0d3310536146','Cấn Đức Quang',4,NULL,NULL,'0908753959','quangbruh123@gmail.com',0,10,'32ed5adb-0214-4f43-853a-ce702474f82d','2023-05-23 05:54:07','2023-05-23 05:54:07','123/11A XVNT'),('f76ac268-6844-43fa-92d1-e7cee25c0bbd','Cấn Đức Quang',4,NULL,NULL,'0908753959','quangbruh123@gmail.com',0,10,'32ed5adb-0214-4f43-853a-ce702474f82d','2023-05-23 05:53:28','2023-05-23 05:53:28','123/11A XVNT'),('fb4cc071-98a7-4551-b27e-f942ed118a93','Cấn Đức Quang',4,NULL,NULL,'0908753959','quangbruh123@gmail.com',0,10,'32ed5adb-0214-4f43-853a-ce702474f82d','2023-05-23 05:42:09','2023-05-23 05:42:09',NULL);
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
INSERT INTO `careers` VALUES ('02ce046c-c46e-4904-8a83-db145dbe36b9','Giáo dục / Đào tạo','2023-05-20 14:46:37','2023-05-20 14:46:37'),('03c9cee2-9f9b-4e21-8233-369dab4ac407','Lái xe','2023-05-20 14:46:37','2023-05-20 14:46:37'),('0a9e8cab-caf3-4078-a67f-af2884e42276','Nội ngoại thất','2023-05-20 14:46:37','2023-05-20 14:46:37'),('169da798-bb1d-4ec6-be34-43a94cf8b8d8','Tài chính / Đầu tư','2023-05-20 14:46:37','2023-05-20 14:46:37'),('30ae3a79-84d9-4cbb-990e-79736502e2d8','Sản xuất / Vận hành sản xuất','2023-05-20 14:46:37','2023-05-20 14:46:37'),('3246aca9-1a68-474d-a0d5-b219bf44f9d0','Lễ tân','2023-05-20 14:46:37','2023-05-20 14:46:37'),('36a5c2cc-bad2-4bc8-9df6-cd6e7bdeec25','Quản lý chất lượng (QA/QC)','2023-05-20 14:46:37','2023-05-20 14:46:37'),('3ad86f4d-d952-43ce-b8a2-99aa0d8e4ed0','Spa & Massage','2023-05-20 14:46:37','2023-05-20 14:46:37'),('3e4b988f-3127-4b21-99ab-d478e59f479c','Mỹ thuật / Kiến trúc / Thiết kế','2023-05-20 14:46:37','2023-05-20 14:46:37'),('567df8c5-8d82-45a7-a914-d13828c5dea3','Hành chính / Văn Phòng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('5ab0c2a9-4e23-466d-9188-f20405777ec2','An Ninh / Bảo Vệ','2023-05-20 14:46:37','2023-05-20 14:46:37'),('6d6d4131-b3c8-4126-88a6-f075023b97a9','In ấn / Xuất bản','2023-05-20 14:46:37','2023-05-20 14:46:37'),('6ee21a4c-4e87-4fc5-b357-52b0df5ef1cf','Bán hàng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('7228e3a9-0ecc-46d5-abce-dec190c035f0','Thể dục - thể thao','2023-05-20 14:46:37','2023-05-20 14:46:37'),('743bbcfc-dec8-40ce-8f43-d2590ca1c16b','Chứng khoán','2023-05-20 14:46:37','2023-05-20 14:46:37'),('74469908-da2d-41d1-9b52-10b4b82dda76','Công nghệ sinh học','2023-05-20 14:46:37','2023-05-20 14:46:37'),('7516ee1b-9150-4e0c-ac13-ee1979511a3a','Bưu chính viễn thông','2023-05-20 14:46:37','2023-05-20 14:46:37'),('77f40614-4173-4858-845c-988458c3e216','Xây dựng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('82735a5c-2139-4a24-b503-b8edf99dfe26','Nông - Lâm - Thủy Sản','2023-05-20 14:46:37','2023-05-20 14:46:37'),('870cc5fa-f462-4b82-9faf-6c1c1c5f024c','An toàn lao động','2023-05-20 14:46:37','2023-05-20 14:46:37'),('8c0b8ee3-b60f-4d2e-ae05-378019376a41','CNTT - Phần cứng / Mạng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('947bcbdc-d7dc-4ae1-b0e3-5f97b7b0c5ba','Hàng hải / Hàng không','2023-05-20 14:46:37','2023-05-20 14:46:37'),('94af4660-03f9-4c91-bbeb-92da7dddbdb7','May mặc','2023-05-20 14:46:37','2023-05-20 14:46:37'),('9a14c181-b719-4edd-a65b-fa1d1629c811','Vệ sinh công nghiệp','2023-05-20 14:46:37','2023-05-20 14:46:37'),('9a5e3f2d-c62e-430f-a38e-64187570b74c','Ngân hàng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('9b22c00b-896e-4856-9bda-28e7683c3c40','Tiếng Nhật','2023-05-20 14:46:37','2023-05-20 14:46:37'),('9de83177-4740-4ca8-ae87-59918cc5005d','Y tế / Chăm sóc sức khỏe','2023-05-20 14:46:37','2023-05-20 14:46:37'),('a029e3c5-6fed-47cc-aa48-d54629cf9d66','Công nghệ thực phẩm / Dinh dưỡng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('a6a58eb5-9a6c-4401-afeb-5f22624f2121','Tổ Chức Sự Kiện / Du Lịch','2023-05-20 14:46:37','2023-05-20 14:46:37'),('a9c077dd-6a12-4868-8a80-ad31236f0199','Truyền Hình / Quảng Cáo Marketing','2023-05-20 14:46:37','2023-05-20 14:46:37'),('ab5d53b6-8d6b-4dd0-b58e-3c5d8634ba40','Nhân sự','2023-05-20 14:46:37','2023-05-20 14:46:37'),('b49fca09-89db-4790-8a1a-dbed8b1ccd1d','Kinh doanh','2023-05-20 14:46:37','2023-05-20 14:46:37'),('b5ba71b3-6849-44e4-a86c-fbd9822d70c2','Bảo hiểm','2023-05-20 14:46:37','2023-05-20 14:46:37'),('b5f5a263-e2dc-4028-bb56-f1529a8be56d','Nhà hàng / Khách sạn','2023-05-20 14:46:37','2023-05-20 14:46:37'),('bdc63a86-4d93-4490-a71b-7d6953b46011','Công nhân','2023-05-20 14:46:37','2023-05-20 14:46:37'),('bfa07b89-36aa-4029-b607-79a5df984f16','Bất động sản','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c0608a1f-2693-4b23-8c68-8d432eb7208b','Lao Động Phổ Thông','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c14575a3-ec0c-406b-8c7b-bb11e1285b81','Vận chuyển / Giao nhận / Kho vận','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c20e3c2d-d178-4232-bd53-1f039367f8e1','CNTT - Phần mềm','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c326d204-ffd3-4131-ac46-5eb30b2950ad','Tư vấn / Chăm Sóc Khách Hàng','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c4bad406-9053-41e4-8c30-89de332d281c','Ngành khác','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c89c93ce-9aa4-464e-8c9b-0689cbc2abaa','Điện / Điện tử / Điện lạnh','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c89fe7bb-c3f0-4fd3-8a9e-23b36e14f980','Du lịch','2023-05-20 14:46:37','2023-05-20 14:46:37'),('e34f31d5-a0fd-495d-adaa-e9661adf12d4','Luật / Pháp lý','2023-05-20 14:46:37','2023-05-20 14:46:37'),('ed6a4422-831d-4f0a-8666-0260897c8b89','Biên phiên dịch','2023-05-20 14:46:37','2023-05-20 14:46:37'),('edaaab7a-262b-4027-9696-cb0e2b0bc0c9','Cơ khí / Ô tô / Tự động hóa','2023-05-20 14:46:37','2023-05-20 14:46:37'),('f86a4a64-314e-4d77-9254-1bffa8e8ef37','Kế toán / Kiểm toán','2023-05-20 14:46:37','2023-05-20 14:46:37');
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
INSERT INTO `companies` VALUES ('111d220d-6264-486f-9c35-78f301f54a4a','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:22:07','2023-05-24 01:22:07'),('11a4c863-afcd-4f69-bc70-e75f3a83e350','Công ty TNHH MTV BRUH BRUH',NULL,NULL,'canducquang1201@gmail.com','0908753959','123/11A XVNT','<p>ieudhuwhcquer</p>','120 người','2023-05-24 02:09:50','2023-05-24 02:09:50'),('14b32a6f-e7e8-46b0-86c7-05524bd68c4e','Công ty TNHH MTV DMT',NULL,NULL,'phuonghuong6469@gmail.com','0908753959','123/11A XVNT','<p>asdfhaweuhqpr8guvbruih3pũh;whfq</p>','120 man','2023-05-25 06:43:16','2023-05-25 06:43:16'),('15fcaaa1-67b6-4004-bc57-cd0d0bfc1c49','123/11A XVNT',NULL,NULL,'20520716@gm.uit.edu.vn','0908753959','123/11A XVNT','<p>iufhisufusfgueyrgfuyregfuyr</p>','300 người','2023-05-24 02:12:53','2023-05-24 02:12:53'),('1ffc9875-f783-4233-af47-8287a7081fc2','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:24:35','2023-05-24 01:24:35'),('2fd54aad-3c2b-4269-a6f2-aeb7b8475bb9','bruha',NULL,NULL,'quangbruh123@gmail.com','0908753959','Công ty BRUH BRUH','<p>aedfsdvarerfere</p>','120 người','2023-05-24 02:13:40','2023-05-24 02:13:40'),('35c3d6f2-3dde-4868-ab7c-8856b73a5861','Công ty TNHH MTV Chatte',NULL,NULL,'20520716@gm.uit.edu.vn','0908753959','124/11A XVNT','<p>bruh bruh lam</p>','120 người','2023-05-21 08:57:03','2023-05-21 08:57:03'),('368e2eaf-e5b2-44a8-98ae-d8188ddf6964','CÔNG TY THƯƠNG MẠI THIỆN KIM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-thuong-mai-thien-kim-hcmjob.vn.jpeg','https://hcmjob.vn/cong-ty-thuong-mai-thien-kim.html',NULL,NULL,'Trương Đình Hội, P16, Quận 8, TP. HCM',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('3ee41a28-3409-487e-9250-c5e951e41e66','CÔNG TY TNHH SUẤT ĂN CÔNG NGHIỆP THIÊN HÀ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-suat-an-cong-nghiep-thien-ha.html',NULL,NULL,'69 - 71 Đường 17, Khu phố 5, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('4126dfa8-6f84-40f8-b281-47b03044568b','CÔNG TY CP QUẢN LÝ DỊCH VỤ ADORA','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-cp-quan-ly-dich-vu-adora-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-cp-quan-ly-dich-vu-adora.html',NULL,NULL,'431 Hoàng Văn Thụ, P. 4, Q. Tân Bình',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('41bf7b28-c833-4c41-bb31-83c4412779ca','CÔNG TY CỔ PHẦN BỮA ĂN TRÊN MÂY','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-bua-an-tren-may-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-bua-an-tren-may.html',NULL,NULL,'Số 135/1/138 đường Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('4236e394-b347-488d-a7ba-611841cff766','Công ty TNHH MTV Chatte',NULL,NULL,'quangbruh123@gmail.com','0908753959','bruha','<p>lmao bruh bru</p>','120 người','2023-05-21 08:48:27','2023-05-21 08:48:27'),('49b8b5fa-3996-4f5a-8d64-771ea23064ef','Công ty TNHH MTV BRUH BRUH',NULL,NULL,'canducquang1201@gmail.com','0908753959','123/11A XVNT','<p>ieudhuwhcquer</p>','120 người','2023-05-24 02:09:51','2023-05-24 02:09:51'),('506a7f18-9d00-48cc-8bd5-0ccb8b28087a','Công ty TNHH MTV Khách Sạn Quốc Tế Bình Minh','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-tnhh-mtv-khach-san-quoc-te-binh-minh.html',NULL,NULL,'148 Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, TPHCM',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('53309066-219f-4f30-a218-28bcc29a7f20','Công ty TNHH MTV DMT',NULL,NULL,'phuonghuong6469@gmail.com','0908753959','123/11A XVNT','<p>asdfhaweuhqpr8guvbruih3pũh;whfq</p>','120 man','2023-05-25 06:42:26','2023-05-25 06:42:26'),('5d2a0d2e-bc9b-4bc4-9921-f31fed2da404','Công ty TNHH MTV CDQ',NULL,NULL,'20520716@gm.uit.edu.vn','0792020256','123/11A XVNT','<p>đây là công t</p>','120 người','2023-05-23 05:05:40','2023-05-23 05:05:40'),('62452bde-42a4-40e3-9342-e50a271bb3c4','Công ty TNHH MTV Thành Võ','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-mtv-thanh-vo-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-mtv-thanh-vo.html',NULL,NULL,'88 -90 -92 Đồng Đen, Phường 14, quận Tân Bình, Tp.HCM',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('6816ec85-4931-447c-af6a-0c599a404f6c','TNHH TM DV DÌN KÝ','https://data.hcmjob.vn/hcmjob/2023/5/12/tnhh-tm-dv-din-ky-hcmjob.vn.jpg','https://hcmjob.vn/tnhh-tm-dv-din-ky.html',NULL,NULL,'142/15 Cộng Hòa, phường 4, Quận Tân Bình',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('6f214944-d39b-44a7-9327-9b1b3135aafa','Công ty Cổ Phần The Street','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-the-street-hcmjob.vn.jpg','https://hcmjob.vn/cong-ty-co-phan-the-street.html',NULL,NULL,'260A Pasteur, Phường Võ Thị Sáu, Quận 3',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('77d78d19-104b-41be-a58d-e9cddfa5f1d6','Công ty TNHH MTV CDQ',NULL,NULL,'20520716@gm.uit.edu.vn','0792020256','123/11A XVNT','<p>đây là công t</p>','120 người','2023-05-23 05:05:42','2023-05-23 05:05:42'),('7a98a633-e007-446e-935b-6b069daada6f','123/11A XVNT',NULL,NULL,'20520716@gm.uit.edu.vn','0908753959','123/11A XVNT','<p>iufhisufusfgueyrgfuyregfuyr</p>','300 người','2023-05-24 02:13:18','2023-05-24 02:13:18'),('8cbe8a9c-1340-41da-b913-72c0869c7aa5','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:23:49','2023-05-24 01:23:49'),('92124fdf-1164-4118-a921-5644a11c68ac','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:21:29','2023-05-24 01:21:29'),('9224eaf0-e2be-4f17-b28e-5974c38002b9','CÔNG TY CỔ PHẦN ẨM THỰC NHẬT BẢN HOÀNG TÂM','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam-hcmjob.vn.png','https://hcmjob.vn/cong-ty-co-phan-am-thuc-nhat-ban-hoang-tam.html',NULL,NULL,'Tầng 16, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('9806f8c2-aa1e-45e4-be10-3afc772a6a40','Công ty haha',NULL,NULL,'duyhao301202@gmail.com','0908753959','123/11A XVNT','<p>adasasdasdasdasdas</p>','120 người','2023-05-24 02:35:05','2023-05-24 02:35:05'),('98a28e0f-2d53-4e60-afec-963c9ab81f08','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:28:12','2023-05-24 01:28:12'),('a52e322f-8889-4dce-a745-ea043afc8069','Công ty TNHH MTV Chatte',NULL,NULL,'quangbruh123@gmail.com','0908753959','bruha','<p>lmao bruh bru</p>','120 người','2023-05-21 08:49:35','2023-05-21 08:49:35'),('a9f8543d-98b0-4954-8e92-50bf144b6b6d','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:21:35','2023-05-24 01:21:35'),('ac8f8fa4-e32d-451e-99d7-c138353e3353','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:26:04','2023-05-24 01:26:04'),('c54772f4-f660-4477-8e48-20d8114acd8b','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:23:47','2023-05-24 01:23:47'),('d828f826-176c-4e9f-8cc9-b8b3c2731f4c','Công ty TNHH MTV BRUH BRUH',NULL,NULL,'canducquang1201@gmail.com','0908753959','123/11A XVNT','<p>ieudhuwhcquer</p>','120 người','2023-05-24 02:08:29','2023-05-24 02:08:29'),('d8b7eb77-3fc1-4a9c-85d7-071e2276b15e','Công ty TNHH MTV CDQ',NULL,NULL,'20520716@gm.uit.edu.vn','0792020256','123/11A XVNT','<p>đây là công t</p>','120 người','2023-05-23 05:05:46','2023-05-23 05:05:46'),('e0ea176f-bb8f-4a6b-9199-95c8e22d6b1c','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:22:09','2023-05-24 01:22:09'),('e1ccc2a3-15c7-4629-b433-65bf5afb7c21','CÔNG TY TNHH FRANKIES','https://data.hcmjob.vn/hcmjob/2023/5/12/cong-ty-tnhh-frankies-hcmjob.vn.png','https://hcmjob.vn/cong-ty-tnhh-frankies.html',NULL,NULL,'47 Khu dân cư Vạn Phúc, Đường Đinh Thị Thi, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',NULL,NULL,'2023-05-20 14:46:37','2023-05-20 14:46:37'),('e859c024-1b51-48b5-b00f-cfa57d08f18c','bruha',NULL,NULL,'quangbruh123@gmail.com','0908753959','Công ty BRUH BRUH','<p>aedfsdvarerfere</p>','120 người','2023-05-24 02:13:39','2023-05-24 02:13:39'),('ebe5b911-dfdc-4f95-b9de-a90aa69b7c81','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:25:47','2023-05-24 01:25:47'),('f2d31550-a550-4b0a-82a4-519aa74b9ccb','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:24:34','2023-05-24 01:24:34'),('f663e49b-0a5f-46a6-970c-d04a1161def0','123/11A XVNT',NULL,NULL,'20520716@gm.uit.edu.vn','0908753959','123/11A XVNT','<p>ad.kfuagwdyieqovqỏ8g</p>','300 người','2023-05-24 02:12:27','2023-05-24 02:12:27'),('f98af397-8628-44d6-988c-ad67883807ac','Công ty TNHH MTV ABC',NULL,NULL,'quangbruh123@gmail.com','0908753959','123/11A XVNT, Phường 21, Quận Bình Thạnh','<p>Công ty vận chuyển ABC xin cung cấp đến các bạn..</p>','120 người','2023-05-24 01:22:04','2023-05-24 01:22:04');
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
INSERT INTO `companycareers` VALUES ('111d220d-6264-486f-9c35-78f301f54a4a','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:22:07','2023-05-24 01:22:07'),('111d220d-6264-486f-9c35-78f301f54a4a','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:22:07','2023-05-24 01:22:07'),('11a4c863-afcd-4f69-bc70-e75f3a83e350','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-24 02:09:50','2023-05-24 02:09:50'),('11a4c863-afcd-4f69-bc70-e75f3a83e350','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 02:09:50','2023-05-24 02:09:50'),('14b32a6f-e7e8-46b0-86c7-05524bd68c4e','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-25 06:43:16','2023-05-25 06:43:16'),('15fcaaa1-67b6-4004-bc57-cd0d0bfc1c49','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:12:53','2023-05-24 02:12:53'),('15fcaaa1-67b6-4004-bc57-cd0d0bfc1c49','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-24 02:12:53','2023-05-24 02:12:53'),('1ffc9875-f783-4233-af47-8287a7081fc2','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:24:35','2023-05-24 01:24:35'),('1ffc9875-f783-4233-af47-8287a7081fc2','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:24:35','2023-05-24 01:24:35'),('2fd54aad-3c2b-4269-a6f2-aeb7b8475bb9','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:13:40','2023-05-24 02:13:40'),('2fd54aad-3c2b-4269-a6f2-aeb7b8475bb9','3e4b988f-3127-4b21-99ab-d478e59f479c','2023-05-24 02:13:40','2023-05-24 02:13:40'),('35c3d6f2-3dde-4868-ab7c-8856b73a5861','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-21 08:57:03','2023-05-21 08:57:03'),('35c3d6f2-3dde-4868-ab7c-8856b73a5861','743bbcfc-dec8-40ce-8f43-d2590ca1c16b','2023-05-21 08:57:03','2023-05-21 08:57:03'),('368e2eaf-e5b2-44a8-98ae-d8188ddf6964','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('368e2eaf-e5b2-44a8-98ae-d8188ddf6964','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('3ee41a28-3409-487e-9250-c5e951e41e66','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('3ee41a28-3409-487e-9250-c5e951e41e66','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('4126dfa8-6f84-40f8-b281-47b03044568b','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('4126dfa8-6f84-40f8-b281-47b03044568b','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('41bf7b28-c833-4c41-bb31-83c4412779ca','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('41bf7b28-c833-4c41-bb31-83c4412779ca','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('4236e394-b347-488d-a7ba-611841cff766','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-21 08:48:28','2023-05-21 08:48:28'),('4236e394-b347-488d-a7ba-611841cff766','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-21 08:48:28','2023-05-21 08:48:28'),('4236e394-b347-488d-a7ba-611841cff766','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-21 08:48:28','2023-05-21 08:48:28'),('49b8b5fa-3996-4f5a-8d64-771ea23064ef','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-24 02:09:51','2023-05-24 02:09:51'),('49b8b5fa-3996-4f5a-8d64-771ea23064ef','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 02:09:51','2023-05-24 02:09:51'),('506a7f18-9d00-48cc-8bd5-0ccb8b28087a','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('506a7f18-9d00-48cc-8bd5-0ccb8b28087a','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('53309066-219f-4f30-a218-28bcc29a7f20','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-25 06:42:27','2023-05-25 06:42:27'),('5d2a0d2e-bc9b-4bc4-9921-f31fed2da404','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:05:40','2023-05-23 05:05:40'),('5d2a0d2e-bc9b-4bc4-9921-f31fed2da404','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-23 05:05:40','2023-05-23 05:05:40'),('5d2a0d2e-bc9b-4bc4-9921-f31fed2da404','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-23 05:05:40','2023-05-23 05:05:40'),('62452bde-42a4-40e3-9342-e50a271bb3c4','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('62452bde-42a4-40e3-9342-e50a271bb3c4','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('6816ec85-4931-447c-af6a-0c599a404f6c','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('6816ec85-4931-447c-af6a-0c599a404f6c','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('6f214944-d39b-44a7-9327-9b1b3135aafa','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('6f214944-d39b-44a7-9327-9b1b3135aafa','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('77d78d19-104b-41be-a58d-e9cddfa5f1d6','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:05:42','2023-05-23 05:05:42'),('77d78d19-104b-41be-a58d-e9cddfa5f1d6','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-23 05:05:42','2023-05-23 05:05:42'),('77d78d19-104b-41be-a58d-e9cddfa5f1d6','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-23 05:05:42','2023-05-23 05:05:42'),('7a98a633-e007-446e-935b-6b069daada6f','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:13:18','2023-05-24 02:13:18'),('7a98a633-e007-446e-935b-6b069daada6f','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-24 02:13:18','2023-05-24 02:13:18'),('8cbe8a9c-1340-41da-b913-72c0869c7aa5','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:23:49','2023-05-24 01:23:49'),('8cbe8a9c-1340-41da-b913-72c0869c7aa5','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:23:49','2023-05-24 01:23:49'),('92124fdf-1164-4118-a921-5644a11c68ac','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:21:29','2023-05-24 01:21:29'),('92124fdf-1164-4118-a921-5644a11c68ac','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:21:29','2023-05-24 01:21:29'),('9224eaf0-e2be-4f17-b28e-5974c38002b9','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('9224eaf0-e2be-4f17-b28e-5974c38002b9','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('9806f8c2-aa1e-45e4-be10-3afc772a6a40','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:35:05','2023-05-24 02:35:05'),('9806f8c2-aa1e-45e4-be10-3afc772a6a40','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-24 02:35:05','2023-05-24 02:35:05'),('98a28e0f-2d53-4e60-afec-963c9ab81f08','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:28:12','2023-05-24 01:28:12'),('98a28e0f-2d53-4e60-afec-963c9ab81f08','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:28:12','2023-05-24 01:28:12'),('a52e322f-8889-4dce-a745-ea043afc8069','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-21 08:49:35','2023-05-21 08:49:35'),('a52e322f-8889-4dce-a745-ea043afc8069','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-21 08:49:35','2023-05-21 08:49:35'),('a52e322f-8889-4dce-a745-ea043afc8069','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-21 08:49:35','2023-05-21 08:49:35'),('a9f8543d-98b0-4954-8e92-50bf144b6b6d','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:21:35','2023-05-24 01:21:35'),('a9f8543d-98b0-4954-8e92-50bf144b6b6d','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:21:35','2023-05-24 01:21:35'),('ac8f8fa4-e32d-451e-99d7-c138353e3353','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:26:04','2023-05-24 01:26:04'),('ac8f8fa4-e32d-451e-99d7-c138353e3353','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:26:04','2023-05-24 01:26:04'),('c54772f4-f660-4477-8e48-20d8114acd8b','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:23:47','2023-05-24 01:23:47'),('c54772f4-f660-4477-8e48-20d8114acd8b','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:23:47','2023-05-24 01:23:47'),('d828f826-176c-4e9f-8cc9-b8b3c2731f4c','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-24 02:08:29','2023-05-24 02:08:29'),('d828f826-176c-4e9f-8cc9-b8b3c2731f4c','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 02:08:29','2023-05-24 02:08:29'),('d8b7eb77-3fc1-4a9c-85d7-071e2276b15e','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-23 05:05:46','2023-05-23 05:05:46'),('d8b7eb77-3fc1-4a9c-85d7-071e2276b15e','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-23 05:05:46','2023-05-23 05:05:46'),('d8b7eb77-3fc1-4a9c-85d7-071e2276b15e','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-23 05:05:46','2023-05-23 05:05:46'),('e0ea176f-bb8f-4a6b-9199-95c8e22d6b1c','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:22:09','2023-05-24 01:22:09'),('e0ea176f-bb8f-4a6b-9199-95c8e22d6b1c','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:22:09','2023-05-24 01:22:09'),('e1ccc2a3-15c7-4629-b433-65bf5afb7c21','02ce046c-c46e-4904-8a83-db145dbe36b9','2023-05-20 14:47:13','2023-05-20 14:47:13'),('e1ccc2a3-15c7-4629-b433-65bf5afb7c21','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-20 14:47:13','2023-05-20 14:47:13'),('e859c024-1b51-48b5-b00f-cfa57d08f18c','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:13:39','2023-05-24 02:13:39'),('e859c024-1b51-48b5-b00f-cfa57d08f18c','3e4b988f-3127-4b21-99ab-d478e59f479c','2023-05-24 02:13:39','2023-05-24 02:13:39'),('ebe5b911-dfdc-4f95-b9de-a90aa69b7c81','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:25:47','2023-05-24 01:25:47'),('ebe5b911-dfdc-4f95-b9de-a90aa69b7c81','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:25:47','2023-05-24 01:25:47'),('f2d31550-a550-4b0a-82a4-519aa74b9ccb','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:24:34','2023-05-24 01:24:34'),('f2d31550-a550-4b0a-82a4-519aa74b9ccb','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:24:34','2023-05-24 01:24:34'),('f663e49b-0a5f-46a6-970c-d04a1161def0','03c9cee2-9f9b-4e21-8233-369dab4ac407','2023-05-24 02:12:27','2023-05-24 02:12:27'),('f663e49b-0a5f-46a6-970c-d04a1161def0','0a9e8cab-caf3-4078-a67f-af2884e42276','2023-05-24 02:12:27','2023-05-24 02:12:27'),('f98af397-8628-44d6-988c-ad67883807ac','169da798-bb1d-4ec6-be34-43a94cf8b8d8','2023-05-24 01:22:04','2023-05-24 01:22:04'),('f98af397-8628-44d6-988c-ad67883807ac','30ae3a79-84d9-4cbb-990e-79736502e2d8','2023-05-24 01:22:04','2023-05-24 01:22:04');
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
INSERT INTO `districts` VALUES ('102e8d94-71d8-43cb-81ce-5b3a955f4dbf','Huyện Bình Chánh','2023-05-20 14:46:37','2023-05-20 14:46:37'),('203ca5f5-60e5-4e4e-8543-4f6f37df6e9d','Huyện Nhà Bè','2023-05-20 14:46:37','2023-05-20 14:46:37'),('27f9e5f9-d24d-42d4-b792-e494d85bd18f','Quận 6','2023-05-20 14:46:37','2023-05-20 14:46:37'),('2ce71e61-4911-4d38-88d6-2273e9069f87','Thủ Đức','2023-05-20 14:46:37','2023-05-20 14:46:37'),('3095f5a2-b3a9-4a83-8e73-3cd121d102f7','Quận 7','2023-05-20 14:46:37','2023-05-20 14:46:37'),('4b8b026c-bb70-4ee0-a446-82dad4a3ef86','Quận Bình Tân','2023-05-20 14:46:37','2023-05-20 14:46:37'),('63687a3c-2a84-48df-81a5-1e56b41ab1e0','Quận 10','2023-05-20 14:46:37','2023-05-20 14:46:37'),('6e7f7d34-05aa-4ca7-a095-69fa2d40b6ca','Huyện Hóc Môn','2023-05-20 14:46:37','2023-05-20 14:46:37'),('6fd2fede-f8d9-4322-946a-04c24d694008','Quận 9','2023-05-20 14:46:37','2023-05-20 14:46:37'),('7820b80a-8ddf-4b5e-9248-6b67bc301276','Quận Tân Bình','2023-05-20 14:46:37','2023-05-20 14:46:37'),('8550c132-14e7-40ad-8193-7b9c5e299d3a','Quận 12','2023-05-20 14:46:37','2023-05-20 14:46:37'),('85fe06f8-4b53-4c81-8f04-d8193730b32e','Quận 4','2023-05-20 14:46:37','2023-05-20 14:46:37'),('8a363d4f-b61c-4d93-8396-f092222fd76f','Quận 5','2023-05-20 14:46:37','2023-05-20 14:46:37'),('bbf34c0b-5913-41aa-bf73-dc66b03ecc40','Quận 8','2023-05-20 14:46:37','2023-05-20 14:46:37'),('bffe674e-7d41-470c-8627-a1ced9c2e66b','Quận Tân Phú','2023-05-20 14:46:37','2023-05-20 14:46:37'),('c35b4efc-1652-4901-8ada-13c45c133159','Quận Phú Nhuận','2023-05-20 14:46:37','2023-05-20 14:46:37'),('cb91a1f0-c882-49f8-9fd3-d9bf4540445a','Quận 11','2023-05-20 14:46:37','2023-05-20 14:46:37'),('d016de69-32dc-4c8d-9bc9-ab5b8953934a','Quận 1','2023-05-20 14:46:37','2023-05-20 14:46:37'),('d41f0a8f-c1ed-4144-a01c-38c3285c4105','Quận 3','2023-05-20 14:46:37','2023-05-20 14:46:37'),('d76b189f-0642-462e-aeb6-74119937335d','Quận Gò Vấp','2023-05-20 14:46:37','2023-05-20 14:46:37'),('e7694b2c-6a96-4cb1-952e-199cdcd6d610','Quận 2','2023-05-20 14:46:37','2023-05-20 14:46:37'),('f488647a-7952-431d-bfd6-9f97de0237cf','Huyện Củ Chi','2023-05-20 14:46:37','2023-05-20 14:46:37'),('f6b1319e-f999-4d72-a3e3-9401d35b775c','Quận Bình Thạnh','2023-05-20 14:46:37','2023-05-20 14:46:37'),('fb7a8f56-583c-42e3-9d96-3cbdbd106857','Huyện Cần Giờ','2023-05-20 14:46:37','2023-05-20 14:46:37');
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
INSERT INTO `positions` VALUES ('04df3f79-b289-4deb-ba6e-5830bf1f7da0','Trưởng nhóm/giám sát','2023-05-20 14:46:37','2023-05-20 14:46:37'),('386a34b2-a333-41b8-99ec-d7ed9615034a','Phó giám đốc','2023-05-20 14:46:37','2023-05-20 14:46:37'),('4e74d5de-ec7c-4f3a-a604-2f08127a08b0','Giám đốc','2023-05-20 14:46:37','2023-05-20 14:46:37'),('90b3c4a2-f816-4eb9-969d-aeec167f08ca','Mới tốt nghiệp/Thực tập','2023-05-20 14:46:37','2023-05-20 14:46:37'),('93ab235a-7d70-49b6-a144-dc40ecf35459','Nhân viên/Công nhân','2023-05-20 14:46:37','2023-05-20 14:46:37'),('f384c957-88e6-46c7-95ea-529f813d23d7','Trưởng phòng/Kế toán trưởng','2023-05-20 14:46:37','2023-05-20 14:46:37');
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
INSERT INTO `postcareers` VALUES ('9b7a4ae5-1f66-4ae6-bdc5-26b73619ea9f','b5f5a263-e2dc-4028-bb56-f1529a8be56d','2023-05-24 15:21:13','2023-05-24 15:21:13');
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
INSERT INTO `postdistricts` VALUES ('9b7a4ae5-1f66-4ae6-bdc5-26b73619ea9f','f488647a-7952-431d-bfd6-9f97de0237cf','2023-05-24 15:21:13','2023-05-24 15:21:13');
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
  `salaryMin` bigint DEFAULT NULL,
  `salaryMax` bigint DEFAULT NULL,
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
INSERT INTO `posts` VALUES ('17e93e38-c3df-438f-94b8-a9effcfa5137','Giám Sát Nhà Hàng','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('46baff35-30aa-4d3f-9557-dd103e2b57f0','Nhân Viên Content Marketing ̣̣̣(Chấp Nhận Sinh Viên Mới Ra Trường)','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('570a7010-c8b4-435d-a39b-0ef757ff8d44','Trợ Lý Cửa Hàng Trưởng (F&B)','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('6ef3a1c5-7386-49df-b182-005192892eeb','Bếp Chính','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('7252e5bd-02de-498e-a8b3-10bdfee3c26d','Trợ Lý Giám Đốc','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('9b7a4ae5-1f66-4ae6-bdc5-26b73619ea9f','Lao công','35c3d6f2-3dde-4868-ab7c-8856b73a5861','93ab235a-7d70-49b6-a144-dc40ecf35459',15,30,2,'32ed5adb-0214-4f43-853a-ce702474f82d',18,60,'8dd7c8e9-b95c-4321-845d-e38940ed0eef','124/11A XVNT',NULL,'2023-05-24',23,2,'<p>assdfavsawfadc</p>','<p>sdfasdvasearevvr</p>','<p>adasdadasdasd</p>',NULL,'2023-05-24 15:21:13','2023-05-24 15:21:13'),('c8ac0692-65af-4608-a3b6-f959d8ab2486','Nữ Lao Động Phổ Thông','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('d1609734-1cc0-430b-8943-1a577c6a29b9','Nhân Viên Sale - Giám Sát Kinh Doanh','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('d66757ee-a0be-488a-982a-8d2c022f4acc','Nhân Viên Content Marketing','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('e4301335-f354-45e5-a2da-8f2eb145b48d','Chuyên Viên Thiết Kế (Thiết Kế Mảng Sự Kiện - Tiệc Cưới)','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39'),('eebc82f8-9055-468b-8854-78e0ff0c52e6','Nhân Viên Thu Mua','4126dfa8-6f84-40f8-b281-47b03044568b',NULL,10,12,1,NULL,18,40,NULL,NULL,NULL,'2023-06-12',3,1,'- Đứng lắp ráp linh kiện bộ dây điện xe hơi, cách 2 tiếng được giải lao 10 phút.\n- Làm việc theo ca, xoay ca có ca đêm.\n- Chấp nhận tăng ca, công việc tăng ca thường xuyên.','-Tổng thu nhập chưa tính tăng ca 7 triệu ( có tăng ca nhiều từ 10-12 triệu/tháng chế độ đầy đủ phần ăn chất lượng )\n- Lương cơ bản: 5.300.000\n- Phụ cấp chức vụ: 50.000 đ\n- Phụ cấp nhà ở: 480.000 đ\n- Phụ cấp đi lại: 200.000 đ\n- Chuyên cần: 250.000 đ\n- Phụ cấp ca đêm 40% : 89.833 đ/đêm\n- Tăng ca ngày thường 150% : 40.890 đ/1h\n- Tăng ca chủ nhật 200% : 55.520 đ/1h\n___________________________\nPHÚC LỢI\n- Tham gia đầy đủ chế độ bảo hiểm BHXH, BHYT, BHTN theo quy định nhà nước.\n- Có nhà ăn phục vụ miền phí cho công nhân, hỗ trợ khu lưu trú và xe đưa rước.\n- Thưởng tháng 13, du lịch, tặng quà tết, sinh nhật, cưới hỏi..\n- Công ty phát đồng phục, dụng cụ làm việc miễn phí.\n- Còn nhiều chế độ hấp dẫn khác.','- NỮ (TOMBOY ) 2005-1982 thiếu tháng vẫn nhận\n- Xăm ít hình nhỏ vẫn nhận.\n- Đơn xin việc.\n- Sơ yếu lý lịch công chứng.\n- CCCD công chứng.\n- Hổ trợ làm hồ sơ ( cccd là được)','- Gửi hồ sơ về địa chỉ: Khu Chế Xuất, Phường Tân Thuận Đông ,Quận 7, TP HCM.\n- Gửi CV qua mail: Lamnguyen210189@gmail.com\n- Điện thoại: 0932087872 gặp anh Lâm.\n- Anh chị khi gửi CV qua gmail xin ghi rõ tại tiêu đề mail ứng tuyển: {họ và tên}-{vị trí ứng tuyển}-{tên công ty ứng tuyển}-{Khu vực-nếu có}.\n- Xin lưu ý: Ghi rõ \"Biết đến tin tuyển dụng tại hcmjob.vn\" khi nộp hồ sơ cho chúng tôi. Xin cảm ơn!\n','2023-05-20 14:55:39','2023-05-20 14:55:39');
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
INSERT INTO `sequelizemeta` VALUES ('create-academiclevel.js'),('create-candidate.js'),('create-candidatecareer.js'),('create-candidatedistrict.js'),('create-career.js'),('create-company.js'),('create-companycareer.js'),('create-district.js'),('create-position.js'),('create-post.js'),('create-postcareer.js'),('create-postdistrict.js'),('create-user.js'),('create-workingtype.js');
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
INSERT INTO `workingtypes` VALUES ('28c50534-3cc4-43e0-9331-9c1eb81f8f01','Theo ca','2023-05-20 14:46:37','2023-05-20 14:46:37'),('8dd7c8e9-b95c-4321-845d-e38940ed0eef','Hành chính','2023-05-20 14:46:37','2023-05-20 14:46:37'),('a7215ce1-7738-4e48-bee1-07f9a6aefe87','Theo công việc','2023-05-20 14:46:37','2023-05-20 14:46:37');
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

-- Dump completed on 2023-05-25 21:44:39
