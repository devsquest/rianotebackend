-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220918.6792b17e72
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2022 at 01:58 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faster_note`
--

-- --------------------------------------------------------

--
-- Table structure for table `active_subscriptions`
--

CREATE TABLE `active_subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subscription_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `duration` int(10) UNSIGNED DEFAULT NULL COMMENT 'months',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `active_subscriptions`
--

INSERT INTO `active_subscriptions` (`id`, `subscription_id`, `user_id`, `price`, `duration`, `status`, `start`, `end`, `created_at`, `updated_at`) VALUES
(3, 3, 34, '180.00', 12, 'active', '2022-10-27 12:49:13', '2023-10-27 12:49:13', '2022-10-27 07:48:41', '2022-10-27 07:49:13');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `headings`
--

CREATE TABLE `headings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `note_id` bigint(20) UNSIGNED DEFAULT NULL,
  `heading_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heading_content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `headings`
--

INSERT INTO `headings` (`id`, `note_id`, `heading_text`, `heading_content`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 1, 'daw', 'fdaffa', 2, '2022-08-24 08:22:36', '2022-08-24 08:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2021_01_22_161846_create_notes_table', 1),
(9, '2021_01_22_162208_create_sections_table', 1),
(10, '2021_01_22_165227_create_questions_table', 1),
(11, '2021_01_22_170000_create_options_table', 1),
(12, '2021_01_22_170436_create_headings_table', 1),
(14, '2021_02_20_181312_add-admin-check-column', 2),
(15, '2019_08_19_000000_create_failed_jobs_table', 3),
(16, '2019_12_14_000001_create_personal_access_tokens_table', 3),
(17, '2022_08_08_210327_create_statement_masters_table', 4),
(18, '2022_08_08_210941_create_statement_details_table', 4),
(19, '2022_09_02_144651_create_subscriptions_table', 5),
(20, '2022_10_25_065755_create_active_subscriptions_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `name`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Basic Notes', 1, 2, '2022-08-02 08:26:10', '2022-08-02 08:26:10'),
(2, 'Treatment Plan', 1, 2, '2022-08-25 07:46:01', '2022-08-25 07:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `option_text` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_id` bigint(20) UNSIGNED DEFAULT NULL,
  `statement_detail_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `option_text`, `question_id`, `statement_detail_id`, `created_at`, `updated_at`) VALUES
(1, 'appeared to be superior in most areas of life with no indication of emotional difficulty or distress. The client is not overwhelmed by life\'s difficulties and is able to enjoy relationships, work/school, and leisure time.', 3, NULL, '2022-08-02 09:54:17', '2022-08-16 04:02:15'),
(2, 'appeared to be very good with minimal difficulties and is able to cope well in most areas of life (e.g., relationships, work/school, and leisure). The client is quite content and reports only everyday difficulties and concerns.', 3, NULL, '2022-08-02 09:54:25', '2022-08-02 09:54:25'),
(3, 'appeared reasonably good with only short lived and expectable reactions to everyday stressful events. The client shows only slight difficulty in relational and/or work/school functioning.', 3, NULL, '2022-08-02 09:54:33', '2022-08-02 09:54:33'),
(4, 'indicates a mild level of difficulty with some problems in relationships, work, or school functioning. The client is nonetheless functioning well and has some significant relationships.', 3, NULL, '2022-08-02 09:54:41', '2022-08-02 09:54:41'),
(5, 'Multi Selection One', 6, NULL, '2022-08-04 03:14:27', '2022-08-04 03:14:27'),
(6, 'Multi Selection Two', 6, NULL, '2022-08-04 03:14:38', '2022-08-04 03:14:38'),
(7, 'Multi Selection Three', 6, NULL, '2022-08-04 03:14:47', '2022-08-04 03:14:47'),
(8, 'Tags Sec 1', 9, NULL, '2022-08-08 03:37:21', '2022-08-08 03:37:21'),
(9, 'Tags Sec 2', 9, NULL, '2022-08-08 03:37:35', '2022-08-08 03:37:35'),
(10, 'Tags Sec 3', 9, NULL, '2022-08-08 03:37:51', '2022-08-08 03:37:51'),
(11, 'Tags Sec 4', 9, NULL, '2022-08-08 03:38:04', '2022-08-08 03:38:04'),
(12, 'good', 10, NULL, '2022-08-08 03:57:45', '2022-08-08 03:57:45'),
(13, 'mild', 10, NULL, '2022-08-08 03:57:59', '2022-08-08 03:57:59'),
(14, 'new', 10, NULL, '2022-08-08 03:58:11', '2022-08-08 03:58:11'),
(19, 'Tag 5 new', 9, NULL, '2022-08-18 11:08:58', '2022-08-18 11:09:08'),
(20, 'helping the client develop a sense of safety and trust in the therapeutic relationship and setting so as to enable the ongoing work of the treatment', 12, 3, '2022-09-07 15:23:11', '2022-09-07 15:23:11'),
(21, 'fostering trust and safety in the therapeutic setting so that the client can freely communicate and express thoughts and feelings', 12, 3, '2022-09-07 15:23:11', '2022-09-07 15:23:11'),
(22, 'better understanding and resolution of the client\'s emotional distress, difficulties and associated struggles', 12, 4, '2022-09-07 15:27:48', '2022-09-07 15:27:48'),
(23, 'helping the client to achieve greater overall life satisfaction and emotional well-being', 12, 4, '2022-09-07 15:27:48', '2022-09-07 15:27:48'),
(24, 'nope', 10, NULL, '2022-09-08 07:36:12', '2022-09-08 07:36:12');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 26, 'MyApp', 'da43b75ddbe5cd9f351a3eade15661608e0369a980dc8af55a47190216b7bf3f', '[\"*\"]', '2022-10-26 07:24:45', '2022-10-26 07:16:38', '2022-10-26 07:24:45'),
(2, 'App\\Models\\User', 27, 'MyApp', 'dde24d009ea85b42e5007461b1c154a6c48ee7c7a35613f40f2daafc7f49b230', '[\"*\"]', '2022-10-26 07:29:09', '2022-10-26 07:28:40', '2022-10-26 07:29:09'),
(3, 'App\\Models\\User', 28, 'MyApp', '02c36e615a9613608c6f35c13dcd85503ab258d45f5248db6a0cbcfec3385386', '[\"*\"]', '2022-10-26 07:30:52', '2022-10-26 07:29:39', '2022-10-26 07:30:52'),
(4, 'App\\Models\\User', 29, 'MyApp', '442f671d21066d2cea053bf5908ee135e75902cd40001d587ee55c141519188b', '[\"*\"]', '2022-10-26 08:21:50', '2022-10-26 07:31:21', '2022-10-26 08:21:50'),
(5, 'App\\Models\\User', 30, 'MyApp', '81cfd1080b222bc93e10ce332884ad230b2c56e28e85b05fa32f24f6de3e3838', '[\"*\"]', '2022-10-27 05:02:16', '2022-10-27 04:37:38', '2022-10-27 05:02:16'),
(6, 'App\\Models\\User', 31, 'MyApp', 'def97a255f8c6360abf58708c751ec8500a43dd152865d0bde72a4bfe3afc270', '[\"*\"]', '2022-10-27 05:11:28', '2022-10-27 05:09:29', '2022-10-27 05:11:28'),
(7, 'App\\Models\\User', 32, 'MyApp', '7526de5425784031d4bae4b5bd2dc89f951734906302fe6c9ffe5fd999c128ae', '[\"*\"]', '2022-10-27 07:22:47', '2022-10-27 05:18:25', '2022-10-27 07:22:47'),
(8, 'App\\Models\\User', 33, 'MyApp', '2e027cab91a7ea1cf7c97cf476148a76e7f2e372bd44d852f2479dcb483b8a01', '[\"*\"]', '2022-10-27 07:42:57', '2022-10-27 07:41:39', '2022-10-27 07:42:57'),
(9, 'App\\Models\\User', 34, 'MyApp', 'e2704d39657bd38c78397eb9ed8de19fccde8cce99ed18b9ba0e07706400799b', '[\"*\"]', '2022-10-27 08:25:25', '2022-10-27 07:48:41', '2022-10-27 08:25:25');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question_text` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selection_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section_id` bigint(20) UNSIGNED DEFAULT NULL,
  `only_show_options` tinyint(1) DEFAULT 0 COMMENT 'Only show options on front site hide question',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question_text`, `question_type`, `selection_type`, `section_id`, `only_show_options`, `created_at`, `updated_at`) VALUES
(1, 'Name', 'form', 'single', 3, 0, '2022-08-02 09:43:41', '2022-08-05 04:20:54'),
(2, 'Home Adress', 'form', 'single', 3, 0, '2022-08-02 09:44:20', '2022-08-02 09:44:20'),
(3, 'The client\'s estimated global assessment of functioning\n', 'text', 'single', 2, 0, '2022-08-02 09:53:47', '2022-08-02 09:53:47'),
(4, 'Hong', 'form', 'single', 5, 0, '2022-08-03 07:08:30', '2022-08-03 07:08:30'),
(5, 'Kong', 'form', 'single', 5, 0, '2022-08-03 07:08:53', '2022-08-03 07:08:53'),
(6, 'This is exammple of multiple Selection', 'text', 'multiple', 9, 0, '2022-08-04 03:14:10', '2022-08-04 03:14:10'),
(7, 'Amjo', 'form', 'single', 4, 0, '2022-08-04 03:21:53', '2022-08-04 03:21:53'),
(8, 'Jelip', 'form', 'single', 4, 0, '2022-08-04 03:22:47', '2022-08-04 03:22:47'),
(9, 'This is example test by tags', 'tags', 'multiple', 11, 0, '2022-08-08 03:37:07', '2022-08-08 03:37:07'),
(10, 'Current situation is *option* by current news', 'tags-replacement-option', 'multiple', 12, 0, '2022-08-08 03:57:19', '2022-08-08 03:57:19'),
(12, 'Therapeutic Goals and Objectives', 'statements', 'multiple', 7, 0, '2022-09-07 10:12:05', '2022-09-07 10:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `parent_id`, `name`, `note_id`, `type`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Stats', 1, 'questionnaire', '2022-08-02 08:26:29', '2022-08-02 08:26:29'),
(2, 1, 'Global Assessment', 1, 'questionnaire', '2022-08-02 08:27:20', '2022-08-02 08:27:20'),
(3, NULL, 'Intro', 1, 'form-inline', '2022-08-02 09:07:05', '2022-08-02 09:07:05'),
(4, NULL, 'Detail', 1, 'form-nextline', '2022-08-02 09:07:15', '2022-08-02 09:07:15'),
(5, NULL, 'Intro 2', 1, 'form-inline', '2022-08-03 07:08:07', '2022-08-03 07:08:07'),
(6, NULL, 'Ujo', 1, 'questionnaire', '2022-08-03 07:28:52', '2022-08-03 07:28:52'),
(7, 6, 'My second ujo', 1, 'statements', '2022-08-03 07:29:07', '2022-09-07 10:25:56'),
(8, 6, 'Ham burger', 1, 'questionnaire', '2022-08-03 07:29:50', '2022-08-03 07:29:50'),
(9, 1, 'Multi Assessment', 1, 'questionnaire', '2022-08-04 03:13:21', '2022-08-04 03:13:21'),
(10, NULL, 'Empty', 1, 'questionnaire', '2022-08-04 06:29:17', '2022-08-04 06:29:17'),
(11, 1, 'Tags Sec', 1, 'questionnaire', '2022-08-08 03:36:23', '2022-08-08 03:36:23'),
(12, 1, 'Tags Sec R', 1, 'questionnaire', '2022-08-08 03:56:35', '2022-08-08 03:56:35'),
(13, 6, 'Staments Sec', 1, 'statements', '2022-08-08 08:23:07', '2022-08-08 08:23:07');

-- --------------------------------------------------------

--
-- Table structure for table `statement_details`
--

CREATE TABLE `statement_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `statement_details`
--

INSERT INTO `statement_details` (`id`, `question_id`, `title`, `created_at`, `updated_at`) VALUES
(3, 12, 'Therapeutic Process:', '2022-09-07 15:21:18', '2022-09-07 15:21:18'),
(4, 12, 'Overall Emotion Wellbeing and Daily Functioning:', '2022-09-07 15:21:18', '2022-09-07 15:21:18'),
(5, 12, 'Self and Identity:', '2022-09-07 15:22:28', '2022-09-07 15:22:28');

-- --------------------------------------------------------

--
-- Table structure for table `statement_masters`
--

CREATE TABLE `statement_masters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `statement_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `statement_masters`
--

INSERT INTO `statement_masters` (`id`, `statement_text`, `short_text`, `question_id`, `created_at`, `updated_at`) VALUES
(3, 'The primary goals of the treatment include', 'P', 12, '2022-09-07 15:19:05', '2022-09-07 15:19:05'),
(4, 'The secondary goals of the treatment include', 'S', 12, '2022-09-07 15:19:05', '2022-09-07 15:19:05'),
(5, 'The specific therapeutic objectives include', 'O', 12, '2022-09-07 15:20:23', '2022-09-07 15:20:23');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,1) NOT NULL DEFAULT 0.0,
  `duration` int(10) UNSIGNED DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_sign` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stripe_price_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `name`, `price`, `duration`, `currency`, `currency_sign`, `description`, `stripe_price_id`, `status`, `short_name`, `created_at`, `updated_at`) VALUES
(1, '1 MONTH', '15.0', 1, 'USD', '$', '<div class=\"pricing-single-body-text text-center\">\n<p class=\"pricing-single-body-text-p\">Mac and/or Windows</p>\n<p class=\"pricing-single-body-text-p\">Runs in your browser</p>\n<p class=\"pricing-single-body-text-p\">Access from any computer</p>\n<p class=\"pricing-single-body-text-p\">Low monthly Fee</p>\n<p class=\"pricing-single-body-text-p\">Highly customizeable</p>\n</div>', 'price_1LdW0FIMnKC1Keli4FyCDrVN', 1, 'om', '2022-09-02 15:00:34', '2022-09-02 15:00:34'),
(2, '6 MONTH', '84.0', 6, 'USD', '$', '<div class=\"pricing-single-body-text text-center\">\n                                <p class=\"pricing-single-body-text-p\">Mac and/or Windows</p>\n                                <p class=\"pricing-single-body-text-p\">Runs in your browser</p>\n                                <p class=\"pricing-single-body-text-p\">Access from any computer</p>\n                                <p class=\"pricing-single-body-text-p\">Low monthly Fee</p>\n                                <p class=\"pricing-single-body-text-p\">Highly customizeable</p>\n                            </div>', 'price_1LegtVIMnKC1KeliJnhlIufo', 1, 'sm', '2022-09-02 15:00:34', '2022-09-02 15:00:34'),
(3, '1 YEAR', '180.0', 12, 'USD', '$', '<div class=\"pricing-single-body-text text-center\">\n                                <p class=\"pricing-single-body-text-p\">Mac and/or Windows</p>\n                                <p class=\"pricing-single-body-text-p\">Runs in your browser</p>\n                                <p class=\"pricing-single-body-text-p\">Access from any computer</p>\n                                <p class=\"pricing-single-body-text-p\">Low monthly Fee</p>\n                                <p class=\"pricing-single-body-text-p\">Highly customizeable</p>\n                            </div>', 'price_1LeguRIMnKC1KeliBYNiqUmc', 1, 'oy', '2022-09-02 15:02:26', '2022-09-02 15:02:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `isAdmin` tinyint(1) DEFAULT 0,
  `signature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terminology_client` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terminology_psycho` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terminology_behavior` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opening_heading` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section_breaks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spacing_options` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `font_style` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `font_size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_format` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color_opacity` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subscription_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subscription_code_verified` tinyint(1) DEFAULT 0,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `status`, `isAdmin`, `signature`, `terminology_client`, `terminology_psycho`, `terminology_behavior`, `opening_heading`, `section_breaks`, `spacing_options`, `font_style`, `font_size`, `date_format`, `color_opacity`, `subscription_code`, `subscription_code_verified`, `profile_picture`) VALUES
(1, 'Umer Yasin', 'umer@gmail.com', NULL, '$2y$10$qFn3hfllnV70z.MsKEPU/.S97O6uxf1M.eU6kBSLL0Hl4NjkfUaSu', NULL, '2020-08-30 03:38:08', '2021-02-22 08:59:22', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(2, 'Umer User', 'user@gmail.com', NULL, '$2y$10$qFn3hfllnV70z.MsKEPU/.S97O6uxf1M.eU6kBSLL0Hl4NjkfUaSu', NULL, '2020-08-30 03:38:08', '2022-09-09 08:07:30', 1, 0, 'Umer, inc', '5', '2', '2', '1', '2', '1', '3', '3', '5', '6', NULL, 0, '1662037457_953.jpg'),
(34, 'Arch X Studio Virtual Classroom', 'user1@gmail.com', NULL, '$2y$10$h3e35YAHHIFVSd5jMbrgbuVwqX9qy4G5d9C5/pLmHB.EiW0e2Xkki', NULL, '2022-10-27 07:48:41', '2022-10-27 07:49:13', 0, 0, 'dad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '7zg0Fdfe71fNUs7', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active_subscriptions`
--
ALTER TABLE `active_subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `headings`
--
ALTER TABLE `headings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `headings_note_id_foreign` (`note_id`),
  ADD KEY `headings_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `options_question_id_foreign` (`question_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_section_id_foreign` (`section_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sections_parent_id_foreign` (`parent_id`),
  ADD KEY `sections_note_id_foreign` (`note_id`);

--
-- Indexes for table `statement_details`
--
ALTER TABLE `statement_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statement_masters`
--
ALTER TABLE `statement_masters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active_subscriptions`
--
ALTER TABLE `active_subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `headings`
--
ALTER TABLE `headings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `statement_details`
--
ALTER TABLE `statement_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `statement_masters`
--
ALTER TABLE `statement_masters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `headings`
--
ALTER TABLE `headings`
  ADD CONSTRAINT `headings_note_id_foreign` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`),
  ADD CONSTRAINT `headings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`);

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_note_id_foreign` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`),
  ADD CONSTRAINT `sections_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `sections` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
