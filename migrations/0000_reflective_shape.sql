CREATE TABLE "admin_activity_logs" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"admin_id" varchar NOT NULL,
	"action" varchar NOT NULL,
	"target_type" varchar,
	"target_id" varchar,
	"details" text,
	"ip_address" varchar,
	"user_agent" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "admin_settings" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"setting_key" varchar(255) NOT NULL,
	"setting_value" text NOT NULL,
	"description" text,
	"updated_by" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "admin_settings_setting_key_unique" UNIQUE("setting_key")
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar,
	"salon_id" varchar NOT NULL,
	"service_id" varchar NOT NULL,
	"time_slot_id" varchar,
	"staff_id" varchar,
	"date" varchar(10) NOT NULL,
	"start_time" varchar(5) NOT NULL,
	"end_time" varchar(5) NOT NULL,
	"total_amount" numeric(10, 2) NOT NULL,
	"confirmation_amount" numeric(10, 2) DEFAULT '0',
	"referral_code" varchar(50),
	"status" varchar DEFAULT 'pending',
	"suggested_date" varchar(10),
	"suggested_time" varchar(5),
	"owner_note" text,
	"payment_id" varchar,
	"payment_status" varchar DEFAULT 'pending',
	"is_walk_in" boolean DEFAULT false,
	"walk_in_payment_method" varchar,
	"walk_in_customer_name" varchar,
	"walk_in_customer_phone" varchar,
	"notes" text,
	"is_emergency_booking" boolean DEFAULT false,
	"emergency_charge_amount" numeric(10, 2) DEFAULT '0',
	"emergency_reason" text,
	"emergency_approved_by" varchar,
	"emergency_approved_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "brand_invitations" (
	"id" varchar PRIMARY KEY NOT NULL,
	"brand_owner_id" varchar NOT NULL,
	"salon_owner_id" varchar NOT NULL,
	"salon_id" varchar,
	"status" varchar DEFAULT 'pending',
	"message" text,
	"invitation_type" varchar NOT NULL,
	"brand_name" varchar,
	"salon_name" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "brand_messages" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"brand_owner_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"salon_owner_id" varchar NOT NULL,
	"message" text NOT NULL,
	"is_read" boolean DEFAULT false,
	"priority" varchar DEFAULT 'medium',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "brand_offers" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"brand_owner_id" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"offer_type" varchar NOT NULL,
	"discount_value" numeric(10, 2) NOT NULL,
	"minimum_amount" numeric(10, 2) DEFAULT '0',
	"maximum_discount" numeric(10, 2),
	"applicable_services" text[] DEFAULT '{}',
	"terms_and_conditions" text,
	"promo_code" varchar(50),
	"usage_limit" integer,
	"usage_count" integer DEFAULT 0,
	"valid_from" timestamp NOT NULL,
	"valid_until" timestamp NOT NULL,
	"is_active" boolean DEFAULT true,
	"show_on_salon_dashboard" boolean DEFAULT true,
	"priority" integer DEFAULT 0,
	"image_url" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "brand_offers_promo_code_unique" UNIQUE("promo_code")
);
--> statement-breakpoint
CREATE TABLE "content_moderations" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content_type" varchar NOT NULL,
	"content_id" varchar NOT NULL,
	"reported_by" varchar,
	"reason" varchar NOT NULL,
	"description" text,
	"status" varchar DEFAULT 'pending',
	"moderated_by" varchar,
	"moderated_at" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "customer_referral_campaigns" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"referrer_id" varchar NOT NULL,
	"campaign_type" varchar DEFAULT '5_customer_free_booking' NOT NULL,
	"target_count" integer DEFAULT 5 NOT NULL,
	"current_count" integer DEFAULT 0 NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL,
	"completed_referral_ids" text[] DEFAULT '{}',
	"free_booking_credits" integer DEFAULT 0 NOT NULL,
	"credits_used" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"completed_at" timestamp,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "customer_showcase" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"customer_name" varchar(100),
	"photo_url" text NOT NULL,
	"caption" text,
	"service_name" varchar(100),
	"is_approved" boolean DEFAULT false,
	"is_rewarded" boolean DEFAULT false,
	"reward_amount" numeric(10, 2) DEFAULT '30',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "email_verification_otps" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar NOT NULL,
	"otp" varchar(6) NOT NULL,
	"user_type" varchar NOT NULL,
	"expires_at" timestamp NOT NULL,
	"verified" boolean DEFAULT false,
	"attempts" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "emergency_booking_waitlist" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"service_id" varchar NOT NULL,
	"preferred_date" varchar(10) NOT NULL,
	"preferred_start_time" varchar(5),
	"preferred_end_time" varchar(5),
	"emergency_reason" text,
	"max_emergency_charge" numeric(10, 2) NOT NULL,
	"customer_phone" varchar(20),
	"notification_preference" varchar DEFAULT 'app',
	"status" varchar DEFAULT 'pending',
	"assigned_slot_id" varchar,
	"assigned_booking_id" varchar,
	"confirmed_at" timestamp,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "emergency_slots" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"date" varchar(10) NOT NULL,
	"start_time" varchar(5) NOT NULL,
	"end_time" varchar(5) NOT NULL,
	"extra_charge" numeric(10, 2) NOT NULL,
	"reason" varchar NOT NULL,
	"staff_id" varchar,
	"is_booked" boolean DEFAULT false,
	"booking_id" varchar,
	"created_by" varchar NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"display_order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "feedback" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"user_type" varchar NOT NULL,
	"category" varchar NOT NULL,
	"subject" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"rating" integer,
	"mood_rating" integer,
	"attachment_url" varchar,
	"priority" varchar DEFAULT 'medium',
	"status" varchar DEFAULT 'open',
	"admin_response" text,
	"admin_notes" text,
	"responded_by" varchar,
	"responded_at" timestamp,
	"is_public" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "free_booking_credits" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar NOT NULL,
	"credit_type" varchar NOT NULL,
	"max_amount" numeric(10, 2) NOT NULL,
	"is_used" boolean DEFAULT false NOT NULL,
	"booking_id" varchar,
	"reference_id" varchar NOT NULL,
	"description" text NOT NULL,
	"expires_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"used_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "help_ticket_messages" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ticket_id" varchar NOT NULL,
	"sender_id" varchar NOT NULL,
	"sender_type" varchar NOT NULL,
	"message" text NOT NULL,
	"attachment_url" varchar,
	"is_internal" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "help_tickets" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"user_type" varchar NOT NULL,
	"ticket_number" varchar(50) NOT NULL,
	"subject" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"category" varchar NOT NULL,
	"priority" varchar DEFAULT 'medium',
	"status" varchar DEFAULT 'open',
	"assigned_to" varchar,
	"admin_notes" text,
	"customer_satisfaction" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"resolved_at" timestamp,
	CONSTRAINT "help_tickets_ticket_number_unique" UNIQUE("ticket_number")
);
--> statement-breakpoint
CREATE TABLE "notification_history" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"type" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"channel" varchar NOT NULL,
	"status" varchar DEFAULT 'pending',
	"booking_id" varchar,
	"sent_at" timestamp DEFAULT now(),
	"delivered_at" timestamp,
	"failure_reason" text,
	"is_read" boolean DEFAULT false,
	"action_url" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "notification_settings" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"booking_confirmation" boolean DEFAULT true,
	"booking_reminder" boolean DEFAULT true,
	"day_before_reminder" boolean DEFAULT true,
	"hour_before_reminder" boolean DEFAULT true,
	"promotional_notifications" boolean DEFAULT false,
	"email_notifications" boolean DEFAULT true,
	"sms_notifications" boolean DEFAULT false,
	"web_push_notifications" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "notification_settings_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "offer_usages" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"offer_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"booking_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"discount_amount" numeric(10, 2) NOT NULL,
	"original_amount" numeric(10, 2) NOT NULL,
	"final_amount" numeric(10, 2) NOT NULL,
	"used_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "password_reset_otps" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar NOT NULL,
	"otp" varchar(6) NOT NULL,
	"is_used" boolean DEFAULT false,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "payment_orders" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"service_id" varchar NOT NULL,
	"additional_services" jsonb,
	"time_slot_id" varchar NOT NULL,
	"date" varchar(10) NOT NULL,
	"staff_id" varchar,
	"notes" text,
	"referral_code_data" jsonb,
	"total_amount" numeric(10, 2) NOT NULL,
	"confirmation_amount" integer NOT NULL,
	"payment_status" varchar DEFAULT 'pending',
	"is_processed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "payment_orders_order_id_unique" UNIQUE("order_id")
);
--> statement-breakpoint
CREATE TABLE "platform_analytics" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"date" varchar NOT NULL,
	"total_customers" integer DEFAULT 0,
	"total_salons" integer DEFAULT 0,
	"total_bookings" integer DEFAULT 0,
	"total_revenue" integer DEFAULT 0,
	"new_customers" integer DEFAULT 0,
	"new_salons" integer DEFAULT 0,
	"new_bookings" integer DEFAULT 0,
	"daily_revenue" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "platform_stats" (
	"id" varchar PRIMARY KEY DEFAULT 'stats' NOT NULL,
	"total_customers" integer DEFAULT 0,
	"total_salons" integer DEFAULT 0,
	"total_bookings" integer DEFAULT 0,
	"total_services" integer DEFAULT 0,
	"last_updated" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "profile_visits" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"visitor_id" varchar,
	"visitor_type" varchar DEFAULT 'anonymous',
	"ip_address" varchar,
	"user_agent" text,
	"referrer" text,
	"visit_duration" integer,
	"page_viewed" varchar DEFAULT 'profile',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "push_subscriptions" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"endpoint" text NOT NULL,
	"p256dh_key" text NOT NULL,
	"auth_key" text NOT NULL,
	"user_agent" text,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "referral_milestones" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"referrer_id" varchar NOT NULL,
	"milestone_type" varchar NOT NULL,
	"target_count" integer NOT NULL,
	"current_count" integer DEFAULT 0,
	"is_completed" boolean DEFAULT false,
	"reward_amount" numeric(10, 2) NOT NULL,
	"completed_booking_ids" text[] DEFAULT '{}',
	"completed_at" timestamp,
	"reward_claimed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "referrals" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"referrer_id" varchar NOT NULL,
	"referred_id" varchar,
	"referral_code" varchar(10) NOT NULL,
	"referral_type" varchar DEFAULT 'customer_to_customer',
	"status" varchar DEFAULT 'pending',
	"reward_amount" numeric(10, 2) DEFAULT '50',
	"is_reward_claimed" boolean DEFAULT false,
	"booking_id" varchar,
	"created_at" timestamp DEFAULT now(),
	"completed_at" timestamp,
	CONSTRAINT "referrals_referral_code_unique" UNIQUE("referral_code")
);
--> statement-breakpoint
CREATE TABLE "revenue_shares" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"booking_id" varchar NOT NULL,
	"confirmation_amount" numeric(10, 2) NOT NULL,
	"platform_share" numeric(10, 2) NOT NULL,
	"salon_share" numeric(10, 2) NOT NULL,
	"transfer_status" varchar DEFAULT 'pending',
	"transfer_date" timestamp,
	"transfer_reference" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "review_replies" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"review_id" varchar NOT NULL,
	"salon_owner_id" varchar NOT NULL,
	"reply_text" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"booking_id" varchar,
	"rating" integer NOT NULL,
	"mood_rating" varchar,
	"comment" text,
	"photos" text[],
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_chats" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"sender_type" varchar NOT NULL,
	"message" text NOT NULL,
	"is_read" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_emergency_config" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"allow_emergency_bookings" boolean DEFAULT true,
	"emergency_charge_type" varchar DEFAULT 'percentage',
	"emergency_charge_value" numeric(10, 2) DEFAULT '50',
	"max_emergency_bookings_per_day" integer DEFAULT 3,
	"emergency_booking_time_limit" integer DEFAULT 120,
	"auto_confirm_emergency" boolean DEFAULT false,
	"emergency_contact_number" varchar(20),
	"notification_enabled" boolean DEFAULT true,
	"operating_hours_override" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "salon_emergency_config_salon_id_unique" UNIQUE("salon_id")
);
--> statement-breakpoint
CREATE TABLE "salon_facilities" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"name" varchar(100) NOT NULL,
	"icon" varchar(50),
	"description" text,
	"is_available" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_followers" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "salon_gallery" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"title" varchar(255),
	"description" text,
	"category" varchar(100),
	"order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_likes" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"is_liked" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_media" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"file_url" varchar NOT NULL,
	"file_name" varchar(255),
	"file_type" varchar NOT NULL,
	"mime_type" varchar(100),
	"file_size" integer,
	"title" varchar(255),
	"description" text,
	"category" varchar(100),
	"tags" text[],
	"order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"is_primary" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_offer_usage" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"offer_id" varchar NOT NULL,
	"customer_id" varchar NOT NULL,
	"booking_id" varchar,
	"discount_amount" numeric(10, 2) NOT NULL,
	"original_amount" numeric(10, 2) NOT NULL,
	"final_amount" numeric(10, 2) NOT NULL,
	"promo_code_used" varchar(50),
	"used_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_offers" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"discount_type" varchar NOT NULL,
	"discount_value" numeric(10, 2) NOT NULL,
	"min_order_amount" numeric(10, 2) DEFAULT '0',
	"max_discount_amount" numeric(10, 2),
	"valid_from" timestamp NOT NULL,
	"valid_until" timestamp NOT NULL,
	"max_usage_per_customer" integer DEFAULT 1,
	"max_total_usage" integer,
	"current_usage_count" integer DEFAULT 0,
	"applicable_services" text[],
	"is_applicable_to_all_services" boolean DEFAULT true,
	"service_specific_discounts" text,
	"is_active" boolean DEFAULT true,
	"is_visible" boolean DEFAULT true,
	"priority" integer DEFAULT 0,
	"promo_code" varchar(50),
	"is_promo_code_required" boolean DEFAULT false,
	"created_by" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_owner_accounts" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"bank_name" varchar NOT NULL,
	"account_holder_name" varchar NOT NULL,
	"account_number" varchar NOT NULL,
	"ifsc_code" varchar NOT NULL,
	"branch" varchar,
	"upi_id" varchar,
	"is_verified" boolean DEFAULT false,
	"verification_status" varchar DEFAULT 'pending',
	"verification_message" text,
	"verified_account_holder_name" varchar,
	"verified_at" timestamp,
	"verification_attempts" integer DEFAULT 0,
	"last_verification_attempt" timestamp,
	"fund_account_id" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "salon_owner_accounts_salon_id_unique" UNIQUE("salon_id")
);
--> statement-breakpoint
CREATE TABLE "salon_owner_otps" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone" varchar(20) NOT NULL,
	"otp" varchar(6) NOT NULL,
	"type" varchar NOT NULL,
	"first_name" varchar,
	"last_name" varchar,
	"email" varchar,
	"is_verified" boolean DEFAULT false,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salon_products" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"name" varchar(100) NOT NULL,
	"brand" varchar(100),
	"category" varchar(50),
	"price" numeric(10, 2),
	"description" text,
	"image_url" varchar,
	"in_stock" boolean DEFAULT true,
	"stock_quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "salons" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" varchar NOT NULL,
	"brand_owner_id" varchar,
	"brand_name" varchar,
	"name" varchar(255) NOT NULL,
	"slug" varchar(300),
	"description" text,
	"phone" varchar(20),
	"address" text NOT NULL,
	"image_url" varchar,
	"promotional_video_url" varchar,
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"instagram_id" varchar(100),
	"facebook_id" varchar(100),
	"google_maps_link" text,
	"country" varchar(2) DEFAULT 'IN',
	"average_rating" numeric(3, 2) DEFAULT '0',
	"total_reviews" integer DEFAULT 0,
	"confirmation_amount" integer DEFAULT 300,
	"monthly_fee" integer DEFAULT 10000,
	"admin_revenue_share" integer DEFAULT 20,
	"shopkeeper_revenue_share" integer DEFAULT 80,
	"is_active" boolean DEFAULT true,
	"is_premium" boolean DEFAULT false,
	"verification_status" varchar DEFAULT 'pending',
	"verification_notes" text,
	"verified_at" timestamp,
	"verified_by" varchar,
	"rejected_at" timestamp,
	"rejected_by" varchar,
	"rejection_reason" text,
	"salon_type" varchar DEFAULT 'unisex',
	"queue_wait_time" integer,
	"queue_updated_at" timestamp,
	"queue_message" varchar(100),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "salons_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "sanwar_discount_cards" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"customer_name" varchar(255),
	"customer_email" varchar NOT NULL,
	"customer_phone" varchar(20) NOT NULL,
	"service_enjoyed" text,
	"discount_percentage" integer NOT NULL,
	"status" varchar DEFAULT 'active',
	"used_at" timestamp,
	"expires_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "schedule_templates" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"template_data" jsonb NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_by" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "service_categories" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"icon" varchar(50),
	"color" varchar(7) DEFAULT '#3B82F6',
	"order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"category_id" varchar,
	"name" varchar(255) NOT NULL,
	"description" text,
	"price" numeric(10, 2) NOT NULL,
	"duration" integer NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"sid" varchar PRIMARY KEY NOT NULL,
	"sess" jsonb NOT NULL,
	"expire" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "staff" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"name" varchar(255) NOT NULL,
	"role" varchar(100) NOT NULL,
	"photo_url" varchar,
	"phone" varchar(20),
	"email" varchar,
	"experience" varchar(50),
	"specialties" text[],
	"bio" text,
	"rating" numeric(3, 2) DEFAULT '0',
	"total_reviews" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"default_slot_duration" integer DEFAULT 30,
	"can_manage_schedule" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_holidays" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"staff_id" varchar NOT NULL,
	"date" varchar(10) NOT NULL,
	"reason" varchar(255),
	"is_approved" boolean DEFAULT false,
	"approved_by" varchar,
	"approved_at" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_job_offers" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar(255) NOT NULL,
	"salon_name" varchar(255) NOT NULL,
	"salon_city" varchar(100),
	"owner_phone" varchar(20),
	"professional_mobile" varchar(20) NOT NULL,
	"professional_name" varchar(255) NOT NULL,
	"role" varchar(100) NOT NULL,
	"message" text,
	"offered_salary" integer,
	"status" varchar(20) DEFAULT 'pending',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_otps" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone" varchar(20) NOT NULL,
	"otp" varchar(6) NOT NULL,
	"is_verified" boolean DEFAULT false,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_registrations" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"mobile" varchar(20) NOT NULL,
	"city" varchar(100) NOT NULL,
	"area" varchar(100) NOT NULL,
	"role" varchar(100) NOT NULL,
	"headline" varchar(255),
	"experience" integer DEFAULT 0,
	"gender" varchar(20),
	"comfortable_with" varchar(50),
	"currently_working" varchar(100),
	"skills" text[],
	"expected_salary" integer,
	"employment_type" varchar(20),
	"willing_to_relocate" boolean DEFAULT false,
	"bio" text,
	"profile_image_url" varchar,
	"portfolio_images" text[],
	"is_verified" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_services" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"staff_id" varchar NOT NULL,
	"service_id" varchar NOT NULL,
	"is_active" boolean DEFAULT true,
	"custom_price" numeric(10, 2),
	"estimated_duration" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_time_slots" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"staff_id" varchar NOT NULL,
	"salon_id" varchar NOT NULL,
	"date" varchar(10) NOT NULL,
	"start_time" varchar(5) NOT NULL,
	"end_time" varchar(5) NOT NULL,
	"is_available" boolean DEFAULT true,
	"is_break_time" boolean DEFAULT false,
	"slot_type" varchar DEFAULT 'regular',
	"compatible_services" text[],
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "staff_working_hours" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"staff_id" varchar NOT NULL,
	"day_of_week" integer NOT NULL,
	"is_available" boolean DEFAULT true,
	"shift1_start_time" varchar(5),
	"shift1_end_time" varchar(5),
	"shift2_start_time" varchar(5),
	"shift2_end_time" varchar(5),
	"break_start_time" varchar(5),
	"break_end_time" varchar(5),
	"break_duration" integer DEFAULT 30,
	"slot_duration" integer DEFAULT 30,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "time_slots" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"staff_id" varchar,
	"date" varchar(10) NOT NULL,
	"start_time" varchar(5) NOT NULL,
	"end_time" varchar(5) NOT NULL,
	"is_available" boolean DEFAULT true,
	"service_id" varchar,
	"slot_type" varchar DEFAULT 'regular',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "upcoming_feature_videos" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"video_url" varchar NOT NULL,
	"thumbnail_url" varchar,
	"order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_by" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar,
	"password" varchar,
	"first_name" varchar NOT NULL,
	"last_name" varchar,
	"phone" varchar(20),
	"profile_image_url" varchar,
	"user_type" varchar DEFAULT 'customer' NOT NULL,
	"role" varchar DEFAULT 'user',
	"is_blocked" boolean DEFAULT false,
	"is_social_auth" boolean DEFAULT false,
	"social_provider" varchar,
	"social_id" varchar,
	"clerk_id" varchar,
	"brand_name" varchar,
	"brand_description" text,
	"is_brand_owner" boolean DEFAULT false,
	"is_active" boolean DEFAULT true,
	"is_verified" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
CREATE TABLE "verification_documents" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"document_type" varchar NOT NULL,
	"document_url" varchar NOT NULL,
	"document_name" varchar,
	"uploaded_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "wallet_transactions" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wallet_id" varchar NOT NULL,
	"type" varchar NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"description" text NOT NULL,
	"reference_id" varchar,
	"reference_type" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "wallets" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" varchar NOT NULL,
	"balance" numeric(10, 2) DEFAULT '0',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "wallets_customer_id_unique" UNIQUE("customer_id")
);
--> statement-breakpoint
CREATE TABLE "working_hours" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"salon_id" varchar NOT NULL,
	"day_of_week" integer NOT NULL,
	"is_open" boolean DEFAULT true,
	"open_time" varchar(5),
	"close_time" varchar(5),
	"break_start_time" varchar(5),
	"break_end_time" varchar(5)
);
--> statement-breakpoint
ALTER TABLE "admin_activity_logs" ADD CONSTRAINT "admin_activity_logs_admin_id_users_id_fk" FOREIGN KEY ("admin_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admin_settings" ADD CONSTRAINT "admin_settings_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_time_slot_id_time_slots_id_fk" FOREIGN KEY ("time_slot_id") REFERENCES "public"."time_slots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_emergency_approved_by_users_id_fk" FOREIGN KEY ("emergency_approved_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_invitations" ADD CONSTRAINT "brand_invitations_brand_owner_id_users_id_fk" FOREIGN KEY ("brand_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_invitations" ADD CONSTRAINT "brand_invitations_salon_owner_id_users_id_fk" FOREIGN KEY ("salon_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_invitations" ADD CONSTRAINT "brand_invitations_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_messages" ADD CONSTRAINT "brand_messages_brand_owner_id_users_id_fk" FOREIGN KEY ("brand_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_messages" ADD CONSTRAINT "brand_messages_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_messages" ADD CONSTRAINT "brand_messages_salon_owner_id_users_id_fk" FOREIGN KEY ("salon_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brand_offers" ADD CONSTRAINT "brand_offers_brand_owner_id_users_id_fk" FOREIGN KEY ("brand_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_moderations" ADD CONSTRAINT "content_moderations_reported_by_users_id_fk" FOREIGN KEY ("reported_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_moderations" ADD CONSTRAINT "content_moderations_moderated_by_users_id_fk" FOREIGN KEY ("moderated_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer_referral_campaigns" ADD CONSTRAINT "customer_referral_campaigns_referrer_id_users_id_fk" FOREIGN KEY ("referrer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer_showcase" ADD CONSTRAINT "customer_showcase_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer_showcase" ADD CONSTRAINT "customer_showcase_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_booking_waitlist" ADD CONSTRAINT "emergency_booking_waitlist_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_booking_waitlist" ADD CONSTRAINT "emergency_booking_waitlist_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_booking_waitlist" ADD CONSTRAINT "emergency_booking_waitlist_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_booking_waitlist" ADD CONSTRAINT "emergency_booking_waitlist_assigned_slot_id_time_slots_id_fk" FOREIGN KEY ("assigned_slot_id") REFERENCES "public"."time_slots"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_booking_waitlist" ADD CONSTRAINT "emergency_booking_waitlist_assigned_booking_id_bookings_id_fk" FOREIGN KEY ("assigned_booking_id") REFERENCES "public"."bookings"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_slots" ADD CONSTRAINT "emergency_slots_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_slots" ADD CONSTRAINT "emergency_slots_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_slots" ADD CONSTRAINT "emergency_slots_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_slots" ADD CONSTRAINT "emergency_slots_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs" ADD CONSTRAINT "faqs_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_responded_by_users_id_fk" FOREIGN KEY ("responded_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "free_booking_credits" ADD CONSTRAINT "free_booking_credits_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "free_booking_credits" ADD CONSTRAINT "free_booking_credits_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "help_ticket_messages" ADD CONSTRAINT "help_ticket_messages_ticket_id_help_tickets_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."help_tickets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "help_ticket_messages" ADD CONSTRAINT "help_ticket_messages_sender_id_users_id_fk" FOREIGN KEY ("sender_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "help_tickets" ADD CONSTRAINT "help_tickets_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "help_tickets" ADD CONSTRAINT "help_tickets_assigned_to_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notification_history" ADD CONSTRAINT "notification_history_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notification_history" ADD CONSTRAINT "notification_history_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notification_settings" ADD CONSTRAINT "notification_settings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "offer_usages" ADD CONSTRAINT "offer_usages_offer_id_brand_offers_id_fk" FOREIGN KEY ("offer_id") REFERENCES "public"."brand_offers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "offer_usages" ADD CONSTRAINT "offer_usages_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "offer_usages" ADD CONSTRAINT "offer_usages_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "offer_usages" ADD CONSTRAINT "offer_usages_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_time_slot_id_time_slots_id_fk" FOREIGN KEY ("time_slot_id") REFERENCES "public"."time_slots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_orders" ADD CONSTRAINT "payment_orders_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profile_visits" ADD CONSTRAINT "profile_visits_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profile_visits" ADD CONSTRAINT "profile_visits_visitor_id_users_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "push_subscriptions" ADD CONSTRAINT "push_subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "referral_milestones" ADD CONSTRAINT "referral_milestones_referrer_id_users_id_fk" FOREIGN KEY ("referrer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrer_id_users_id_fk" FOREIGN KEY ("referrer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referred_id_users_id_fk" FOREIGN KEY ("referred_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "revenue_shares" ADD CONSTRAINT "revenue_shares_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "review_replies" ADD CONSTRAINT "review_replies_review_id_reviews_id_fk" FOREIGN KEY ("review_id") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "review_replies" ADD CONSTRAINT "review_replies_salon_owner_id_users_id_fk" FOREIGN KEY ("salon_owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_chats" ADD CONSTRAINT "salon_chats_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_chats" ADD CONSTRAINT "salon_chats_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_emergency_config" ADD CONSTRAINT "salon_emergency_config_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_facilities" ADD CONSTRAINT "salon_facilities_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_followers" ADD CONSTRAINT "salon_followers_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_followers" ADD CONSTRAINT "salon_followers_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_gallery" ADD CONSTRAINT "salon_gallery_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_likes" ADD CONSTRAINT "salon_likes_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_likes" ADD CONSTRAINT "salon_likes_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_media" ADD CONSTRAINT "salon_media_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_offer_usage" ADD CONSTRAINT "salon_offer_usage_offer_id_salon_offers_id_fk" FOREIGN KEY ("offer_id") REFERENCES "public"."salon_offers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_offer_usage" ADD CONSTRAINT "salon_offer_usage_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_offer_usage" ADD CONSTRAINT "salon_offer_usage_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_offers" ADD CONSTRAINT "salon_offers_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_offers" ADD CONSTRAINT "salon_offers_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_owner_accounts" ADD CONSTRAINT "salon_owner_accounts_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salon_products" ADD CONSTRAINT "salon_products_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salons" ADD CONSTRAINT "salons_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salons" ADD CONSTRAINT "salons_brand_owner_id_users_id_fk" FOREIGN KEY ("brand_owner_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salons" ADD CONSTRAINT "salons_verified_by_users_id_fk" FOREIGN KEY ("verified_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "salons" ADD CONSTRAINT "salons_rejected_by_users_id_fk" FOREIGN KEY ("rejected_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sanwar_discount_cards" ADD CONSTRAINT "sanwar_discount_cards_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_templates" ADD CONSTRAINT "schedule_templates_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_templates" ADD CONSTRAINT "schedule_templates_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_categories" ADD CONSTRAINT "service_categories_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_category_id_service_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."service_categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff" ADD CONSTRAINT "staff_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_holidays" ADD CONSTRAINT "staff_holidays_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_holidays" ADD CONSTRAINT "staff_holidays_approved_by_users_id_fk" FOREIGN KEY ("approved_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_services" ADD CONSTRAINT "staff_services_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_services" ADD CONSTRAINT "staff_services_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_time_slots" ADD CONSTRAINT "staff_time_slots_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_time_slots" ADD CONSTRAINT "staff_time_slots_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "staff_working_hours" ADD CONSTRAINT "staff_working_hours_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "time_slots" ADD CONSTRAINT "time_slots_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "time_slots" ADD CONSTRAINT "time_slots_staff_id_staff_id_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "time_slots" ADD CONSTRAINT "time_slots_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "upcoming_feature_videos" ADD CONSTRAINT "upcoming_feature_videos_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verification_documents" ADD CONSTRAINT "verification_documents_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wallet_transactions" ADD CONSTRAINT "wallet_transactions_wallet_id_wallets_id_fk" FOREIGN KEY ("wallet_id") REFERENCES "public"."wallets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_customer_id_users_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "working_hours" ADD CONSTRAINT "working_hours_salon_id_salons_id_fk" FOREIGN KEY ("salon_id") REFERENCES "public"."salons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_platform_analytics_date" ON "platform_analytics" USING btree ("date");--> statement-breakpoint
CREATE INDEX "unique_customer_salon_like" ON "salon_likes" USING btree ("customer_id","salon_id");--> statement-breakpoint
CREATE INDEX "IDX_session_expire" ON "sessions" USING btree ("expire");