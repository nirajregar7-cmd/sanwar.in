import { createRequire as __cjsCreateRequire } from 'node:module';
import { fileURLToPath as __cjsFileURLToPath } from 'node:url';
import { dirname as __cjsDirname } from 'node:path';
const require = __cjsCreateRequire(import.meta.url);
const __filename = __cjsFileURLToPath(import.meta.url);
const __dirname = __cjsDirname(__filename);
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  MOOD_EMOJIS: () => MOOD_EMOJIS,
  adminActivityLogs: () => adminActivityLogs,
  adminSettings: () => adminSettings,
  bookings: () => bookings,
  bookingsRelations: () => bookingsRelations,
  brandInvitations: () => brandInvitations,
  brandMessages: () => brandMessages,
  brandOffers: () => brandOffers,
  brandOffersRelations: () => brandOffersRelations,
  contentModerations: () => contentModerations,
  customerReferralCampaigns: () => customerReferralCampaigns,
  customerShowcase: () => customerShowcase,
  emailVerificationOtps: () => emailVerificationOtps,
  emergencyBookingWaitlist: () => emergencyBookingWaitlist,
  emergencySlots: () => emergencySlots,
  faqs: () => faqs,
  feedback: () => feedback,
  feedbackRelations: () => feedbackRelations,
  freeBookingCredits: () => freeBookingCredits,
  getMoodFromRating: () => getMoodFromRating,
  getRatingFromMood: () => getRatingFromMood,
  helpTicketMessages: () => helpTicketMessages,
  helpTicketMessagesRelations: () => helpTicketMessagesRelations,
  helpTickets: () => helpTickets,
  helpTicketsRelations: () => helpTicketsRelations,
  insertAdminActivityLogSchema: () => insertAdminActivityLogSchema,
  insertAdminSettingSchema: () => insertAdminSettingSchema,
  insertBookingSchema: () => insertBookingSchema,
  insertBrandInvitationSchema: () => insertBrandInvitationSchema,
  insertBrandMessageSchema: () => insertBrandMessageSchema,
  insertBrandOfferSchema: () => insertBrandOfferSchema,
  insertContentModerationSchema: () => insertContentModerationSchema,
  insertCustomerReferralCampaignSchema: () => insertCustomerReferralCampaignSchema,
  insertCustomerShowcaseSchema: () => insertCustomerShowcaseSchema,
  insertEmailVerificationOtpSchema: () => insertEmailVerificationOtpSchema,
  insertEmergencySlotSchema: () => insertEmergencySlotSchema,
  insertEmergencyWaitlistSchema: () => insertEmergencyWaitlistSchema,
  insertFaqSchema: () => insertFaqSchema,
  insertFeedbackSchema: () => insertFeedbackSchema,
  insertFreeBookingCreditSchema: () => insertFreeBookingCreditSchema,
  insertHelpTicketMessageSchema: () => insertHelpTicketMessageSchema,
  insertHelpTicketSchema: () => insertHelpTicketSchema,
  insertOfferUsageSchema: () => insertOfferUsageSchema,
  insertPasswordResetOtpSchema: () => insertPasswordResetOtpSchema,
  insertPaymentOrderSchema: () => insertPaymentOrderSchema,
  insertPlatformAnalyticsSchema: () => insertPlatformAnalyticsSchema,
  insertProfileVisitSchema: () => insertProfileVisitSchema,
  insertReferralMilestoneSchema: () => insertReferralMilestoneSchema,
  insertReferralSchema: () => insertReferralSchema,
  insertReviewReplySchema: () => insertReviewReplySchema,
  insertReviewSchema: () => insertReviewSchema,
  insertSalonChatSchema: () => insertSalonChatSchema,
  insertSalonEmergencyConfigSchema: () => insertSalonEmergencyConfigSchema,
  insertSalonFacilitySchema: () => insertSalonFacilitySchema,
  insertSalonFollowerSchema: () => insertSalonFollowerSchema,
  insertSalonGallerySchema: () => insertSalonGallerySchema,
  insertSalonLikeSchema: () => insertSalonLikeSchema,
  insertSalonOfferSchema: () => insertSalonOfferSchema,
  insertSalonOfferUsageSchema: () => insertSalonOfferUsageSchema,
  insertSalonOwnerOtpSchema: () => insertSalonOwnerOtpSchema,
  insertSalonProductSchema: () => insertSalonProductSchema,
  insertSalonSchema: () => insertSalonSchema,
  insertSanwarDiscountCardSchema: () => insertSanwarDiscountCardSchema,
  insertServiceCategorySchema: () => insertServiceCategorySchema,
  insertServiceSchema: () => insertServiceSchema,
  insertStaffJobOfferSchema: () => insertStaffJobOfferSchema,
  insertStaffOtpSchema: () => insertStaffOtpSchema,
  insertStaffRegistrationSchema: () => insertStaffRegistrationSchema,
  insertStaffSchema: () => insertStaffSchema,
  insertTimeSlotSchema: () => insertTimeSlotSchema,
  insertUpcomingFeatureVideoSchema: () => insertUpcomingFeatureVideoSchema,
  insertUserSchema: () => insertUserSchema,
  insertVerificationDocumentSchema: () => insertVerificationDocumentSchema,
  insertWalkInBookingSchema: () => insertWalkInBookingSchema,
  insertWalletSchema: () => insertWalletSchema,
  insertWalletTransactionSchema: () => insertWalletTransactionSchema,
  insertWorkingHoursSchema: () => insertWorkingHoursSchema,
  notificationHistory: () => notificationHistory,
  notificationSettings: () => notificationSettings,
  offerUsages: () => offerUsages,
  offerUsagesRelations: () => offerUsagesRelations,
  passwordResetOtps: () => passwordResetOtps,
  paymentOrders: () => paymentOrders,
  platformAnalytics: () => platformAnalytics,
  platformStats: () => platformStats,
  profileVisits: () => profileVisits,
  profileVisitsRelations: () => profileVisitsRelations,
  pushSubscriptions: () => pushSubscriptions,
  referralMilestones: () => referralMilestones,
  referralMilestonesRelations: () => referralMilestonesRelations,
  referrals: () => referrals,
  referralsRelations: () => referralsRelations,
  revenueShares: () => revenueShares,
  revenueSharesRelations: () => revenueSharesRelations,
  reviewReplies: () => reviewReplies,
  reviewRepliesRelations: () => reviewRepliesRelations,
  reviews: () => reviews,
  reviewsRelations: () => reviewsRelations,
  salonChats: () => salonChats,
  salonEmergencyConfig: () => salonEmergencyConfig,
  salonFacilities: () => salonFacilities,
  salonFollowers: () => salonFollowers,
  salonGallery: () => salonGallery,
  salonGalleryRelations: () => salonGalleryRelations,
  salonLikes: () => salonLikes,
  salonLikesRelations: () => salonLikesRelations,
  salonMedia: () => salonMedia,
  salonOfferUsage: () => salonOfferUsage,
  salonOfferUsageRelations: () => salonOfferUsageRelations,
  salonOffers: () => salonOffers,
  salonOffersRelations: () => salonOffersRelations,
  salonOwnerAccounts: () => salonOwnerAccounts,
  salonOwnerAccountsRelations: () => salonOwnerAccountsRelations,
  salonOwnerOtps: () => salonOwnerOtps,
  salonProducts: () => salonProducts,
  salons: () => salons,
  salonsRelations: () => salonsRelations,
  sanwarDiscountCards: () => sanwarDiscountCards,
  scheduleTemplates: () => scheduleTemplates,
  scheduleTemplatesRelations: () => scheduleTemplatesRelations,
  serviceCategories: () => serviceCategories,
  services: () => services,
  servicesRelations: () => servicesRelations,
  sessions: () => sessions,
  staff: () => staff,
  staffHolidays: () => staffHolidays,
  staffHolidaysRelations: () => staffHolidaysRelations,
  staffJobOffers: () => staffJobOffers,
  staffOtps: () => staffOtps,
  staffRegistrations: () => staffRegistrations,
  staffRelations: () => staffRelations,
  staffServices: () => staffServices,
  staffServicesRelations: () => staffServicesRelations,
  staffTimeSlots: () => staffTimeSlots,
  staffTimeSlotsRelations: () => staffTimeSlotsRelations,
  staffWorkingHours: () => staffWorkingHours,
  staffWorkingHoursRelations: () => staffWorkingHoursRelations,
  timeSlots: () => timeSlots,
  timeSlotsRelations: () => timeSlotsRelations,
  upcomingFeatureVideos: () => upcomingFeatureVideos,
  upsertUserSchema: () => upsertUserSchema,
  users: () => users,
  usersRelations: () => usersRelations,
  verificationDocuments: () => verificationDocuments,
  walletTransactions: () => walletTransactions,
  walletTransactionsRelations: () => walletTransactionsRelations,
  wallets: () => wallets,
  walletsRelations: () => walletsRelations,
  workingHours: () => workingHours,
  workingHoursRelations: () => workingHoursRelations
});
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  decimal,
  integer,
  boolean
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { nanoid } from "nanoid";
function getMoodFromRating(rating) {
  if (rating >= 5) return "very_happy";
  if (rating >= 4) return "happy";
  if (rating >= 3) return "neutral";
  if (rating >= 2) return "sad";
  return "very_sad";
}
function getRatingFromMood(mood) {
  const moodToRating = {
    very_happy: 5,
    happy: 4,
    neutral: 3,
    sad: 2,
    very_sad: 1
  };
  return moodToRating[mood];
}
var sessions, users, salonOwnerOtps, staffOtps, salons, serviceCategories, services, paymentOrders, workingHours, timeSlots, bookings, reviews, reviewReplies, staff, staffWorkingHours, staffServices, staffHolidays, staffTimeSlots, scheduleTemplates, salonGallery, salonMedia, salonFacilities, salonProducts, platformStats, salonOffers, salonOfferUsage, passwordResetOtps, emailVerificationOtps, notificationSettings, pushSubscriptions, notificationHistory, salonOwnerAccounts, revenueShares, wallets, walletTransactions, referrals, customerReferralCampaigns, profileVisits, customerShowcase, freeBookingCredits, feedback, helpTickets, helpTicketMessages, referralMilestones, salonLikes, brandOffers, offerUsages, emergencyBookingWaitlist, salonEmergencyConfig, emergencySlots, usersRelations, salonsRelations, salonOwnerAccountsRelations, revenueSharesRelations, servicesRelations, workingHoursRelations, timeSlotsRelations, bookingsRelations, reviewsRelations, reviewRepliesRelations, staffRelations, staffWorkingHoursRelations, staffServicesRelations, staffHolidaysRelations, staffTimeSlotsRelations, scheduleTemplatesRelations, walletsRelations, walletTransactionsRelations, referralsRelations, referralMilestonesRelations, salonGalleryRelations, salonLikesRelations, brandOffersRelations, offerUsagesRelations, feedbackRelations, helpTicketsRelations, helpTicketMessagesRelations, salonOffersRelations, salonOfferUsageRelations, profileVisitsRelations, insertUserSchema, upsertUserSchema, insertSalonSchema, insertServiceCategorySchema, insertServiceSchema, insertStaffSchema, insertWorkingHoursSchema, insertTimeSlotSchema, insertBookingSchema, insertWalkInBookingSchema, insertSalonOfferSchema, insertSalonOfferUsageSchema, insertReviewSchema, insertReviewReplySchema, insertWalletSchema, insertWalletTransactionSchema, insertReferralSchema, insertReferralMilestoneSchema, insertSalonGallerySchema, insertCustomerShowcaseSchema, insertSalonFacilitySchema, insertSalonProductSchema, insertCustomerReferralCampaignSchema, insertFreeBookingCreditSchema, insertSalonLikeSchema, insertPasswordResetOtpSchema, insertEmailVerificationOtpSchema, insertFeedbackSchema, insertHelpTicketSchema, insertHelpTicketMessageSchema, insertBrandOfferSchema, insertOfferUsageSchema, insertEmergencyWaitlistSchema, insertSalonEmergencyConfigSchema, insertEmergencySlotSchema, MOOD_EMOJIS, verificationDocuments, adminActivityLogs, contentModerations, platformAnalytics, brandInvitations, brandMessages, insertVerificationDocumentSchema, insertAdminActivityLogSchema, insertContentModerationSchema, insertPlatformAnalyticsSchema, insertBrandInvitationSchema, insertBrandMessageSchema, insertProfileVisitSchema, insertSalonOwnerOtpSchema, insertStaffOtpSchema, insertPaymentOrderSchema, faqs, insertFaqSchema, sanwarDiscountCards, insertSanwarDiscountCardSchema, adminSettings, insertAdminSettingSchema, upcomingFeatureVideos, insertUpcomingFeatureVideoSchema, salonChats, insertSalonChatSchema, salonFollowers, insertSalonFollowerSchema, staffRegistrations, insertStaffRegistrationSchema, staffJobOffers, insertStaffJobOfferSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    sessions = pgTable(
      "sessions",
      {
        sid: varchar("sid").primaryKey(),
        sess: jsonb("sess").notNull(),
        expire: timestamp("expire").notNull()
      },
      (table) => [index("IDX_session_expire").on(table.expire)]
    );
    users = pgTable("users", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      email: varchar("email").unique(),
      password: varchar("password"),
      // For email/password auth (null for social auth)
      firstName: varchar("first_name").notNull(),
      lastName: varchar("last_name"),
      phone: varchar("phone", { length: 20 }),
      profileImageUrl: varchar("profile_image_url"),
      userType: varchar("user_type", { enum: ["customer", "salon_owner", "brand_owner", "admin", "super_admin"] }).notNull().default("customer"),
      role: varchar("role").default("user"),
      // Added role field for backward compatibility
      isBlocked: boolean("is_blocked").default(false),
      // Social authentication fields
      isSocialAuth: boolean("is_social_auth").default(false),
      socialProvider: varchar("social_provider", { enum: ["google", "facebook"] }),
      socialId: varchar("social_id"),
      // Brand owner fields
      brandName: varchar("brand_name"),
      brandDescription: text("brand_description"),
      isBrandOwner: boolean("is_brand_owner").default(false),
      isActive: boolean("is_active").default(true),
      isVerified: boolean("is_verified").default(false),
      // Plan & trial fields (for salon_owner accounts)
      planType: varchar("plan_type", { enum: ["trial", "starter", "growth", "premium"] }).default("trial"),
      trialStartedAt: timestamp("trial_started_at"),
      trialEndsAt: timestamp("trial_ends_at"),
      planStartedAt: timestamp("plan_started_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonOwnerOtps = pgTable("salon_owner_otps", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      phone: varchar("phone", { length: 20 }).notNull(),
      otp: varchar("otp", { length: 6 }).notNull(),
      type: varchar("type", { enum: ["registration", "login"] }).notNull(),
      firstName: varchar("first_name"),
      // For registration flow
      lastName: varchar("last_name"),
      // For registration flow
      email: varchar("email"),
      // For registration flow
      isVerified: boolean("is_verified").default(false),
      expiresAt: timestamp("expires_at").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    staffOtps = pgTable("staff_otps", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      phone: varchar("phone", { length: 20 }).notNull(),
      otp: varchar("otp", { length: 6 }).notNull(),
      isVerified: boolean("is_verified").default(false),
      expiresAt: timestamp("expires_at").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    salons = pgTable("salons", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      ownerId: varchar("owner_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      brandOwnerId: varchar("brand_owner_id").references(() => users.id, { onDelete: "set null" }),
      brandName: varchar("brand_name"),
      name: varchar("name", { length: 255 }).notNull(),
      slug: varchar("slug", { length: 300 }).unique(),
      // URL-friendly slug e.g. "my-salon-name"
      description: text("description"),
      phone: varchar("phone", { length: 20 }),
      address: text("address").notNull(),
      imageUrl: varchar("image_url"),
      promotionalVideoUrl: varchar("promotional_video_url"),
      // URL for salon promotional/tour video
      // Location fields for map integration
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      // Social media fields
      instagramId: varchar("instagram_id", { length: 100 }),
      // Instagram handle without @ symbol
      facebookId: varchar("facebook_id", { length: 100 }),
      // Facebook page handle or ID
      // Google Maps link for customer navigation
      googleMapsLink: text("google_maps_link"),
      // Full Google Maps URL for directions
      // Country field for global filtering
      country: varchar("country", { length: 2 }).default("IN"),
      // ISO country code (IN, US, GB, etc.)
      // Rating fields
      averageRating: decimal("average_rating", { precision: 3, scale: 2 }).default("0"),
      totalReviews: integer("total_reviews").default(0),
      // Business settings
      confirmationAmount: integer("confirmation_amount").default(300),
      // in paise (₹3 = 300 paise) - shopkeeper can modify
      monthlyFee: integer("monthly_fee").default(1e4),
      // ₹100 in paise
      // Revenue split settings
      adminRevenueShare: integer("admin_revenue_share").default(20),
      // 20% goes to admin
      shopkeeperRevenueShare: integer("shopkeeper_revenue_share").default(80),
      // 80% goes to shopkeeper
      isActive: boolean("is_active").default(true),
      isPremium: boolean("is_premium").default(false),
      // for premium features
      verificationStatus: varchar("verification_status", { enum: ["pending", "approved", "rejected"] }).default("pending"),
      verificationNotes: text("verification_notes"),
      verifiedAt: timestamp("verified_at"),
      verifiedBy: varchar("verified_by").references(() => users.id),
      // Admin rejection tracking
      rejectedAt: timestamp("rejected_at"),
      rejectedBy: varchar("rejected_by").references(() => users.id),
      rejectionReason: text("rejection_reason"),
      // Salon type for filtering
      salonType: varchar("salon_type", { enum: ["unisex", "male", "female"] }).default("unisex"),
      // Queue management for walk-in customers
      queueWaitTime: integer("queue_wait_time"),
      // Wait time in minutes (5, 10, 15, 20, 30, etc.)
      queueUpdatedAt: timestamp("queue_updated_at"),
      // When the queue was last updated
      queueMessage: varchar("queue_message", { length: 100 }),
      // Optional custom message like "Shop is busy"
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    serviceCategories = pgTable("service_categories", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      name: varchar("name", { length: 100 }).notNull(),
      description: text("description"),
      icon: varchar("icon", { length: 50 }),
      // Icon name for UI display
      color: varchar("color", { length: 7 }).default("#3B82F6"),
      // Hex color code for category styling
      order: integer("order").default(0),
      // For custom ordering of categories
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    services = pgTable("services", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      categoryId: varchar("category_id").references(() => serviceCategories.id, { onDelete: "set null" }),
      name: varchar("name", { length: 255 }).notNull(),
      description: text("description"),
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      duration: integer("duration").notNull(),
      // in minutes
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    paymentOrders = pgTable("payment_orders", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      orderId: varchar("order_id").notNull().unique(),
      // Cashfree order ID
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      serviceId: varchar("service_id").references(() => services.id, { onDelete: "cascade" }).notNull(),
      additionalServices: jsonb("additional_services"),
      // Array of additional service IDs
      timeSlotId: varchar("time_slot_id").references(() => timeSlots.id, { onDelete: "cascade" }).notNull(),
      date: varchar("date", { length: 10 }).notNull(),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "set null" }),
      notes: text("notes"),
      referralCodeData: jsonb("referral_code_data"),
      // Referral code information
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      // Including additional services
      confirmationAmount: integer("confirmation_amount").notNull(),
      // Amount paid online
      paymentStatus: varchar("payment_status", { enum: ["pending", "completed", "failed", "cancelled"] }).default("pending"),
      isProcessed: boolean("is_processed").default(false),
      // Whether booking was created
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    workingHours = pgTable("working_hours", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      dayOfWeek: integer("day_of_week").notNull(),
      // 0 = Sunday, 1 = Monday, etc.
      isOpen: boolean("is_open").default(true),
      openTime: varchar("open_time", { length: 5 }),
      // HH:MM format
      closeTime: varchar("close_time", { length: 5 }),
      // HH:MM format
      breakStartTime: varchar("break_start_time", { length: 5 }),
      breakEndTime: varchar("break_end_time", { length: 5 })
    });
    timeSlots = pgTable("time_slots", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "set null" }),
      // Added staff assignment
      date: varchar("date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      startTime: varchar("start_time", { length: 5 }).notNull(),
      // HH:MM format
      endTime: varchar("end_time", { length: 5 }).notNull(),
      // HH:MM format
      isAvailable: boolean("is_available").default(true),
      // Enhanced fields for smart scheduling
      serviceId: varchar("service_id").references(() => services.id, { onDelete: "set null" }),
      // Pre-assigned service
      slotType: varchar("slot_type", { enum: ["regular", "break", "blocked"] }).default("regular"),
      createdAt: timestamp("created_at").defaultNow()
    });
    bookings = pgTable("bookings", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      serviceId: varchar("service_id").references(() => services.id, { onDelete: "cascade" }).notNull(),
      timeSlotId: varchar("time_slot_id").references(() => timeSlots.id, { onDelete: "cascade" }),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "set null" }),
      date: varchar("date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      startTime: varchar("start_time", { length: 5 }).notNull(),
      // HH:MM format
      endTime: varchar("end_time", { length: 5 }).notNull(),
      // HH:MM format
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      confirmationAmount: decimal("confirmation_amount", { precision: 10, scale: 2 }).default("0"),
      referralCode: varchar("referral_code", { length: 50 }),
      status: varchar("status", { enum: ["pending", "confirmed", "completed", "cancelled", "no_show", "owner_suggested"] }).default("pending"),
      suggestedDate: varchar("suggested_date", { length: 10 }),
      suggestedTime: varchar("suggested_time", { length: 5 }),
      ownerNote: text("owner_note"),
      paymentId: varchar("payment_id"),
      paymentStatus: varchar("payment_status", { enum: ["pending", "completed", "failed"] }).default("pending"),
      // Walk-in booking fields
      isWalkIn: boolean("is_walk_in").default(false),
      walkInPaymentMethod: varchar("walk_in_payment_method", { enum: ["cash", "card", "upi", "online"] }),
      walkInCustomerName: varchar("walk_in_customer_name"),
      // For walk-ins without user accounts
      walkInCustomerPhone: varchar("walk_in_customer_phone"),
      // For walk-ins without user accounts
      notes: text("notes"),
      // General notes for any booking type
      // Emergency booking fields
      isEmergencyBooking: boolean("is_emergency_booking").default(false),
      emergencyChargeAmount: decimal("emergency_charge_amount", { precision: 10, scale: 2 }).default("0"),
      emergencyReason: text("emergency_reason"),
      emergencyApprovedBy: varchar("emergency_approved_by").references(() => users.id),
      emergencyApprovedAt: timestamp("emergency_approved_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    reviews = pgTable("reviews", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "cascade" }),
      rating: integer("rating").notNull(),
      // 1-5
      moodRating: varchar("mood_rating", { enum: ["very_happy", "happy", "neutral", "sad", "very_sad"] }),
      // emoji mood rating
      comment: text("comment"),
      photos: text("photos").array(),
      // Array of photo URLs
      createdAt: timestamp("created_at").defaultNow()
    });
    reviewReplies = pgTable("review_replies", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      reviewId: varchar("review_id").references(() => reviews.id, { onDelete: "cascade" }).notNull(),
      salonOwnerId: varchar("salon_owner_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      replyText: text("reply_text").notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    staff = pgTable("staff", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      name: varchar("name", { length: 255 }).notNull(),
      role: varchar("role", { length: 100 }).notNull(),
      photoUrl: varchar("photo_url"),
      phone: varchar("phone", { length: 20 }),
      email: varchar("email"),
      experience: varchar("experience", { length: 50 }),
      // e.g., "5+ years", "2 years", "Senior Stylist"
      specialties: text("specialties").array(),
      // Array of specialties like ["Hair Cutting", "Coloring", "Styling"]
      bio: text("bio"),
      // Short bio/description about the staff member
      rating: decimal("rating", { precision: 3, scale: 2 }).default("0"),
      totalReviews: integer("total_reviews").default(0),
      isActive: boolean("is_active").default(true),
      // New fields for smart scheduling
      defaultSlotDuration: integer("default_slot_duration").default(30),
      // in minutes (15, 20, 30, etc.)
      canManageSchedule: boolean("can_manage_schedule").default(false),
      // Allow staff to manage their own schedule
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    staffWorkingHours = pgTable("staff_working_hours", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "cascade" }).notNull(),
      dayOfWeek: integer("day_of_week").notNull(),
      // 0 = Sunday, 1 = Monday, etc.
      isAvailable: boolean("is_available").default(true),
      // First shift timings
      shift1StartTime: varchar("shift1_start_time", { length: 5 }),
      // HH:MM format
      shift1EndTime: varchar("shift1_end_time", { length: 5 }),
      // HH:MM format
      // Second shift timings (optional for split shifts)
      shift2StartTime: varchar("shift2_start_time", { length: 5 }),
      shift2EndTime: varchar("shift2_end_time", { length: 5 }),
      // Break timings
      breakStartTime: varchar("break_start_time", { length: 5 }),
      breakEndTime: varchar("break_end_time", { length: 5 }),
      breakDuration: integer("break_duration").default(30),
      // in minutes
      // Slot configuration
      slotDuration: integer("slot_duration").default(30),
      // Individual slot duration in minutes
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    staffServices = pgTable("staff_services", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "cascade" }).notNull(),
      serviceId: varchar("service_id").references(() => services.id, { onDelete: "cascade" }).notNull(),
      isActive: boolean("is_active").default(true),
      // Service-specific settings for this staff member
      customPrice: decimal("custom_price", { precision: 10, scale: 2 }),
      // Optional custom price
      estimatedDuration: integer("estimated_duration"),
      // Staff-specific duration override
      createdAt: timestamp("created_at").defaultNow()
    });
    staffHolidays = pgTable("staff_holidays", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "cascade" }).notNull(),
      date: varchar("date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      reason: varchar("reason", { length: 255 }),
      // Holiday, sick leave, personal, etc.
      isApproved: boolean("is_approved").default(false),
      approvedBy: varchar("approved_by").references(() => users.id),
      approvedAt: timestamp("approved_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    staffTimeSlots = pgTable("staff_time_slots", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      staffId: varchar("staff_id").references(() => staff.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      date: varchar("date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      startTime: varchar("start_time", { length: 5 }).notNull(),
      // HH:MM format
      endTime: varchar("end_time", { length: 5 }).notNull(),
      // HH:MM format
      isAvailable: boolean("is_available").default(true),
      isBreakTime: boolean("is_break_time").default(false),
      slotType: varchar("slot_type", { enum: ["regular", "break", "blocked"] }).default("regular"),
      // Service compatibility
      compatibleServices: text("compatible_services").array(),
      // Array of service IDs this slot can accommodate
      createdAt: timestamp("created_at").defaultNow()
    });
    scheduleTemplates = pgTable("schedule_templates", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      name: varchar("name", { length: 255 }).notNull(),
      // e.g., "Standard Week", "Holiday Hours"
      description: text("description"),
      templateData: jsonb("template_data").notNull(),
      // JSON structure with staff schedules
      isActive: boolean("is_active").default(true),
      createdBy: varchar("created_by").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    salonGallery = pgTable("salon_gallery", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      imageUrl: varchar("image_url").notNull(),
      title: varchar("title", { length: 255 }),
      description: text("description"),
      category: varchar("category", { length: 100 }),
      // e.g., "work", "staff", "interior"
      order: integer("order").default(0),
      // for ordering images
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow()
    });
    salonMedia = pgTable("salon_media", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      fileUrl: varchar("file_url").notNull(),
      fileName: varchar("file_name", { length: 255 }),
      fileType: varchar("file_type", { enum: ["image", "video"] }).notNull(),
      mimeType: varchar("mime_type", { length: 100 }),
      // e.g., "image/jpeg", "video/mp4"
      fileSize: integer("file_size"),
      // in bytes
      title: varchar("title", { length: 255 }),
      description: text("description"),
      category: varchar("category", { length: 100 }),
      // e.g., "work", "staff", "interior", "services", "before_after"
      tags: text("tags").array(),
      // searchable tags
      order: integer("order").default(0),
      // for ordering media
      isActive: boolean("is_active").default(true),
      isPrimary: boolean("is_primary").default(false),
      // primary image for salon card
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonFacilities = pgTable("salon_facilities", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      name: varchar("name", { length: 100 }).notNull(),
      icon: varchar("icon", { length: 50 }),
      // Icon name or emoji
      description: text("description"),
      isAvailable: boolean("is_available").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonProducts = pgTable("salon_products", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      name: varchar("name", { length: 100 }).notNull(),
      brand: varchar("brand", { length: 100 }),
      category: varchar("category", { length: 50 }),
      // hair_care, skin_care, tools, etc.
      price: decimal("price", { precision: 10, scale: 2 }),
      description: text("description"),
      imageUrl: varchar("image_url"),
      inStock: boolean("in_stock").default(true),
      stockQuantity: integer("stock_quantity").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    platformStats = pgTable("platform_stats", {
      id: varchar("id").primaryKey().default("stats"),
      totalCustomers: integer("total_customers").default(0),
      totalSalons: integer("total_salons").default(0),
      totalBookings: integer("total_bookings").default(0),
      totalServices: integer("total_services").default(0),
      lastUpdated: timestamp("last_updated").defaultNow()
    });
    salonOffers = pgTable("salon_offers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title", { length: 255 }).notNull(),
      description: text("description").notNull(),
      discountType: varchar("discount_type", { enum: ["percentage", "fixed_amount"] }).notNull(),
      discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
      minOrderAmount: decimal("min_order_amount", { precision: 10, scale: 2 }).default("0"),
      maxDiscountAmount: decimal("max_discount_amount", { precision: 10, scale: 2 }),
      // Validity period
      validFrom: timestamp("valid_from").notNull(),
      validUntil: timestamp("valid_until").notNull(),
      // Usage limits
      maxUsagePerCustomer: integer("max_usage_per_customer").default(1),
      maxTotalUsage: integer("max_total_usage"),
      currentUsageCount: integer("current_usage_count").default(0),
      // Service targeting
      applicableServices: text("applicable_services").array(),
      // Array of service IDs
      isApplicableToAllServices: boolean("is_applicable_to_all_services").default(true),
      // Service-specific discounts (JSON object mapping serviceId to discount percentage)
      serviceSpecificDiscounts: text("service_specific_discounts"),
      // JSON: {"serviceId": "10", "serviceId2": "15"}
      // Offer settings
      isActive: boolean("is_active").default(true),
      isVisible: boolean("is_visible").default(true),
      // Show on customer dashboard
      priority: integer("priority").default(0),
      // Higher priority shows first
      // Promo code
      promoCode: varchar("promo_code", { length: 50 }),
      isPromoCodeRequired: boolean("is_promo_code_required").default(false),
      // Tracking
      createdBy: varchar("created_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonOfferUsage = pgTable("salon_offer_usage", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      offerId: varchar("offer_id").references(() => salonOffers.id, { onDelete: "cascade" }).notNull(),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "cascade" }),
      discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }).notNull(),
      originalAmount: decimal("original_amount", { precision: 10, scale: 2 }).notNull(),
      finalAmount: decimal("final_amount", { precision: 10, scale: 2 }).notNull(),
      promoCodeUsed: varchar("promo_code_used", { length: 50 }),
      usedAt: timestamp("used_at").defaultNow()
    });
    passwordResetOtps = pgTable("password_reset_otps", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      phone: varchar("phone", { length: 20 }).notNull(),
      email: varchar("email").notNull(),
      otp: varchar("otp", { length: 6 }).notNull(),
      isUsed: boolean("is_used").default(false),
      expiresAt: timestamp("expires_at").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    emailVerificationOtps = pgTable("email_verification_otps", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      email: varchar("email").notNull(),
      otp: varchar("otp", { length: 6 }).notNull(),
      userType: varchar("user_type", { enum: ["salon_owner", "brand_owner"] }).notNull(),
      expiresAt: timestamp("expires_at").notNull(),
      verified: boolean("verified").default(false),
      attempts: integer("attempts").default(0),
      createdAt: timestamp("created_at").defaultNow()
    });
    notificationSettings = pgTable("notification_settings", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull().unique(),
      bookingConfirmation: boolean("booking_confirmation").default(true),
      bookingReminder: boolean("booking_reminder").default(true),
      dayBeforeReminder: boolean("day_before_reminder").default(true),
      hourBeforeReminder: boolean("hour_before_reminder").default(true),
      promotionalNotifications: boolean("promotional_notifications").default(false),
      emailNotifications: boolean("email_notifications").default(true),
      smsNotifications: boolean("sms_notifications").default(false),
      webPushNotifications: boolean("web_push_notifications").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    pushSubscriptions = pgTable("push_subscriptions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      endpoint: text("endpoint").notNull(),
      p256dhKey: text("p256dh_key").notNull(),
      authKey: text("auth_key").notNull(),
      userAgent: text("user_agent"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow()
    });
    notificationHistory = pgTable("notification_history", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      type: varchar("type", {
        enum: ["booking_confirmation", "booking_reminder", "day_before_reminder", "hour_before_reminder", "promotional", "booking_request", "booking_accepted", "booking_rejected", "booking_rescheduled", "booking_auto_cancelled", "appointment_reminder", "re_engagement"]
      }).notNull(),
      title: varchar("title", { length: 255 }).notNull(),
      message: text("message").notNull(),
      channel: varchar("channel", { enum: ["web_push", "email", "sms", "in_app"] }).notNull(),
      status: varchar("status", { enum: ["sent", "delivered", "failed", "pending"] }).default("pending"),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "set null" }),
      sentAt: timestamp("sent_at").defaultNow(),
      deliveredAt: timestamp("delivered_at"),
      failureReason: text("failure_reason"),
      isRead: boolean("is_read").default(false),
      actionUrl: varchar("action_url", { length: 500 })
    });
    salonOwnerAccounts = pgTable("salon_owner_accounts", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull().unique(),
      bankName: varchar("bank_name").notNull(),
      accountHolderName: varchar("account_holder_name").notNull(),
      accountNumber: varchar("account_number").notNull(),
      ifscCode: varchar("ifsc_code").notNull(),
      branch: varchar("branch"),
      upiId: varchar("upi_id"),
      isVerified: boolean("is_verified").default(false),
      // Enhanced verification fields
      verificationStatus: varchar("verification_status", { enum: ["pending", "verified", "failed"] }).default("pending"),
      verificationMessage: text("verification_message"),
      verifiedAccountHolderName: varchar("verified_account_holder_name"),
      // Name from bank records
      verifiedAt: timestamp("verified_at"),
      verificationAttempts: integer("verification_attempts").default(0),
      lastVerificationAttempt: timestamp("last_verification_attempt"),
      // Razorpay fund account ID for automatic payouts
      fundAccountId: varchar("fund_account_id"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    revenueShares = pgTable("revenue_shares", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "cascade" }).notNull(),
      confirmationAmount: decimal("confirmation_amount", { precision: 10, scale: 2 }).notNull(),
      platformShare: decimal("platform_share", { precision: 10, scale: 2 }).notNull(),
      // 45%
      salonShare: decimal("salon_share", { precision: 10, scale: 2 }).notNull(),
      // 55%
      transferStatus: varchar("transfer_status", { enum: ["pending", "completed", "failed"] }).default("pending"),
      transferDate: timestamp("transfer_date"),
      transferReference: varchar("transfer_reference"),
      createdAt: timestamp("created_at").defaultNow()
    });
    wallets = pgTable("wallets", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull().unique(),
      balance: decimal("balance", { precision: 10, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    walletTransactions = pgTable("wallet_transactions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      walletId: varchar("wallet_id").references(() => wallets.id, { onDelete: "cascade" }).notNull(),
      type: varchar("type", { enum: ["credit", "debit"] }).notNull(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description").notNull(),
      referenceId: varchar("reference_id"),
      // booking_id, referral_id, etc.
      referenceType: varchar("reference_type", { enum: ["booking", "referral", "admin", "showcase"] }),
      createdAt: timestamp("created_at").defaultNow()
    });
    referrals = pgTable("referrals", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      referrerId: varchar("referrer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      referredId: varchar("referred_id").references(() => users.id, { onDelete: "cascade" }),
      referralCode: varchar("referral_code", { length: 10 }).notNull().unique(),
      referralType: varchar("referral_type", { enum: ["customer_to_shopkeeper", "customer_to_customer", "shopkeeper_milestone"] }).default("customer_to_customer"),
      status: varchar("status", { enum: ["pending", "completed", "expired"] }).default("pending"),
      rewardAmount: decimal("reward_amount", { precision: 10, scale: 2 }).default("50"),
      // ₹50 default
      isRewardClaimed: boolean("is_reward_claimed").default(false),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "set null" }),
      // Track which booking completed the referral
      createdAt: timestamp("created_at").defaultNow(),
      completedAt: timestamp("completed_at")
    });
    customerReferralCampaigns = pgTable("customer_referral_campaigns", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      referrerId: varchar("referrer_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      campaignType: varchar("campaign_type").notNull().default("5_customer_free_booking"),
      targetCount: integer("target_count").notNull().default(5),
      currentCount: integer("current_count").notNull().default(0),
      isCompleted: boolean("is_completed").notNull().default(false),
      completedReferralIds: text("completed_referral_ids").array().default([]),
      freeBookingCredits: integer("free_booking_credits").notNull().default(0),
      creditsUsed: integer("credits_used").notNull().default(0),
      createdAt: timestamp("created_at").defaultNow(),
      completedAt: timestamp("completed_at"),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    profileVisits = pgTable("profile_visits", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      visitorId: varchar("visitor_id").references(() => users.id, { onDelete: "set null" }),
      // null for anonymous visitors
      visitorType: varchar("visitor_type", { enum: ["customer", "anonymous"] }).default("anonymous"),
      ipAddress: varchar("ip_address"),
      userAgent: text("user_agent"),
      referrer: text("referrer"),
      visitDuration: integer("visit_duration"),
      // in seconds, can be updated when user leaves
      pageViewed: varchar("page_viewed").default("profile"),
      // profile, services, reviews, etc.
      createdAt: timestamp("created_at").defaultNow()
    });
    customerShowcase = pgTable("customer_showcase", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      customerName: varchar("customer_name", { length: 100 }),
      // Display name
      photoUrl: text("photo_url").notNull(),
      // Customer selfie photo
      caption: text("caption"),
      // Optional story/caption
      serviceName: varchar("service_name", { length: 100 }),
      // What service they got
      isApproved: boolean("is_approved").default(false),
      // Owner must approve
      isRewarded: boolean("is_rewarded").default(false),
      // Wallet credit given
      rewardAmount: decimal("reward_amount", { precision: 10, scale: 2 }).default("30"),
      // Default ₹30
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    freeBookingCredits = pgTable("free_booking_credits", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      creditType: varchar("credit_type", { enum: ["shopkeeper_referral", "customer_milestone"] }).notNull(),
      maxAmount: decimal("max_amount", { precision: 10, scale: 2 }).notNull(),
      // Maximum service price covered
      isUsed: boolean("is_used").notNull().default(false),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "set null" }),
      referenceId: varchar("reference_id").notNull(),
      // ID of referral or campaign
      description: text("description").notNull(),
      expiresAt: timestamp("expires_at"),
      createdAt: timestamp("created_at").defaultNow(),
      usedAt: timestamp("used_at")
    });
    feedback = pgTable("feedback", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      userType: varchar("user_type", { enum: ["customer", "salon_owner"] }).notNull(),
      category: varchar("category", { enum: ["bug_report", "feature_request", "general_feedback", "complaint", "suggestion", "help_request"] }).notNull(),
      subject: varchar("subject", { length: 255 }).notNull(),
      message: text("message").notNull(),
      rating: integer("rating"),
      // 1-5 star rating (optional)
      moodRating: integer("mood_rating"),
      // 1-5 mood rating (optional)
      attachmentUrl: varchar("attachment_url"),
      // for screenshots or documents
      priority: varchar("priority", { enum: ["low", "medium", "high", "urgent"] }).default("medium"),
      status: varchar("status", { enum: ["open", "in_progress", "resolved", "closed"] }).default("open"),
      adminResponse: text("admin_response"),
      adminNotes: text("admin_notes"),
      respondedBy: varchar("responded_by").references(() => users.id),
      respondedAt: timestamp("responded_at"),
      isPublic: boolean("is_public").default(false),
      // for displaying public feedback
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    helpTickets = pgTable("help_tickets", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      userType: varchar("user_type", { enum: ["customer", "salon_owner"] }).notNull(),
      ticketNumber: varchar("ticket_number", { length: 50 }).notNull().unique(),
      subject: varchar("subject", { length: 255 }).notNull(),
      description: text("description").notNull(),
      category: varchar("category", { enum: ["technical_issue", "account_problem", "payment_issue", "booking_problem", "feature_inquiry", "general_support"] }).notNull(),
      priority: varchar("priority", { enum: ["low", "medium", "high", "urgent"] }).default("medium"),
      status: varchar("status", { enum: ["open", "assigned", "in_progress", "waiting_customer", "resolved", "closed"] }).default("open"),
      assignedTo: varchar("assigned_to").references(() => users.id),
      adminNotes: text("admin_notes"),
      customerSatisfaction: integer("customer_satisfaction"),
      // 1-5 rating after resolution
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow(),
      resolvedAt: timestamp("resolved_at")
    });
    helpTicketMessages = pgTable("help_ticket_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      ticketId: varchar("ticket_id").references(() => helpTickets.id, { onDelete: "cascade" }).notNull(),
      senderId: varchar("sender_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      senderType: varchar("sender_type", { enum: ["customer", "salon_owner", "admin", "system"] }).notNull(),
      message: text("message").notNull(),
      attachmentUrl: varchar("attachment_url"),
      isInternal: boolean("is_internal").default(false),
      // for admin-only notes
      createdAt: timestamp("created_at").defaultNow()
    });
    referralMilestones = pgTable("referral_milestones", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      referrerId: varchar("referrer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      milestoneType: varchar("milestone_type", { enum: ["5_customer_full_fee"] }).notNull(),
      targetCount: integer("target_count").notNull(),
      // e.g., 5 for 5-customer milestone
      currentCount: integer("current_count").default(0),
      isCompleted: boolean("is_completed").default(false),
      rewardAmount: decimal("reward_amount", { precision: 10, scale: 2 }).notNull(),
      // Total confirmation fees from 5 bookings
      completedBookingIds: text("completed_booking_ids").array().default([]),
      // Track which bookings contributed
      completedAt: timestamp("completed_at"),
      rewardClaimed: boolean("reward_claimed").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonLikes = pgTable("salon_likes", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      isLiked: boolean("is_liked").default(true),
      // For future unlike functionality
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    }, (table) => [
      // Ensure one like per customer per salon
      index("unique_customer_salon_like").on(table.customerId, table.salonId)
    ]);
    brandOffers = pgTable("brand_offers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      brandOwnerId: varchar("brand_owner_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title", { length: 255 }).notNull(),
      description: text("description").notNull(),
      offerType: varchar("offer_type", { enum: ["percentage", "fixed_amount", "buy_one_get_one", "free_service"] }).notNull(),
      discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
      // percentage or fixed amount
      minimumAmount: decimal("minimum_amount", { precision: 10, scale: 2 }).default("0"),
      // minimum booking amount
      maximumDiscount: decimal("maximum_discount", { precision: 10, scale: 2 }),
      // max discount for percentage offers
      applicableServices: text("applicable_services").array().default([]),
      // specific service IDs or "all"
      termsAndConditions: text("terms_and_conditions"),
      promoCode: varchar("promo_code", { length: 50 }).unique(),
      usageLimit: integer("usage_limit"),
      // null for unlimited
      usageCount: integer("usage_count").default(0),
      validFrom: timestamp("valid_from").notNull(),
      validUntil: timestamp("valid_until").notNull(),
      isActive: boolean("is_active").default(true),
      showOnSalonDashboard: boolean("show_on_salon_dashboard").default(true),
      priority: integer("priority").default(0),
      // for sorting offers
      imageUrl: varchar("image_url"),
      // offer banner image
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    offerUsages = pgTable("offer_usages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      offerId: varchar("offer_id").references(() => brandOffers.id, { onDelete: "cascade" }).notNull(),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      bookingId: varchar("booking_id").references(() => bookings.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }).notNull(),
      originalAmount: decimal("original_amount", { precision: 10, scale: 2 }).notNull(),
      finalAmount: decimal("final_amount", { precision: 10, scale: 2 }).notNull(),
      usedAt: timestamp("used_at").defaultNow()
    });
    emergencyBookingWaitlist = pgTable("emergency_booking_waitlist", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      serviceId: varchar("service_id").references(() => services.id, { onDelete: "cascade" }).notNull(),
      preferredDate: varchar("preferred_date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      preferredStartTime: varchar("preferred_start_time", { length: 5 }),
      // HH:MM format (optional)
      preferredEndTime: varchar("preferred_end_time", { length: 5 }),
      // HH:MM format (optional)
      emergencyReason: text("emergency_reason"),
      maxEmergencyCharge: decimal("max_emergency_charge", { precision: 10, scale: 2 }).notNull(),
      // Maximum extra they're willing to pay
      customerPhone: varchar("customer_phone", { length: 20 }),
      // For urgent contact
      notificationPreference: varchar("notification_preference", { enum: ["sms", "call", "app"] }).default("app"),
      status: varchar("status", { enum: ["pending", "confirmed", "expired", "cancelled"] }).default("pending"),
      assignedSlotId: varchar("assigned_slot_id").references(() => timeSlots.id),
      assignedBookingId: varchar("assigned_booking_id").references(() => bookings.id),
      confirmedAt: timestamp("confirmed_at"),
      expiresAt: timestamp("expires_at").notNull(),
      // Auto-expire after X hours
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    salonEmergencyConfig = pgTable("salon_emergency_config", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull().unique(),
      allowEmergencyBookings: boolean("allow_emergency_bookings").default(true),
      emergencyChargeType: varchar("emergency_charge_type", { enum: ["percentage", "fixed_amount"] }).default("percentage"),
      emergencyChargeValue: decimal("emergency_charge_value", { precision: 10, scale: 2 }).default("50"),
      // 50% extra or fixed amount
      maxEmergencyBookingsPerDay: integer("max_emergency_bookings_per_day").default(3),
      emergencyBookingTimeLimit: integer("emergency_booking_time_limit").default(120),
      // minutes before appointment
      autoConfirmEmergency: boolean("auto_confirm_emergency").default(false),
      // Auto-confirm or require salon approval
      emergencyContactNumber: varchar("emergency_contact_number", { length: 20 }),
      notificationEnabled: boolean("notification_enabled").default(true),
      operatingHoursOverride: boolean("operating_hours_override").default(false),
      // Allow bookings outside normal hours
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    emergencySlots = pgTable("emergency_slots", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      date: varchar("date", { length: 10 }).notNull(),
      // YYYY-MM-DD format
      startTime: varchar("start_time", { length: 5 }).notNull(),
      // HH:MM format
      endTime: varchar("end_time", { length: 5 }).notNull(),
      // HH:MM format
      extraCharge: decimal("extra_charge", { precision: 10, scale: 2 }).notNull(),
      reason: varchar("reason", { enum: ["emergency_demand", "staff_overtime", "special_request"] }).notNull(),
      staffId: varchar("staff_id").references(() => staff.id),
      isBooked: boolean("is_booked").default(false),
      bookingId: varchar("booking_id").references(() => bookings.id),
      createdBy: varchar("created_by").references(() => users.id).notNull(),
      // Salon owner who created it
      createdAt: timestamp("created_at").defaultNow()
    });
    usersRelations = relations(users, ({ many, one }) => ({
      ownedSalons: many(salons, { relationName: "salon_owner" }),
      brandSalons: many(salons, { relationName: "brand_owner" }),
      bookings: many(bookings, { relationName: "customer_bookings" }),
      reviews: many(reviews, { relationName: "customer_reviews" }),
      wallet: one(wallets),
      likedSalons: many(salonLikes)
    }));
    salonsRelations = relations(salons, ({ one, many }) => ({
      owner: one(users, {
        fields: [salons.ownerId],
        references: [users.id],
        relationName: "salon_owner"
      }),
      brandOwner: one(users, {
        fields: [salons.brandOwnerId],
        references: [users.id],
        relationName: "brand_owner"
      }),
      services: many(services),
      staff: many(staff),
      workingHours: many(workingHours),
      timeSlots: many(timeSlots),
      bookings: many(bookings),
      reviews: many(reviews),
      gallery: many(salonGallery),
      account: one(salonOwnerAccounts),
      likes: many(salonLikes),
      salonOffers: many(salonOffers)
    }));
    salonOwnerAccountsRelations = relations(salonOwnerAccounts, ({ one }) => ({
      salon: one(salons, {
        fields: [salonOwnerAccounts.salonId],
        references: [salons.id]
      })
    }));
    revenueSharesRelations = relations(revenueShares, ({ one }) => ({
      booking: one(bookings, {
        fields: [revenueShares.bookingId],
        references: [bookings.id]
      })
    }));
    servicesRelations = relations(services, ({ one, many }) => ({
      salon: one(salons, {
        fields: [services.salonId],
        references: [salons.id]
      }),
      bookings: many(bookings)
    }));
    workingHoursRelations = relations(workingHours, ({ one }) => ({
      salon: one(salons, {
        fields: [workingHours.salonId],
        references: [salons.id]
      })
    }));
    timeSlotsRelations = relations(timeSlots, ({ one, many }) => ({
      salon: one(salons, {
        fields: [timeSlots.salonId],
        references: [salons.id]
      }),
      bookings: many(bookings)
    }));
    bookingsRelations = relations(bookings, ({ one, many }) => ({
      customer: one(users, {
        fields: [bookings.customerId],
        references: [users.id],
        relationName: "customer_bookings"
      }),
      salon: one(salons, {
        fields: [bookings.salonId],
        references: [salons.id]
      }),
      service: one(services, {
        fields: [bookings.serviceId],
        references: [services.id]
      }),
      staff: one(staff, {
        fields: [bookings.staffId],
        references: [staff.id]
      }),
      timeSlot: one(timeSlots, {
        fields: [bookings.timeSlotId],
        references: [timeSlots.id]
      }),
      reviews: many(reviews)
    }));
    reviewsRelations = relations(reviews, ({ one, many }) => ({
      customer: one(users, {
        fields: [reviews.customerId],
        references: [users.id],
        relationName: "customer_reviews"
      }),
      salon: one(salons, {
        fields: [reviews.salonId],
        references: [salons.id]
      }),
      booking: one(bookings, {
        fields: [reviews.bookingId],
        references: [bookings.id]
      }),
      replies: many(reviewReplies)
    }));
    reviewRepliesRelations = relations(reviewReplies, ({ one }) => ({
      review: one(reviews, {
        fields: [reviewReplies.reviewId],
        references: [reviews.id]
      }),
      salonOwner: one(users, {
        fields: [reviewReplies.salonOwnerId],
        references: [users.id],
        relationName: "salon_owner_replies"
      })
    }));
    staffRelations = relations(staff, ({ one, many }) => ({
      salon: one(salons, {
        fields: [staff.salonId],
        references: [salons.id]
      }),
      bookings: many(bookings),
      workingHours: many(staffWorkingHours),
      services: many(staffServices),
      holidays: many(staffHolidays),
      timeSlots: many(staffTimeSlots)
    }));
    staffWorkingHoursRelations = relations(staffWorkingHours, ({ one }) => ({
      staff: one(staff, {
        fields: [staffWorkingHours.staffId],
        references: [staff.id]
      })
    }));
    staffServicesRelations = relations(staffServices, ({ one }) => ({
      staff: one(staff, {
        fields: [staffServices.staffId],
        references: [staff.id]
      }),
      service: one(services, {
        fields: [staffServices.serviceId],
        references: [services.id]
      })
    }));
    staffHolidaysRelations = relations(staffHolidays, ({ one }) => ({
      staff: one(staff, {
        fields: [staffHolidays.staffId],
        references: [staff.id]
      }),
      approver: one(users, {
        fields: [staffHolidays.approvedBy],
        references: [users.id]
      })
    }));
    staffTimeSlotsRelations = relations(staffTimeSlots, ({ one }) => ({
      staff: one(staff, {
        fields: [staffTimeSlots.staffId],
        references: [staff.id]
      }),
      salon: one(salons, {
        fields: [staffTimeSlots.salonId],
        references: [salons.id]
      })
    }));
    scheduleTemplatesRelations = relations(scheduleTemplates, ({ one }) => ({
      salon: one(salons, {
        fields: [scheduleTemplates.salonId],
        references: [salons.id]
      }),
      creator: one(users, {
        fields: [scheduleTemplates.createdBy],
        references: [users.id]
      })
    }));
    walletsRelations = relations(wallets, ({ one, many }) => ({
      customer: one(users, {
        fields: [wallets.customerId],
        references: [users.id]
      }),
      transactions: many(walletTransactions)
    }));
    walletTransactionsRelations = relations(walletTransactions, ({ one }) => ({
      wallet: one(wallets, {
        fields: [walletTransactions.walletId],
        references: [wallets.id]
      })
    }));
    referralsRelations = relations(referrals, ({ one }) => ({
      referrer: one(users, {
        fields: [referrals.referrerId],
        references: [users.id],
        relationName: "user_referrals_given"
      }),
      referred: one(users, {
        fields: [referrals.referredId],
        references: [users.id],
        relationName: "user_referrals_received"
      }),
      booking: one(bookings, {
        fields: [referrals.bookingId],
        references: [bookings.id]
      })
    }));
    referralMilestonesRelations = relations(referralMilestones, ({ one }) => ({
      referrer: one(users, {
        fields: [referralMilestones.referrerId],
        references: [users.id]
      })
    }));
    salonGalleryRelations = relations(salonGallery, ({ one }) => ({
      salon: one(salons, {
        fields: [salonGallery.salonId],
        references: [salons.id]
      })
    }));
    salonLikesRelations = relations(salonLikes, ({ one }) => ({
      customer: one(users, {
        fields: [salonLikes.customerId],
        references: [users.id]
      }),
      salon: one(salons, {
        fields: [salonLikes.salonId],
        references: [salons.id]
      })
    }));
    brandOffersRelations = relations(brandOffers, ({ one, many }) => ({
      brandOwner: one(users, {
        fields: [brandOffers.brandOwnerId],
        references: [users.id]
      }),
      usages: many(offerUsages)
    }));
    offerUsagesRelations = relations(offerUsages, ({ one }) => ({
      offer: one(brandOffers, {
        fields: [offerUsages.offerId],
        references: [brandOffers.id]
      }),
      customer: one(users, {
        fields: [offerUsages.customerId],
        references: [users.id]
      }),
      booking: one(bookings, {
        fields: [offerUsages.bookingId],
        references: [bookings.id]
      }),
      salon: one(salons, {
        fields: [offerUsages.salonId],
        references: [salons.id]
      })
    }));
    feedbackRelations = relations(feedback, ({ one }) => ({
      user: one(users, {
        fields: [feedback.userId],
        references: [users.id]
      }),
      respondedByUser: one(users, {
        fields: [feedback.respondedBy],
        references: [users.id]
      })
    }));
    helpTicketsRelations = relations(helpTickets, ({ one, many }) => ({
      user: one(users, {
        fields: [helpTickets.userId],
        references: [users.id]
      }),
      assignedToUser: one(users, {
        fields: [helpTickets.assignedTo],
        references: [users.id]
      }),
      messages: many(helpTicketMessages)
    }));
    helpTicketMessagesRelations = relations(helpTicketMessages, ({ one }) => ({
      ticket: one(helpTickets, {
        fields: [helpTicketMessages.ticketId],
        references: [helpTickets.id]
      }),
      sender: one(users, {
        fields: [helpTicketMessages.senderId],
        references: [users.id]
      })
    }));
    salonOffersRelations = relations(salonOffers, ({ one, many }) => ({
      salon: one(salons, {
        fields: [salonOffers.salonId],
        references: [salons.id]
      }),
      creator: one(users, {
        fields: [salonOffers.createdBy],
        references: [users.id]
      }),
      usages: many(salonOfferUsage)
    }));
    salonOfferUsageRelations = relations(salonOfferUsage, ({ one }) => ({
      offer: one(salonOffers, {
        fields: [salonOfferUsage.offerId],
        references: [salonOffers.id]
      }),
      customer: one(users, {
        fields: [salonOfferUsage.customerId],
        references: [users.id]
      }),
      booking: one(bookings, {
        fields: [salonOfferUsage.bookingId],
        references: [bookings.id]
      })
    }));
    profileVisitsRelations = relations(profileVisits, ({ one }) => ({
      salon: one(salons, {
        fields: [profileVisits.salonId],
        references: [salons.id]
      }),
      visitor: one(users, {
        fields: [profileVisits.visitorId],
        references: [users.id]
      })
    }));
    insertUserSchema = createInsertSchema(users).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    upsertUserSchema = createInsertSchema(users).pick({
      id: true,
      email: true,
      password: true,
      firstName: true,
      lastName: true,
      profileImageUrl: true,
      userType: true
    });
    insertSalonSchema = createInsertSchema(salons).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertServiceCategorySchema = createInsertSchema(serviceCategories).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertServiceSchema = createInsertSchema(services).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertStaffSchema = createInsertSchema(staff).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertWorkingHoursSchema = createInsertSchema(workingHours).omit({
      id: true
    });
    insertTimeSlotSchema = createInsertSchema(timeSlots).omit({
      id: true,
      createdAt: true
    });
    insertBookingSchema = createInsertSchema(bookings).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertWalkInBookingSchema = createInsertSchema(bookings).omit({
      id: true,
      customerId: true,
      // Walk-ins may not have user accounts
      timeSlotId: true,
      // Walk-ins may not use predefined slots
      paymentId: true,
      // Walk-ins use different payment tracking
      createdAt: true,
      updatedAt: true
    }).extend({
      isWalkIn: z.literal(true),
      walkInPaymentMethod: z.enum(["cash", "card", "upi", "online"]),
      walkInCustomerName: z.string().min(1, "Customer name is required"),
      walkInCustomerPhone: z.string().min(10, "Valid phone number is required")
    });
    insertSalonOfferSchema = createInsertSchema(salonOffers).omit({
      id: true,
      currentUsageCount: true,
      createdAt: true,
      updatedAt: true,
      salonId: true,
      createdBy: true
    });
    insertSalonOfferUsageSchema = createInsertSchema(salonOfferUsage).omit({
      id: true,
      usedAt: true
    });
    insertReviewSchema = createInsertSchema(reviews).omit({
      id: true,
      createdAt: true
    });
    insertReviewReplySchema = createInsertSchema(reviewReplies).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertWalletSchema = createInsertSchema(wallets).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertWalletTransactionSchema = createInsertSchema(walletTransactions).omit({
      id: true,
      createdAt: true
    });
    insertReferralSchema = createInsertSchema(referrals).omit({
      id: true,
      createdAt: true,
      completedAt: true
    });
    insertReferralMilestoneSchema = createInsertSchema(referralMilestones).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      completedAt: true
    });
    insertSalonGallerySchema = createInsertSchema(salonGallery).omit({
      id: true,
      createdAt: true
    });
    insertCustomerShowcaseSchema = createInsertSchema(customerShowcase).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertSalonFacilitySchema = createInsertSchema(salonFacilities).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertSalonProductSchema = createInsertSchema(salonProducts).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertCustomerReferralCampaignSchema = createInsertSchema(customerReferralCampaigns).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      completedAt: true
    });
    insertFreeBookingCreditSchema = createInsertSchema(freeBookingCredits).omit({
      id: true,
      createdAt: true,
      usedAt: true
    });
    insertSalonLikeSchema = createInsertSchema(salonLikes).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPasswordResetOtpSchema = createInsertSchema(passwordResetOtps).omit({
      id: true,
      createdAt: true
    });
    insertEmailVerificationOtpSchema = createInsertSchema(emailVerificationOtps).omit({
      id: true,
      createdAt: true
    });
    insertFeedbackSchema = createInsertSchema(feedback).omit({
      id: true,
      respondedBy: true,
      respondedAt: true,
      createdAt: true,
      updatedAt: true
    });
    insertHelpTicketSchema = createInsertSchema(helpTickets).omit({
      id: true,
      ticketNumber: true,
      assignedTo: true,
      adminNotes: true,
      customerSatisfaction: true,
      resolvedAt: true,
      createdAt: true,
      updatedAt: true
    });
    insertHelpTicketMessageSchema = createInsertSchema(helpTicketMessages).omit({
      id: true,
      createdAt: true
    });
    insertBrandOfferSchema = createInsertSchema(brandOffers).omit({
      id: true,
      usageCount: true,
      createdAt: true,
      updatedAt: true
    });
    insertOfferUsageSchema = createInsertSchema(offerUsages).omit({
      id: true,
      usedAt: true
    });
    insertEmergencyWaitlistSchema = createInsertSchema(emergencyBookingWaitlist).omit({
      id: true,
      assignedSlotId: true,
      assignedBookingId: true,
      confirmedAt: true,
      createdAt: true,
      updatedAt: true
    });
    insertSalonEmergencyConfigSchema = createInsertSchema(salonEmergencyConfig).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertEmergencySlotSchema = createInsertSchema(emergencySlots).omit({
      id: true,
      isBooked: true,
      bookingId: true,
      createdAt: true
    });
    MOOD_EMOJIS = {
      very_happy: { emoji: "\u{1F60D}", label: "Absolutely Amazing", color: "text-green-600" },
      happy: { emoji: "\u{1F60A}", label: "Really Good", color: "text-green-500" },
      neutral: { emoji: "\u{1F610}", label: "It's Okay", color: "text-yellow-500" },
      sad: { emoji: "\u{1F614}", label: "Not Great", color: "text-orange-500" },
      very_sad: { emoji: "\u{1F61E}", label: "Very Disappointed", color: "text-red-500" }
    };
    verificationDocuments = pgTable("verification_documents", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      documentType: varchar("document_type", { enum: ["business_license", "id_proof", "address_proof", "other"] }).notNull(),
      documentUrl: varchar("document_url").notNull(),
      documentName: varchar("document_name"),
      uploadedAt: timestamp("uploaded_at").defaultNow()
    });
    adminActivityLogs = pgTable("admin_activity_logs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      adminId: varchar("admin_id").references(() => users.id).notNull(),
      action: varchar("action").notNull(),
      // approve_salon, reject_salon, block_user, etc.
      targetType: varchar("target_type", { enum: ["salon", "user", "booking", "review", "content"] }),
      targetId: varchar("target_id"),
      details: text("details"),
      // JSON string with action details
      ipAddress: varchar("ip_address"),
      userAgent: text("user_agent"),
      createdAt: timestamp("created_at").defaultNow()
    });
    contentModerations = pgTable("content_moderations", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      contentType: varchar("content_type", { enum: ["review", "salon_image", "service", "user_profile"] }).notNull(),
      contentId: varchar("content_id").notNull(),
      reportedBy: varchar("reported_by").references(() => users.id),
      reason: varchar("reason", { enum: ["inappropriate", "spam", "fake", "offensive", "other"] }).notNull(),
      description: text("description"),
      status: varchar("status", { enum: ["pending", "approved", "removed", "resolved"] }).default("pending"),
      moderatedBy: varchar("moderated_by").references(() => users.id),
      moderatedAt: timestamp("moderated_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    platformAnalytics = pgTable("platform_analytics", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      date: varchar("date").notNull(),
      // YYYY-MM-DD format
      totalCustomers: integer("total_customers").default(0),
      totalSalons: integer("total_salons").default(0),
      totalBookings: integer("total_bookings").default(0),
      totalRevenue: integer("total_revenue").default(0),
      // in paise
      newCustomers: integer("new_customers").default(0),
      newSalons: integer("new_salons").default(0),
      newBookings: integer("new_bookings").default(0),
      dailyRevenue: integer("daily_revenue").default(0),
      // in paise
      createdAt: timestamp("created_at").defaultNow()
    }, (table) => [
      index("idx_platform_analytics_date").on(table.date)
    ]);
    brandInvitations = pgTable("brand_invitations", {
      id: varchar("id").primaryKey().$defaultFn(() => nanoid()),
      brandOwnerId: varchar("brand_owner_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      salonOwnerId: varchar("salon_owner_id").notNull().references(() => users.id, { onDelete: "cascade" }),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }),
      status: varchar("status", { enum: ["pending", "accepted", "rejected"] }).default("pending"),
      message: text("message"),
      invitationType: varchar("invitation_type", { enum: ["brand_to_salon", "salon_to_brand"] }).notNull(),
      brandName: varchar("brand_name"),
      salonName: varchar("salon_name"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    brandMessages = pgTable("brand_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      brandOwnerId: varchar("brand_owner_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      salonOwnerId: varchar("salon_owner_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      message: text("message").notNull(),
      isRead: boolean("is_read").default(false),
      priority: varchar("priority", { enum: ["low", "medium", "high"] }).default("medium"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertVerificationDocumentSchema = createInsertSchema(verificationDocuments);
    insertAdminActivityLogSchema = createInsertSchema(adminActivityLogs);
    insertContentModerationSchema = createInsertSchema(contentModerations);
    insertPlatformAnalyticsSchema = createInsertSchema(platformAnalytics);
    insertBrandInvitationSchema = createInsertSchema(brandInvitations);
    insertBrandMessageSchema = createInsertSchema(brandMessages).omit({ id: true, createdAt: true, updatedAt: true });
    insertProfileVisitSchema = createInsertSchema(profileVisits).omit({
      id: true,
      createdAt: true
    });
    insertSalonOwnerOtpSchema = createInsertSchema(salonOwnerOtps).omit({
      id: true,
      createdAt: true,
      isVerified: true
    });
    insertStaffOtpSchema = createInsertSchema(staffOtps).omit({
      id: true,
      createdAt: true,
      isVerified: true
    });
    insertPaymentOrderSchema = createInsertSchema(paymentOrders).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    faqs = pgTable("faqs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      question: text("question").notNull(),
      answer: text("answer").notNull(),
      displayOrder: integer("display_order").default(0),
      // For custom ordering
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertFaqSchema = createInsertSchema(faqs).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    sanwarDiscountCards = pgTable("sanwar_discount_cards", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      customerName: varchar("customer_name", { length: 255 }),
      customerEmail: varchar("customer_email").notNull(),
      customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
      serviceEnjoyed: text("service_enjoyed"),
      // Which service customer enjoyed
      discountPercentage: integer("discount_percentage").notNull(),
      // 10 or 20
      status: varchar("status", { enum: ["active", "used", "expired"] }).default("active"),
      usedAt: timestamp("used_at"),
      expiresAt: timestamp("expires_at"),
      // Optional expiry date
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertSanwarDiscountCardSchema = createInsertSchema(sanwarDiscountCards).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    adminSettings = pgTable("admin_settings", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      settingKey: varchar("setting_key", { length: 255 }).notNull().unique(),
      // e.g., 'shopkeeper_booking_emails_enabled'
      settingValue: text("setting_value").notNull(),
      // Store as JSON string for flexibility
      description: text("description"),
      // What this setting controls
      updatedBy: varchar("updated_by").references(() => users.id),
      // Which admin updated it
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertAdminSettingSchema = createInsertSchema(adminSettings).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    upcomingFeatureVideos = pgTable("upcoming_feature_videos", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: varchar("title", { length: 255 }).notNull(),
      description: text("description"),
      videoUrl: varchar("video_url").notNull(),
      // URL to uploaded video in object storage
      thumbnailUrl: varchar("thumbnail_url"),
      // Optional thumbnail image
      order: integer("order").default(0),
      // Display order (lower number = shown first)
      isActive: boolean("is_active").default(true),
      // Whether to show on homepage
      createdBy: varchar("created_by").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertUpcomingFeatureVideoSchema = createInsertSchema(upcomingFeatureVideos).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    salonChats = pgTable("salon_chats", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      senderType: varchar("sender_type", { enum: ["customer", "owner"] }).notNull(),
      message: text("message").notNull(),
      isRead: boolean("is_read").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertSalonChatSchema = createInsertSchema(salonChats).omit({
      id: true,
      createdAt: true,
      isRead: true
    });
    salonFollowers = pgTable("salon_followers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id").references(() => salons.id, { onDelete: "cascade" }).notNull(),
      customerId: varchar("customer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertSalonFollowerSchema = createInsertSchema(salonFollowers).omit({
      id: true,
      createdAt: true
    });
    staffRegistrations = pgTable("staff_registrations", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      fullName: varchar("full_name", { length: 255 }).notNull(),
      mobile: varchar("mobile", { length: 20 }).notNull(),
      city: varchar("city", { length: 100 }).notNull(),
      area: varchar("area", { length: 100 }).notNull(),
      role: varchar("role", { length: 100 }).notNull(),
      headline: varchar("headline", { length: 255 }),
      experience: integer("experience").default(0),
      gender: varchar("gender", { length: 20 }),
      comfortableWith: varchar("comfortable_with", { length: 50 }),
      currentlyWorking: varchar("currently_working", { length: 100 }),
      skills: text("skills").array(),
      expectedSalary: integer("expected_salary"),
      employmentType: varchar("employment_type", { length: 20 }),
      willingToRelocate: boolean("willing_to_relocate").default(false),
      bio: text("bio"),
      profileImageUrl: varchar("profile_image_url"),
      portfolioImages: text("portfolio_images").array(),
      isVerified: boolean("is_verified").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertStaffRegistrationSchema = createInsertSchema(staffRegistrations).omit({
      id: true,
      createdAt: true,
      isVerified: true
    });
    staffJobOffers = pgTable("staff_job_offers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      salonId: varchar("salon_id", { length: 255 }).notNull(),
      salonName: varchar("salon_name", { length: 255 }).notNull(),
      salonCity: varchar("salon_city", { length: 100 }),
      ownerPhone: varchar("owner_phone", { length: 20 }),
      professionalMobile: varchar("professional_mobile", { length: 20 }).notNull(),
      professionalName: varchar("professional_name", { length: 255 }).notNull(),
      role: varchar("role", { length: 100 }).notNull(),
      message: text("message"),
      offeredSalary: integer("offered_salary"),
      status: varchar("status", { length: 20 }).default("pending"),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertStaffJobOfferSchema = createInsertSchema(staffJobOffers).omit({
      id: true,
      createdAt: true
    });
  }
});

// server/db.ts
var db_exports = {};
__export(db_exports, {
  db: () => db,
  pool: () => pool
});
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
function cleanNeonUrl(url) {
  let cleaned = url.trim().replace(/^psql\s+['"]?/, "").replace(/['"]$/, "");
  try {
    const u = new URL(cleaned);
    u.searchParams.delete("channel_binding");
    return u.toString();
  } catch {
    return cleaned;
  }
}
var rawUrl, dbUrl, pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    rawUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
    if (!rawUrl) {
      throw new Error(
        "NEON_DATABASE_URL (or DATABASE_URL) must be set."
      );
    }
    dbUrl = cleanNeonUrl(rawUrl);
    pool = new Pool({ connectionString: dbUrl });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// server/storage.ts
var storage_exports = {};
__export(storage_exports, {
  DatabaseStorage: () => DatabaseStorage,
  storage: () => storage
});
import { eq, and, gte, desc, asc, or, isNull, sql as sql2 } from "drizzle-orm";
var DatabaseStorage, storage;
var init_storage = __esm({
  "server/storage.ts"() {
    "use strict";
    init_schema();
    init_db();
    DatabaseStorage = class {
      // User operations
      async getUser(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
      }
      async getUserById(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
      }
      async getUserByEmail(email) {
        const normalizedEmail = email.trim().toLowerCase();
        const [user] = await db.select().from(users).where(sql2`lower(${users.email}) = ${normalizedEmail}`);
        return user;
      }
      async getUserBySocialId(socialProvider, socialId) {
        const [user] = await db.select().from(users).where(
          and(
            eq(users.socialProvider, socialProvider),
            eq(users.socialId, socialId)
          )
        );
        return user;
      }
      async createUser(userData) {
        const [user] = await db.insert(users).values(userData).returning();
        return user;
      }
      async upsertUser(userData) {
        const [user] = await db.insert(users).values(userData).onConflictDoUpdate({
          target: users.id,
          set: {
            ...userData,
            updatedAt: /* @__PURE__ */ new Date()
          }
        }).returning();
        return user;
      }
      async updateUserType(id, userType) {
        const [user] = await db.update(users).set({
          userType,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(users.id, id)).returning();
        return user;
      }
      // Salon operations
      // Generate a URL-friendly slug from a salon name, ensuring uniqueness
      async generateUniqueSlug(name, existingId) {
        const base = name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
        let candidate = base;
        let counter = 1;
        while (true) {
          const [existing] = await db.select({ id: salons.id }).from(salons).where(eq(salons.slug, candidate));
          if (!existing || existing.id === existingId) return candidate;
          candidate = `${base}-${counter++}`;
        }
      }
      async createSalon(salon) {
        const slug = await this.generateUniqueSlug(salon.name);
        const [newSalon] = await db.insert(salons).values({ ...salon, slug }).returning();
        return newSalon;
      }
      async getSalonById(id) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (uuidRegex.test(id)) {
          const [salon2] = await db.select().from(salons).where(eq(salons.id, id));
          return salon2;
        }
        const [salon] = await db.select().from(salons).where(eq(salons.slug, id));
        return salon;
      }
      async getSalonBySlug(slug) {
        const [salon] = await db.select().from(salons).where(eq(salons.slug, slug));
        return salon;
      }
      async getSalonsByOwner(ownerId) {
        return await db.select().from(salons).where(eq(salons.ownerId, ownerId));
      }
      async getAllSalons() {
        const salonsData = await db.select().from(salons).where(eq(salons.isActive, true)).orderBy(desc(salons.averageRating));
        return salonsData;
      }
      async updateSalon(id, salonData) {
        let slug;
        if (salonData.name) {
          slug = await this.generateUniqueSlug(salonData.name, id);
        }
        const [salon] = await db.update(salons).set({ ...salonData, ...slug ? { slug } : {}, updatedAt: /* @__PURE__ */ new Date() }).where(eq(salons.id, id)).returning();
        return salon;
      }
      // Service operations
      async createService(service) {
        const [newService] = await db.insert(services).values(service).returning();
        return newService;
      }
      async getServicesBySalon(salonId) {
        return await db.select().from(services).where(and(eq(services.salonId, salonId), eq(services.isActive, true))).orderBy(asc(services.name));
      }
      async updateService(id, serviceData) {
        const [service] = await db.update(services).set({ ...serviceData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(services.id, id)).returning();
        return service;
      }
      async deleteService(id) {
        await db.update(services).set({ isActive: false }).where(eq(services.id, id));
      }
      // Working hours operations
      async upsertWorkingHours(workingHour) {
        const [result] = await db.insert(workingHours).values(workingHour).onConflictDoUpdate({
          target: [workingHours.salonId, workingHours.dayOfWeek],
          set: workingHour
        }).returning();
        return result;
      }
      async getWorkingHoursBySalon(salonId) {
        return await db.select().from(workingHours).where(eq(workingHours.salonId, salonId)).orderBy(asc(workingHours.dayOfWeek));
      }
      // Time slot operations
      async createTimeSlot(timeSlot) {
        const [newTimeSlot] = await db.insert(timeSlots).values(timeSlot).returning();
        return newTimeSlot;
      }
      async getAvailableTimeSlots(salonId, date) {
        console.log(`[DEBUG] Fetching time slots for salon ${salonId} on date ${date}`);
        const allSlots = await db.select().from(timeSlots).where(
          and(
            eq(timeSlots.salonId, salonId),
            eq(timeSlots.date, date)
          )
        ).orderBy(asc(timeSlots.startTime));
        console.log(`[DEBUG] Found ${allSlots.length} total time slots`);
        const bookedSlots = await db.select({
          timeSlotId: bookings.timeSlotId
        }).from(bookings).where(
          and(
            eq(bookings.salonId, salonId),
            eq(bookings.date, date),
            // All bookings (pending, confirmed, completed) make slots unavailable
            // Once someone books a slot, it should not be available to others
            or(
              eq(bookings.status, "pending"),
              eq(bookings.status, "confirmed"),
              eq(bookings.status, "completed")
            )
          )
        );
        const bookedSlotIds = new Set(bookedSlots.map((b) => b.timeSlotId));
        console.log(`[DEBUG] Found ${bookedSlots.length} booked slots:`, Array.from(bookedSlotIds));
        const result = allSlots.map((slot) => ({
          ...slot,
          isAvailable: !bookedSlotIds.has(slot.id)
          // Available if not booked
        }));
        console.log(`[DEBUG] Returning slots with availability:`, result.map((s) => ({ id: s.id, startTime: s.startTime, isAvailable: s.isAvailable })));
        return result;
      }
      async updateTimeSlotAvailability(id, isAvailable) {
        await db.update(timeSlots).set({ isAvailable }).where(eq(timeSlots.id, id));
      }
      async getTimeSlotsBySalonAndDate(salonId, date, serviceId, staffId) {
        console.log(`[DEBUG] Fetching manual time slots for salon ${salonId} on date ${date}, service: ${serviceId}, staff: ${staffId}`);
        const conditions = [
          eq(timeSlots.salonId, salonId),
          eq(timeSlots.date, date)
        ];
        if (staffId && staffId !== "undefined") {
          conditions.push(eq(timeSlots.staffId, staffId));
        }
        const slotsWithDetails = await db.select({
          id: timeSlots.id,
          salonId: timeSlots.salonId,
          staffId: timeSlots.staffId,
          serviceId: timeSlots.serviceId,
          date: timeSlots.date,
          startTime: timeSlots.startTime,
          endTime: timeSlots.endTime,
          isAvailable: timeSlots.isAvailable,
          slotType: timeSlots.slotType,
          staffName: staff.name,
          staffRole: staff.role,
          staffPhoto: staff.photoUrl,
          serviceName: services.name,
          servicePrice: services.price,
          serviceDuration: services.duration
        }).from(timeSlots).leftJoin(staff, eq(timeSlots.staffId, staff.id)).leftJoin(services, eq(timeSlots.serviceId, services.id)).where(and(...conditions)).orderBy(asc(timeSlots.startTime));
        console.log(`[DEBUG] Found ${slotsWithDetails.length} manually created time slots`);
        const bookedSlots = await db.select({
          timeSlotId: bookings.timeSlotId
        }).from(bookings).where(
          and(
            eq(bookings.salonId, salonId),
            eq(bookings.date, date),
            or(
              eq(bookings.status, "pending"),
              eq(bookings.status, "confirmed"),
              eq(bookings.status, "completed")
            )
          )
        );
        const bookedSlotIds = new Set(bookedSlots.map((b) => b.timeSlotId));
        const result = slotsWithDetails.map((slot) => ({
          ...slot,
          isAvailable: !bookedSlotIds.has(slot.id)
        }));
        console.log(`[DEBUG] Returning ${result.length} manually created slots`);
        return result;
      }
      // Staff service assignment operations
      async assignServiceToStaff(staffId, serviceId, customPrice, estimatedDuration) {
        const assignmentData = {
          staffId,
          serviceId,
          isActive: true
        };
        if (customPrice !== void 0) {
          assignmentData.customPrice = customPrice.toString();
        }
        if (estimatedDuration !== void 0) {
          assignmentData.estimatedDuration = estimatedDuration.toString();
        }
        const [assignment] = await db.insert(staffServices).values(assignmentData).returning();
        return assignment;
      }
      async getStaffServices(staffId) {
        return await db.select({
          id: staffServices.id,
          staffId: staffServices.staffId,
          serviceId: staffServices.serviceId,
          serviceName: services.name,
          servicePrice: services.price,
          serviceDuration: services.duration,
          customPrice: staffServices.customPrice,
          estimatedDuration: staffServices.estimatedDuration,
          isActive: staffServices.isActive
        }).from(staffServices).leftJoin(services, eq(staffServices.serviceId, services.id)).where(and(eq(staffServices.staffId, staffId), eq(staffServices.isActive, true)));
      }
      async getSalonStaffWithServices(salonId) {
        const staffList = await db.select().from(staff).where(and(eq(staff.salonId, salonId), eq(staff.isActive, true)));
        const staffWithServices = await Promise.all(
          staffList.map(async (staffMember) => {
            const services2 = await this.getStaffServices(staffMember.id);
            return {
              ...staffMember,
              services: services2
            };
          })
        );
        return staffWithServices;
      }
      // Advanced staff-based slot generation
      async generateStaffBasedSlots(salonId, date) {
        console.log(`[SLOT GENERATION] Starting staff-based slot generation for salon ${salonId} on ${date}`);
        const dayOfWeek = new Date(date).getDay();
        const workingHoursResult = await db.select().from(workingHours).where(and(eq(workingHours.salonId, salonId), eq(workingHours.dayOfWeek, dayOfWeek)));
        if (workingHoursResult.length === 0 || !workingHoursResult[0].isOpen) {
          return { generated: 0, message: "Salon is closed on this day" };
        }
        const startTime = workingHoursResult[0].openTime || "09:00";
        const endTime = workingHoursResult[0].closeTime || "18:00";
        console.log(`[SLOT GENERATION] Salon hours: ${startTime} - ${endTime}`);
        const staffWithServices = await this.getSalonStaffWithServices(salonId);
        if (staffWithServices.length === 0) {
          return { generated: 0, message: "No active staff members found" };
        }
        console.log(`[SLOT GENERATION] Found ${staffWithServices.length} staff members`);
        const existingSlots = await db.select().from(timeSlots).where(and(eq(timeSlots.salonId, salonId), eq(timeSlots.date, date)));
        if (existingSlots.length > 0) {
          return { generated: 0, message: `${existingSlots.length} slots already exist for this date` };
        }
        let totalGeneratedSlots = 0;
        const slotsToInsert = [];
        for (const staffMember of staffWithServices) {
          if (staffMember.services.length === 0) {
            console.log(`[SLOT GENERATION] Staff ${staffMember.name} has no assigned services, skipping`);
            continue;
          }
          console.log(`[SLOT GENERATION] Generating slots for ${staffMember.name} with ${staffMember.services.length} services`);
          for (const service of staffMember.services) {
            const serviceDuration = service.estimatedDuration || service.serviceDuration || 30;
            const slotDuration = staffMember.defaultSlotDuration || 30;
            let currentTime = startTime;
            const endTimeMinutes = this.timeToMinutes(endTime);
            while (this.timeToMinutes(currentTime) < endTimeMinutes) {
              const endSlotTime = this.addMinutes(currentTime, slotDuration);
              if (this.timeToMinutes(endSlotTime) > endTimeMinutes) {
                break;
              }
              slotsToInsert.push({
                salonId,
                staffId: staffMember.id,
                serviceId: service.serviceId,
                date,
                startTime: currentTime,
                endTime: endSlotTime,
                isAvailable: true,
                slotType: "regular"
              });
              totalGeneratedSlots++;
              currentTime = endSlotTime;
            }
          }
        }
        if (slotsToInsert.length > 0) {
          await db.insert(timeSlots).values(slotsToInsert);
          console.log(`[SLOT GENERATION] Successfully generated ${totalGeneratedSlots} slots`);
        }
        return {
          generated: totalGeneratedSlots,
          message: `Generated ${totalGeneratedSlots} staff-service specific slots`
        };
      }
      // Get available slots grouped by staff and service
      async getStaffBasedTimeSlots(salonId, date, serviceId, staffId) {
        console.log(`[DEBUG] Fetching staff-based time slots for salon ${salonId} on date ${date}, service: ${serviceId}, staff: ${staffId}`);
        const conditions = [
          eq(timeSlots.salonId, salonId),
          eq(timeSlots.date, date)
        ];
        if (serviceId) {
          conditions.push(eq(timeSlots.serviceId, serviceId));
        }
        if (staffId) {
          conditions.push(eq(timeSlots.staffId, staffId));
        }
        const slotsWithDetails = await db.select({
          id: timeSlots.id,
          salonId: timeSlots.salonId,
          staffId: timeSlots.staffId,
          serviceId: timeSlots.serviceId,
          date: timeSlots.date,
          startTime: timeSlots.startTime,
          endTime: timeSlots.endTime,
          isAvailable: timeSlots.isAvailable,
          slotType: timeSlots.slotType,
          staffName: staff.name,
          staffRole: staff.role,
          staffPhoto: staff.photoUrl,
          serviceName: services.name,
          servicePrice: services.price,
          serviceDuration: services.duration
        }).from(timeSlots).leftJoin(staff, eq(timeSlots.staffId, staff.id)).leftJoin(services, eq(timeSlots.serviceId, services.id)).where(and(...conditions)).orderBy(asc(timeSlots.startTime));
        console.log(`[DEBUG] Found ${slotsWithDetails.length} total time slots with details`);
        const bookedSlots = await db.select({
          timeSlotId: bookings.timeSlotId
        }).from(bookings).where(
          and(
            eq(bookings.salonId, salonId),
            eq(bookings.date, date),
            or(
              eq(bookings.status, "pending"),
              eq(bookings.status, "confirmed"),
              eq(bookings.status, "completed")
            )
          )
        );
        const bookedSlotIds = new Set(bookedSlots.map((b) => b.timeSlotId));
        const result = slotsWithDetails.map((slot) => ({
          ...slot,
          isAvailable: !bookedSlotIds.has(slot.id)
        }));
        console.log(`[DEBUG] Returning ${result.length} staff-based slots`);
        return result;
      }
      // Utility functions for time calculations
      timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
      }
      addMinutes(time, minutes) {
        const totalMinutes = this.timeToMinutes(time) + minutes;
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
      }
      // Booking operations
      async createBooking(booking) {
        const [newBooking] = await db.insert(bookings).values(booking).returning();
        return newBooking;
      }
      async getBookingsByCustomer(customerId) {
        const bookingsWithDetails = await db.select({
          // Booking fields
          id: bookings.id,
          customerId: bookings.customerId,
          salonId: bookings.salonId,
          serviceId: bookings.serviceId,
          staffId: bookings.staffId,
          timeSlotId: bookings.timeSlotId,
          date: bookings.date,
          startTime: bookings.startTime,
          endTime: bookings.endTime,
          totalAmount: bookings.totalAmount,
          status: bookings.status,
          paymentId: bookings.paymentId,
          paymentStatus: bookings.paymentStatus,
          createdAt: bookings.createdAt,
          updatedAt: bookings.updatedAt,
          isWalkIn: bookings.isWalkIn,
          walkInCustomerName: bookings.walkInCustomerName,
          walkInCustomerPhone: bookings.walkInCustomerPhone,
          notes: bookings.notes,
          suggestedDate: bookings.suggestedDate,
          suggestedTime: bookings.suggestedTime,
          ownerNote: bookings.ownerNote,
          // Salon details - flatten instead of nested
          salonId_joined: salons.id,
          salonName: salons.name,
          salonAddress: salons.address,
          salonPhone: salons.phone,
          // Service details - flatten instead of nested
          serviceId_joined: services.id,
          serviceName: services.name,
          servicePrice: services.price,
          serviceDuration: services.duration,
          // Staff details - flatten instead of nested
          staffId_joined: staff.id,
          staffName: staff.name,
          staffRole: staff.role
        }).from(bookings).leftJoin(salons, eq(bookings.salonId, salons.id)).leftJoin(services, eq(bookings.serviceId, services.id)).leftJoin(staff, eq(bookings.staffId, staff.id)).where(eq(bookings.customerId, customerId)).orderBy(desc(bookings.createdAt));
        const transformedResults = bookingsWithDetails.map((booking) => ({
          ...booking,
          salon: booking.salonId_joined ? {
            id: booking.salonId_joined,
            name: booking.salonName,
            address: booking.salonAddress,
            phone: booking.salonPhone
          } : null,
          service: booking.serviceId_joined ? {
            id: booking.serviceId_joined,
            name: booking.serviceName,
            price: booking.servicePrice,
            duration: booking.serviceDuration
          } : null,
          staff: booking.staffId_joined ? {
            id: booking.staffId_joined,
            name: booking.staffName,
            designation: booking.staffRole
          } : null
        }));
        return transformedResults;
      }
      async getBookingsBySalon(salonId) {
        const bookingsWithDetails = await db.select({
          // Booking fields
          id: bookings.id,
          customerId: bookings.customerId,
          salonId: bookings.salonId,
          serviceId: bookings.serviceId,
          staffId: bookings.staffId,
          timeSlotId: bookings.timeSlotId,
          date: bookings.date,
          startTime: bookings.startTime,
          endTime: bookings.endTime,
          totalAmount: bookings.totalAmount,
          status: bookings.status,
          paymentId: bookings.paymentId,
          paymentStatus: bookings.paymentStatus,
          createdAt: bookings.createdAt,
          updatedAt: bookings.updatedAt,
          isWalkIn: bookings.isWalkIn,
          walkInCustomerName: bookings.walkInCustomerName,
          walkInCustomerPhone: bookings.walkInCustomerPhone,
          notes: bookings.notes,
          suggestedDate: bookings.suggestedDate,
          suggestedTime: bookings.suggestedTime,
          ownerNote: bookings.ownerNote,
          // Customer details - flatten instead of nested
          customerId_joined: users.id,
          customerFirstName: users.firstName,
          customerEmail: users.email,
          customerPhone: users.phone,
          // Service details - flatten instead of nested
          serviceId_joined: services.id,
          serviceName: services.name,
          servicePrice: services.price,
          serviceDuration: services.duration,
          // Staff details - flatten instead of nested
          staffId_joined: staff.id,
          staffName: staff.name,
          staffRole: staff.role
        }).from(bookings).leftJoin(users, eq(bookings.customerId, users.id)).leftJoin(services, eq(bookings.serviceId, services.id)).leftJoin(staff, eq(bookings.staffId, staff.id)).where(eq(bookings.salonId, salonId)).orderBy(asc(bookings.date), asc(bookings.startTime));
        const transformedResults = bookingsWithDetails.map((booking) => ({
          ...booking,
          customer: booking.customerId_joined ? {
            id: booking.customerId_joined,
            name: booking.customerFirstName || booking.walkInCustomerName,
            email: booking.customerEmail,
            phone: booking.customerPhone || booking.walkInCustomerPhone
          } : null,
          service: booking.serviceId_joined ? {
            id: booking.serviceId_joined,
            name: booking.serviceName,
            price: booking.servicePrice,
            duration: booking.serviceDuration
          } : null,
          staff: booking.staffId_joined ? {
            id: booking.staffId_joined,
            name: booking.staffName,
            designation: booking.staffRole
          } : null
        }));
        return transformedResults;
      }
      async getBookingById(id) {
        const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
        return booking;
      }
      async updateBookingStatus(id, status, paymentId, paymentStatus, suggestedDate, suggestedTime, ownerNote) {
        const updateData = { status, updatedAt: /* @__PURE__ */ new Date() };
        if (paymentId) updateData.paymentId = paymentId;
        if (paymentStatus) updateData.paymentStatus = paymentStatus;
        if (suggestedDate !== void 0) updateData.suggestedDate = suggestedDate;
        if (suggestedTime !== void 0) updateData.suggestedTime = suggestedTime;
        if (ownerNote !== void 0) updateData.ownerNote = ownerNote;
        await db.update(bookings).set(updateData).where(eq(bookings.id, id));
      }
      async createWalkInBooking(booking) {
        const walkInBookingData = {
          ...booking,
          status: "confirmed",
          paymentStatus: booking.walkInPaymentMethod === "online" ? "pending" : "completed",
          // Leave customerId and timeSlotId null for walk-ins
          customerId: null,
          timeSlotId: null
        };
        const [newBooking] = await db.insert(bookings).values(walkInBookingData).returning();
        return newBooking;
      }
      async getWalkInBookingsBySalon(salonId) {
        return await db.select().from(bookings).where(and(eq(bookings.salonId, salonId), eq(bookings.isWalkIn, true))).orderBy(desc(bookings.createdAt));
      }
      // Review operations
      async createReview(review) {
        const [newReview] = await db.insert(reviews).values(review).returning();
        await this.updateSalonRating(review.salonId);
        return newReview;
      }
      async getReviewsBySalon(salonId) {
        const reviewsData = await db.select().from(reviews).where(eq(reviews.salonId, salonId)).orderBy(desc(reviews.createdAt));
        const reviewsWithCustomers = await Promise.all(
          reviewsData.map(async (review) => {
            let customerData = null;
            if (review.customerId) {
              const [customer] = await db.select({
                firstName: users.firstName,
                lastName: users.lastName,
                profileImageUrl: users.profileImageUrl
              }).from(users).where(eq(users.id, review.customerId));
              customerData = customer || null;
            }
            return {
              ...review,
              customerFirstName: customerData?.firstName || null,
              customerLastName: customerData?.lastName || null,
              customerProfileImage: customerData?.profileImageUrl || null
            };
          })
        );
        return reviewsWithCustomers;
      }
      async updateSalonRating(salonId) {
        const salonReviews = await this.getReviewsBySalon(salonId);
        if (salonReviews.length > 0) {
          const averageRating = salonReviews.reduce((sum, review) => sum + review.rating, 0) / salonReviews.length;
          await db.update(salons).set({
            averageRating: averageRating.toFixed(2),
            totalReviews: salonReviews.length
          }).where(eq(salons.id, salonId));
        }
      }
      // Review reply operations
      async createReviewReply(reply) {
        const [newReply] = await db.insert(reviewReplies).values(reply).returning();
        return newReply;
      }
      async getReviewReplies(reviewId) {
        return await db.select().from(reviewReplies).where(eq(reviewReplies.reviewId, reviewId)).orderBy(asc(reviewReplies.createdAt));
      }
      async updateReviewReply(replyId, replyText) {
        const [updatedReply] = await db.update(reviewReplies).set({
          replyText,
          updatedAt: sql2`now()`
        }).where(eq(reviewReplies.id, replyId)).returning();
        return updatedReply;
      }
      async deleteReviewReply(replyId) {
        await db.delete(reviewReplies).where(eq(reviewReplies.id, replyId));
      }
      // Gallery operations
      async createGalleryImage(galleryImage) {
        const [newGalleryImage] = await db.insert(salonGallery).values(galleryImage).returning();
        return newGalleryImage;
      }
      async getGalleryImagesBySalon(salonId) {
        return await db.select().from(salonGallery).where(and(eq(salonGallery.salonId, salonId), eq(salonGallery.isActive, true))).orderBy(asc(salonGallery.order), desc(salonGallery.createdAt));
      }
      async updateGalleryImage(id, galleryImage) {
        const [updatedImage] = await db.update(salonGallery).set(galleryImage).where(eq(salonGallery.id, id)).returning();
        return updatedImage;
      }
      async deleteGalleryImage(id) {
        await db.update(salonGallery).set({ isActive: false }).where(eq(salonGallery.id, id));
      }
      // Customer showcase operations
      async createCustomerShowcase(entry) {
        const [newEntry] = await db.insert(customerShowcase).values(entry).returning();
        return newEntry;
      }
      async getCustomerShowcaseBySalon(salonId) {
        return await db.select().from(customerShowcase).where(and(
          eq(customerShowcase.salonId, salonId),
          eq(customerShowcase.isApproved, true)
        )).orderBy(desc(customerShowcase.createdAt));
      }
      async getPendingCustomerShowcaseBySalon(salonId) {
        return await db.select().from(customerShowcase).where(and(
          eq(customerShowcase.salonId, salonId),
          eq(customerShowcase.isApproved, false)
        )).orderBy(desc(customerShowcase.createdAt));
      }
      async approveCustomerShowcase(id, salonId) {
        const [entry] = await db.update(customerShowcase).set({ isApproved: true, isRewarded: true, updatedAt: /* @__PURE__ */ new Date() }).where(and(
          eq(customerShowcase.id, id),
          eq(customerShowcase.salonId, salonId)
        )).returning();
        return entry;
      }
      async rejectCustomerShowcase(id, salonId) {
        await db.delete(customerShowcase).where(and(
          eq(customerShowcase.id, id),
          eq(customerShowcase.salonId, salonId)
        ));
      }
      async getCustomerShowcaseByCustomer(customerId) {
        return await db.select().from(customerShowcase).where(eq(customerShowcase.customerId, customerId)).orderBy(desc(customerShowcase.createdAt));
      }
      // Referral operations
      async getReferralByCode(referralCode) {
        const normalizedCode = referralCode.trim().toUpperCase();
        const [referral] = await db.select().from(referrals).where(eq(referrals.referralCode, normalizedCode));
        return referral;
      }
      async getReferralById(referralId) {
        const [referral] = await db.select().from(referrals).where(eq(referrals.id, referralId));
        return referral;
      }
      async createReferral(referral) {
        const [newReferral] = await db.insert(referrals).values(referral).returning();
        return newReferral;
      }
      async completeReferral(referralId, bookingId) {
        await db.update(referrals).set({
          status: "completed",
          bookingId,
          completedAt: /* @__PURE__ */ new Date()
        }).where(eq(referrals.id, referralId));
      }
      async generateUniqueReferralCode() {
        let code;
        let isUnique = false;
        while (!isUnique) {
          code = Math.random().toString(36).substring(2, 8).toUpperCase();
          const existingReferral = await this.getReferralByCode(code);
          if (!existingReferral) {
            isUnique = true;
          }
        }
        return code;
      }
      // Customer referral campaign operations
      async getOrCreateCustomerReferralCampaign(referrerId) {
        const [existingCampaign] = await db.select().from(customerReferralCampaigns).where(and(
          eq(customerReferralCampaigns.referrerId, referrerId),
          eq(customerReferralCampaigns.isCompleted, false),
          eq(customerReferralCampaigns.campaignType, "5_customer_free_booking")
        ));
        if (existingCampaign) {
          return existingCampaign;
        }
        const [newCampaign] = await db.insert(customerReferralCampaigns).values({
          referrerId,
          campaignType: "5_customer_free_booking",
          targetCount: 5,
          currentCount: 0,
          completedReferralIds: [],
          freeBookingCredits: 0
        }).returning();
        return newCampaign;
      }
      async updateCustomerReferralProgress(referrerId, referralId) {
        const campaign = await this.getOrCreateCustomerReferralCampaign(referrerId);
        if (campaign.completedReferralIds && campaign.completedReferralIds.includes(referralId)) {
          return false;
        }
        const newCount = campaign.currentCount + 1;
        const newCompletedReferralIds = [...campaign.completedReferralIds || [], referralId];
        const isCompleted = newCount >= campaign.targetCount;
        const newCredits = isCompleted ? campaign.freeBookingCredits + 1 : campaign.freeBookingCredits;
        await db.update(customerReferralCampaigns).set({
          currentCount: newCount,
          completedReferralIds: newCompletedReferralIds,
          freeBookingCredits: newCredits,
          isCompleted,
          completedAt: isCompleted ? /* @__PURE__ */ new Date() : void 0,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(customerReferralCampaigns.id, campaign.id));
        if (isCompleted) {
          const avgServicePrice = await this.calculateAverageServicePrice();
          await this.createFreeBookingCredit({
            customerId: referrerId,
            creditType: "customer_milestone",
            maxAmount: avgServicePrice.toString(),
            referenceId: campaign.id,
            description: `Free booking credit for referring 5 customers (up to \u20B9${avgServicePrice})`,
            expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3)
            // 90 days expiry
          });
        }
        return isCompleted;
      }
      // Free booking credit operations
      async createFreeBookingCredit(credit) {
        const [newCredit] = await db.insert(freeBookingCredits).values(credit).returning();
        return newCredit;
      }
      async getAvailableFreeCredits(customerId) {
        return await db.select().from(freeBookingCredits).where(and(
          eq(freeBookingCredits.customerId, customerId),
          eq(freeBookingCredits.isUsed, false),
          or(
            isNull(freeBookingCredits.expiresAt),
            gte(freeBookingCredits.expiresAt, /* @__PURE__ */ new Date())
          )
        )).orderBy(asc(freeBookingCredits.expiresAt));
      }
      async useFreeBookingCredit(creditId, bookingId) {
        await db.update(freeBookingCredits).set({
          isUsed: true,
          bookingId,
          usedAt: /* @__PURE__ */ new Date()
        }).where(eq(freeBookingCredits.id, creditId));
      }
      async calculateAverageServicePrice() {
        const [result] = await db.select({
          avgPrice: sql2`AVG(${services.price}::numeric)::float`
        }).from(services);
        return Math.round(result?.avgPrice || 300);
      }
      // Referral milestone operations
      async getOrCreateReferralMilestone(referrerId) {
        const [existingMilestone] = await db.select().from(referralMilestones).where(and(
          eq(referralMilestones.referrerId, referrerId),
          eq(referralMilestones.isCompleted, false),
          eq(referralMilestones.milestoneType, "5_customer_full_fee")
        ));
        if (existingMilestone) {
          return existingMilestone;
        }
        const [newMilestone] = await db.insert(referralMilestones).values({
          referrerId,
          milestoneType: "5_customer_full_fee",
          targetCount: 5,
          currentCount: 0,
          rewardAmount: "0",
          completedBookingIds: []
        }).returning();
        return newMilestone;
      }
      async updateReferralMilestoneProgress(referrerId, bookingId, confirmationAmount) {
        const milestone = await this.getOrCreateReferralMilestone(referrerId);
        if (milestone.completedBookingIds && milestone.completedBookingIds.includes(bookingId)) {
          return false;
        }
        const newCount = (milestone.currentCount || 0) + 1;
        const newCompletedBookingIds = [...milestone.completedBookingIds || [], bookingId];
        const newRewardAmount = parseFloat(milestone.rewardAmount) + confirmationAmount;
        const isCompleted = newCount >= milestone.targetCount;
        await db.update(referralMilestones).set({
          currentCount: newCount,
          completedBookingIds: newCompletedBookingIds,
          rewardAmount: newRewardAmount.toString(),
          isCompleted,
          completedAt: isCompleted ? /* @__PURE__ */ new Date() : void 0
        }).where(eq(referralMilestones.id, milestone.id));
        if (isCompleted) {
          await this.addWalletCredit(
            referrerId,
            newRewardAmount,
            `5-Customer Milestone Reward: 100% confirmation fees from ${milestone.targetCount} bookings`,
            milestone.id,
            "referral_milestone"
          );
        }
        return isCompleted;
      }
      // Wallet operations
      async getOrCreateWallet(customerId) {
        const [existingWallet] = await db.select().from(wallets).where(eq(wallets.customerId, customerId));
        if (existingWallet) {
          return existingWallet;
        }
        const [newWallet] = await db.insert(wallets).values({
          customerId,
          balance: "0"
        }).returning();
        return newWallet;
      }
      async addWalletCredit(customerId, amount, description, referenceId, referenceType) {
        const wallet = await this.getOrCreateWallet(customerId);
        const newBalance = parseFloat(wallet.balance || "0") + amount;
        await db.update(wallets).set({
          balance: newBalance.toString(),
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(wallets.id, wallet.id));
        await db.insert(walletTransactions).values({
          walletId: wallet.id,
          type: "credit",
          amount: amount.toString(),
          description,
          referenceId,
          referenceType
        });
      }
      async addWalletTransaction(customerId, amount, description, referenceId, referenceType) {
        await this.addWalletCredit(customerId, amount, description, referenceId, referenceType);
      }
      // Salon likes operations
      async toggleSalonLike(customerId, salonId) {
        const [existingLike] = await db.select().from(salonLikes).where(and(eq(salonLikes.customerId, customerId), eq(salonLikes.salonId, salonId)));
        if (existingLike) {
          await db.delete(salonLikes).where(and(eq(salonLikes.customerId, customerId), eq(salonLikes.salonId, salonId)));
          const likesCount = await this.getSalonLikesCount(salonId);
          return { isLiked: false, likesCount };
        } else {
          await db.insert(salonLikes).values({
            customerId,
            salonId,
            isLiked: true
          });
          const likesCount = await this.getSalonLikesCount(salonId);
          return { isLiked: true, likesCount };
        }
      }
      async getSalonLikeStatus(customerId, salonId) {
        const [like2] = await db.select().from(salonLikes).where(and(eq(salonLikes.customerId, customerId), eq(salonLikes.salonId, salonId)));
        return !!like2 && (like2.isLiked || false);
      }
      async getSalonLikesCount(salonId) {
        const result = await db.select({ count: sql2`count(*)::int` }).from(salonLikes).where(and(eq(salonLikes.salonId, salonId), eq(salonLikes.isLiked, true)));
        return result[0]?.count || 0;
      }
      async getSalonLikesByCustomer(customerId) {
        return await db.select().from(salonLikes).where(and(eq(salonLikes.customerId, customerId), eq(salonLikes.isLiked, true))).orderBy(desc(salonLikes.createdAt));
      }
      async getSalonLikesForOwner(salonId) {
        return await db.select({
          id: salonLikes.id,
          customerId: salonLikes.customerId,
          salonId: salonLikes.salonId,
          isLiked: salonLikes.isLiked,
          createdAt: salonLikes.createdAt,
          updatedAt: salonLikes.updatedAt,
          customerName: sql2`${users.firstName} || ' ' || COALESCE(${users.lastName}, '')`,
          customerEmail: users.email
        }).from(salonLikes).innerJoin(users, eq(salonLikes.customerId, users.id)).where(and(eq(salonLikes.salonId, salonId), eq(salonLikes.isLiked, true))).orderBy(desc(salonLikes.createdAt));
      }
      async getCustomerLikedSalons(customerId) {
        return await db.select({
          id: salons.id,
          name: salons.name,
          address: salons.address,
          imageUrl: salons.imageUrl,
          averageRating: salons.averageRating,
          confirmationAmount: salons.confirmationAmount,
          likesCount: sql2`(
        SELECT COUNT(*)::int 
        FROM ${salonLikes} 
        WHERE ${salonLikes.salonId} = ${salons.id} 
        AND ${salonLikes.isLiked} = true
      )`,
          likedAt: salonLikes.createdAt
        }).from(salonLikes).innerJoin(salons, eq(salonLikes.salonId, salons.id)).where(and(
          eq(salonLikes.customerId, customerId),
          eq(salonLikes.isLiked, true),
          eq(salons.isActive, true)
        )).orderBy(desc(salonLikes.createdAt));
      }
      // Automatic Payout System Methods
      async getSalonOwnerBankDetails(salonId) {
        const [account] = await db.select().from(salonOwnerAccounts).where(and(
          eq(salonOwnerAccounts.salonId, salonId),
          eq(salonOwnerAccounts.isVerified, true)
        ));
        return account;
      }
      async updateRevenueShareTransferStatus(bookingId, status, transferReference, transferDate) {
        const updateData = { transferStatus: status };
        if (transferReference) updateData.transferReference = transferReference;
        if (transferDate) updateData.transferDate = transferDate;
        await db.update(revenueShares).set(updateData).where(eq(revenueShares.bookingId, bookingId));
      }
      async getPendingRevenueShares() {
        return await db.select({
          id: revenueShares.id,
          bookingId: revenueShares.bookingId,
          salonShare: revenueShares.salonShare,
          salonId: bookings.salonId,
          salonName: salons.name
        }).from(revenueShares).innerJoin(bookings, eq(revenueShares.bookingId, bookings.id)).innerJoin(salons, eq(bookings.salonId, salons.id)).where(eq(revenueShares.transferStatus, "pending"));
      }
      // Admin operations implementation
      async getAllUsers(userType, search) {
        let query = db.select().from(users);
        const conditions = [];
        if (userType) {
          conditions.push(eq(users.userType, userType));
        }
        if (search) {
          conditions.push(
            or(
              sql2`${users.firstName} ILIKE ${`%${search}%`}`,
              sql2`${users.lastName} ILIKE ${`%${search}%`}`,
              sql2`${users.email} ILIKE ${`%${search}%`}`
            )
          );
        }
        if (conditions.length > 0) {
          query = query.where(and(...conditions));
        }
        return await query.orderBy(desc(users.createdAt));
      }
      async blockUser(userId, adminId) {
        await db.update(users).set({ isBlocked: true }).where(eq(users.id, userId));
        await this.logAdminActivity({
          adminId,
          action: "block_user",
          targetType: "user",
          targetId: userId,
          details: JSON.stringify({ action: "User blocked" })
        });
      }
      async unblockUser(userId, adminId) {
        await db.update(users).set({ isBlocked: false }).where(eq(users.id, userId));
        await this.logAdminActivity({
          adminId,
          action: "unblock_user",
          targetType: "user",
          targetId: userId,
          details: JSON.stringify({ action: "User unblocked" })
        });
      }
      async getAllSalonsForAdmin() {
        const result = await db.select({
          salon: salons,
          owner: {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            phone: users.phone
          }
        }).from(salons).leftJoin(users, eq(salons.ownerId, users.id)).orderBy(desc(salons.createdAt));
        return result.map((row) => ({
          ...row.salon,
          owner: row.owner
        }));
      }
      async getPendingSalons() {
        const result = await db.select({
          salon: salons,
          owner: {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            phone: users.phone
          }
        }).from(salons).leftJoin(users, eq(salons.ownerId, users.id)).where(eq(salons.verificationStatus, "pending")).orderBy(desc(salons.createdAt));
        return result.map((row) => ({
          ...row.salon,
          owner: row.owner
        }));
      }
      async approveSalon(salonId, adminId, notes) {
        await db.update(salons).set({
          verificationStatus: "approved",
          verificationNotes: notes,
          verifiedAt: /* @__PURE__ */ new Date(),
          verifiedBy: adminId
        }).where(eq(salons.id, salonId));
        await this.logAdminActivity({
          adminId,
          action: "approve_salon",
          targetType: "salon",
          targetId: salonId,
          details: JSON.stringify({ notes })
        });
      }
      async rejectSalon(salonId, adminId, reason) {
        await db.update(salons).set({
          verificationStatus: "rejected",
          rejectedAt: /* @__PURE__ */ new Date(),
          rejectedBy: adminId,
          rejectionReason: reason,
          verificationNotes: reason
        }).where(eq(salons.id, salonId));
        await this.logAdminActivity({
          adminId,
          action: "reject_salon",
          targetType: "salon",
          targetId: salonId,
          details: JSON.stringify({ reason })
        });
      }
      async uploadVerificationDocument(doc) {
        const [document] = await db.insert(verificationDocuments).values(doc).returning();
        return document;
      }
      async getVerificationDocuments(salonId) {
        return await db.select().from(verificationDocuments).where(eq(verificationDocuments.salonId, salonId)).orderBy(desc(verificationDocuments.uploadedAt));
      }
      async logAdminActivity(log) {
        const [activity] = await db.insert(adminActivityLogs).values(log).returning();
        return activity;
      }
      async getAdminActivityLogs(limit = 50) {
        return await db.select().from(adminActivityLogs).orderBy(desc(adminActivityLogs.createdAt)).limit(limit);
      }
      async createContentModeration(moderation) {
        const [mod] = await db.insert(contentModerations).values(moderation).returning();
        return mod;
      }
      async getContentModerations(status) {
        let query = db.select().from(contentModerations);
        if (status) {
          query = query.where(eq(contentModerations.status, status));
        }
        return await query.orderBy(desc(contentModerations.createdAt));
      }
      async updateContentModeration(id, updates) {
        await db.update(contentModerations).set(updates).where(eq(contentModerations.id, id));
      }
      async getAdminDashboardStats() {
        const [customersCount] = await db.select({ count: sql2`count(*)` }).from(users).where(eq(users.userType, "customer"));
        const [salonsCount] = await db.select({ count: sql2`count(*)` }).from(salons);
        const [pendingSalonsCount] = await db.select({ count: sql2`count(*)` }).from(salons).where(eq(salons.verificationStatus, "pending"));
        const [bookingsCount] = await db.select({ count: sql2`count(*)` }).from(bookings);
        const [totalRevenue] = await db.select({ total: sql2`coalesce(sum(${revenueShares.platformShare}), 0)` }).from(revenueShares).innerJoin(bookings, eq(revenueShares.bookingId, bookings.id)).where(eq(bookings.paymentStatus, "completed"));
        return {
          totalCustomers: customersCount?.count || 0,
          totalSalons: salonsCount?.count || 0,
          pendingSalons: pendingSalonsCount?.count || 0,
          totalBookings: bookingsCount?.count || 0,
          totalRevenue: totalRevenue?.total || 0
        };
      }
      async getPlatformAnalytics(days = 30) {
        return await db.select().from(platformAnalytics).orderBy(desc(platformAnalytics.date)).limit(days);
      }
      // Password reset operations
      async findUserForPasswordReset(email, phone) {
        const [directUser] = await db.select().from(users).where(and(eq(users.email, email), eq(users.phone, phone)));
        if (directUser) {
          return directUser;
        }
        const [salonOwner] = await db.select({
          id: users.id,
          email: users.email,
          password: users.password,
          firstName: users.firstName,
          lastName: users.lastName,
          phone: users.phone,
          profileImageUrl: users.profileImageUrl,
          userType: users.userType,
          isBlocked: users.isBlocked,
          isSocialAuth: users.isSocialAuth,
          socialProvider: users.socialProvider,
          socialId: users.socialId,
          createdAt: users.createdAt,
          updatedAt: users.updatedAt
        }).from(users).innerJoin(salons, eq(salons.ownerId, users.id)).where(and(
          eq(users.email, email),
          eq(salons.phone, phone),
          eq(users.userType, "salon_owner")
        ));
        return salonOwner;
      }
      // Password reset OTP operations
      async createPasswordResetOtp(otpData) {
        const [otp] = await db.insert(passwordResetOtps).values(otpData).returning();
        return otp;
      }
      async getValidPasswordResetOtp(phone, otp) {
        const [otpRecord] = await db.select().from(passwordResetOtps).where(
          and(
            eq(passwordResetOtps.phone, phone),
            eq(passwordResetOtps.otp, otp),
            eq(passwordResetOtps.isUsed, false),
            gte(passwordResetOtps.expiresAt, /* @__PURE__ */ new Date())
          )
        );
        return otpRecord;
      }
      async getValidPasswordResetOtpByEmail(email, otp) {
        const [otpRecord] = await db.select().from(passwordResetOtps).where(
          and(
            eq(passwordResetOtps.email, email),
            eq(passwordResetOtps.otp, otp),
            eq(passwordResetOtps.isUsed, false),
            gte(passwordResetOtps.expiresAt, /* @__PURE__ */ new Date())
          )
        ).orderBy(passwordResetOtps.createdAt).limit(1);
        return otpRecord;
      }
      async markPasswordResetOtpUsed(id) {
        await db.update(passwordResetOtps).set({ isUsed: true }).where(eq(passwordResetOtps.id, id));
      }
      async updateUserPassword(email, hashedPassword) {
        const [user] = await db.update(users).set({ password: hashedPassword, updatedAt: /* @__PURE__ */ new Date() }).where(eq(users.email, email)).returning();
        return user;
      }
      // Emergency booking operations
      async createEmergencyWaitlist(waitlist) {
        const [emergencyWaitlist] = await db.insert(emergencyBookingWaitlist).values(waitlist).returning();
        return emergencyWaitlist;
      }
      async getEmergencyWaitlistBySalon(salonId) {
        return await db.select().from(emergencyBookingWaitlist).where(eq(emergencyBookingWaitlist.salonId, salonId)).orderBy(desc(emergencyBookingWaitlist.createdAt));
      }
      async getEmergencyWaitlistByCustomer(customerId) {
        return await db.select().from(emergencyBookingWaitlist).where(eq(emergencyBookingWaitlist.customerId, customerId)).orderBy(desc(emergencyBookingWaitlist.createdAt));
      }
      async updateEmergencyWaitlistStatus(id, status, assignedSlotId, assignedBookingId) {
        const updateData = { status, updatedAt: /* @__PURE__ */ new Date() };
        if (assignedSlotId) updateData.assignedSlotId = assignedSlotId;
        if (assignedBookingId) updateData.assignedBookingId = assignedBookingId;
        if (status === "confirmed") updateData.confirmedAt = /* @__PURE__ */ new Date();
        await db.update(emergencyBookingWaitlist).set(updateData).where(eq(emergencyBookingWaitlist.id, id));
      }
      async getActiveEmergencyBookings(salonId, date) {
        const result = await db.select({ count: sql2`count(*)` }).from(emergencyBookingWaitlist).where(
          and(
            eq(emergencyBookingWaitlist.salonId, salonId),
            eq(emergencyBookingWaitlist.preferredDate, date),
            eq(emergencyBookingWaitlist.status, "confirmed")
          )
        );
        return result[0]?.count || 0;
      }
      // Salon emergency configuration
      async getSalonEmergencyConfig(salonId) {
        const [config] = await db.select().from(salonEmergencyConfig).where(eq(salonEmergencyConfig.salonId, salonId));
        return config;
      }
      async upsertSalonEmergencyConfig(config) {
        const [emergencyConfig] = await db.insert(salonEmergencyConfig).values(config).onConflictDoUpdate({
          target: salonEmergencyConfig.salonId,
          set: {
            ...config,
            updatedAt: /* @__PURE__ */ new Date()
          }
        }).returning();
        return emergencyConfig;
      }
      // Emergency slots operations
      async createEmergencySlot(slot) {
        const [emergencySlot] = await db.insert(emergencySlots).values(slot).returning();
        return emergencySlot;
      }
      async getAvailableEmergencySlots(salonId, date) {
        return await db.select().from(emergencySlots).where(
          and(
            eq(emergencySlots.salonId, salonId),
            eq(emergencySlots.date, date),
            eq(emergencySlots.isBooked, false)
          )
        ).orderBy(asc(emergencySlots.startTime));
      }
      async bookEmergencySlot(slotId, bookingId) {
        await db.update(emergencySlots).set({ isBooked: true, bookingId }).where(eq(emergencySlots.id, slotId));
      }
      async getEmergencySlotsBySalon(salonId) {
        return await db.select().from(emergencySlots).where(eq(emergencySlots.salonId, salonId)).orderBy(desc(emergencySlots.createdAt));
      }
      // Smart scheduling operations implementation
      async getSalonStaff(salonId) {
        const staffMembers = await db.select().from(staff).where(and(eq(staff.salonId, salonId), eq(staff.isActive, true))).orderBy(staff.name);
        return staffMembers.map((member) => ({
          ...member,
          photoUrl: member.photoUrl ? member.photoUrl.startsWith("/objects/") ? member.photoUrl : `/objects/uploads/${member.photoUrl}` : null
        }));
      }
      async createStaffMember(staffData) {
        const [newStaff] = await db.insert(staff).values(staffData).returning();
        return newStaff;
      }
      async updateStaffMember(staffId, updates) {
        const [updatedStaff] = await db.update(staff).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(staff.id, staffId)).returning();
        return updatedStaff;
      }
      async deleteStaffMember(staffId) {
        await db.update(staff).set({ isActive: false, updatedAt: /* @__PURE__ */ new Date() }).where(eq(staff.id, staffId));
      }
      // Staff working hours operations
      async upsertStaffWorkingHours(workingHour) {
        const [result] = await db.insert(staffWorkingHours).values(workingHour).onConflictDoUpdate({
          target: [staffWorkingHours.staffId, staffWorkingHours.dayOfWeek],
          set: {
            ...workingHour,
            updatedAt: /* @__PURE__ */ new Date()
          }
        }).returning();
        return result;
      }
      async getStaffWorkingHours(staffId) {
        return await db.select().from(staffWorkingHours).where(eq(staffWorkingHours.staffId, staffId)).orderBy(staffWorkingHours.dayOfWeek);
      }
      async getStaffWorkingHoursByDay(staffId, dayOfWeek) {
        const [result] = await db.select().from(staffWorkingHours).where(and(
          eq(staffWorkingHours.staffId, staffId),
          eq(staffWorkingHours.dayOfWeek, dayOfWeek)
        ));
        return result;
      }
      // This function has been moved earlier in the file - removing duplicate
      async removeServiceFromStaff(staffId, serviceId) {
        await db.update(staffServices).set({ isActive: false }).where(and(
          eq(staffServices.staffId, staffId),
          eq(staffServices.serviceId, serviceId)
        ));
      }
      // getStaffServices function already exists earlier - removing duplicate
      async getStaffByService(serviceId) {
        return await db.select({
          staffId: staff.id,
          staffName: staff.name,
          staffRole: staff.role,
          staffRating: staff.rating,
          customPrice: staffServices.customPrice,
          estimatedDuration: staffServices.estimatedDuration
        }).from(staff).innerJoin(staffServices, eq(staff.id, staffServices.staffId)).where(and(
          eq(staffServices.serviceId, serviceId),
          eq(staffServices.isActive, true),
          eq(staff.isActive, true)
        )).orderBy(staff.rating, staff.name);
      }
      // Staff holidays management
      async createStaffHoliday(holiday) {
        const [newHoliday] = await db.insert(staffHolidays).values(holiday).returning();
        return newHoliday;
      }
      async getStaffHolidays(staffId) {
        return await db.select().from(staffHolidays).where(eq(staffHolidays.staffId, staffId)).orderBy(desc(staffHolidays.date));
      }
      async approveStaffHoliday(holidayId, approvedBy) {
        await db.update(staffHolidays).set({
          isApproved: true,
          approvedBy,
          approvedAt: /* @__PURE__ */ new Date()
        }).where(eq(staffHolidays.id, holidayId));
      }
      async deleteStaffHoliday(holidayId) {
        await db.delete(staffHolidays).where(eq(staffHolidays.id, holidayId));
      }
      // Staff time slots operations
      async createStaffTimeSlots(staffId, date, slots) {
        await db.delete(staffTimeSlots).where(and(
          eq(staffTimeSlots.staffId, staffId),
          eq(staffTimeSlots.date, date)
        ));
        if (slots.length > 0) {
          return await db.insert(staffTimeSlots).values(slots).returning();
        }
        return [];
      }
      async getStaffTimeSlots(staffId, date) {
        return await db.select().from(staffTimeSlots).where(and(
          eq(staffTimeSlots.staffId, staffId),
          eq(staffTimeSlots.date, date)
        )).orderBy(staffTimeSlots.startTime);
      }
      async updateStaffTimeSlotAvailability(slotId, isAvailable) {
        await db.update(staffTimeSlots).set({ isAvailable }).where(eq(staffTimeSlots.id, slotId));
      }
      async deleteStaffTimeSlots(staffId, date) {
        await db.delete(staffTimeSlots).where(and(
          eq(staffTimeSlots.staffId, staffId),
          eq(staffTimeSlots.date, date)
        ));
      }
      // Schedule templates
      async createScheduleTemplate(template) {
        const [newTemplate] = await db.insert(scheduleTemplates).values(template).returning();
        return newTemplate;
      }
      async getScheduleTemplates(salonId) {
        return await db.select().from(scheduleTemplates).where(and(
          eq(scheduleTemplates.salonId, salonId),
          eq(scheduleTemplates.isActive, true)
        )).orderBy(scheduleTemplates.name);
      }
      async deleteScheduleTemplate(templateId) {
        await db.update(scheduleTemplates).set({ isActive: false }).where(eq(scheduleTemplates.id, templateId));
      }
      // Helper methods for time conversion
      minutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
      }
      // Enhanced slot generation methods
      async generateBulkStaffSlots(salonId, startDate, endDate) {
        console.log(`[BULK GENERATION] Processing bulk slots for salon ${salonId} from ${startDate} to ${endDate}`);
        let totalGenerated = 0;
        const currentDate = new Date(startDate);
        const endDateObj = new Date(endDate);
        while (currentDate <= endDateObj) {
          const dateStr2 = currentDate.toISOString().split("T")[0];
          console.log(`[BULK GENERATION] Generating slots for date ${dateStr2}`);
          try {
            const result = await this.generateStaffBasedSlots(salonId, dateStr2);
            totalGenerated += result.generated;
            console.log(`[BULK GENERATION] Generated ${result.generated} slots for ${dateStr2}`);
          } catch (error) {
            console.error(`[BULK GENERATION] Error generating slots for ${dateStr2}:`, error);
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        console.log(`[BULK GENERATION] Completed bulk generation: ${totalGenerated} total slots created`);
        return {
          totalGenerated,
          message: `Successfully generated ${totalGenerated} slots from ${startDate} to ${endDate}`
        };
      }
      async generateDynamicStaffSlots(salonId, staffId, date, openingTime, closingTime, breakDuration) {
        console.log(`[DYNAMIC GENERATION] Generating dynamic slots for staff ${staffId} on ${date} (${openingTime}-${closingTime}, break: ${breakDuration}min)`);
        const staffInfo = await db.select({
          staffId: staff.id,
          staffName: staff.name,
          serviceId: staffServices.serviceId,
          serviceName: services.name,
          serviceDuration: services.duration,
          estimatedDuration: staffServices.estimatedDuration,
          customPrice: staffServices.customPrice,
          servicePrice: services.price
        }).from(staff).leftJoin(staffServices, and(
          eq(staffServices.staffId, staff.id),
          eq(staffServices.isActive, true)
        )).leftJoin(services, eq(services.id, staffServices.serviceId)).where(and(
          eq(staff.salonId, salonId),
          eq(staff.id, staffId),
          eq(staff.isActive, true)
        ));
        if (staffInfo.length === 0 || !staffInfo[0].serviceId) {
          console.log(`[DYNAMIC GENERATION] No active staff member or services found for staff ${staffId}`);
          return { generated: 0, staffName: "Unknown", message: "No active services assigned to this staff member" };
        }
        const existingBookings = await db.select({
          startTime: bookings.startTime,
          endTime: bookings.endTime
        }).from(bookings).where(and(
          eq(bookings.salonId, salonId),
          eq(bookings.staffId, staffId),
          eq(bookings.date, date),
          eq(bookings.status, "confirmed")
        ));
        const openingMinutes = this.timeToMinutes(openingTime);
        const closingMinutes = this.timeToMinutes(closingTime);
        const workingMinutes = closingMinutes - openingMinutes;
        const breakStartMinutes = openingMinutes + Math.floor(workingMinutes / 2);
        const breakEndMinutes = breakStartMinutes + breakDuration;
        const slots = [];
        const staffName = staffInfo[0].staffName;
        const servicesByDuration = staffInfo.reduce((acc, service) => {
          if (service.serviceId) {
            const duration = service.estimatedDuration || service.serviceDuration;
            const durationKey = String(duration);
            if (!acc[durationKey]) acc[durationKey] = [];
            acc[durationKey].push(service);
          }
          return acc;
        }, {});
        const allServices = Object.values(servicesByDuration).flat();
        let serviceIndex = 0;
        let currentTime = openingMinutes;
        while (currentTime < closingMinutes) {
          if (currentTime >= breakStartMinutes && currentTime < breakEndMinutes) {
            currentTime = breakEndMinutes;
            continue;
          }
          const currentService = allServices[serviceIndex % allServices.length];
          const serviceDuration = currentService.estimatedDuration || currentService.serviceDuration;
          const endTime = currentTime + serviceDuration;
          if (endTime > closingMinutes) {
            break;
          }
          if (currentTime < breakEndMinutes && endTime > breakStartMinutes) {
            currentTime = breakEndMinutes;
            continue;
          }
          const startTimeStr = this.minutesToTime(currentTime);
          const endTimeStr = this.minutesToTime(endTime);
          const hasConflict = existingBookings.some((booking) => {
            const bookingStart = this.timeToMinutes(booking.startTime);
            const bookingEnd = this.timeToMinutes(booking.endTime);
            return currentTime < bookingEnd && endTime > bookingStart;
          });
          if (!hasConflict) {
            slots.push({
              id: crypto.randomUUID(),
              salonId,
              staffId,
              serviceId: currentService.serviceId,
              date,
              startTime: startTimeStr,
              endTime: endTimeStr,
              isAvailable: true,
              slotType: "regular",
              price: currentService.customPrice || currentService.servicePrice
            });
          }
          currentTime = endTime;
          serviceIndex++;
        }
        await db.delete(timeSlots).where(and(
          eq(timeSlots.salonId, salonId),
          eq(timeSlots.staffId, staffId),
          eq(timeSlots.date, date),
          eq(timeSlots.slotType, "regular")
        ));
        if (slots.length > 0) {
          await db.insert(timeSlots).values(slots);
        }
        console.log(`[DYNAMIC GENERATION] Generated ${slots.length} dynamic service-based slots for ${staffName}`);
        return {
          generated: slots.length,
          staffName,
          message: `Generated ${slots.length} service-based slots with custom working hours and break time`
        };
      }
      // Payment processing functions (stubs for future implementation)
      async createSalonFundAccount(salonId, bankDetails) {
        console.log(`Creating fund account for salon ${salonId}`, bankDetails);
        return { success: true, fundAccountId: `fa_${Date.now()}` };
      }
      async processSalonPayout(salonId, amount, transferReference) {
        console.log(`Processing payout for salon ${salonId}, amount: ${amount}, reference: ${transferReference}`);
        return { success: true, transferId: `tr_${Date.now()}`, status: "completed" };
      }
      // Access to db for the smart scheduling service
      get db() {
        return db;
      }
      // Admin settings operations
      async getAdminSettings() {
        const { adminSettings: adminSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        return db.select().from(adminSettings2);
      }
      async getAdminSetting(settingKey) {
        const { adminSettings: adminSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const [setting] = await db.select().from(adminSettings2).where(eq(adminSettings2.settingKey, settingKey));
        return setting;
      }
      async updateAdminSetting(settingKey, settingValue, updatedBy) {
        const { adminSettings: adminSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const existingSetting = await this.getAdminSetting(settingKey);
        if (existingSetting) {
          const [updated] = await db.update(adminSettings2).set({
            settingValue,
            updatedBy,
            updatedAt: /* @__PURE__ */ new Date()
          }).where(eq(adminSettings2.settingKey, settingKey)).returning();
          return updated;
        } else {
          const [created] = await db.insert(adminSettings2).values({
            settingKey,
            settingValue,
            updatedBy
          }).returning();
          return created;
        }
      }
      // Staff registration operations
      async createStaffRegistration(data) {
        const { nanoid: nanoid2 } = await import("nanoid");
        const id = nanoid2();
        const [created] = await db.insert(staffRegistrations).values({ ...data, id }).returning();
        return created;
      }
      async getAllStaffRegistrations() {
        return db.select().from(staffRegistrations).orderBy(desc(staffRegistrations.createdAt));
      }
      async getStaffRegistrationById(id) {
        const [reg] = await db.select().from(staffRegistrations).where(eq(staffRegistrations.id, id));
        return reg;
      }
    };
    storage = new DatabaseStorage();
  }
});

// server/welcomeEmail.ts
var welcomeEmail_exports = {};
__export(welcomeEmail_exports, {
  sendDiscountCardEmail: () => sendDiscountCardEmail,
  sendWelcomeEmail: () => sendWelcomeEmail,
  testEmailConnection: () => testEmailConnection
});
var sendWelcomeEmail, sendDiscountCardEmail, testEmailConnection;
var init_welcomeEmail = __esm({
  "server/welcomeEmail.ts"() {
    "use strict";
    sendWelcomeEmail = async (_userEmail, _userName, _userType) => false;
    sendDiscountCardEmail = async (_customerEmail, _salonName, _discountPercentage, _cardId) => false;
    testEmailConnection = async () => false;
  }
});

// server/emailService.ts
var emailService_exports = {};
__export(emailService_exports, {
  generateBookingCancellationEmail: () => generateBookingCancellationEmail,
  generateBookingConfirmationEmail: () => generateBookingConfirmationEmail,
  sendEmail: () => sendEmail,
  sendEmailVerificationOtp: () => sendEmailVerificationOtp,
  sendEmailWithGmail: () => sendEmailWithGmail
});
async function sendEmail(_msg) {
  return false;
}
async function sendEmailWithGmail(_to, _subject, _html) {
  return false;
}
async function sendEmailVerificationOtp(_email, _otp, _userType) {
  return false;
}
function generateBookingConfirmationEmail(_customerName, _salonName, _serviceName, _date, _time, _amount) {
  return "";
}
function generateBookingCancellationEmail(_customerName, _salonName, _serviceName, _date, _time) {
  return "";
}
var init_emailService = __esm({
  "server/emailService.ts"() {
    "use strict";
  }
});

// server/whatsapp.ts
var whatsapp_exports = {};
__export(whatsapp_exports, {
  generateOTP: () => generateOTP,
  sendPasswordResetOTP: () => sendPasswordResetOTP,
  sendWhatsAppMessage: () => sendWhatsAppMessage
});
async function sendWhatsAppMessage(_msg) {
  return false;
}
function generateOTP() {
  return Math.floor(1e5 + Math.random() * 9e5).toString();
}
async function sendPasswordResetOTP(_phone, _otp) {
  return false;
}
var init_whatsapp = __esm({
  "server/whatsapp.ts"() {
    "use strict";
  }
});

// server/email-notifications.ts
var email_notifications_exports = {};
__export(email_notifications_exports, {
  getBookingNotificationData: () => getBookingNotificationData,
  sendBookingCompletionEmail: () => sendBookingCompletionEmail,
  sendBookingConfirmationEmail: () => sendBookingConfirmationEmail,
  sendBookingReminderEmail: () => sendBookingReminderEmail,
  sendSalonOwnerBookingEmail: () => sendSalonOwnerBookingEmail
});
async function sendBookingConfirmationEmail(_data) {
  return false;
}
async function sendBookingReminderEmail(_data) {
  return false;
}
async function sendBookingCompletionEmail(_data) {
  return false;
}
async function getBookingNotificationData(_bookingId) {
  return null;
}
async function sendSalonOwnerBookingEmail(_data) {
  return false;
}
var init_email_notifications = __esm({
  "server/email-notifications.ts"() {
    "use strict";
  }
});

// server/notifications.ts
var notifications_exports = {};
__export(notifications_exports, {
  logInAppNotification: () => logInAppNotification,
  notifyCustomer30MinReminder: () => notifyCustomer30MinReminder,
  notifyCustomerAutoCancel: () => notifyCustomerAutoCancel,
  notifyCustomerBookingAccepted: () => notifyCustomerBookingAccepted,
  notifyCustomerBookingRejected: () => notifyCustomerBookingRejected,
  notifyCustomerBookingRequested: () => notifyCustomerBookingRequested,
  notifyCustomerRescheduleSuggested: () => notifyCustomerRescheduleSuggested,
  notifyFollowersNewOffer: () => notifyFollowersNewOffer,
  notifyOwnerNewBooking: () => notifyOwnerNewBooking,
  notifyReEngagement: () => notifyReEngagement,
  sendBookingCancellationNotification: () => sendBookingCancellationNotification,
  sendBookingConfirmationNotification: () => sendBookingConfirmationNotification,
  sendDayBeforeReminder: () => sendDayBeforeReminder,
  sendEmailNotification: () => sendEmailNotification,
  sendHourBeforeReminder: () => sendHourBeforeReminder,
  sendNotification: () => sendNotification,
  sendPushToUser: () => sendPushToUser,
  sendSMSNotification: () => sendSMSNotification,
  sendSalonOwnerBookingNotification: () => sendSalonOwnerBookingNotification,
  sendWebPushNotification: () => sendWebPushNotification
});
import webpush from "web-push";
import { eq as eq4, and as and3, inArray } from "drizzle-orm";
async function sendNotification(payload) {
  try {
    console.log(`Sending notification to user ${payload.userId}: ${payload.title}`);
    const [userSettings] = await db.select().from(notificationSettings).where(eq4(notificationSettings.userId, payload.userId));
    if (!userSettings) {
      console.log(`No notification settings found for user ${payload.userId}, creating default settings and proceeding with email notification`);
      try {
        await db.insert(notificationSettings).values({
          userId: payload.userId,
          emailNotifications: true,
          webPushNotifications: true,
          smsNotifications: true,
          bookingConfirmation: true,
          bookingReminder: true,
          dayBeforeReminder: true,
          hourBeforeReminder: true,
          promotionalNotifications: false
        });
        const emailResult = await sendEmailNotification(payload);
        console.log(`Email notification sent directly to user ${payload.userId}: ${emailResult?.success}`);
        return [emailResult];
      } catch (error) {
        console.error(`Failed to create default notification settings for user ${payload.userId}:`, error);
        const emailResult = await sendEmailNotification(payload);
        return [emailResult];
      }
    }
    const isTypeEnabled = checkNotificationTypeEnabled(userSettings, payload.type);
    if (!isTypeEnabled) {
      console.log(`Notification type ${payload.type} is disabled for user ${payload.userId}`);
      return;
    }
    const results = [];
    if (userSettings.webPushNotifications) {
      const pushResult = await sendWebPushNotification(payload);
      results.push(pushResult);
    }
    if (userSettings.emailNotifications) {
      const emailResult = await sendEmailNotification(payload);
      results.push(emailResult);
    }
    if (userSettings.smsNotifications) {
      const smsResult = await sendSMSNotification(payload);
      results.push(smsResult);
    }
    console.log(`Notification sent successfully to user ${payload.userId}`);
    return results;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
}
function checkNotificationTypeEnabled(settings, type) {
  switch (type) {
    case "booking_confirmation":
      return settings.bookingConfirmation;
    case "booking_reminder":
      return settings.bookingReminder;
    case "day_before_reminder":
      return settings.dayBeforeReminder;
    case "hour_before_reminder":
      return settings.hourBeforeReminder;
    case "promotional":
      return settings.promotionalNotifications;
    default:
      return false;
  }
}
async function sendWebPushNotification(payload) {
  try {
    const subscriptions = await db.select().from(pushSubscriptions).where(and3(eq4(pushSubscriptions.userId, payload.userId), eq4(pushSubscriptions.isActive, true)));
    if (subscriptions.length === 0) {
      console.log(`No push subscriptions found for user ${payload.userId}`);
      return null;
    }
    const pushPayload = JSON.stringify({
      title: payload.title,
      body: payload.message,
      icon: "/icon-192x192.png",
      badge: "/badge-72x72.png",
      tag: `${payload.type}-${payload.bookingId || Date.now()}`,
      requireInteraction: payload.type !== "promotional",
      data: {
        bookingId: payload.bookingId,
        type: payload.type,
        url: payload.bookingId ? `/bookings` : "/",
        ...payload.data
      }
    });
    const results = [];
    for (const subscription of subscriptions) {
      try {
        const webpushSubscription = {
          endpoint: subscription.endpoint,
          keys: {
            p256dh: subscription.p256dhKey,
            auth: subscription.authKey
          }
        };
        await webpush.sendNotification(webpushSubscription, pushPayload);
        await logNotification({
          userId: payload.userId,
          type: payload.type,
          title: payload.title,
          message: payload.message,
          channel: "web_push",
          status: "sent",
          bookingId: payload.bookingId
        });
        results.push({ success: true, channel: "web_push" });
      } catch (error) {
        console.error(`Failed to send push notification to subscription ${subscription.id}:`, error);
        if (error.statusCode === 410 || error.statusCode === 413) {
          await db.delete(pushSubscriptions).where(eq4(pushSubscriptions.id, subscription.id));
        }
        await logNotification({
          userId: payload.userId,
          type: payload.type,
          title: payload.title,
          message: payload.message,
          channel: "web_push",
          status: "failed",
          bookingId: payload.bookingId
        });
        results.push({ success: false, channel: "web_push", error: error.message });
      }
    }
    return results;
  } catch (error) {
    console.error("Error sending web push notification:", error);
    throw error;
  }
}
async function sendEmailNotification(payload) {
  try {
    const [user] = await db.select().from(users).where(eq4(users.id, payload.userId));
    if (!user || !user.email) {
      console.log(`No email found for user ${payload.userId}`);
      return null;
    }
    const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
    const emailSent = await sendEmail2({
      to: user.email,
      subject: payload.title,
      html: payload.message
    });
    await logNotification({
      userId: payload.userId,
      type: payload.type,
      title: payload.title,
      message: payload.message,
      channel: "email",
      status: emailSent ? "sent" : "failed",
      bookingId: payload.bookingId,
      failureReason: emailSent ? void 0 : "Email service failed"
    });
    return { success: emailSent, channel: "email" };
  } catch (error) {
    console.error("Error sending email notification:", error);
    await logNotification({
      userId: payload.userId,
      type: payload.type,
      title: payload.title,
      message: payload.message,
      channel: "email",
      status: "failed",
      bookingId: payload.bookingId,
      failureReason: error instanceof Error ? error.message : "Unknown error"
    });
    return { success: false, channel: "email", error };
  }
}
async function sendSMSNotification(payload) {
  try {
    const [user] = await db.select().from(users).where(eq4(users.id, payload.userId));
    if (!user) {
      console.log(`User not found: ${payload.userId}`);
      return null;
    }
    const { sendWhatsAppMessage: sendWhatsAppMessage2 } = await Promise.resolve().then(() => (init_whatsapp(), whatsapp_exports));
    const smsMessage = payload.type === "booking_confirmation" ? `Booking Confirmed! Your appointment has been confirmed. Check your email for full details. - Sanwar` : `Booking Cancelled. Your appointment has been cancelled. Check your email for details. - Sanwar`;
    let smsSent = false;
    if (user.phone) {
      smsSent = await sendWhatsAppMessage2({
        to: user.phone,
        body: smsMessage
      });
    }
    await logNotification({
      userId: payload.userId,
      type: payload.type,
      title: payload.title,
      message: smsMessage,
      channel: "sms",
      status: smsSent ? "sent" : "failed",
      bookingId: payload.bookingId,
      failureReason: smsSent ? void 0 : user.phone ? "SMS service failed" : "No phone number available"
    });
    return {
      success: smsSent,
      channel: "sms",
      error: !smsSent ? user.phone ? "SMS service failed" : "No phone number available" : void 0
    };
  } catch (error) {
    console.error("Error sending SMS notification:", error);
    await logNotification({
      userId: payload.userId,
      type: payload.type,
      title: payload.title,
      message: payload.message,
      channel: "sms",
      status: "failed",
      bookingId: payload.bookingId
    });
    return { success: false, channel: "sms", error };
  }
}
async function logNotification(data) {
  try {
    await db.insert(notificationHistory).values({
      userId: data.userId,
      type: data.type,
      title: data.title,
      message: data.message,
      channel: data.channel,
      status: data.status,
      bookingId: data.bookingId,
      failureReason: data.failureReason,
      actionUrl: data.actionUrl,
      sentAt: /* @__PURE__ */ new Date()
    });
  } catch (error) {
    console.error("Error logging notification:", error);
  }
}
async function logInAppNotification(data) {
  try {
    await db.insert(notificationHistory).values({
      userId: data.userId,
      type: data.type,
      title: data.title,
      message: data.message,
      channel: "in_app",
      status: "delivered",
      bookingId: data.bookingId,
      actionUrl: data.actionUrl,
      sentAt: /* @__PURE__ */ new Date()
    });
  } catch (error) {
    console.error("Error logging in-app notification:", error);
  }
}
async function sendSalonOwnerBookingNotification(bookingId) {
  try {
    const [booking] = await db.select({
      id: bookings.id,
      customerId: bookings.customerId,
      date: bookings.date,
      startTime: bookings.startTime,
      endTime: bookings.endTime,
      status: bookings.status,
      totalAmount: bookings.totalAmount,
      confirmationAmount: bookings.confirmationAmount,
      salon: {
        id: salons.id,
        name: salons.name,
        address: salons.address,
        phone: salons.phone,
        ownerId: salons.ownerId
      },
      service: {
        name: services.name,
        price: services.price,
        duration: services.duration
      }
    }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(eq4(bookings.id, bookingId));
    if (!booking) {
      console.error(`Booking not found: ${bookingId}`);
      return;
    }
    if (!booking.salon?.ownerId) {
      console.error(`Salon owner not found for booking: ${bookingId}`);
      return;
    }
    const [salonOwner] = await db.select().from(users).where(eq4(users.id, booking.salon.ownerId));
    if (!salonOwner || !salonOwner.email) {
      console.error(`Salon owner user not found or no email: ${booking.salon.ownerId}`);
      return;
    }
    const [customer] = await db.select().from(users).where(eq4(users.id, booking.customerId ?? ""));
    if (!customer) {
      console.error(`Customer not found: ${booking.customerId}`);
      return;
    }
    const { sendSalonOwnerBookingEmail: sendSalonOwnerBookingEmail2 } = await Promise.resolve().then(() => (init_email_notifications(), email_notifications_exports));
    const emailData = {
      bookingId: booking.id,
      customerName: `${customer.firstName} ${customer.lastName}` || "Customer",
      customerEmail: customer.email || "",
      customerPhone: customer.phone || "",
      ownerName: `${salonOwner.firstName} ${salonOwner.lastName}` || "Salon Owner",
      ownerEmail: salonOwner.email ?? "",
      salonName: booking.salon?.name || "Your Salon",
      serviceName: booking.service?.name || "Service",
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      totalAmount: booking.totalAmount.toString(),
      confirmationAmount: (booking.confirmationAmount || "0").toString(),
      salonAddress: booking.salon?.address,
      salonPhone: booking.salon?.phone ?? void 0,
      status: booking.status ?? "pending"
    };
    console.log(`\u{1F4E7} Sending rich booking notification email to salon owner: ${salonOwner.firstName} (${salonOwner.email})`);
    const emailSent = await sendSalonOwnerBookingEmail2(emailData);
    if (emailSent) {
      await logNotification({
        userId: booking.salon.ownerId,
        type: "new_booking_received",
        title: "New Booking Received! \u{1F4C5}",
        message: `Rich HTML booking notification sent to ${salonOwner.email}`,
        channel: "email",
        status: "sent",
        bookingId: booking.id
      });
    } else {
      await logNotification({
        userId: booking.salon.ownerId,
        type: "new_booking_received",
        title: "New Booking Received! \u{1F4C5}",
        message: `Failed to send booking notification to ${salonOwner.email}`,
        channel: "email",
        status: "failed",
        bookingId: booking.id,
        failureReason: "Email sending failed"
      });
    }
    return emailSent;
  } catch (error) {
    console.error("Error sending salon owner booking notification:", error);
    throw error;
  }
}
async function sendBookingConfirmationNotification(bookingId) {
  try {
    const [booking] = await db.select({
      id: bookings.id,
      customerId: bookings.customerId,
      date: bookings.date,
      startTime: bookings.startTime,
      endTime: bookings.endTime,
      status: bookings.status,
      salon: {
        name: salons.name,
        address: salons.address,
        phone: salons.phone
      },
      service: {
        name: services.name,
        price: services.price,
        duration: services.duration
      }
    }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(eq4(bookings.id, bookingId));
    if (!booking) {
      console.error(`Booking not found: ${bookingId}`);
      return;
    }
    const [customer] = await db.select().from(users).where(eq4(users.id, booking.customerId ?? ""));
    const { generateBookingConfirmationEmail: generateBookingConfirmationEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
    const emailHTML = generateBookingConfirmationEmail2(
      customer?.firstName || "Customer",
      booking.salon?.name || "Salon",
      booking.service?.name || "Service",
      booking.date || "",
      booking.startTime || "",
      booking.service?.price || "0"
    );
    const payload = {
      userId: booking.customerId ?? "",
      type: "booking_confirmation",
      title: "Booking Confirmed! \u{1F389}",
      message: emailHTML,
      // Rich HTML for email, fallback text for other channels
      bookingId: booking.id,
      data: {
        salonName: booking.salon?.name,
        serviceName: booking.service?.name,
        date: booking.date,
        time: booking.startTime,
        duration: booking.service?.duration,
        address: booking.salon?.address
      }
    };
    return await sendNotification(payload);
  } catch (error) {
    console.error("Error sending booking confirmation notification:", error);
    throw error;
  }
}
async function sendBookingCancellationNotification(bookingId) {
  try {
    const [booking] = await db.select({
      id: bookings.id,
      customerId: bookings.customerId,
      date: bookings.date,
      startTime: bookings.startTime,
      endTime: bookings.endTime,
      status: bookings.status,
      salon: {
        name: salons.name,
        address: salons.address,
        phone: salons.phone
      },
      service: {
        name: services.name,
        price: services.price,
        duration: services.duration
      }
    }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(eq4(bookings.id, bookingId));
    if (!booking) {
      console.error(`Booking not found: ${bookingId}`);
      return;
    }
    const [customer] = await db.select().from(users).where(eq4(users.id, booking.customerId ?? ""));
    const { generateBookingCancellationEmail: generateBookingCancellationEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
    const emailHTML = generateBookingCancellationEmail2(
      customer?.firstName || "Customer",
      booking.salon?.name || "Salon",
      booking.service?.name || "Service",
      booking.date || "",
      booking.startTime || ""
    );
    const payload = {
      userId: booking.customerId ?? "",
      type: "booking_confirmation",
      // Using booking_confirmation type for now
      title: "Booking Cancelled",
      message: emailHTML,
      // Rich HTML for email, fallback text for other channels
      bookingId: booking.id,
      data: {
        salonName: booking.salon?.name,
        serviceName: booking.service?.name,
        date: booking.date,
        time: booking.startTime,
        duration: booking.service?.duration,
        address: booking.salon?.address
      }
    };
    return await sendNotification(payload);
  } catch (error) {
    console.error("Error sending booking cancellation notification:", error);
    throw error;
  }
}
async function sendDayBeforeReminder(bookingId) {
  try {
    const [booking] = await db.select({
      id: bookings.id,
      customerId: bookings.customerId,
      date: bookings.date,
      startTime: bookings.startTime,
      salon: {
        name: salons.name,
        address: salons.address
      },
      service: {
        name: services.name
      }
    }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(and3(
      eq4(bookings.id, bookingId),
      eq4(bookings.status, "confirmed")
    ));
    if (!booking) {
      return;
    }
    const payload = {
      userId: booking.customerId,
      type: "day_before_reminder",
      title: "Appointment Tomorrow \u{1F4C5}",
      message: `Reminder: You have an appointment at ${booking.salon?.name} tomorrow at ${booking.startTime} for ${booking.service?.name}.`,
      bookingId: booking.id,
      data: {
        salonName: booking.salon?.name,
        serviceName: booking.service?.name,
        date: booking.date,
        time: booking.startTime
      }
    };
    return await sendNotification(payload);
  } catch (error) {
    console.error("Error sending day before reminder:", error);
    throw error;
  }
}
async function sendHourBeforeReminder(bookingId) {
  try {
    const [booking] = await db.select({
      id: bookings.id,
      customerId: bookings.customerId,
      date: bookings.date,
      startTime: bookings.startTime,
      salon: {
        name: salons.name,
        address: salons.address,
        phone: salons.phone
      },
      service: {
        name: services.name
      }
    }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(and3(
      eq4(bookings.id, bookingId),
      eq4(bookings.status, "confirmed")
    ));
    if (!booking) {
      return;
    }
    const payload = {
      userId: booking.customerId,
      type: "hour_before_reminder",
      title: "Appointment Starting Soon \u23F0",
      message: `Your appointment at ${booking.salon?.name} starts in 1 hour (${booking.startTime}). Don't forget!`,
      bookingId: booking.id,
      data: {
        salonName: booking.salon?.name,
        serviceName: booking.service?.name,
        address: booking.salon?.address,
        phone: booking.salon?.phone,
        time: booking.startTime
      }
    };
    return await sendNotification(payload);
  } catch (error) {
    console.error("Error sending hour before reminder:", error);
    throw error;
  }
}
async function getFullBookingDetails(bookingId) {
  const [booking] = await db.select({
    id: bookings.id,
    customerId: bookings.customerId,
    salonId: bookings.salonId,
    date: bookings.date,
    startTime: bookings.startTime,
    endTime: bookings.endTime,
    status: bookings.status,
    totalAmount: bookings.totalAmount,
    suggestedDate: bookings.suggestedDate,
    suggestedTime: bookings.suggestedTime,
    ownerNote: bookings.ownerNote,
    createdAt: bookings.createdAt,
    salon: { id: salons.id, name: salons.name, ownerId: salons.ownerId, address: salons.address },
    service: { name: services.name, duration: services.duration }
  }).from(bookings).leftJoin(salons, eq4(bookings.salonId, salons.id)).leftJoin(services, eq4(bookings.serviceId, services.id)).where(eq4(bookings.id, bookingId));
  return booking;
}
async function sendPushToUser(userId, payload) {
  try {
    const subs = await db.select().from(pushSubscriptions).where(and3(eq4(pushSubscriptions.userId, userId), eq4(pushSubscriptions.isActive, true)));
    for (const sub of subs) {
      if (!sub.endpoint || !sub.p256dhKey || !sub.authKey) continue;
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dhKey, auth: sub.authKey } },
          JSON.stringify(payload),
          { TTL: 86400 }
        );
      } catch (e) {
        if (e.statusCode === 410 || e.statusCode === 404) {
          await db.delete(pushSubscriptions).where(eq4(pushSubscriptions.id, sub.id));
        }
      }
    }
  } catch (error) {
    console.error("Error sending push to user:", error);
  }
}
async function notifyCustomerBookingRequested(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const title = "\u23F3 Booking Request Sent";
  const body = `Your request to ${booking.salon?.name} for ${booking.startTime} on ${booking.date} is pending confirmation.`;
  await Promise.all([
    sendPushToUser(booking.customerId, { title, body, tag: `booking-${bookingId}`, data: { url: "/customer/bookings", bookingId } }),
    logInAppNotification({ userId: booking.customerId, type: "booking_request", title, message: body, bookingId, actionUrl: "/customer/bookings" })
  ]);
}
async function notifyOwnerNewBooking(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking || !booking.salon?.ownerId) return;
  const [customer] = await db.select({ firstName: users.firstName, lastName: users.lastName }).from(users).where(eq4(users.id, booking.customerId));
  const customerName = customer ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim() : "Customer";
  const title = "\u{1F4E9} New Booking Request";
  const body = `${customerName} wants ${booking.service?.name || "a service"} at ${booking.startTime} on ${booking.date}`;
  await Promise.all([
    sendPushToUser(booking.salon.ownerId, {
      title,
      body,
      tag: `owner-booking-${bookingId}`,
      requireInteraction: true,
      data: { url: "/owner/bookings", bookingId },
      actions: [
        { action: "accept", title: "\u2705 Accept" },
        { action: "reject", title: "\u274C Reject" }
      ]
    }),
    logInAppNotification({ userId: booking.salon.ownerId, type: "booking_request", title, message: body, bookingId, actionUrl: "/owner/bookings" })
  ]);
}
async function notifyCustomerBookingAccepted(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const title = "\u2705 Booking Confirmed!";
  const body = `Your appointment at ${booking.salon?.name} is confirmed for ${booking.startTime} on ${booking.date}.`;
  await Promise.all([
    sendPushToUser(booking.customerId, { title, body, tag: `booking-${bookingId}`, data: { url: "/customer/bookings", bookingId } }),
    logInAppNotification({ userId: booking.customerId, type: "booking_accepted", title, message: body, bookingId, actionUrl: "/customer/bookings" })
  ]);
}
async function notifyCustomerBookingRejected(bookingId, salonName) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const name = salonName || booking.salon?.name || "the salon";
  const title = "\u274C Booking Declined";
  const body = `${name} declined your booking. Try booking a nearby salon.`;
  await Promise.all([
    sendPushToUser(booking.customerId, { title, body, tag: `booking-${bookingId}`, data: { url: "/", bookingId } }),
    logInAppNotification({ userId: booking.customerId, type: "booking_rejected", title, message: body, bookingId, actionUrl: "/" })
  ]);
}
async function notifyCustomerRescheduleSuggested(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const newTime = booking.suggestedTime || "a new time";
  const newDate = booking.suggestedDate || booking.date;
  const title = "\u{1F501} New Time Suggested";
  const body = `${booking.salon?.name} suggests ${newTime} on ${newDate} instead. Accept or choose another slot.`;
  await Promise.all([
    sendPushToUser(booking.customerId, {
      title,
      body,
      tag: `booking-${bookingId}`,
      requireInteraction: true,
      data: { url: "/customer/bookings", bookingId },
      actions: [
        { action: "accept", title: "\u2705 Accept New Time" },
        { action: "view", title: "\u{1F5D3} Choose Another" }
      ]
    }),
    logInAppNotification({ userId: booking.customerId, type: "booking_rescheduled", title, message: body, bookingId, actionUrl: "/customer/bookings" })
  ]);
}
async function notifyCustomerAutoCancel(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const title = "\u26A0\uFE0F Booking Auto-Cancelled";
  const body = `${booking.salon?.name || "The salon"} didn't respond in time. Your booking has been cancelled automatically.`;
  await Promise.all([
    sendPushToUser(booking.customerId, { title, body, tag: `booking-${bookingId}`, data: { url: "/", bookingId } }),
    logInAppNotification({ userId: booking.customerId, type: "booking_auto_cancelled", title, message: body, bookingId, actionUrl: "/" })
  ]);
}
async function notifyCustomer30MinReminder(bookingId) {
  const booking = await getFullBookingDetails(bookingId);
  if (!booking) return;
  const title = "\u23F0 Appointment in 30 Minutes";
  const body = `Your appointment at ${booking.salon?.name} starts at ${booking.startTime}. Get ready!`;
  await Promise.all([
    sendPushToUser(booking.customerId, { title, body, tag: `reminder-${bookingId}`, data: { url: "/customer/bookings", bookingId } }),
    logInAppNotification({ userId: booking.customerId, type: "appointment_reminder", title, message: body, bookingId, actionUrl: "/customer/bookings" })
  ]);
}
async function notifyReEngagement(userId, nearbyCount) {
  const title = "\u2702\uFE0F Time for a fresh look?";
  const body = nearbyCount ? `${nearbyCount} top salons near you are available and ready to book!` : "Top salons near you are available. Book your next appointment now!";
  await Promise.all([
    sendPushToUser(userId, { title, body, tag: "re-engagement", data: { url: "/" } }),
    logInAppNotification({ userId, type: "re_engagement", title, message: body, actionUrl: "/" })
  ]);
}
async function notifyFollowersNewOffer(offerId, salonId) {
  try {
    const [offer] = await db.select().from(salonOffers).where(eq4(salonOffers.id, offerId));
    if (!offer) return;
    const [salon] = await db.select({ name: salons.name }).from(salons).where(eq4(salons.id, salonId));
    if (!salon) return;
    const followers = await db.select({ customerId: salonFollowers.customerId }).from(salonFollowers).where(eq4(salonFollowers.salonId, salonId));
    if (followers.length === 0) return;
    const customerIds = followers.map((f) => f.customerId);
    const customers = await db.select({ id: users.id, email: users.email, firstName: users.firstName }).from(users).where(inArray(users.id, customerIds));
    const discountText = offer.discountType === "percentage" ? `${offer.discountValue}% off` : `\u20B9${offer.discountValue} off`;
    const title = `\u{1F389} New Offer at ${salon.name}!`;
    const body = `${salon.name} is offering ${discountText} \u2014 ${offer.title}. Book now before it expires!`;
    const actionUrl = `/salon/${salonId}`;
    const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
    await Promise.all(
      customerIds.map(async (customerId) => {
        await Promise.all([
          sendPushToUser(customerId, {
            title,
            body,
            tag: `new-offer-${offerId}`,
            data: { url: actionUrl },
            requireInteraction: true
          }),
          logInAppNotification({
            userId: customerId,
            type: "promotional",
            title,
            message: body,
            actionUrl
          })
        ]);
      })
    );
    await Promise.all(
      customers.filter((c) => c.email).map(async (customer) => {
        const name = customer.firstName || "there";
        const html = `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:linear-gradient(135deg,#7c3aed,#db2777);padding:28px 24px;border-radius:12px 12px 0 0;text-align:center;">
                <h1 style="color:white;margin:0;font-size:24px;">\u{1F389} New Offer Just For You!</h1>
              </div>
              <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px;">
                <p style="color:#374151;font-size:16px;">Hi ${name},</p>
                <p style="color:#374151;font-size:15px;">
                  <strong>${salon.name}</strong>, one of your followed salons, has a new offer just for you:
                </p>
                <div style="background:#faf5ff;border:1px solid #d8b4fe;border-radius:10px;padding:20px;margin:20px 0;text-align:center;">
                  <h2 style="color:#7c3aed;margin:0 0 8px;">${offer.title}</h2>
                  <p style="font-size:28px;font-weight:bold;color:#db2777;margin:8px 0;">${discountText}</p>
                  ${offer.promoCode ? `<p style="color:#6b7280;font-size:14px;">Use code: <strong style="color:#7c3aed;">${offer.promoCode}</strong></p>` : ""}
                  ${offer.minOrderAmount && Number(offer.minOrderAmount) > 0 ? `<p style="color:#6b7280;font-size:13px;">Min order: \u20B9${offer.minOrderAmount}</p>` : ""}
                  ${offer.validUntil ? `<p style="color:#6b7280;font-size:13px;">Valid until: ${new Date(offer.validUntil).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>` : ""}
                </div>
                <p style="color:#6b7280;font-size:13px;">You're receiving this because you follow ${salon.name} on Sanwar.</p>
                <div style="text-align:center;margin-top:24px;">
                  <a href="https://sanwarhub.in/salon/${salonId}" 
                     style="background:#7c3aed;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px;display:inline-block;">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          `;
        await sendEmail2({
          to: customer.email,
          subject: `\u{1F389} ${salon.name} has a new offer: ${discountText}`,
          html
        });
      })
    );
    console.log(`[Followers] Notified ${customerIds.length} followers of new offer at ${salon.name}`);
  } catch (error) {
    console.error("[Followers] Error notifying followers of new offer:", error);
  }
}
var init_notifications = __esm({
  "server/notifications.ts"() {
    "use strict";
    init_db();
    init_schema();
    if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
      webpush.setVapidDetails(
        "mailto:support@sanwar.com",
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
      );
    }
  }
});

// server/slot-auto-generator.ts
var slot_auto_generator_exports = {};
__export(slot_auto_generator_exports, {
  autoGenerateSlotsForSalon: () => autoGenerateSlotsForSalon,
  autoGenerateSlotsForStaff: () => autoGenerateSlotsForStaff,
  runDailySlotMaintenance: () => runDailySlotMaintenance
});
import { eq as eq5, and as and4, gte as gte3, lte } from "drizzle-orm";
function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}
function toTimeStr(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}
function addDays(base, n) {
  const d = new Date(base);
  d.setDate(d.getDate() + n);
  return d;
}
function dateStr(d) {
  return d.toISOString().split("T")[0];
}
function buildSlots(date, openTime, closeTime, breakStart, breakEnd) {
  const open = toMinutes(openTime);
  const close = toMinutes(closeTime);
  const bStart = breakStart ? toMinutes(breakStart) : null;
  const bEnd = breakEnd ? toMinutes(breakEnd) : null;
  const slots = [];
  for (let t = open; t + SLOT_DURATION_MINUTES <= close; t += SLOT_DURATION_MINUTES) {
    const end = t + SLOT_DURATION_MINUTES;
    if (bStart !== null && bEnd !== null) {
      if (t < bEnd && end > bStart) continue;
    }
    slots.push({ date, startTime: toTimeStr(t), endTime: toTimeStr(end) });
  }
  return slots;
}
async function autoGenerateSlotsForStaff(db3, salonId, staffId) {
  try {
    const hours = await db3.select().from(workingHours).where(eq5(workingHours.salonId, salonId));
    const DEFAULT_OPEN = "10:00";
    const DEFAULT_CLOSE = "20:00";
    const hoursByDay = {};
    if (hours.length) {
      for (const h of hours) hoursByDay[h.dayOfWeek] = h;
    } else {
      for (let d = 1; d <= 6; d++) {
        hoursByDay[d] = { isOpen: true, openTime: DEFAULT_OPEN, closeTime: DEFAULT_CLOSE, breakStartTime: null, breakEndTime: null };
      }
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const endDate = addDays(today, DAYS_AHEAD);
    const startStr = dateStr(today);
    const endStr = dateStr(endDate);
    const existing = await db3.select({ date: timeSlots.date }).from(timeSlots).where(
      and4(
        eq5(timeSlots.salonId, salonId),
        eq5(timeSlots.staffId, staffId),
        gte3(timeSlots.date, startStr),
        lte(timeSlots.date, endStr)
      )
    );
    const datesWithSlots = new Set(existing.map((r) => r.date));
    const allNewSlots = [];
    for (let i = 0; i <= DAYS_AHEAD; i++) {
      const day = addDays(today, i);
      const ds = dateStr(day);
      if (datesWithSlots.has(ds)) continue;
      const dayOfWeek = day.getDay();
      const wh = hoursByDay[dayOfWeek];
      if (!wh || !wh.isOpen || !wh.openTime || !wh.closeTime) continue;
      const slots = buildSlots(ds, wh.openTime, wh.closeTime, wh.breakStartTime, wh.breakEndTime);
      for (const slot of slots) {
        allNewSlots.push({
          salonId,
          staffId,
          date: slot.date,
          startTime: slot.startTime,
          endTime: slot.endTime,
          isAvailable: true,
          slotType: "regular"
        });
      }
    }
    if (allNewSlots.length === 0) return 0;
    const BATCH = 500;
    for (let i = 0; i < allNewSlots.length; i += BATCH) {
      const batch = allNewSlots.slice(i, i + BATCH);
      await db3.insert(timeSlots).values(batch).onConflictDoNothing();
    }
    return allNewSlots.length;
  } catch (err) {
    console.error(`[SlotGen] Error generating slots for staff ${staffId}:`, err);
    return 0;
  }
}
async function autoGenerateSlotsForSalon(db3, salonId) {
  try {
    const staffList = await db3.select().from(staff).where(and4(eq5(staff.salonId, salonId), eq5(staff.isActive, true)));
    if (!staffList.length) return { staffCount: 0, slotsCreated: 0 };
    let totalSlots = 0;
    for (const member of staffList) {
      const count2 = await autoGenerateSlotsForStaff(db3, salonId, member.id);
      totalSlots += count2;
    }
    return { staffCount: staffList.length, slotsCreated: totalSlots };
  } catch (err) {
    console.error(`[SlotGen] Error generating slots for salon ${salonId}:`, err);
    return { staffCount: 0, slotsCreated: 0 };
  }
}
async function runDailySlotMaintenance() {
  try {
    const { storage: storage2 } = await Promise.resolve().then(() => (init_storage(), storage_exports));
    const db3 = storage2.db;
    const allSalons = await db3.select({ id: salons.id, name: salons.name }).from(salons);
    let totalSalons = 0;
    let totalSlots = 0;
    for (const salon of allSalons) {
      const { staffCount, slotsCreated } = await autoGenerateSlotsForSalon(db3, salon.id);
      if (staffCount > 0) {
        totalSalons++;
        totalSlots += slotsCreated;
      }
    }
    if (totalSlots > 0) {
      console.log(`[SlotGen] Daily maintenance: filled ${totalSlots} slot(s) across ${totalSalons} salon(s)`);
    } else {
      console.log(`[SlotGen] Daily maintenance: all salons up to date (${allSalons.length} checked)`);
    }
  } catch (err) {
    console.error("[SlotGen] Daily maintenance error:", err);
  }
}
var SLOT_DURATION_MINUTES, DAYS_AHEAD;
var init_slot_auto_generator = __esm({
  "server/slot-auto-generator.ts"() {
    "use strict";
    init_schema();
    SLOT_DURATION_MINUTES = 30;
    DAYS_AHEAD = 30;
  }
});

// server/booking-notifications.ts
var booking_notifications_exports = {};
__export(booking_notifications_exports, {
  getBookingEmailData: () => getBookingEmailData,
  sendBookingNotificationEmails: () => sendBookingNotificationEmails,
  sendOwnerConfirmedEmail: () => sendOwnerConfirmedEmail,
  sendOwnerDeclinedEmail: () => sendOwnerDeclinedEmail,
  sendOwnerSuggestionEmail: () => sendOwnerSuggestionEmail
});
import { eq as eq6 } from "drizzle-orm";
async function getBookingEmailData(bookingId) {
  try {
    const [bookingData] = await storage.db.select({
      booking: bookings,
      customer: users,
      salon: salons,
      service: services
    }).from(bookings).innerJoin(users, eq6(bookings.customerId, users.id)).innerJoin(salons, eq6(bookings.salonId, salons.id)).innerJoin(services, eq6(bookings.serviceId, services.id)).where(eq6(bookings.id, bookingId));
    if (!bookingData) {
      console.error("Booking not found for email notification:", bookingId);
      return null;
    }
    const [ownerData] = await storage.db.select({
      id: users.id,
      email: users.email,
      firstName: users.firstName
    }).from(users).where(eq6(users.id, bookingData.salon.ownerId));
    if (!bookingData) {
      console.error("Booking not found for email notification:", bookingId);
      return null;
    }
    return {
      bookingId: bookingData.booking.id,
      customerName: bookingData.customer.firstName || "Customer",
      customerEmail: bookingData.customer.email || "",
      salonName: bookingData.salon.name,
      salonEmail: ownerData?.email || void 0,
      salonPhone: bookingData.salon.phone || void 0,
      salonAddress: bookingData.salon.address || void 0,
      serviceName: bookingData.service.name,
      date: bookingData.booking.date,
      startTime: bookingData.booking.startTime,
      endTime: bookingData.booking.endTime,
      totalAmount: parseFloat(bookingData.service.price),
      confirmationAmount: parseFloat(bookingData.booking.confirmationAmount ?? "0") / 100 || 3,
      // Dynamic confirmation fee from booking
      remainingAmount: parseFloat(bookingData.service.price)
      // Full service amount to be paid at salon (confirmation fee is separate)
    };
  } catch (error) {
    console.error("Error fetching booking data for email:", error);
    return null;
  }
}
function generateCustomerConfirmationEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 30px 20px; }
            .booking-details { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: 600; color: #495057; }
            .detail-value { color: #212529; }
            .payment-info { background: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; margin: 20px 0; border-radius: 4px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #6c757d; font-size: 14px; }
            .success-badge { background: #4caf50; color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>\u2705 Booking Confirmed!</h1>
                <p>Your appointment has been successfully booked</p>
            </div>
            
            <div class="content">
                <p>Dear ${data.customerName},</p>
                <p>Great news! Your booking at <strong>${data.salonName}</strong> has been confirmed.</p>
                
                <div class="booking-details">
                    <div class="detail-row">
                        <span class="detail-label">Booking ID:</span>
                        <span class="detail-value">#${data.bookingId.substring(0, 8).toUpperCase()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Service:</span>
                        <span class="detail-value">${data.serviceName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Date:</span>
                        <span class="detail-value">${new Date(data.date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Time:</span>
                        <span class="detail-value">${data.startTime} - ${data.endTime}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Salon:</span>
                        <span class="detail-value">${data.salonName}</span>
                    </div>
                    ${data.salonAddress ? `
                    <div class="detail-row">
                        <span class="detail-label">Address:</span>
                        <span class="detail-value">${data.salonAddress}</span>
                    </div>
                    ` : ""}
                    ${data.salonPhone ? `
                    <div class="detail-row">
                        <span class="detail-label">Contact:</span>
                        <span class="detail-value">${data.salonPhone}</span>
                    </div>
                    ` : ""}
                </div>

                <div class="payment-info">
                    <h3 style="margin: 0 0 10px 0; color: #1976d2;">\u{1F4B3} Payment Information</h3>
                    <p style="margin: 5px 0;"><strong>Confirmation Fee (Paid Online):</strong> \u20B9${data.confirmationAmount}</p>
                    <p style="margin: 5px 0;"><strong>Service Fee (Pay at Salon):</strong> \u20B9${data.totalAmount}</p>
                    <p style="margin: 5px 0; color: #666; font-size: 14px;">
                        <strong>Note:</strong> The confirmation fee is separate from the service fee. 
                        You will pay the full service amount (\u20B9${data.totalAmount}) when you visit the salon.
                    </p>
                </div>

                <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 20px 0;">
                    <h3 style="margin: 0 0 10px 0; color: #856404;">\u{1F4CB} Important Reminders</h3>
                    <ul style="margin: 0; padding-left: 20px; color: #856404;">
                        <li>Please arrive 10 minutes before your appointment time</li>
                        <li>Bring a valid ID for verification</li>
                        <li>Inform the salon if you need to reschedule</li>
                        <li>Pay the remaining service amount at the salon</li>
                    </ul>
                </div>

                <p>Thank you for choosing Sanwar! We hope you have a wonderful experience.</p>
                
                <div class="footer">
                    <p>This is an automated message from Sanwar Booking Platform</p>
                    <p>For support, contact us at support@sanwar.in</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
}
async function sendOwnerConfirmedEmail(bookingId) {
  try {
    const data = await getBookingEmailData(bookingId);
    if (!data || !data.customerEmail) return false;
    return await sendEmail({
      to: data.customerEmail,
      subject: `\u2705 Booking Confirmed - ${data.salonName} | Sanwar`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;margin:0;padding:20px;background:#f5f5f5}.container{max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#4caf50,#2e7d32);color:white;padding:30px 20px;text-align:center}.content{padding:30px 20px}.details{background:#f8f9fa;border-radius:8px;padding:20px;margin:20px 0}.row{display:flex;justify-content:space-between;margin:8px 0;padding:8px 0;border-bottom:1px solid #eee}.label{font-weight:600;color:#495057}.footer{background:#f8f9fa;padding:20px;text-align:center;color:#6c757d;font-size:14px}</style></head><body><div class="container"><div class="header"><h1>\u2705 Booking Confirmed!</h1><p>Your appointment has been confirmed by the salon</p></div><div class="content"><p>Hi ${data.customerName},</p><p>Great news! <strong>${data.salonName}</strong> has confirmed your appointment.</p><div class="details"><div class="row"><span class="label">Service</span><span>${data.serviceName}</span></div><div class="row"><span class="label">Date</span><span>${data.date}</span></div><div class="row"><span class="label">Time</span><span>${data.startTime} - ${data.endTime}</span></div><div class="row"><span class="label">Salon</span><span>${data.salonName}</span></div>${data.salonAddress ? `<div class="row"><span class="label">Address</span><span>${data.salonAddress}</span></div>` : ""}${data.salonPhone ? `<div class="row"><span class="label">Phone</span><span>${data.salonPhone}</span></div>` : ""}</div><p>Please arrive 5 minutes before your appointment. We look forward to seeing you!</p></div><div class="footer"><p>\xA9 Sanwar - Your Salon Booking Platform</p></div></div></body></html>`
    });
  } catch (e) {
    console.error("Error sending owner confirmed email:", e);
    return false;
  }
}
async function sendOwnerDeclinedEmail(bookingId) {
  try {
    const data = await getBookingEmailData(bookingId);
    if (!data || !data.customerEmail) return false;
    return await sendEmail({
      to: data.customerEmail,
      subject: `\u274C Booking Cancelled - ${data.salonName} | Sanwar`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;margin:0;padding:20px;background:#f5f5f5}.container{max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#f44336,#c62828);color:white;padding:30px 20px;text-align:center}.content{padding:30px 20px}.details{background:#f8f9fa;border-radius:8px;padding:20px;margin:20px 0}.row{display:flex;justify-content:space-between;margin:8px 0;padding:8px 0;border-bottom:1px solid #eee}.label{font-weight:600;color:#495057}.footer{background:#f8f9fa;padding:20px;text-align:center;color:#6c757d;font-size:14px}</style></head><body><div class="container"><div class="header"><h1>\u274C Booking Cancelled</h1><p>Your appointment has been cancelled by the salon</p></div><div class="content"><p>Hi ${data.customerName},</p><p>We're sorry to inform you that <strong>${data.salonName}</strong> has cancelled your appointment.</p><div class="details"><div class="row"><span class="label">Service</span><span>${data.serviceName}</span></div><div class="row"><span class="label">Date</span><span>${data.date}</span></div><div class="row"><span class="label">Time</span><span>${data.startTime} - ${data.endTime}</span></div></div><p>You can book a new appointment at your convenience through the Sanwar app.</p></div><div class="footer"><p>\xA9 Sanwar - Your Salon Booking Platform</p></div></div></body></html>`
    });
  } catch (e) {
    console.error("Error sending owner declined email:", e);
    return false;
  }
}
async function sendOwnerSuggestionEmail(bookingId, suggestedDate, suggestedTime, ownerNote) {
  try {
    const data = await getBookingEmailData(bookingId);
    if (!data || !data.customerEmail) return false;
    return await sendEmail({
      to: data.customerEmail,
      subject: `\u23F0 New Time Suggested - ${data.salonName} | Sanwar`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;margin:0;padding:20px;background:#f5f5f5}.container{max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#ff9800,#e65100);color:white;padding:30px 20px;text-align:center}.content{padding:30px 20px}.details{background:#f8f9fa;border-radius:8px;padding:20px;margin:20px 0}.row{display:flex;justify-content:space-between;margin:8px 0;padding:8px 0;border-bottom:1px solid #eee}.label{font-weight:600;color:#495057}.suggestion-box{background:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.footer{background:#f8f9fa;padding:20px;text-align:center;color:#6c757d;font-size:14px}</style></head><body><div class="container"><div class="header"><h1>\u23F0 New Time Suggested</h1><p>The salon has proposed a new appointment time</p></div><div class="content"><p>Hi ${data.customerName},</p><p><strong>${data.salonName}</strong> cannot accommodate your original booking but is suggesting a new time:</p><div class="suggestion-box"><h3 style="margin:0 0 10px;color:#e65100">Suggested Appointment</h3><p style="margin:4px 0"><strong>Date:</strong> ${suggestedDate}</p><p style="margin:4px 0"><strong>Time:</strong> ${suggestedTime}</p>${ownerNote ? `<p style="margin:8px 0 0;color:#555"><em>Note from salon: ${ownerNote}</em></p>` : ""}</div><div class="details"><div class="row"><span class="label">Service</span><span>${data.serviceName}</span></div><div class="row"><span class="label">Original Date</span><span>${data.date}</span></div><div class="row"><span class="label">Salon</span><span>${data.salonName}</span></div></div><p>Please open the <strong>Sanwar app</strong> to <strong>Accept</strong> or <strong>Decline</strong> this suggestion.</p></div><div class="footer"><p>\xA9 Sanwar - Your Salon Booking Platform</p></div></div></body></html>`
    });
  } catch (e) {
    console.error("Error sending owner suggestion email:", e);
    return false;
  }
}
async function sendBookingNotificationEmails(bookingId) {
  try {
    console.log("\u{1F4E7} Sending booking notification emails for:", bookingId);
    const bookingData = await getBookingEmailData(bookingId);
    if (!bookingData) {
      console.error("\u274C Could not fetch booking data for email notifications");
      return { customerSent: false, shopkeeperSent: false };
    }
    const customerEmailSent = await sendEmail({
      to: bookingData.customerEmail,
      subject: `\u2705 Booking Confirmed - ${bookingData.salonName} | Sanwar`,
      html: generateCustomerConfirmationEmail(bookingData)
    });
    const shopkeeperEmailSent = false;
    console.log("\u26A0\uFE0F Shopkeeper booking emails are disabled - Only customer receives confirmation");
    console.log(`\u{1F4E7} Email notifications sent - Customer: ${customerEmailSent}, Shopkeeper: ${shopkeeperEmailSent}`);
    return {
      customerSent: customerEmailSent,
      shopkeeperSent: shopkeeperEmailSent
    };
  } catch (error) {
    console.error("\u274C Error sending booking notification emails:", error);
    return { customerSent: false, shopkeeperSent: false };
  }
}
var init_booking_notifications = __esm({
  "server/booking-notifications.ts"() {
    "use strict";
    init_storage();
    init_schema();
    init_emailService();
  }
});

// server/smart-scheduling.ts
import { eq as eq7, and as and5, inArray as inArray2 } from "drizzle-orm";
var SmartSchedulingService;
var init_smart_scheduling = __esm({
  "server/smart-scheduling.ts"() {
    "use strict";
    init_schema();
    SmartSchedulingService = class {
      constructor(storage2) {
        this.storage = storage2;
      }
      /**
       * Generate time slots for a specific staff member for a given date
       */
      async generateStaffTimeSlots(staffId, date) {
        const { db: db3 } = this.storage;
        const dayOfWeek = new Date(date).getDay();
        const [workingHour] = await db3.select().from(staffWorkingHours).where(and5(
          eq7(staffWorkingHours.staffId, staffId),
          eq7(staffWorkingHours.dayOfWeek, dayOfWeek)
        ));
        if (!workingHour || !workingHour.isAvailable) {
          return [];
        }
        const [holiday] = await db3.select().from(staffHolidays).where(and5(
          eq7(staffHolidays.staffId, staffId),
          eq7(staffHolidays.date, date),
          eq7(staffHolidays.isApproved, true)
        ));
        if (holiday) {
          return [];
        }
        const staffServicesList = await db3.select({ serviceId: staffServices.serviceId }).from(staffServices).where(and5(
          eq7(staffServices.staffId, staffId),
          eq7(staffServices.isActive, true)
        ));
        const compatibleServices = staffServicesList.map((s) => s.serviceId);
        const slots = [];
        const slotDuration = workingHour.slotDuration || 30;
        if (workingHour.shift1StartTime && workingHour.shift1EndTime) {
          const shift1Slots = this.generateSlotsForTimeRange(
            workingHour.shift1StartTime,
            workingHour.shift1EndTime,
            slotDuration,
            compatibleServices,
            workingHour.breakStartTime,
            workingHour.breakEndTime
          );
          slots.push(...shift1Slots.map((slot) => ({ ...slot, staffId })));
        }
        if (workingHour.shift2StartTime && workingHour.shift2EndTime) {
          const shift2Slots = this.generateSlotsForTimeRange(
            workingHour.shift2StartTime,
            workingHour.shift2EndTime,
            slotDuration,
            compatibleServices
          );
          slots.push(...shift2Slots.map((slot) => ({ ...slot, staffId })));
        }
        await this.saveStaffTimeSlots(staffId, date, slots);
        return slots;
      }
      /**
       * Generate slots for a specific time range
       */
      generateSlotsForTimeRange(startTime, endTime, slotDuration, compatibleServices, breakStart, breakEnd) {
        const slots = [];
        const start = this.timeToMinutes(startTime);
        const end = this.timeToMinutes(endTime);
        const breakStartMin = breakStart ? this.timeToMinutes(breakStart) : null;
        const breakEndMin = breakEnd ? this.timeToMinutes(breakEnd) : null;
        for (let currentTime = start; currentTime < end; currentTime += slotDuration) {
          const slotStart = this.minutesToTime(currentTime);
          const slotEnd = this.minutesToTime(currentTime + slotDuration);
          const isBreakTime = breakStartMin !== null && breakEndMin !== null && currentTime >= breakStartMin && currentTime < breakEndMin;
          slots.push({
            id: `slot-${slotStart}-${slotEnd}`,
            startTime: slotStart,
            endTime: slotEnd,
            isAvailable: !isBreakTime,
            slotType: isBreakTime ? "break" : "regular",
            compatibleServices: isBreakTime ? [] : compatibleServices
          });
        }
        return slots;
      }
      /**
       * Find available slots for a specific service and date
       */
      async findAvailableSlots(request) {
        const { db: db3 } = this.storage;
        const [service] = await db3.select().from(services).where(eq7(services.id, request.serviceId));
        if (!service) {
          throw new Error("Service not found");
        }
        const serviceDuration = service.duration;
        const slotsNeeded = Math.ceil(serviceDuration / 30);
        const availableStaff = await db3.select({
          staffId: staff.id,
          staffName: staff.name,
          slotDuration: staffWorkingHours.slotDuration
        }).from(staff).innerJoin(staffServices, eq7(staff.id, staffServices.staffId)).innerJoin(staffWorkingHours, eq7(staff.id, staffWorkingHours.staffId)).where(and5(
          eq7(staffServices.serviceId, request.serviceId),
          eq7(staffServices.isActive, true),
          eq7(staff.isActive, true),
          eq7(staffWorkingHours.dayOfWeek, new Date(request.date).getDay()),
          eq7(staffWorkingHours.isAvailable, true)
        ));
        const targetStaff = request.preferredStaffId ? availableStaff.filter((s) => s.staffId === request.preferredStaffId) : availableStaff;
        const availableSlots = [];
        for (const staffMember of targetStaff) {
          const allSlots = await this.getStaffTimeSlotsForDate(staffMember.staffId, request.date);
          const availableOnlySlots = allSlots.filter((slot) => slot.isAvailable);
          const consecutiveSlots = this.findConsecutiveSlots(availableOnlySlots, slotsNeeded, request.preferredStartTime);
          for (const slotGroup of consecutiveSlots) {
            availableSlots.push({
              staffId: staffMember.staffId,
              staffName: staffMember.staffName,
              startTime: slotGroup[0].startTime,
              endTime: slotGroup[slotGroup.length - 1].endTime,
              duration: serviceDuration,
              slotIds: slotGroup.map((s) => s.id),
              canAccommodateService: true
            });
          }
        }
        return availableSlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
      }
      /**
       * Book a service by reserving consecutive time slots
       */
      async bookServiceSlots(staffId, date, slotIds, bookingId) {
        const { db: db3 } = this.storage;
        try {
          await db3.update(staffTimeSlots).set({ isAvailable: false }).where(and5(
            eq7(staffTimeSlots.staffId, staffId),
            eq7(staffTimeSlots.date, date),
            inArray2(staffTimeSlots.id, slotIds)
          ));
          return true;
        } catch (error) {
          console.error("Error booking service slots:", error);
          return false;
        }
      }
      /**
       * Cancel booking and free up slots
       */
      async cancelBookingSlots(staffId, date, slotIds) {
        const { db: db3 } = this.storage;
        try {
          await db3.update(staffTimeSlots).set({ isAvailable: true }).where(and5(
            eq7(staffTimeSlots.staffId, staffId),
            eq7(staffTimeSlots.date, date),
            inArray2(staffTimeSlots.id, slotIds)
          ));
          return true;
        } catch (error) {
          console.error("Error cancelling booking slots:", error);
          return false;
        }
      }
      /**
       * Copy schedule from one day to multiple days
       */
      async copyScheduleToMultipleDays(salonId, sourceDayOfWeek, targetDates) {
        const { db: db3 } = this.storage;
        try {
          const sourceSchedules = await db3.select().from(staffWorkingHours).innerJoin(staff, eq7(staffWorkingHours.staffId, staff.id)).where(and5(
            eq7(staff.salonId, salonId),
            eq7(staffWorkingHours.dayOfWeek, sourceDayOfWeek)
          ));
          for (const date of targetDates) {
            const dayOfWeek = new Date(date).getDay();
            for (const schedule of sourceSchedules) {
              const [existingSchedule] = await db3.select().from(staffWorkingHours).where(and5(
                eq7(staffWorkingHours.staffId, schedule.staff_working_hours.staffId),
                eq7(staffWorkingHours.dayOfWeek, dayOfWeek)
              ));
              if (!existingSchedule) {
                await db3.insert(staffWorkingHours).values({
                  staffId: schedule.staff_working_hours.staffId,
                  dayOfWeek,
                  isAvailable: schedule.staff_working_hours.isAvailable,
                  shift1StartTime: schedule.staff_working_hours.shift1StartTime,
                  shift1EndTime: schedule.staff_working_hours.shift1EndTime,
                  shift2StartTime: schedule.staff_working_hours.shift2StartTime,
                  shift2EndTime: schedule.staff_working_hours.shift2EndTime,
                  breakStartTime: schedule.staff_working_hours.breakStartTime,
                  breakEndTime: schedule.staff_working_hours.breakEndTime,
                  breakDuration: schedule.staff_working_hours.breakDuration,
                  slotDuration: schedule.staff_working_hours.slotDuration
                });
              }
            }
            const salonStaff = await db3.select().from(staff).where(eq7(staff.salonId, salonId));
            for (const staffMember of salonStaff) {
              await this.generateStaffTimeSlots(staffMember.id, date);
            }
          }
          return true;
        } catch (error) {
          console.error("Error copying schedule:", error);
          return false;
        }
      }
      /**
       * Add bulk breaks to all staff schedules
       */
      async addBulkBreakToAllStaff(salonId, dayOfWeek, breakStartTime, breakEndTime, breakDuration) {
        const { db: db3 } = this.storage;
        try {
          await db3.update(staffWorkingHours).set({
            breakStartTime,
            breakEndTime,
            breakDuration
          }).where(and5(
            eq7(staffWorkingHours.dayOfWeek, dayOfWeek),
            eq7(staff.salonId, salonId)
          )).from(staff).where(eq7(staffWorkingHours.staffId, staff.id));
          return true;
        } catch (error) {
          console.error("Error adding bulk breaks:", error);
          return false;
        }
      }
      // Helper methods
      timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
      }
      minutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
      }
      findConsecutiveSlots(slots, slotsNeeded, preferredStartTime) {
        const availableSlots = slots.filter((slot) => slot.isAvailable && slot.slotType === "regular");
        const consecutiveGroups = [];
        for (let i = 0; i <= availableSlots.length - slotsNeeded; i++) {
          const group = availableSlots.slice(i, i + slotsNeeded);
          const isConsecutive = group.every((slot, index2) => {
            if (index2 === 0) return true;
            const prevEndTime = this.timeToMinutes(group[index2 - 1].endTime);
            const currentStartTime = this.timeToMinutes(slot.startTime);
            return prevEndTime === currentStartTime;
          });
          if (isConsecutive) {
            if (!preferredStartTime || group[0].startTime >= preferredStartTime) {
              consecutiveGroups.push(group);
            }
          }
        }
        return consecutiveGroups;
      }
      async saveStaffTimeSlots(staffId, date, slots) {
        const { db: db3 } = this.storage;
        await db3.delete(staffTimeSlots).where(and5(
          eq7(staffTimeSlots.staffId, staffId),
          eq7(staffTimeSlots.date, date)
        ));
        if (slots.length > 0) {
          const [staffMember] = await db3.select({ salonId: staff.salonId }).from(staff).where(eq7(staff.id, staffId));
          await db3.insert(staffTimeSlots).values(
            slots.map((slot) => ({
              staffId,
              salonId: staffMember.salonId,
              date,
              startTime: slot.startTime,
              endTime: slot.endTime,
              isAvailable: slot.isAvailable,
              slotType: slot.slotType,
              compatibleServices: slot.compatibleServices
            }))
          );
        }
      }
      async getStaffTimeSlotsForDate(staffId, date) {
        const { db: db3 } = this.storage;
        const slots = await db3.select().from(staffTimeSlots).where(and5(
          eq7(staffTimeSlots.staffId, staffId),
          eq7(staffTimeSlots.date, date)
        )).orderBy(staffTimeSlots.startTime);
        const mappedSlots = slots.map((slot) => ({
          id: slot.id,
          staffId: slot.staffId,
          startTime: slot.startTime,
          endTime: slot.endTime,
          isAvailable: slot.isAvailable,
          slotType: slot.slotType,
          compatibleServices: slot.compatibleServices || []
        }));
        const now = /* @__PURE__ */ new Date();
        const selectedDate = new Date(date);
        const isToday = selectedDate.toDateString() === now.toDateString();
        if (isToday) {
          const currentTime = now.getHours() * 60 + now.getMinutes();
          return mappedSlots.filter((slot) => {
            const slotStartTime = this.timeToMinutes(slot.startTime);
            return slotStartTime > currentTime;
          });
        }
        return mappedSlots;
      }
      /**
       * Get comprehensive schedule overview for a salon
       */
      async getSalonScheduleOverview(salonId, date) {
        const { db: db3 } = this.storage;
        const staffMembers = await db3.select({
          id: staff.id,
          name: staff.name,
          role: staff.role,
          photoUrl: staff.photoUrl
        }).from(staff).where(and5(
          eq7(staff.salonId, salonId),
          eq7(staff.isActive, true)
        ));
        const scheduleOverview = [];
        for (const staffMember of staffMembers) {
          const slots = await this.getStaffTimeSlotsForDate(staffMember.id, date);
          const workingHours2 = await this.getStaffWorkingHours(staffMember.id, new Date(date).getDay());
          scheduleOverview.push({
            staff: staffMember,
            workingHours: workingHours2,
            slots: slots.length,
            availableSlots: slots.filter((s) => s.isAvailable).length,
            bookedSlots: slots.filter((s) => !s.isAvailable).length,
            breakSlots: slots.filter((s) => s.slotType === "break").length
          });
        }
        return scheduleOverview;
      }
      async getStaffWorkingHours(staffId, dayOfWeek) {
        const { db: db3 } = this.storage;
        const [workingHour] = await db3.select().from(staffWorkingHours).where(and5(
          eq7(staffWorkingHours.staffId, staffId),
          eq7(staffWorkingHours.dayOfWeek, dayOfWeek)
        ));
        return workingHour;
      }
    };
  }
});

// server/smart-scheduling-routes.ts
var smart_scheduling_routes_exports = {};
__export(smart_scheduling_routes_exports, {
  registerSmartSchedulingRoutes: () => registerSmartSchedulingRoutes
});
function registerSmartSchedulingRoutes(app2) {
  const smartScheduling = new SmartSchedulingService(storage);
  app2.get("/api/salons/:salonId/staff", async (req, res) => {
    try {
      const { salonId } = req.params;
      const staff2 = await storage.getSalonStaff(salonId);
      const staffWithServices = await Promise.all(staff2.map(async (member) => {
        const services2 = await storage.getStaffServices(member.id);
        return {
          ...member,
          services: services2 || []
        };
      }));
      res.json(staffWithServices);
    } catch (error) {
      console.error("Error fetching salon staff:", error);
      res.status(500).json({ error: "Failed to fetch salon staff" });
    }
  });
  app2.get("/api/salons/:salonId/staff-with-services", async (req, res) => {
    try {
      const { salonId } = req.params;
      const staff2 = await storage.getSalonStaff(salonId);
      const staffWithServices = await Promise.all(staff2.map(async (member) => {
        const services2 = await storage.getStaffServices(member.id);
        return {
          ...member,
          services: services2 || []
        };
      }));
      res.json(staffWithServices);
    } catch (error) {
      console.error("Error fetching staff with services:", error);
      res.status(500).json({ error: "Failed to fetch staff with services" });
    }
  });
  app2.post("/api/salons/:salonId/staff", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { salonId } = req.params;
      const staffData = {
        ...req.body,
        salonId
      };
      const staff2 = await storage.createStaffMember(staffData);
      res.json(staff2);
    } catch (error) {
      console.error("Error creating staff member:", error);
      res.status(500).json({ error: "Failed to create staff member" });
    }
  });
  app2.put("/api/staff/:staffId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const updates = req.body;
      const staff2 = await storage.updateStaffMember(staffId, updates);
      res.json(staff2);
    } catch (error) {
      console.error("Error updating staff member:", error);
      res.status(500).json({ error: "Failed to update staff member" });
    }
  });
  app2.delete("/api/staff/:staffId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      await storage.deleteStaffMember(staffId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting staff member:", error);
      res.status(500).json({ error: "Failed to delete staff member" });
    }
  });
  app2.get("/api/staff/:staffId/working-hours", async (req, res) => {
    try {
      const { staffId } = req.params;
      const workingHours2 = await storage.getStaffWorkingHours(staffId);
      res.json(workingHours2);
    } catch (error) {
      console.error("Error fetching staff working hours:", error);
      res.status(500).json({ error: "Failed to fetch staff working hours" });
    }
  });
  app2.post("/api/staff/:staffId/working-hours", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const workingHoursData = {
        ...req.body,
        staffId
      };
      const workingHours2 = await storage.upsertStaffWorkingHours(workingHoursData);
      res.json(workingHours2);
    } catch (error) {
      console.error("Error saving staff working hours:", error);
      res.status(500).json({ error: "Failed to save staff working hours" });
    }
  });
  app2.get("/api/staff/:staffId/services", async (req, res) => {
    try {
      const { staffId } = req.params;
      const services2 = await storage.getStaffServices(staffId);
      res.json(services2);
    } catch (error) {
      console.error("Error fetching staff services:", error);
      res.status(500).json({ error: "Failed to fetch staff services" });
    }
  });
  app2.post("/api/staff/:staffId/services/:serviceId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId, serviceId } = req.params;
      const { customPrice, estimatedDuration } = req.body;
      const assignment = await storage.assignServiceToStaff(
        staffId,
        serviceId,
        customPrice,
        estimatedDuration
      );
      res.json(assignment);
    } catch (error) {
      console.error("Error assigning service to staff:", error);
      res.status(500).json({ error: "Failed to assign service to staff" });
    }
  });
  app2.delete("/api/staff/:staffId/services/:serviceId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId, serviceId } = req.params;
      await storage.removeServiceFromStaff(staffId, serviceId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing service from staff:", error);
      res.status(500).json({ error: "Failed to remove service from staff" });
    }
  });
  app2.get("/api/staff/:staffId/holidays", async (req, res) => {
    try {
      const { staffId } = req.params;
      const holidays = await storage.getStaffHolidays(staffId);
      res.json(holidays);
    } catch (error) {
      console.error("Error fetching staff holidays:", error);
      res.status(500).json({ error: "Failed to fetch staff holidays" });
    }
  });
  app2.post("/api/staff/:staffId/holidays", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const holidayData = {
        ...req.body,
        staffId
      };
      const holiday = await storage.createStaffHoliday(holidayData);
      res.json(holiday);
    } catch (error) {
      console.error("Error creating staff holiday:", error);
      res.status(500).json({ error: "Failed to create staff holiday" });
    }
  });
  app2.put("/api/staff/holidays/:holidayId/approve", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { holidayId } = req.params;
      const approvedBy = req.user?.id;
      await storage.approveStaffHoliday(holidayId, approvedBy);
      res.json({ success: true });
    } catch (error) {
      console.error("Error approving staff holiday:", error);
      res.status(500).json({ error: "Failed to approve staff holiday" });
    }
  });
  app2.delete("/api/staff/holidays/:holidayId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { holidayId } = req.params;
      await storage.deleteStaffHoliday(holidayId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting staff holiday:", error);
      res.status(500).json({ error: "Failed to delete staff holiday" });
    }
  });
  app2.post("/api/staff/:staffId/generate-slots", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const { date } = req.body;
      const slots = await smartScheduling.generateStaffTimeSlots(staffId, date);
      res.json(slots);
    } catch (error) {
      console.error("Error generating staff time slots:", error);
      res.status(500).json({ error: "Failed to generate staff time slots" });
    }
  });
  app2.get("/api/staff/:staffId/slots/:date", async (req, res) => {
    try {
      const { staffId, date } = req.params;
      const slots = await storage.getStaffTimeSlots(staffId, date);
      res.json(slots);
    } catch (error) {
      console.error("Error fetching staff time slots:", error);
      res.status(500).json({ error: "Failed to fetch staff time slots" });
    }
  });
  app2.post("/api/services/:serviceId/find-slots", async (req, res) => {
    try {
      const { serviceId } = req.params;
      const { date, preferredStaffId, preferredStartTime } = req.body;
      const availableSlots = await smartScheduling.findAvailableSlots({
        serviceId,
        date,
        preferredStaffId,
        preferredStartTime
      });
      res.json(availableSlots);
    } catch (error) {
      console.error("Error finding available slots:", error);
      res.status(500).json({ error: "Failed to find available slots" });
    }
  });
  app2.post("/api/staff/:staffId/book-slots", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const { date, slotIds, bookingId } = req.body;
      const success = await smartScheduling.bookServiceSlots(staffId, date, slotIds, bookingId);
      res.json({ success });
    } catch (error) {
      console.error("Error booking service slots:", error);
      res.status(500).json({ error: "Failed to book service slots" });
    }
  });
  app2.post("/api/staff/:staffId/cancel-slots", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { staffId } = req.params;
      const { date, slotIds } = req.body;
      const success = await smartScheduling.cancelBookingSlots(staffId, date, slotIds);
      res.json({ success });
    } catch (error) {
      console.error("Error cancelling booking slots:", error);
      res.status(500).json({ error: "Failed to cancel booking slots" });
    }
  });
  app2.get("/api/salons/:salonId/schedule/:date", async (req, res) => {
    try {
      const { salonId, date } = req.params;
      const scheduleOverview = await smartScheduling.getSalonScheduleOverview(salonId, date);
      res.json(scheduleOverview);
    } catch (error) {
      console.error("Error fetching salon schedule overview:", error);
      res.status(500).json({ error: "Failed to fetch salon schedule overview" });
    }
  });
  app2.post("/api/salons/:salonId/copy-schedule", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { salonId } = req.params;
      const { sourceDayOfWeek, targetDates } = req.body;
      const success = await smartScheduling.copyScheduleToMultipleDays(
        salonId,
        sourceDayOfWeek,
        targetDates
      );
      res.json({ success });
    } catch (error) {
      console.error("Error copying schedule:", error);
      res.status(500).json({ error: "Failed to copy schedule" });
    }
  });
  app2.post("/api/salons/:salonId/bulk-break", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { salonId } = req.params;
      const { dayOfWeek, breakStartTime, breakEndTime, breakDuration } = req.body;
      const success = await smartScheduling.addBulkBreakToAllStaff(
        salonId,
        dayOfWeek,
        breakStartTime,
        breakEndTime,
        breakDuration
      );
      res.json({ success });
    } catch (error) {
      console.error("Error adding bulk break:", error);
      res.status(500).json({ error: "Failed to add bulk break" });
    }
  });
  app2.get("/api/salons/:salonId/schedule-templates", async (req, res) => {
    try {
      const { salonId } = req.params;
      const templates = await storage.getScheduleTemplates(salonId);
      res.json(templates);
    } catch (error) {
      console.error("Error fetching schedule templates:", error);
      res.status(500).json({ error: "Failed to fetch schedule templates" });
    }
  });
  app2.post("/api/salons/:salonId/schedule-templates", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { salonId } = req.params;
      const templateData = {
        ...req.body,
        salonId,
        createdBy: req.user?.id
      };
      const template = await storage.createScheduleTemplate(templateData);
      res.json(template);
    } catch (error) {
      console.error("Error creating schedule template:", error);
      res.status(500).json({ error: "Failed to create schedule template" });
    }
  });
  app2.delete("/api/schedule-templates/:templateId", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { templateId } = req.params;
      await storage.deleteScheduleTemplate(templateId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting schedule template:", error);
      res.status(500).json({ error: "Failed to delete schedule template" });
    }
  });
}
var init_smart_scheduling_routes = __esm({
  "server/smart-scheduling-routes.ts"() {
    "use strict";
    init_smart_scheduling();
    init_storage();
  }
});

// api/index.ts
import express2 from "express";

// server/routes.ts
init_storage();
import { createServer } from "http";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import multer from "multer";

// server/auth.ts
init_storage();
init_schema();
init_db();
init_welcomeEmail();
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { eq as eq2 } from "drizzle-orm";
import connectPg from "connect-pg-simple";
import pg from "pg";
var rawDbUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || "";
function cleanDbUrl(url) {
  try {
    const u = new URL(url);
    u.searchParams.delete("channel_binding");
    return u.toString();
  } catch {
    return url;
  }
}
var dbUrl2 = cleanDbUrl(rawDbUrl);
var sessionPool = new pg.Pool({
  connectionString: dbUrl2,
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 3e4,
  connectionTimeoutMillis: 1e4
});
sessionPool.on("error", (err) => {
  console.error("[SessionPool] Unexpected pool error:", err.message);
});
var scryptAsync = promisify(scrypt);
async function processReferralRewards(referralRecord, newUser) {
  const referrerId = referralRecord.referrerId;
  try {
    if (referralRecord.referralType === "customer_to_shopkeeper") {
      if (newUser.userType === "salon_owner") {
        await db.insert(freeBookingCredits).values({
          id: `credit_${Date.now()}_${referrerId}`,
          customerId: referrerId,
          creditType: "shopkeeper_referral",
          maxAmount: "100",
          // Free booking up to ₹100
          isUsed: false,
          referenceId: referralRecord.id,
          description: "Free booking for referring a salon owner",
          expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3)
          // 90 days from now
        });
        await db.update(referrals).set({
          status: "completed",
          completedAt: /* @__PURE__ */ new Date()
        }).where(eq2(referrals.id, referralRecord.id));
        console.log(`\u{1F389} Shopkeeper referral reward: \u20B9100 free booking credit for user ${referrerId}`);
      }
    } else if (referralRecord.referralType === "customer_to_customer") {
      if (newUser.userType === "customer") {
        const [existingCampaign] = await db.select().from(customerReferralCampaigns).where(eq2(customerReferralCampaigns.referrerId, referrerId));
        if (existingCampaign) {
          const newCount = existingCampaign.currentCount + 1;
          const isCompleted = newCount >= existingCampaign.targetCount;
          await db.update(customerReferralCampaigns).set({
            currentCount: newCount,
            isCompleted,
            completedAt: isCompleted ? /* @__PURE__ */ new Date() : void 0,
            updatedAt: /* @__PURE__ */ new Date()
          }).where(eq2(customerReferralCampaigns.id, existingCampaign.id));
          if (isCompleted) {
            await db.insert(freeBookingCredits).values({
              id: `milestone_${Date.now()}_${referrerId}`,
              customerId: referrerId,
              creditType: "customer_milestone",
              maxAmount: "200",
              // Free booking up to ₹200 for milestone
              isUsed: false,
              referenceId: existingCampaign.id,
              description: "Free booking for 5-customer milestone",
              expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1e3)
              // 180 days
            });
            console.log(`\u{1F389} Milestone reward: \u20B9200 free booking credit for user ${referrerId} (5 customers completed)`);
          } else {
            console.log(`\u{1F4C8} Customer referral progress: ${newCount}/5 for user ${referrerId}`);
          }
        } else {
          await db.insert(customerReferralCampaigns).values({
            id: `campaign_${Date.now()}_${referrerId}`,
            referrerId,
            campaignType: "5_customer_milestone",
            targetCount: 5,
            currentCount: 1,
            isCompleted: false,
            freeBookingCredits: 1,
            creditsUsed: 0
          });
          console.log(`\u{1F4C8} New customer referral campaign started for user ${referrerId} (1/5)`);
        }
        await db.update(referrals).set({
          status: "completed",
          completedAt: /* @__PURE__ */ new Date()
        }).where(eq2(referrals.id, referralRecord.id));
      }
    }
  } catch (error) {
    console.error("Error processing referral rewards:", error);
  }
}
async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const buf = await scryptAsync(password, salt, 64);
  return `${buf.toString("hex")}.${salt}`;
}
async function comparePasswords(supplied, stored) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = await scryptAsync(supplied, salt, 64);
  return timingSafeEqual(hashedBuf, suppliedBuf);
}
async function ensureSessionTable() {
  try {
    await sessionPool.query(`
      CREATE TABLE IF NOT EXISTS "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL,
        CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE
      ) WITH (OIDS=FALSE);
    `);
    await sessionPool.query(`
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");
    `);
  } catch (err) {
    console.log("Session table check complete (may already exist)");
  }
}
async function setupAuth(app2) {
  await ensureSessionTable();
  const PostgresSessionStore = connectPg(session);
  const sessionStore = new PostgresSessionStore({
    pool: sessionPool,
    createTableIfMissing: false,
    ttl: 7 * 24 * 60 * 60
    // 7 days
  });
  const isProduction = process.env.NODE_ENV === "production";
  const sessionSettings = {
    secret: process.env.SESSION_SECRET || "your-secret-key-change-this-in-production",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      secure: isProduction,
      // true on HTTPS production domains like sanwarhub.in
      sameSite: isProduction ? "none" : "lax",
      // 'none' needed for cross-origin HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1e3
      // 7 days
    }
  };
  app2.set("trust proxy", 1);
  app2.use(session(sessionSettings));
  app2.use(passport.initialize());
  app2.use(passport.session());
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user || !await comparePasswords(password, user.password)) {
            return done(null, false, { message: "Invalid email or password" });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      if (!id || typeof id !== "string") {
        console.log("Invalid user ID in session, clearing session");
        return done(null, false);
      }
      const user = await storage.getUser(id);
      if (!user) {
        console.log(`User ${id} not found in database, clearing session`);
        return done(null, false);
      }
      done(null, user);
    } catch (error) {
      console.error("Session deserialization error:", error);
      done(null, false);
    }
  });
  app2.post("/api/register", async (req, res, next) => {
    try {
      const { email, password, firstName, lastName, phone, userType, referralCode } = req.body;
      const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
      const normalizedPassword = typeof password === "string" ? password : "";
      const normalizedFirstName = typeof firstName === "string" ? firstName.trim() : "";
      const normalizedLastName = typeof lastName === "string" ? lastName.trim() : "";
      const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
      const normalizedReferralCode = typeof referralCode === "string" && referralCode.trim() ? referralCode.trim().toUpperCase() : "";
      if (!normalizedEmail || !normalizedPassword || !normalizedFirstName || !normalizedPhone || !userType) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      if (!["customer", "salon_owner", "brand_owner"].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type" });
      }
      if (normalizedPassword.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters" });
      }
      const existingUser = await storage.getUserByEmail(normalizedEmail);
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }
      let referralRecord = null;
      if (normalizedReferralCode) {
        referralRecord = await storage.getReferralByCode(normalizedReferralCode);
        if (!referralRecord) {
          return res.status(400).json({ error: "Invalid referral code" });
        }
        if (referralRecord.status !== "pending") {
          return res.status(400).json({ error: "Referral code has already been used" });
        }
      }
      const hashedPassword = await hashPassword(normalizedPassword);
      const user = await storage.createUser({
        email: normalizedEmail,
        password: hashedPassword,
        firstName: normalizedFirstName,
        lastName: normalizedLastName,
        phone: normalizedPhone,
        userType,
        profileImageUrl: null
      });
      if (referralRecord) {
        await db.update(referrals).set({
          referredId: user.id
        }).where(eq2(referrals.id, referralRecord.id));
        await processReferralRewards(referralRecord, user);
        console.log(`\u2705 Referral processed: ${referralRecord.referralType} for user ${user.firstName}`);
      }
      if (userType === "salon_owner" || userType === "brand_owner") {
        const trialStartedAt = /* @__PURE__ */ new Date();
        const trialEndsAt = new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3);
        await db.update(users).set({ planType: "trial", trialStartedAt, trialEndsAt }).where(eq2(users.id, user.id));
      }
      sendWelcomeEmail(user.email ?? "", user.firstName ?? "", user.userType).then((success) => {
        if (success) {
          console.log(`Welcome email sent successfully to ${user.email}`);
        } else {
          console.log(`Welcome email failed for ${user.email}`);
        }
      }).catch((error) => console.error("Failed to send welcome email:", error));
      req.login(user, (err) => {
        if (err) {
          console.error("Session save failed after registration (non-fatal):", err);
        }
        res.status(201).json({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          userType: user.userType,
          profileImageUrl: user.profileImageUrl,
          referralUsed: !!referralRecord
        });
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Registration failed" });
    }
  });
  app2.post("/api/login", (req, res, next) => {
    if (typeof req.body?.email === "string") {
      req.body.email = req.body.email.trim().toLowerCase();
    }
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ error: info?.message || "Login failed" });
      }
      req.login(user, (err2) => {
        if (err2) {
          console.error("Session save failed after login (non-fatal):", err2);
        }
        res.json({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          userType: user.userType,
          profileImageUrl: user.profileImageUrl
        });
      });
    })(req, res, next);
  });
  const logoutHandler = (req, res, next) => {
    console.log("Logout attempt for user:", req.user?.id);
    req.logout((err) => {
      if (err) {
        console.error("Logout error:", err);
        return next(err);
      }
      req.session.destroy((err2) => {
        if (err2) {
          console.error("Session destroy error:", err2);
          return next(err2);
        }
        res.clearCookie("connect.sid", { path: "/" });
        console.log("User logged out successfully");
        if (req.method === "GET") {
          res.redirect("/");
        } else {
          res.sendStatus(200);
        }
      });
    });
  };
  app2.post("/api/logout", logoutHandler);
  app2.get("/api/logout", logoutHandler);
  app2.get("/api/login", (req, res) => {
    res.redirect("/auth");
  });
  app2.get("/api/auth/user", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.sendStatus(401);
    }
    const user = req.user;
    res.json({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      userType: user.userType,
      profileImageUrl: user.profileImageUrl,
      planType: user.planType || "trial",
      trialStartedAt: user.trialStartedAt || null,
      trialEndsAt: user.trialEndsAt || null
    });
  });
}
var isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
};

// server/objectStorage.ts
import { randomUUID } from "crypto";

// server/objectAcl.ts
init_schema();
import { drizzle as drizzle2 } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq as eq3 } from "drizzle-orm";
var ACL_POLICY_METADATA_KEY = "custom:aclPolicy";
var sql4 = neon(process.env.DATABASE_URL);
var db2 = drizzle2(sql4);
function isPermissionAllowed(requested, granted) {
  if (requested === "READ" /* READ */) {
    return ["READ" /* READ */, "WRITE" /* WRITE */].includes(granted);
  }
  return granted === "WRITE" /* WRITE */;
}
function createObjectAccessGroup(group) {
  switch (group.type) {
    // Implement the case for each type of access group to instantiate.
    //
    // For example:
    // case "USER_LIST":
    //   return new UserListAccessGroup(group.id);
    // case "EMAIL_DOMAIN":
    //   return new EmailDomainAccessGroup(group.id);
    // case "GROUP_MEMBER":
    //   return new GroupMemberAccessGroup(group.id);
    // case "SUBSCRIBER":
    //   return new SubscriberAccessGroup(group.id);
    default:
      throw new Error(`Unknown access group type: ${group.type}`);
  }
}
async function setObjectAclPolicy(objectFile, aclPolicy) {
  const [exists2] = await objectFile.exists();
  if (!exists2) {
    throw new Error(`Object not found: ${objectFile.name}`);
  }
  await objectFile.setMetadata({
    metadata: {
      [ACL_POLICY_METADATA_KEY]: JSON.stringify(aclPolicy)
    }
  });
}
async function getObjectAclPolicy(objectFile) {
  const [metadata] = await objectFile.getMetadata();
  const aclPolicy = metadata?.metadata?.[ACL_POLICY_METADATA_KEY];
  if (!aclPolicy) {
    return null;
  }
  return JSON.parse(aclPolicy);
}
async function canAccessObject({
  userId,
  objectFile,
  requestedPermission
}) {
  const aclPolicy = await getObjectAclPolicy(objectFile);
  if (!aclPolicy) {
    if (requestedPermission === "READ" /* READ */) {
      const objectPath = objectFile.name;
      if (objectPath.startsWith("uploads/")) {
        console.log("Allowing public access to salon media file:", objectPath);
        return true;
      }
    }
    return false;
  }
  if (aclPolicy.visibility === "public" && requestedPermission === "READ" /* READ */) {
    return true;
  }
  if (userId && requestedPermission === "READ" /* READ */) {
    const objectPath = objectFile.name;
    if (objectPath.startsWith("uploads/") || objectPath.includes("staff_photos/")) {
      try {
        const fileId = objectPath.replace("uploads/", "");
        const [staffWithPhoto] = await db2.select().from(staff).where(eq3(staff.photoUrl, fileId)).limit(1);
        if (staffWithPhoto) {
          return true;
        }
      } catch (error) {
        console.error("Error checking staff photo in objectAcl:", error);
      }
    }
  }
  if (!userId) {
    return false;
  }
  if (aclPolicy.owner === userId) {
    return true;
  }
  for (const rule of aclPolicy.aclRules || []) {
    const accessGroup = createObjectAccessGroup(rule.group);
    if (await accessGroup.hasMember(userId) && isPermissionAllowed(requestedPermission, rule.permission)) {
      return true;
    }
  }
  return false;
}

// server/objectStorage.ts
var REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";
var _StorageClass = null;
async function getStorageClass() {
  if (!_StorageClass) {
    const gcs = await import("@google-cloud/storage");
    _StorageClass = gcs.Storage;
  }
  return _StorageClass;
}
async function createStorageClient() {
  const StorageClass = await getStorageClass();
  const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (credentialsJson) {
    try {
      const credentials = JSON.parse(credentialsJson);
      console.log("Using GOOGLE_APPLICATION_CREDENTIALS_JSON for GCS authentication");
      return new StorageClass({ credentials });
    } catch (e) {
      console.error("Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON:", e);
    }
  }
  return new StorageClass({
    credentials: {
      audience: "replit",
      subject_token_type: "access_token",
      token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
      type: "external_account",
      credential_source: {
        url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
        format: {
          type: "json",
          subject_token_field_name: "access_token"
        }
      },
      universe_domain: "googleapis.com"
    },
    projectId: ""
  });
}
var _clientInstance = null;
async function getClientInstance() {
  if (!_clientInstance) {
    _clientInstance = await createStorageClient();
  }
  return _clientInstance;
}
var objectStorageClient = new Proxy({}, {
  get(_target, prop) {
    return (...args) => getClientInstance().then(
      (client) => client[prop](...args)
    );
  }
});
var ObjectNotFoundError = class _ObjectNotFoundError extends Error {
  constructor() {
    super("Object not found");
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, _ObjectNotFoundError.prototype);
  }
};
var ObjectStorageService = class {
  constructor() {
  }
  // Gets the public object search paths.
  getPublicObjectSearchPaths() {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr.split(",").map((path2) => path2.trim()).filter((path2) => path2.length > 0)
      )
    );
    if (paths.length === 0) {
      throw new Error(
        "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
      );
    }
    return paths;
  }
  // Gets the private object directory.
  getPrivateObjectDir() {
    const dir = process.env.PRIVATE_OBJECT_DIR || "";
    if (!dir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
      );
    }
    return dir;
  }
  // Search for a public object from the search paths.
  async searchPublicObject(filePath) {
    const client = await getClientInstance();
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${filePath}`;
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = client.bucket(bucketName);
      const file = bucket.file(objectName);
      const [exists2] = await file.exists();
      if (exists2) {
        return file;
      }
    }
    return null;
  }
  // Downloads an object to the response.
  async downloadObject(file, res, cacheTtlSec = 3600) {
    try {
      const [metadata] = await file.getMetadata();
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": `public, max-age=${cacheTtlSec}`
      });
      const stream = file.createReadStream();
      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });
      stream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    }
  }
  // Gets the upload URL for an object entity.
  async getObjectEntityUploadURL() {
    const privateObjectDir = this.getPrivateObjectDir();
    if (!privateObjectDir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
      );
    }
    const objectId = randomUUID();
    const fullPath = `${privateObjectDir}/uploads/${objectId}`;
    const { bucketName, objectName } = parseObjectPath(fullPath);
    return signObjectURL({
      bucketName,
      objectName,
      method: "PUT",
      ttlSec: 900
    });
  }
  // Gets the object entity file from the object path.
  async getObjectEntityFile(objectPath) {
    if (!objectPath.startsWith("/objects/")) {
      throw new ObjectNotFoundError();
    }
    const parts = objectPath.slice(1).split("/");
    if (parts.length < 2) {
      throw new ObjectNotFoundError();
    }
    const client = await getClientInstance();
    const entityId = parts.slice(1).join("/");
    let entityDir = this.getPrivateObjectDir();
    if (!entityDir.endsWith("/")) {
      entityDir = `${entityDir}/`;
    }
    const objectEntityPath = `${entityDir}${entityId}`;
    const { bucketName, objectName } = parseObjectPath(objectEntityPath);
    const bucket = client.bucket(bucketName);
    const objectFile = bucket.file(objectName);
    const [exists2] = await objectFile.exists();
    if (!exists2) {
      throw new ObjectNotFoundError();
    }
    return objectFile;
  }
  normalizeObjectEntityPath(rawPath) {
    if (rawPath.startsWith("/objects/")) {
      return rawPath;
    }
    if (!rawPath.startsWith("https://storage.googleapis.com/")) {
      return rawPath;
    }
    const url = new URL(rawPath);
    const rawObjectPath = url.pathname;
    let objectEntityDir = this.getPrivateObjectDir();
    if (!objectEntityDir.endsWith("/")) {
      objectEntityDir = `${objectEntityDir}/`;
    }
    if (!rawObjectPath.startsWith(objectEntityDir)) {
      return rawObjectPath;
    }
    const entityId = rawObjectPath.slice(objectEntityDir.length);
    return `/objects/${entityId}`;
  }
  // Tries to set the ACL policy for the object entity and return the normalized path.
  async trySetObjectEntityAclPolicy(rawPath, aclPolicy) {
    const normalizedPath = this.normalizeObjectEntityPath(rawPath);
    if (!normalizedPath.startsWith("/objects/")) {
      return normalizedPath;
    }
    const objectFile = await this.getObjectEntityFile(normalizedPath);
    await setObjectAclPolicy(objectFile, aclPolicy);
    return normalizedPath;
  }
  // Checks if the user can access the object entity.
  async canAccessObjectEntity({
    userId,
    objectFile,
    requestedPermission
  }) {
    return canAccessObject({
      userId,
      objectFile,
      requestedPermission: requestedPermission ?? "READ" /* READ */
    });
  }
};
function parseObjectPath(path2) {
  if (!path2.startsWith("/")) {
    path2 = `/${path2}`;
  }
  const pathParts = path2.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }
  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");
  return {
    bucketName,
    objectName
  };
}
async function signObjectURL({
  bucketName,
  objectName,
  method,
  ttlSec
}) {
  const request = {
    bucket_name: bucketName,
    object_name: objectName,
    method,
    expires_at: new Date(Date.now() + ttlSec * 1e3).toISOString()
  };
  const response = await fetch(
    `${REPLIT_SIDECAR_ENDPOINT}/object-storage/signed-object-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to sign object URL, errorcode: ${response.status}, make sure you're running on Replit`
    );
  }
  const { signed_url: signedURL } = await response.json();
  return signedURL;
}

// server/routes.ts
init_db();
init_schema();
init_notifications();
init_welcomeEmail();
init_emailService();
import { eq as eq8, desc as desc3, isNotNull, sql as sql6, count, and as and6, or as or3, not, exists, asc as asc2, inArray as inArray3, gte as gte5, lte as lte3, isNull as isNull3 } from "drizzle-orm";

// server/cashfree-payment.ts
async function createCashfreeOrder(_data) {
  throw new Error("Payment gateway not configured.");
}
async function verifyCashfreePayment(_orderId) {
  return { success: false, error: "Payment gateway not configured." };
}

// shared/revenue.ts
var REVENUE_SHARE = {
  PLATFORM_PERCENTAGE: 20,
  // Platform gets 20%
  SALON_PERCENTAGE: 80
  // Salon owner gets 80%
};
function calculateRevenueShare(confirmationAmount) {
  const platformShare = confirmationAmount * REVENUE_SHARE.PLATFORM_PERCENTAGE / 100;
  const salonShare = confirmationAmount * REVENUE_SHARE.SALON_PERCENTAGE / 100;
  return {
    platformShare: Math.round(platformShare * 100) / 100,
    // Round to 2 decimal places
    salonShare: Math.round(salonShare * 100) / 100,
    total: confirmationAmount
  };
}

// server/routes.ts
init_whatsapp();
import jwt from "jsonwebtoken";
import { scrypt as scrypt2, randomBytes as randomBytes2 } from "crypto";
import { promisify as promisify2 } from "util";

// server/seoRoutes.ts
var nearMePages = {
  "salon-near-me": {
    title: "Best Salon Near Me | Find Top-Rated Beauty Salons - Sanwar",
    description: "Find the best salon near you! Book appointments at top-rated beauty salons instantly. Verified reviews, professional staff, best prices guaranteed.",
    h1: "Best Salon Near Me",
    content: "Discover top-rated beauty salons in your area with Sanwar. Book appointments instantly at verified salons with professional staff and excellent reviews."
  },
  "haircut-near-me": {
    title: "Haircut Near Me | Professional Hair Styling Services - Sanwar",
    description: "Find professional haircut services near you! Book men's, women's & kids haircuts at top salons. Expert stylists, latest trends, affordable prices.",
    h1: "Haircut Near Me",
    content: "Get the perfect haircut from expert stylists near you. From classic cuts to trendy styles, book professional haircut services instantly."
  },
  "spa-near-me": {
    title: "Spa Near Me | Relaxing Massage & Wellness Treatments - Sanwar",
    description: "Find relaxing spa treatments near you! Book massages, body treatments, and wellness services. Professional therapists, serene environment.",
    h1: "Spa Near Me",
    content: "Indulge in relaxing spa treatments and massages near you. Professional therapists providing rejuvenating wellness services in serene environments."
  },
  "beauty-salon-near-me": {
    title: "Beauty Salon Near Me | Complete Beauty Services - Sanwar",
    description: "Find complete beauty services near you! Facial, makeup, hair care, nail services. Professional beauticians, quality products, affordable rates.",
    h1: "Beauty Salon Near Me",
    content: "Get comprehensive beauty services from professional beauticians near you. From facial treatments to complete makeovers, book quality beauty services."
  },
  "bridal-makeup-near-me": {
    title: "Bridal Makeup Near Me | Professional Wedding Makeup - Sanwar",
    description: "Find professional bridal makeup artists near you! HD makeup, pre-bridal treatments, engagement makeup. Experienced artists, quality products.",
    h1: "Bridal Makeup Near Me",
    content: "Look stunning on your special day with professional bridal makeup artists near you. HD makeup, airbrush techniques, and complete bridal packages."
  },
  "facial-near-me": {
    title: "Facial Near Me | Professional Skin Care Treatments - Sanwar",
    description: "Find professional facial treatments near you! Deep cleansing, anti-aging, brightening facials. Expert aestheticians, quality products.",
    h1: "Facial Near Me",
    content: "Rejuvenate your skin with professional facial treatments near you. Expert aestheticians providing customized facial services for all skin types."
  },
  "best-salon-near-me": {
    title: "Best Salon Near Me | Top-Rated Beauty & Hair Salons - Sanwar",
    description: "Find the best salon near you! Top-rated beauty and hair salons with verified reviews. Professional services, expert staff, excellent results.",
    h1: "Best Salon Near Me",
    content: "Discover the best salons near you with verified reviews and top ratings. Professional beauty and hair services from expert stylists and beauticians."
  },
  "hair-salon-near-me": {
    title: "Hair Salon Near Me | Professional Hair Care Services - Sanwar",
    description: "Find professional hair salons near you! Haircuts, styling, coloring, treatments. Expert hair stylists, quality products, latest trends.",
    h1: "Hair Salon Near Me",
    content: "Transform your hair at professional hair salons near you. Expert stylists providing cutting-edge hair services and treatments for all hair types."
  },
  "unisex-salon-near-me": {
    title: "Unisex Salon Near Me | Hair & Beauty for Men & Women - Sanwar",
    description: "Find unisex salons near you! Complete hair and beauty services for men and women. Professional stylists, modern facilities, affordable prices.",
    h1: "Unisex Salon Near Me",
    content: "Enjoy comprehensive hair and beauty services for both men and women at unisex salons near you. Modern facilities with professional stylists."
  },
  "mens-salon-near-me": {
    title: "Men's Salon Near Me | Professional Male Grooming - Sanwar",
    description: "Find men's salon services near you! Haircuts, beard grooming, facial treatments. Professional male grooming specialists, modern techniques.",
    h1: "Men's Salon Near Me",
    content: "Get professional male grooming services at men's salons near you. Expert barbers and stylists specializing in men's haircuts and grooming."
  },
  "womens-salon-near-me": {
    title: "Women's Salon Near Me | Beauty & Hair Services for Women - Sanwar",
    description: "Find women's salon services near you! Hair styling, beauty treatments, nail services. Professional beauticians specializing in women's needs.",
    h1: "Women's Salon Near Me",
    content: "Pamper yourself at women's salons near you. Professional beauticians providing specialized hair, beauty, and wellness services for women."
  },
  "manicure-pedicure-near-me": {
    title: "Manicure Pedicure Near Me | Professional Nail Care - Sanwar",
    description: "Find manicure pedicure services near you! Professional nail care, nail art, gel polish. Expert nail technicians, hygienic conditions.",
    h1: "Manicure Pedicure Near Me",
    content: "Get beautiful nails with professional manicure and pedicure services near you. Expert nail technicians providing complete nail care and art."
  },
  "waxing-near-me": {
    title: "Waxing Near Me | Professional Hair Removal Services - Sanwar",
    description: "Find professional waxing services near you! Full body waxing, facial hair removal. Expert aestheticians, hygienic conditions, pain-free experience.",
    h1: "Waxing Near Me",
    content: "Get smooth skin with professional waxing services near you. Expert aestheticians providing safe and hygienic hair removal treatments."
  },
  "threading-near-me": {
    title: "Threading Near Me | Precise Eyebrow & Facial Threading - Sanwar",
    description: "Find precise threading services near you! Eyebrow shaping, facial hair removal. Expert threading specialists, natural and precise results.",
    h1: "Threading Near Me",
    content: "Get perfectly shaped eyebrows with professional threading services near you. Expert specialists providing precise and natural-looking results."
  },
  "hair-color-near-me": {
    title: "Hair Color Near Me | Professional Hair Coloring Services - Sanwar",
    description: "Find professional hair coloring services near you! Hair dye, highlights, balayage, ombre. Expert colorists, quality products, latest trends.",
    h1: "Hair Color Near Me",
    content: "Transform your look with professional hair coloring services near you. Expert colorists using premium products for stunning, long-lasting results."
  },
  // Popular Salon Brands in India
  "lakme-salon-near-me": {
    title: "Lakme Salon Near Me | Professional Beauty Services - Sanwar",
    description: "Find Lakme Salon near you! Premium beauty services, professional makeup, hair styling. Book appointments at India's leading beauty salon chain.",
    h1: "Lakme Salon Near Me",
    content: "Experience premium beauty services at Lakme Salon near you. India's leading beauty salon chain offering professional makeup, hair styling, and skincare treatments."
  },
  "vlcc-near-me": {
    title: "VLCC Near Me | Weight Loss & Beauty Treatments - Sanwar",
    description: "Find VLCC centers near you! Weight loss programs, beauty treatments, wellness services. Book appointments at India's trusted wellness brand.",
    h1: "VLCC Near Me",
    content: "Transform your health and beauty at VLCC centers near you. Leading wellness brand offering weight loss programs, beauty treatments, and holistic wellness services."
  },
  "naturals-salon-near-me": {
    title: "Naturals Salon Near Me | Family Beauty & Wellness - Sanwar",
    description: "Find Naturals Salon near you! Family beauty salon, hair care, beauty treatments. Natural products, affordable services, trusted brand.",
    h1: "Naturals Salon Near Me",
    content: "Enjoy family-friendly beauty services at Naturals Salon near you. Trusted salon chain offering natural beauty treatments, hair care, and wellness services."
  },
  "juice-salon-near-me": {
    title: "Juice Salon Near Me | Premium Hair & Beauty - Sanwar",
    description: "Find Juice Salon near you! Premium hair styling, beauty treatments, modern facilities. Professional stylists, quality products, luxury experience.",
    h1: "Juice Salon Near Me",
    content: "Experience luxury beauty services at Juice Salon near you. Premium salon chain offering professional hair styling, beauty treatments in modern facilities."
  },
  "jcb-salon-near-me": {
    title: "Jawed Habib Salon Near Me | Celebrity Hair Styling - Sanwar",
    description: "Find Jawed Habib Salon near you! Celebrity hair stylist salon, professional cuts, styling. Expert hair care, premium products, modern techniques.",
    h1: "Jawed Habib Salon Near Me",
    content: "Get celebrity-style haircuts at Jawed Habib Salon near you. India's renowned celebrity hair stylist salon offering professional cuts and styling."
  },
  "toni-guy-near-me": {
    title: "Toni & Guy Near Me | International Hair Styling - Sanwar",
    description: "Find Toni & Guy salon near you! International hair styling brand, professional cuts, color. Expert stylists, premium products, latest trends.",
    h1: "Toni & Guy Near Me",
    content: "Experience international hair styling at Toni & Guy near you. World-renowned salon brand offering professional cuts, color, and styling services."
  },
  "looks-salon-near-me": {
    title: "Looks Salon Near Me | Affordable Beauty Services - Sanwar",
    description: "Find Looks Salon near you! Affordable beauty services, hair care, grooming. Budget-friendly salon, quality services, convenient locations.",
    h1: "Looks Salon Near Me",
    content: "Enjoy affordable beauty services at Looks Salon near you. Budget-friendly salon chain offering quality hair care, beauty treatments, and grooming services."
  },
  "green-trends-near-me": {
    title: "Green Trends Near Me | Eco-Friendly Beauty Salon - Sanwar",
    description: "Find Green Trends salon near you! Eco-friendly beauty services, natural products, sustainable practices. Professional care with environmental consciousness.",
    h1: "Green Trends Near Me",
    content: "Experience eco-friendly beauty services at Green Trends near you. Sustainable salon chain using natural products and environmentally conscious practices."
  },
  "headturners-salon-near-me": {
    title: "Headturners Salon Near Me | Trendy Hair & Beauty - Sanwar",
    description: "Find Headturners Salon near you! Trendy hair styling, modern beauty treatments, fashion-forward services. Contemporary salon experience.",
    h1: "Headturners Salon Near Me",
    content: "Get trendy hair and beauty services at Headturners Salon near you. Contemporary salon offering fashion-forward styling and modern beauty treatments."
  },
  "bounce-salon-near-me": {
    title: "Bounce Salon Near Me | Premium Blow Dry & Styling - Sanwar",
    description: "Find Bounce Salon near you! Premium blow dry services, hair styling, quick makeovers. Professional stylists, quality products, express services.",
    h1: "Bounce Salon Near Me",
    content: "Experience premium blow dry services at Bounce Salon near you. Specialized salon offering professional hair styling, quick makeovers, and express beauty services."
  }
};
function generateNearMePage(service, data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <meta name="description" content="${data.description}">
    <meta name="keywords" content="${service.replace(/-/g, " ")}, ${service.replace(/-/g, " ")} booking, beauty services, salon booking">
    
    <!-- Local SEO Meta Tags -->
    <meta name="geo.region" content="IN">
    <meta name="geo.placename" content="India">
    <meta name="ICBM" content="20.5937, 78.9629">
    <meta name="DC.title" content="${data.h1} - Sanwar">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sanwarhub.in/${service}/">
    <meta property="og:image" content="https://sanwarhub.in/og-image.jpg">
    <meta property="og:site_name" content="Sanwar">
    <meta property="og:locale" content="en_IN">
    
    <!-- Local Business Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sanwar - ${data.h1}",
        "description": "${data.description}",
        "url": "https://sanwarhub.in",
        "telephone": "+91-9999999999",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "20.5937",
            "longitude": "78.9629"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "\u20B9\u20B9",
        "serviceType": ["${service.replace(/-/g, " ")}"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1500"
        }
    }
    </script>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DBC4KWYHJJ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DBC4KWYHJJ');
    </script>
    
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #333; font-size: 2.5em; margin-bottom: 20px; text-align: center; }
        h2 { color: #555; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 18px; margin: 20px 0; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
        .feature { padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; }
        .highlight { background: #f0f7ff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>${data.h1}</h1>
        
        <div class="highlight">
            <p style="font-size: 18px; margin: 0;">${data.content}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://sanwarhub.in" class="cta-button">Find ${data.h1} \u279C</a>
        </div>
        
        <h2>Why Choose Sanwar for ${data.h1}?</h2>
        
        <div class="features">
            <div class="feature">
                <h3>\u{1F31F} Verified Professionals</h3>
                <p>All service providers are verified with excellent ratings and reviews.</p>
            </div>
            <div class="feature">
                <h3>\u26A1 Instant Booking</h3>
                <p>Book appointments instantly without phone calls or waiting.</p>
            </div>
            <div class="feature">
                <h3>\u{1F4B0} Best Prices</h3>
                <p>Compare prices and get the best deals on beauty services.</p>
            </div>
            <div class="feature">
                <h3>\u{1F4CD} Near You</h3>
                <p>Find services exactly where you need them, close to your location.</p>
            </div>
        </div>
        
        <h2>Popular Salon Brands on Sanwar</h2>
        <div class="features">
            <div class="feature">
                <h3>\u{1F3C6} Lakme Salon</h3>
                <p>India's leading beauty salon chain offering premium services, professional makeup, and hair styling.</p>
            </div>
            <div class="feature">
                <h3>\u{1F33F} Naturals</h3>
                <p>Family beauty salon with natural products, affordable services, and trusted brand reputation.</p>
            </div>
            <div class="feature">
                <h3>\u2728 VLCC</h3>
                <p>Weight loss programs, beauty treatments, and holistic wellness services from India's trusted brand.</p>
            </div>
            <div class="feature">
                <h3>\u{1F4AB} Juice Salon</h3>
                <p>Premium hair styling and beauty treatments in modern facilities with luxury experience.</p>
            </div>
        </div>
        
        <h2>How It Works</h2>
        <ol style="font-size: 18px; line-height: 1.8;">
            <li><strong>Search:</strong> Find ${service.replace(/-/g, " ")} services near your location</li>
            <li><strong>Compare:</strong> View ratings, reviews, and prices from top salon brands</li>
            <li><strong>Book:</strong> Select your preferred salon brand, time and confirm instantly</li>
            <li><strong>Enjoy:</strong> Get professional service at premium salon chains</li>
        </ol>
        
        <h2>More Popular Salon Brands</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Jawed Habib</strong><br>
                <small>Celebrity Hair Styling</small>
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Toni & Guy</strong><br>
                <small>International Hair Brand</small>
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Looks Salon</strong><br>
                <small>Affordable Beauty Services</small>
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Green Trends</strong><br>
                <small>Eco-Friendly Salon</small>
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Headturners</strong><br>
                <small>Trendy Hair & Beauty</small>
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
                <strong>Bounce Salon</strong><br>
                <small>Premium Blow Dry</small>
            </div>
        </div>
        
        <div style="background: #667eea; color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 40px 0;">
            <h2 style="color: white; border: none;">Ready to Book ${data.h1}?</h2>
            <p style="font-size: 18px;">Join thousands of satisfied customers who trust Sanwar for beauty services at top salon brands.</p>
            <a href="https://sanwarhub.in" style="background: white; color: #667eea; padding: 15px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 18px;">Book Now</a>
        </div>
        
        <footer style="text-align: center; padding: 20px 0; border-top: 1px solid #eee; color: #666; margin-top: 40px;">
            <p>&copy; 2025 Sanwar. India's #1 platform for ${service.replace(/-/g, " ")} services.</p>
        </footer>
    </div>
</body>
</html>`;
}
function setupSEORoutes(app2) {
  Object.keys(nearMePages).forEach((service) => {
    app2.get(`/${service}/`, (req, res) => {
      const pageData = nearMePages[service];
      const html = generateNearMePage(service, pageData);
      res.send(html);
    });
  });
  app2.get("/salon-near-me/", (req, res) => {
    const html = generateNearMePage("salon-near-me", nearMePages["salon-near-me"]);
    res.send(html);
  });
}

// server/routes.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var scryptAsync2 = promisify2(scrypt2);
var upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024,
    // 100MB
    files: 50
    // Maximum 50 files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/mov"
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images and videos are allowed."));
    }
  }
});
function getBaseUrl(requestHost) {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  if (requestHost && (requestHost.includes("sanwarhub.in") || requestHost === "sanwarhub.in")) {
    return "https://sanwarhub.in";
  }
  return "https://sanwar-book-nirajregar7.replit.app";
}
function generateTimeSlotsForDate(date, openingTime, closingTime, slotDuration, breakStartTime, breakEndTime) {
  const slots = [];
  const [openHour, openMin] = openingTime.split(":").map(Number);
  const [closeHour, closeMin] = closingTime.split(":").map(Number);
  const [breakStartHour, breakStartMin] = breakStartTime.split(":").map(Number);
  const [breakEndHour, breakEndMin] = breakEndTime.split(":").map(Number);
  const openingMinutes = openHour * 60 + openMin;
  const closingMinutes = closeHour * 60 + closeMin;
  const breakStartMinutes = breakStartHour * 60 + breakStartMin;
  const breakEndMinutes = breakEndHour * 60 + breakEndMin;
  for (let minutes = openingMinutes; minutes < closingMinutes; minutes += slotDuration) {
    const endMinutes = minutes + slotDuration;
    if (minutes >= breakStartMinutes && minutes < breakEndMinutes || endMinutes > breakStartMinutes && endMinutes <= breakEndMinutes || minutes < breakStartMinutes && endMinutes > breakEndMinutes) {
      continue;
    }
    if (endMinutes > closingMinutes) {
      break;
    }
    const startHour = Math.floor(minutes / 60);
    const startMin = minutes % 60;
    const endHour = Math.floor(endMinutes / 60);
    const endMin = endMinutes % 60;
    slots.push({
      date,
      startTime: `${startHour.toString().padStart(2, "0")}:${startMin.toString().padStart(2, "0")}`,
      endTime: `${endHour.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}`
    });
  }
  return slots;
}
async function registerRoutes(app2) {
  app2.get("/sw.js", (_req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Service-Worker-Allowed", "/");
    next();
  });
  await setupAuth(app2);
  setupSEORoutes(app2);
  app2.put("/api/user/type", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { userType } = req.body;
      if (!userType || !["customer", "salon_owner", "brand_owner"].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type" });
      }
      const user = await storage.updateUserType(userId, userType);
      res.json(user);
    } catch (error) {
      console.error("Error updating user type:", error);
      res.status(500).json({ error: "Failed to update user type" });
    }
  });
  app2.get("/api/auth/user", async (req, res) => {
    try {
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.json(null);
      }
      const userId = req.user?.id;
      if (!userId) {
        return res.json(null);
      }
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.json(null);
    }
  });
  app2.post("/api/auth/set-user-type", async (req, res) => {
    try {
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { userType } = req.body;
      if (!userType || !["customer", "salon_owner", "brand_owner"].includes(userType)) {
        return res.status(400).json({ message: "Invalid user type" });
      }
      const updatedUser = await storage.updateUserType(userId, userType);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error setting user type:", error);
      res.status(500).json({ message: "Failed to set user type" });
    }
  });
  async function hashPassword2(password) {
    const salt = randomBytes2(16).toString("hex");
    const buf = await scryptAsync2(password, salt, 64);
    return `${buf.toString("hex")}.${salt}`;
  }
  app2.post("/api/auth/forgot-password", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.json({ message: "If an account with that email exists, you will receive a reset code shortly." });
      }
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1e3);
      await storage.createPasswordResetOtp({
        phone: email,
        email,
        otp,
        expiresAt
      });
      const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><style>
          body { font-family: Arial, sans-serif; background: #f8f9fa; margin: 0; padding: 20px; }
          .container { max-width: 480px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 24px; }
          .body { padding: 32px; }
          .otp-box { background: #f0f4ff; border: 2px dashed #667eea; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0; }
          .otp-code { font-size: 42px; font-weight: 900; letter-spacing: 10px; color: #667eea; font-family: monospace; }
          .note { color: #888; font-size: 13px; margin-top: 8px; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #aaa; font-size: 12px; }
        </style></head>
        <body>
          <div class="container">
            <div class="header"><h1>\u2702\uFE0F Sanwar Password Reset</h1></div>
            <div class="body">
              <p>Hi ${user.firstName || "there"},</p>
              <p>We received a request to reset your Sanwar account password. Use the code below to complete the reset:</p>
              <div class="otp-box">
                <div class="otp-code">${otp}</div>
                <div class="note">This code expires in 15 minutes</div>
              </div>
              <p>Enter this code on the password reset page to create a new password.</p>
              <p>If you didn't request this, you can safely ignore this email \u2014 your password won't change.</p>
            </div>
            <div class="footer">\xA9 Sanwar \xB7 Smart Salon Booking \xB7 sanwarhub.in</div>
          </div>
        </body>
        </html>
      `;
      const emailSent = await sendEmail2({
        to: email,
        subject: "Your Sanwar Password Reset Code",
        html: emailHtml
      });
      if (!emailSent) {
        console.warn(`Password reset email could not be sent to ${email}, but OTP stored in DB.`);
      }
      res.json({ message: "If an account with that email exists, you will receive a reset code shortly." });
    } catch (error) {
      console.error("Forgot password error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/auth/reset-password", async (req, res) => {
    try {
      const { email, otp, newPassword } = req.body;
      if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Email, OTP, and new password are required" });
      }
      if (newPassword.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
      }
      const otpRecord = await storage.getValidPasswordResetOtpByEmail(email, otp);
      if (!otpRecord) {
        return res.status(400).json({ message: "Invalid or expired code. Please request a new one." });
      }
      const hashedPassword = await hashPassword2(newPassword);
      const updatedUser = await storage.updateUserPassword(email, hashedPassword);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      await storage.markPasswordResetOtpUsed(otpRecord.id);
      res.json({ message: "Password reset successful! You can now log in with your new password." });
    } catch (error) {
      console.error("Reset password error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/auth/send-email-verification", async (req, res) => {
    try {
      const { email, userType } = req.body;
      if (!email || !userType) {
        return res.status(400).json({ message: "Email and user type are required" });
      }
      if (!["salon_owner", "brand_owner"].includes(userType)) {
        return res.status(400).json({ message: "Invalid user type for email verification" });
      }
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
      await db.delete(emailVerificationOtps).where(eq8(emailVerificationOtps.email, email));
      await db.insert(emailVerificationOtps).values({
        email,
        otp,
        userType,
        expiresAt
      });
      const success = await sendEmailVerificationOtp(email, otp, userType);
      if (!success) {
        return res.status(500).json({ message: "Failed to send verification email. Please try again." });
      }
      res.json({ message: "Verification code sent to your email" });
    } catch (error) {
      console.error("Send email verification error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/auth/verify-email-otp", async (req, res) => {
    try {
      const { email, otp } = req.body;
      if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
      }
      const otpRecord = await db.select().from(emailVerificationOtps).where(
        and6(
          eq8(emailVerificationOtps.email, email),
          eq8(emailVerificationOtps.otp, otp),
          eq8(emailVerificationOtps.verified, false),
          gte5(emailVerificationOtps.expiresAt, /* @__PURE__ */ new Date())
        )
      ).limit(1);
      if (otpRecord.length === 0) {
        await db.update(emailVerificationOtps).set({ attempts: sql6`attempts + 1` }).where(eq8(emailVerificationOtps.email, email));
        return res.status(400).json({ message: "Invalid or expired verification code" });
      }
      await db.update(emailVerificationOtps).set({ verified: true }).where(eq8(emailVerificationOtps.id, otpRecord[0].id));
      res.json({
        message: "Email verified successfully",
        userType: otpRecord[0].userType
      });
    } catch (error) {
      console.error("Verify email OTP error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/platform/stats", async (req, res) => {
    try {
      const [
        totalCustomersResult,
        totalSalonsResult,
        totalBookingsResult,
        totalServicesResult
      ] = await Promise.all([
        db.select({ count: count() }).from(users).where(eq8(users.userType, "customer")),
        db.select({ count: count() }).from(salons),
        db.select({ count: count() }).from(bookings),
        db.select({ count: count() }).from(services)
      ]);
      const stats = {
        id: "stats",
        totalCustomers: Number(totalCustomersResult[0]?.count) || 0,
        totalSalons: Number(totalSalonsResult[0]?.count) || 0,
        totalBookings: Number(totalBookingsResult[0]?.count) || 0,
        totalServices: Number(totalServicesResult[0]?.count) || 0,
        lastUpdated: /* @__PURE__ */ new Date()
      };
      res.json(stats);
    } catch (error) {
      console.error("Error fetching platform stats:", error);
      res.status(500).json({ message: "Failed to fetch platform statistics" });
    }
  });
  app2.get("/api/salons/nearby", async (req, res) => {
    try {
      const { lat, lng, radius = "30" } = req.query;
      if (!lat || !lng || typeof lat !== "string" || typeof lng !== "string") {
        return res.status(400).json({ message: "Location parameters (lat, lng) are required" });
      }
      const userLat = parseFloat(lat);
      const userLng = parseFloat(lng);
      const searchRadius = parseFloat(typeof radius === "string" ? radius : "30");
      if (isNaN(userLat) || isNaN(userLng)) {
        return res.status(400).json({ message: "Invalid location parameters" });
      }
      const allSalons = await db.select({
        salon: salons,
        primaryMedia: salonMedia
      }).from(salons).leftJoin(salonMedia, and6(
        eq8(salonMedia.salonId, salons.id),
        eq8(salonMedia.isActive, true),
        eq8(salonMedia.isPrimary, true)
      )).where(
        and6(
          eq8(salons.isActive, true),
          or3(
            eq8(salons.verificationStatus, "approved"),
            eq8(salons.verificationStatus, "pending")
          )
        )
      );
      const activeSalonOffers = await db.select({ salonId: salonOffers.salonId }).from(salonOffers).where(and6(eq8(salonOffers.isActive, true), eq8(salonOffers.isVisible, true)));
      const salonIdsWithOffers = new Set(activeSalonOffers.map((o) => o.salonId));
      const salonsWithDistance = allSalons.filter((row) => row.salon.latitude && row.salon.longitude).map((row) => {
        const salonLat = parseFloat(row.salon.latitude);
        const salonLng = parseFloat(row.salon.longitude);
        const R = 6371;
        const dLat = (salonLat - userLat) * Math.PI / 180;
        const dLng = (salonLng - userLng) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(userLat * Math.PI / 180) * Math.cos(salonLat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return {
          ...row.salon,
          primaryImageUrl: row.primaryMedia?.fileUrl || null,
          distance,
          hasActiveOffers: salonIdsWithOffers.has(row.salon.id)
        };
      }).filter((salon) => salon.distance <= searchRadius).sort((a, b) => a.distance - b.distance);
      res.json(salonsWithDistance);
    } catch (error) {
      console.error("Error fetching nearby salons:", error);
      res.status(500).json({ message: "Failed to fetch nearby salons" });
    }
  });
  app2.get("/api/salons/featured", async (req, res) => {
    try {
      const { lat, lng, radius = "30" } = req.query;
      const allFeaturedSalons = await db.select({
        salon: salons,
        primaryMedia: salonMedia
      }).from(salons).leftJoin(salonMedia, and6(
        eq8(salonMedia.salonId, salons.id),
        eq8(salonMedia.isActive, true),
        eq8(salonMedia.isPrimary, true)
      )).where(
        and6(
          eq8(salons.isActive, true),
          or3(
            eq8(salons.verificationStatus, "approved"),
            eq8(salons.verificationStatus, "pending")
            // Allow pending salons to show for now
          )
        )
      ).orderBy(desc3(salons.averageRating), desc3(salons.totalReviews));
      const activeFeaturedOffers = await db.select({ salonId: salonOffers.salonId }).from(salonOffers).where(and6(eq8(salonOffers.isActive, true), eq8(salonOffers.isVisible, true)));
      const featuredSalonIdsWithOffers = new Set(activeFeaturedOffers.map((o) => o.salonId));
      const salonsWithMedia = allFeaturedSalons.map((row) => ({
        ...row.salon,
        primaryImageUrl: row.primaryMedia?.fileUrl || null,
        hasActiveOffers: featuredSalonIdsWithOffers.has(row.salon.id)
      }));
      let featuredSalons = salonsWithMedia;
      if (lat && lng && typeof lat === "string" && typeof lng === "string") {
        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);
        const searchRadius = parseFloat(typeof radius === "string" ? radius : "30");
        if (!isNaN(userLat) && !isNaN(userLng)) {
          const salonsWithDistance = salonsWithMedia.filter((salon) => salon.latitude && salon.longitude).map((salon) => {
            const salonLat = parseFloat(salon.latitude);
            const salonLng = parseFloat(salon.longitude);
            const R = 6371;
            const dLat = (salonLat - userLat) * Math.PI / 180;
            const dLng = (salonLng - userLng) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(userLat * Math.PI / 180) * Math.cos(salonLat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;
            return { ...salon, distance };
          }).filter((salon) => salon.distance <= searchRadius).sort((a, b) => a.distance - b.distance);
          featuredSalons = salonsWithDistance;
        }
      }
      res.json(featuredSalons);
    } catch (error) {
      console.error("Error fetching featured salons:", error);
      res.status(500).json({ message: "Failed to fetch featured salons" });
    }
  });
  app2.get("/api/user/salon", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user || user.userType !== "salon_owner") {
        return res.status(404).json({ message: "No salon found for this user" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "No salon found for this user" });
      }
      res.json(salon);
    } catch (error) {
      console.error("Error fetching user salon:", error);
      res.status(500).json({ message: "Failed to fetch salon" });
    }
  });
  app2.get("/api/salons/search", async (req, res) => {
    try {
      const {
        lat,
        lng,
        radius = "50",
        // Default 50km radius
        name,
        location,
        minRating = "0",
        maxPrice = "10000"
      } = req.query;
      let conditions = [
        eq8(salons.isActive, true),
        or3(
          eq8(salons.verificationStatus, "approved"),
          eq8(salons.verificationStatus, "pending")
          // Allow pending salons to show for now
        )
      ];
      if (name && typeof name === "string") {
        conditions.push(sql6`LOWER(${salons.name}) LIKE LOWER(${"%" + name + "%"})`);
      }
      if (location && typeof location === "string") {
        const cleanLocation = location.toLowerCase().replace(/salons?\s+(in|near|at)\s+/g, "").replace(/^\s*in\s+/g, "").replace(/^\s*near\s+/g, "").trim();
        if (cleanLocation) {
          const locationVariants = [cleanLocation];
          if (cleanLocation.includes("chennai")) {
            locationVariants.push(
              "choolaimedu",
              "anna nagar",
              "t nagar",
              "velachery",
              "tambaram",
              "adyar",
              "mylapore",
              "nungambakkam",
              "egmore",
              "guindy",
              "porur",
              "omr",
              "ecr",
              "chrompet",
              "kk nagar",
              "madras"
            );
          }
          if (cleanLocation.includes("trichy") || cleanLocation.includes("tiruchirappalli")) {
            locationVariants.push(
              "nit",
              "bhel",
              "cantonment",
              "srirangam",
              "thuvakudi",
              "chatram",
              "airport",
              "tennur",
              "puthur",
              "tiruchirapalli"
            );
          }
          if (cleanLocation.includes("delhi")) {
            locationVariants.push(
              "new delhi",
              "cp",
              "connaught place",
              "karol bagh",
              "lajpat nagar",
              "saket",
              "vasant kunj",
              "dwarka",
              "gurgaon",
              "noida"
            );
          }
          if (cleanLocation.includes("mumbai")) {
            locationVariants.push(
              "bombay",
              "andheri",
              "bandra",
              "juhu",
              "colaba",
              "worli",
              "powai",
              "malad",
              "borivali",
              "thane"
            );
          }
          if (cleanLocation.includes("bangalore") || cleanLocation.includes("bengaluru")) {
            locationVariants.push(
              "koramangala",
              "indiranagar",
              "whitefield",
              "electronic city",
              "jp nagar",
              "btm layout",
              "malleshwaram",
              "jayanagar"
            );
          }
          if (cleanLocation.includes("hyderabad")) {
            locationVariants.push(
              "hitech city",
              "jubilee hills",
              "banjara hills",
              "secunderabad",
              "gachibowli",
              "madhapur",
              "kondapur"
            );
          }
          if (cleanLocation.includes("pune")) {
            locationVariants.push(
              "koregaon park",
              "hinjewadi",
              "viman nagar",
              "kothrud",
              "wakad",
              "baner",
              "aundh"
            );
          }
          if (cleanLocation.includes("rajasthan")) {
            locationVariants.push("jaipur", "jodhpur", "udaipur", "bikaner", "ajmer");
          }
          if (cleanLocation.includes("tamil nadu") || cleanLocation.includes("tamilnadu")) {
            locationVariants.push("chennai", "coimbatore", "madurai", "trichy", "salem");
          }
          const locationConditions = locationVariants.map(
            (variant) => sql6`LOWER(${salons.address}) LIKE LOWER(${"%" + variant + "%"})`
          );
          conditions.push(or3(...locationConditions));
        }
      }
      if (minRating && typeof minRating === "string") {
        const minRatingValue = parseFloat(minRating);
        if (minRatingValue > 0) {
          conditions.push(sql6`${salons.averageRating} >= ${minRatingValue}`);
        }
      }
      if (maxPrice && typeof maxPrice === "string") {
        const maxPriceValue = parseInt(maxPrice);
        if (maxPriceValue < 1e4) {
          conditions.push(sql6`${salons.confirmationAmount} <= ${maxPriceValue}`);
        }
      }
      const allSalons = await db.select().from(salons).where(and6(...conditions));
      if (lat && lng && typeof lat === "string" && typeof lng === "string") {
        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);
        const searchRadius = parseFloat(typeof radius === "string" ? radius : "50");
        if (!isNaN(userLat) && !isNaN(userLng)) {
          const salonsWithDistance = allSalons.filter((salon) => salon.latitude && salon.longitude).map((salon) => {
            const salonLat = parseFloat(salon.latitude);
            const salonLng = parseFloat(salon.longitude);
            const R = 6371;
            const dLat = (salonLat - userLat) * Math.PI / 180;
            const dLng = (salonLng - userLng) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(userLat * Math.PI / 180) * Math.cos(salonLat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;
            return {
              ...salon,
              distance
            };
          }).filter((salon) => salon.distance <= searchRadius).sort((a, b) => a.distance - b.distance);
          return res.json(salonsWithDistance);
        }
      }
      res.json(allSalons);
    } catch (error) {
      console.error("Error searching salons:", error);
      res.status(500).json({ message: "Failed to search salons" });
    }
  });
  app2.get("/api/salons/:salonId", async (req, res) => {
    try {
      const { salonId } = req.params;
      let salon;
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(salonId);
      if (isUUID) {
        [salon] = await db.select().from(salons).where(
          and6(
            eq8(salons.id, salonId),
            or3(
              eq8(salons.verificationStatus, "approved"),
              eq8(salons.verificationStatus, "pending")
            )
          )
        );
      } else {
        const allSalons = await db.select().from(salons).where(
          or3(
            eq8(salons.verificationStatus, "approved"),
            eq8(salons.verificationStatus, "pending")
          )
        );
        salon = allSalons.find((s) => {
          const nameSlug = s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
          return nameSlug === salonId;
        });
      }
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      res.json(salon);
    } catch (error) {
      console.error("Error fetching salon:", error);
      res.status(500).json({ message: "Failed to fetch salon details" });
    }
  });
  app2.get("/api/salons/:salonId/services", async (req, res) => {
    try {
      const { salonId } = req.params;
      const salonServices = await db.select().from(services).where(eq8(services.salonId, salonId));
      res.json(salonServices);
    } catch (error) {
      console.error("Error fetching salon services:", error);
      res.status(500).json({ message: "Failed to fetch salon services" });
    }
  });
  app2.get("/api/owner/salon/services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId)).limit(1);
      if (!salon) {
        return res.status(404).json({ message: "No salon found for this owner" });
      }
      const salonServices = await db.select().from(services).where(eq8(services.salonId, salon.id)).orderBy(services.name);
      res.json(salonServices);
    } catch (error) {
      console.error("Error fetching owner salon services:", error);
      res.status(500).json({ message: "Failed to fetch salon services" });
    }
  });
  app2.get("/api/salons/:salonId/offers", async (req, res) => {
    try {
      const { salonId } = req.params;
      const currentDate = /* @__PURE__ */ new Date();
      const offers = await db.select().from(salonOffers).where(
        and6(
          eq8(salonOffers.salonId, salonId),
          eq8(salonOffers.isActive, true),
          eq8(salonOffers.isVisible, true),
          lte3(salonOffers.validFrom, currentDate),
          gte5(salonOffers.validUntil, currentDate)
        )
      ).orderBy(desc3(salonOffers.priority), desc3(salonOffers.createdAt));
      res.json(offers);
    } catch (error) {
      console.error("Error fetching salon offers:", error);
      res.status(500).json({ message: "Failed to fetch salon offers" });
    }
  });
  app2.get("/api/salons/:salonId/follow", isAuthenticated, async (req, res) => {
    try {
      const customerId = req.user?.id;
      const { salonId } = req.params;
      const [row] = await db.select().from(salonFollowers).where(and6(eq8(salonFollowers.salonId, salonId), eq8(salonFollowers.customerId, customerId)));
      res.json({ isFollowing: !!row });
    } catch (error) {
      res.status(500).json({ message: "Failed to check follow status" });
    }
  });
  app2.post("/api/salons/:salonId/follow", isAuthenticated, async (req, res) => {
    try {
      const customerId = req.user?.id;
      const { salonId } = req.params;
      await db.insert(salonFollowers).values({ salonId, customerId }).onConflictDoNothing();
      const [{ count: followerCount }] = await db.select({ count: sql6`count(*)::int` }).from(salonFollowers).where(eq8(salonFollowers.salonId, salonId));
      res.json({ isFollowing: true, followerCount });
    } catch (error) {
      console.error("Error following salon:", error);
      res.status(500).json({ message: "Failed to follow salon" });
    }
  });
  app2.delete("/api/salons/:salonId/follow", isAuthenticated, async (req, res) => {
    try {
      const customerId = req.user?.id;
      const { salonId } = req.params;
      await db.delete(salonFollowers).where(and6(eq8(salonFollowers.salonId, salonId), eq8(salonFollowers.customerId, customerId)));
      const [{ count: followerCount }] = await db.select({ count: sql6`count(*)::int` }).from(salonFollowers).where(eq8(salonFollowers.salonId, salonId));
      res.json({ isFollowing: false, followerCount });
    } catch (error) {
      console.error("Error unfollowing salon:", error);
      res.status(500).json({ message: "Failed to unfollow salon" });
    }
  });
  app2.get("/api/salons/:salonId/follower-count", async (req, res) => {
    try {
      const { salonId } = req.params;
      const [{ count: followerCount }] = await db.select({ count: sql6`count(*)::int` }).from(salonFollowers).where(eq8(salonFollowers.salonId, salonId));
      res.json({ followerCount });
    } catch (error) {
      res.status(500).json({ message: "Failed to get follower count" });
    }
  });
  app2.get("/api/customer/following", isAuthenticated, async (req, res) => {
    try {
      const customerId = req.user?.id;
      const followed = await db.select({ salon: salons }).from(salonFollowers).innerJoin(salons, eq8(salonFollowers.salonId, salons.id)).where(eq8(salonFollowers.customerId, customerId)).orderBy(desc3(salonFollowers.createdAt));
      res.json(followed.map((r) => r.salon));
    } catch (error) {
      res.status(500).json({ message: "Failed to get followed salons" });
    }
  });
  app2.get("/api/salons/:salonId/staff", async (req, res) => {
    try {
      const { salonId } = req.params;
      const salonStaff = await storage.getSalonStaff(salonId);
      res.json(salonStaff);
    } catch (error) {
      console.error("Error fetching salon staff:", error);
      res.status(500).json({ message: "Failed to fetch salon staff" });
    }
  });
  app2.get("/api/salons/:salonId/showcase", async (req, res) => {
    try {
      const { salonId } = req.params;
      const showcase = await storage.getCustomerShowcaseBySalon(salonId);
      res.json(showcase);
    } catch (error) {
      console.error("Error fetching customer showcase:", error);
      res.status(500).json({ message: "Failed to fetch showcase" });
    }
  });
  app2.post("/api/salons/:salonId/showcase", isAuthenticated, async (req, res) => {
    try {
      const { salonId } = req.params;
      const customerId = req.user?.id;
      const { photoUrl, caption, serviceName } = req.body;
      if (!photoUrl) {
        return res.status(400).json({ message: "Photo URL is required" });
      }
      const entry = await storage.createCustomerShowcase({
        salonId,
        customerId,
        customerName: req.user?.firstName || req.user?.name || "Customer",
        photoUrl,
        caption: caption || null,
        serviceName: serviceName || null,
        isApproved: false,
        isRewarded: false,
        rewardAmount: "30"
      });
      res.status(201).json({ message: "Photo submitted! It will appear after salon owner approval.", entry });
    } catch (error) {
      console.error("Error creating showcase entry:", error);
      res.status(500).json({ message: "Failed to submit photo" });
    }
  });
  app2.get("/api/salons/:salonId/working-hours", async (req, res) => {
    try {
      const { salonId } = req.params;
      const hours = await db.select().from(workingHours).where(eq8(workingHours.salonId, salonId));
      res.json(hours);
    } catch (error) {
      console.error("Error fetching working hours:", error);
      res.status(500).json({ message: "Failed to fetch working hours" });
    }
  });
  app2.post("/api/salons/:salonId/working-hours", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { salonId } = req.params;
      const { workingHours: hoursData } = req.body;
      const userSalons = await storage.getSalonsByOwner(req.user.id);
      const salon = userSalons.find((s) => s.id === salonId);
      if (!salon) {
        return res.status(403).json({ error: "Unauthorized to modify this salon" });
      }
      await db.delete(workingHours).where(eq8(workingHours.salonId, salonId));
      const updatedHours = [];
      for (const dayData of hoursData) {
        if (dayData.isOpen) {
          const [newHour] = await db.insert(workingHours).values({
            salonId,
            dayOfWeek: dayData.dayOfWeek,
            isOpen: true,
            openTime: dayData.openTime,
            closeTime: dayData.closeTime,
            breakStartTime: dayData.breakStartTime || null,
            breakEndTime: dayData.breakEndTime || null
          }).returning();
          updatedHours.push(newHour);
        } else {
          const [newHour] = await db.insert(workingHours).values({
            salonId,
            dayOfWeek: dayData.dayOfWeek,
            isOpen: false,
            openTime: null,
            closeTime: null,
            breakStartTime: null,
            breakEndTime: null
          }).returning();
          updatedHours.push(newHour);
        }
      }
      res.json(updatedHours);
      setImmediate(async () => {
        try {
          const { autoGenerateSlotsForSalon: autoGenerateSlotsForSalon2 } = await Promise.resolve().then(() => (init_slot_auto_generator(), slot_auto_generator_exports));
          const result = await autoGenerateSlotsForSalon2(db, salonId);
          if (result.slotsCreated > 0) {
            console.log(`[SlotGen] Auto-generated ${result.slotsCreated} slots for ${result.staffCount} staff after working hours update (salon ${salonId})`);
          }
        } catch (e) {
          console.error("[SlotGen] Error auto-generating slots after working hours update:", e);
        }
      });
    } catch (error) {
      console.error("Error updating salon working hours:", error);
      res.status(500).json({ message: "Failed to update working hours" });
    }
  });
  app2.post("/api/salons/:salonId/profile-visit", async (req, res) => {
    try {
      const { salonId } = req.params;
      const visitorId = req.user?.id;
      const visitorType = req.user ? "customer" : "anonymous";
      const ipAddress = req.ip || req.connection.remoteAddress || "unknown";
      const userAgent = req.get("User-Agent") || "unknown";
      const referrer = req.get("Referer") || null;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      if (visitorId === salon.ownerId) {
        return res.json({ tracked: false, reason: "Owner visit not tracked" });
      }
      const visitData = {
        salonId,
        visitorId,
        visitorType,
        ipAddress,
        userAgent,
        referrer,
        pageViewed: req.body.pageViewed || "profile"
      };
      const result = await db.insert(profileVisits).values(visitData).returning();
      res.json({ tracked: true, visitId: result[0].id });
    } catch (error) {
      console.error("Error tracking profile visit:", error);
      res.status(500).json({ message: "Failed to track profile visit" });
    }
  });
  app2.get("/api/owner/salon/profile-analytics", isAuthenticated, async (req, res) => {
    try {
      const ownerId = req.user.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, ownerId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const thirtyDaysAgo = /* @__PURE__ */ new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const totalVisitsResult = await db.select({ count: count() }).from(profileVisits).where(
        and6(
          eq8(profileVisits.salonId, salon.id),
          gte5(profileVisits.createdAt, thirtyDaysAgo)
        )
      );
      const uniqueVisitorsResult = await db.select({
        count: sql6`COUNT(DISTINCT ${profileVisits.visitorId})`
      }).from(profileVisits).where(
        and6(
          eq8(profileVisits.salonId, salon.id),
          gte5(profileVisits.createdAt, thirtyDaysAgo),
          isNotNull(profileVisits.visitorId)
        )
      );
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const todayVisitsResult = await db.select({ count: count() }).from(profileVisits).where(
        and6(
          eq8(profileVisits.salonId, salon.id),
          gte5(profileVisits.createdAt, today)
        )
      );
      const dailyVisits = [];
      for (let i = 6; i >= 0; i--) {
        const date = /* @__PURE__ */ new Date();
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        const visitsResult = await db.select({ count: count() }).from(profileVisits).where(
          and6(
            eq8(profileVisits.salonId, salon.id),
            gte5(profileVisits.createdAt, date),
            lte3(profileVisits.createdAt, nextDay)
          )
        );
        dailyVisits.push({
          date: date.toISOString().split("T")[0],
          visits: Number(visitsResult[0]?.count) || 0
        });
      }
      const analytics = {
        totalVisits: Number(totalVisitsResult[0]?.count) || 0,
        uniqueVisitors: Number(uniqueVisitorsResult[0]?.count) || 0,
        todayVisits: Number(todayVisitsResult[0]?.count) || 0,
        dailyVisits,
        lastUpdated: /* @__PURE__ */ new Date()
      };
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching profile analytics:", error);
      res.status(500).json({ message: "Failed to fetch profile analytics" });
    }
  });
  app2.get("/api/notifications/settings/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      const currentUserId = req.user?.id;
      if (userId !== currentUserId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const [settings] = await db.select().from(notificationSettings).where(eq8(notificationSettings.userId, userId));
      if (!settings) {
        const [newSettings] = await db.insert(notificationSettings).values({ userId }).returning();
        return res.json(newSettings);
      }
      res.json(settings);
    } catch (error) {
      console.error("Error fetching notification settings:", error);
      res.status(500).json({ message: "Failed to fetch notification settings" });
    }
  });
  app2.put("/api/notifications/settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const updateData = req.body;
      const [settings] = await db.insert(notificationSettings).values({ userId, ...updateData }).onConflictDoUpdate({
        target: notificationSettings.userId,
        set: { ...updateData, updatedAt: /* @__PURE__ */ new Date() }
      }).returning();
      res.json(settings);
    } catch (error) {
      console.error("Error updating notification settings:", error);
      res.status(500).json({ message: "Failed to update notification settings" });
    }
  });
  app2.post("/api/notifications/subscribe", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { subscription } = req.body;
      const subscriptionData = typeof subscription === "string" ? JSON.parse(subscription) : subscription;
      const endpoint = subscriptionData.endpoint;
      const p256dhKey = subscriptionData.keys?.p256dh;
      const authKey = subscriptionData.keys?.auth;
      if (!endpoint || !p256dhKey || !authKey) {
        return res.status(400).json({ message: "Invalid subscription data" });
      }
      const [existing] = await db.select().from(pushSubscriptions).where(and6(eq8(pushSubscriptions.userId, userId), eq8(pushSubscriptions.endpoint, endpoint)));
      if (existing) {
        await db.update(pushSubscriptions).set({ p256dhKey, authKey, isActive: true, userAgent: req.headers["user-agent"] }).where(eq8(pushSubscriptions.id, existing.id));
      } else {
        await db.insert(pushSubscriptions).values({
          userId,
          endpoint,
          p256dhKey,
          authKey,
          isActive: true,
          userAgent: req.headers["user-agent"]
        });
      }
      res.json({ success: true, message: "Push subscription saved" });
    } catch (error) {
      console.error("Error saving push subscription:", error);
      res.status(500).json({ message: "Failed to save push subscription" });
    }
  });
  app2.post("/api/notifications/test-push", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { sendPushToUser: sendPushToUser2 } = await Promise.resolve().then(() => (init_notifications(), notifications_exports));
      await sendPushToUser2(userId, {
        title: "\u{1F514} Sanwar Test Push",
        body: "Push notifications are working! You'll receive booking alerts here.",
        tag: "test-push",
        data: { url: "/notifications" },
        requireInteraction: false
      });
      res.json({ success: true, message: "Test push sent" });
    } catch (error) {
      console.error("Error sending test push:", error);
      res.status(500).json({ message: "Failed to send test push" });
    }
  });
  app2.get("/api/notifications/history/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      const currentUserId = req.user?.id;
      if (userId !== currentUserId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const history = await db.select().from(notificationHistory).where(eq8(notificationHistory.userId, userId)).orderBy(desc3(notificationHistory.sentAt)).limit(30);
      res.json(history);
    } catch (error) {
      console.error("Error fetching notification history:", error);
      res.status(500).json({ message: "Failed to fetch notification history" });
    }
  });
  app2.get("/api/referral-stats", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }
      const myReferrals = await db.select({
        id: referrals.id,
        referralCode: referrals.referralCode,
        status: referrals.status,
        referrerId: referrals.referrerId,
        referredId: referrals.referredId,
        createdAt: referrals.createdAt,
        completedAt: referrals.completedAt,
        // Get referred user details
        referredUserName: sql6`CONCAT(${users.firstName}, ' ', COALESCE(${users.lastName}, ''))`,
        referredUserEmail: users.email
      }).from(referrals).leftJoin(users, eq8(referrals.referredId, users.id)).where(eq8(referrals.referrerId, userId)).orderBy(desc3(referrals.createdAt));
      const completedCount = myReferrals.filter((ref) => ref.status === "completed").length;
      const pendingCount = myReferrals.filter((ref) => ref.status === "pending").length;
      const totalCount = myReferrals.length;
      const codeUsageMap = /* @__PURE__ */ new Map();
      myReferrals.forEach((ref) => {
        if (!codeUsageMap.has(ref.referralCode)) {
          codeUsageMap.set(ref.referralCode, {
            code: ref.referralCode,
            totalUses: 0,
            completedUses: 0,
            pendingUses: 0,
            users: []
          });
        }
        const codeStats = codeUsageMap.get(ref.referralCode);
        codeStats.totalUses++;
        if (ref.status === "completed") {
          codeStats.completedUses++;
        } else if (ref.status === "pending") {
          codeStats.pendingUses++;
        }
        if (ref.referredUserName && ref.referredUserEmail) {
          codeStats.users.push({
            name: ref.referredUserName.trim(),
            email: ref.referredUserEmail,
            status: ref.status,
            signedUpAt: ref.createdAt,
            completedAt: ref.completedAt
          });
        }
      });
      const codeUsageStats = Array.from(codeUsageMap.values());
      res.json({
        summary: {
          totalReferrals: totalCount,
          completedReferrals: completedCount,
          pendingReferrals: pendingCount
        },
        codeUsage: codeUsageStats,
        recentReferrals: myReferrals.slice(0, 10)
        // Last 10 referrals
      });
    } catch (error) {
      console.error("Error fetching referral stats:", error);
      res.status(500).json({ error: "Failed to fetch referral statistics" });
    }
  });
  app2.post("/api/validate-referral", async (req, res) => {
    try {
      const { code, userId } = req.body;
      if (!code) {
        return res.status(400).json({ error: "Referral code is required" });
      }
      const referralResults = await db.select().from(referrals).where(eq8(referrals.referralCode, code.toUpperCase())).limit(1);
      if (referralResults.length === 0) {
        return res.status(404).json({ error: "Invalid referral code" });
      }
      const referral = referralResults[0];
      if (referral.status !== "pending") {
        return res.status(400).json({ error: "This referral code has already been used" });
      }
      if (userId) {
        if (referral.referrerId === userId) {
          return res.status(400).json({ error: "You cannot use your own referral code" });
        }
        const existingReferralResults = await db.select().from(referrals).where(and6(
          eq8(referrals.referredId, userId),
          eq8(referrals.status, "completed")
        )).limit(1);
        if (existingReferralResults.length > 0) {
          return res.status(400).json({ error: "You have already used a referral code before" });
        }
      }
      const referrer = await storage.getUser(referral.referrerId);
      const referrerName = referrer ? `${referrer.firstName} ${referrer.lastName || ""}`.trim() : "Unknown User";
      res.json({
        valid: true,
        code: referral.referralCode,
        referrerName,
        bonusAmount: 50,
        // Example bonus credits amount
        discountType: "free",
        discountValue: 0,
        description: "Get your first booking completely free!",
        referralId: referral.id,
        referrerId: referral.referrerId
      });
    } catch (error) {
      console.error("Error validating referral code:", error);
      res.status(500).json({ error: "Failed to validate referral code" });
    }
  });
  app2.post("/api/bookings/complete-free-credit", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { bookingData, creditUsed } = req.body;
      if (!bookingData || !creditUsed) {
        return res.status(400).json({ message: "Missing booking data or credit information" });
      }
      const [booking] = await db.insert(bookings).values(bookingData).returning();
      await db.update(freeBookingCredits).set({
        isUsed: true,
        bookingId: booking.id,
        usedAt: /* @__PURE__ */ new Date()
      }).where(eq8(freeBookingCredits.id, creditUsed.id));
      await db.execute(sql6`
        UPDATE time_slots 
        SET is_available = false 
        WHERE id = ${bookingData.timeSlotId}
      `);
      await sendBookingConfirmationNotification(booking.id);
      res.status(201).json({
        ...booking,
        creditUsed,
        message: "Free booking created successfully using your credit!"
      });
    } catch (error) {
      console.error("Error completing free credit booking:", error);
      res.status(500).json({ message: "Failed to complete free booking" });
    }
  });
  app2.post("/api/bookings/create-payment-order", isAuthenticated, async (req, res) => {
    const startTime = Date.now();
    try {
      const userId = req.user?.id;
      const { salonId, serviceId, timeSlotId, date, staffId, referralCode, notes, additionalServices } = req.body;
      console.log("\u{1F3AF} Creating payment order for user:", userId, "amount processing...");
      if (!salonId || !serviceId || !timeSlotId || !date) {
        return res.status(400).json({
          message: "Missing required fields: salonId, serviceId, timeSlotId, and date are required"
        });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon) {
        return res.status(400).json({ message: "Salon not found" });
      }
      const [service] = await db.select().from(services).where(eq8(services.id, serviceId));
      if (!service) {
        return res.status(400).json({ message: "Service not found" });
      }
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      if (!timeSlot || !timeSlot.isAvailable) {
        return res.status(400).json({ message: "Time slot not available" });
      }
      const [existingBooking] = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date)
        )
      );
      if (existingBooking) {
        return res.status(400).json({ message: "Time slot is already booked" });
      }
      let totalServiceAmount = service.price;
      let additionalServiceDetails = [];
      if (additionalServices && Array.isArray(additionalServices) && additionalServices.length > 0) {
        const additionalServiceRecords = await db.select().from(services).where(inArray3(services.id, additionalServices));
        if (additionalServiceRecords.length !== additionalServices.length) {
          return res.status(400).json({ message: "One or more additional services not found" });
        }
        additionalServiceDetails = additionalServiceRecords;
        const additionalServicePrice = additionalServiceRecords.reduce((sum, svc) => sum + parseFloat(svc.price.toString()), 0);
        totalServiceAmount = parseFloat(service.price.toString()) + additionalServicePrice;
        console.log(`\u{1F3AF} Including ${additionalServices.length} additional services, total service amount: \u20B9${totalServiceAmount}`);
      }
      let confirmationAmountPaise = salon.confirmationAmount || 300;
      let finalAmount = confirmationAmountPaise / 100;
      console.log(`\u{1F4B0} Total services amount: \u20B9${totalServiceAmount}, Confirmation amount for ${salon.name}: \u20B9${finalAmount} (${confirmationAmountPaise} paise)`);
      const adminShare = Math.round(confirmationAmountPaise * (salon.adminRevenueShare || 20) / 100);
      const shopkeeperShare = confirmationAmountPaise - adminShare;
      console.log(`\u{1F4B8} Revenue split: Admin \u20B9${adminShare / 100} (${salon.adminRevenueShare || 20}%), Shopkeeper \u20B9${shopkeeperShare / 100} (${salon.shopkeeperRevenueShare || 80}%)`);
      const revenueInfo = {
        adminShare,
        shopkeeperShare,
        totalConfirmationAmount: confirmationAmountPaise,
        adminPercent: salon.adminRevenueShare || 20,
        shopkeeperPercent: salon.shopkeeperRevenueShare || 80
      };
      let validReferralCode = null;
      let appliedDiscount = 0;
      let usedFreeCredit = null;
      const [availableCredit] = await db.select().from(freeBookingCredits).where(
        and6(
          eq8(freeBookingCredits.customerId, userId),
          eq8(freeBookingCredits.isUsed, false)
        )
      ).limit(1);
      if (availableCredit) {
        finalAmount = 0;
        appliedDiscount = confirmationAmountPaise / 100;
        usedFreeCredit = availableCredit;
        return res.json({
          amount: 0,
          orderData: null,
          bookingData: {
            customerId: userId,
            salonId,
            serviceId,
            staffId: staffId || null,
            timeSlotId,
            date,
            startTime: timeSlot.startTime,
            endTime: timeSlot.endTime,
            totalAmount: service.price,
            confirmationAmount: "0",
            paymentStatus: "completed",
            status: "confirmed",
            notes: `Free booking using credit: ${availableCredit.description}`
          },
          freeBooking: true,
          creditUsed: availableCredit,
          message: "Your free credit has been applied! This booking is completely free."
        });
      }
      if (referralCode) {
        const referralResults = await db.select().from(referrals).where(eq8(referrals.referralCode, referralCode.toUpperCase())).limit(1);
        if (referralResults.length > 0) {
          const referral = referralResults[0];
          if (referral.status === "pending" && referral.referrerId !== userId) {
            const existingReferralResults = await db.select().from(referrals).where(and6(
              eq8(referrals.referredId, userId),
              eq8(referrals.status, "completed")
            )).limit(1);
            if (existingReferralResults.length === 0) {
              appliedDiscount = finalAmount;
              finalAmount = 0;
              validReferralCode = {
                id: referral.id,
                code: referral.referralCode,
                referrerId: referral.referrerId,
                rewardAmount: referral.rewardAmount
              };
            }
          }
        }
      }
      if (appliedDiscount >= (salon.confirmationAmount || 10)) {
        return res.json({
          isFreeBooking: true,
          referralCode: validReferralCode?.code,
          discountApplied: appliedDiscount,
          originalAmount: salon.confirmationAmount || 10,
          finalAmount: 0,
          salonName: salon.name,
          serviceName: service.name,
          servicePrice: service.price,
          referralCodeData: validReferralCode
        });
      }
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      const originalAmount = finalAmount;
      let paymentAdjusted = false;
      if (finalAmount < 1) {
        console.log(`\u26A0\uFE0F Amount ${finalAmount} is below \u20B91, adjusting to \u20B91 for gateway compatibility`);
        finalAmount = 1;
        paymentAdjusted = true;
      }
      console.log(`\u{1F50D} Payment processing: Salon ${salon.name} confirmation amount: ${confirmationAmountPaise} paise (\u20B9${confirmationAmountPaise / 100}), Final charge: \u20B9${finalAmount}`);
      console.log("\u{1F504} Creating Cashfree order for amount:", finalAmount);
      console.log("\u{1F504} Booking details:", { salonId, serviceId, timeSlotId, date, staffId });
      const orderIdPrefix = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await db.insert(paymentOrders).values({
        orderId: orderIdPrefix,
        customerId: userId,
        salonId,
        serviceId,
        additionalServices: additionalServices && additionalServices.length > 0 ? JSON.stringify(additionalServices) : null,
        timeSlotId,
        date,
        staffId: staffId || null,
        notes: notes || null,
        referralCodeData: validReferralCode ? JSON.stringify(validReferralCode) : null,
        totalAmount: totalServiceAmount.toString(),
        confirmationAmount: confirmationAmountPaise,
        paymentStatus: "pending"
      });
      console.log(`\u{1F512} Stored secure order metadata for ${orderIdPrefix}`);
      const requestHost = req.get("host");
      const baseUrl = getBaseUrl(requestHost);
      const order = await createCashfreeOrder({
        amount: finalAmount,
        orderId: orderIdPrefix,
        requestHost,
        customerDetails: {
          customerId: userId,
          customerName: user?.firstName ? `${user.firstName} ${user.lastName || ""}`.trim() : "Customer",
          customerEmail: user?.email || "customer@sanwar.app",
          customerPhone: user?.phone || "9999999999"
        },
        orderMeta: {
          returnUrl: `${baseUrl}/payment-callback?order_id=${orderIdPrefix}`,
          notifyUrl: `${baseUrl}/api/cashfree/webhook`,
          paymentMethods: "cc,dc,nb,upi,paylater,emi,app"
        },
        orderNote: `Sanwar booking: ${salon.name} - ${service.name}${additionalServiceDetails.length > 0 ? ` + ${additionalServiceDetails.length} additional services` : ""} on ${date}`
      });
      const processingTime = Date.now() - startTime;
      console.log(`\u26A1 Payment order created in ${processingTime}ms for user ${userId}`);
      res.json({
        orderId: order.orderId,
        paymentSessionId: order.paymentSessionId,
        orderAmount: order.orderAmount,
        orderCurrency: order.orderCurrency,
        confirmationAmount: salon.confirmationAmount || 300,
        // Default ₹3 in paise
        originalAmount,
        finalAmount,
        paymentAdjusted,
        paymentAdjustmentReason: paymentAdjusted ? "Payment gateway minimum amount requirement" : null,
        discountApplied: appliedDiscount,
        referralCodeApplied: validReferralCode?.code || null,
        servicePrice: service.price,
        salonName: salon.name,
        serviceName: service.name,
        processingTime: `${processingTime}ms`,
        // Cashfree payment gateway metadata
        gateway: "cashfree"
      });
    } catch (error) {
      const processingTime = Date.now() - startTime;
      console.error(`\u274C Error creating payment order after ${processingTime}ms:`, error);
      let errorMessage = "Failed to create payment order";
      let statusCode = 500;
      if (error instanceof Error) {
        if (error.message.includes("timeout") || error.message.includes("slow")) {
          errorMessage = error.message;
          statusCode = 408;
        } else if (error.message.includes("network") || error.message.includes("connection")) {
          errorMessage = "Network issue. Please check your connection and try again.";
          statusCode = 503;
        } else {
          errorMessage = error.message;
        }
      }
      res.status(statusCode).json({
        message: errorMessage,
        processingTime: `${processingTime}ms`,
        retryable: statusCode === 408 || statusCode === 503
      });
    }
  });
  app2.post("/api/bookings/create-pay-at-salon", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const {
        salonId,
        serviceId,
        timeSlotId,
        date,
        staffId,
        notes,
        // Support for multiple services
        additionalServices
      } = req.body;
      let serviceIds = [];
      if (serviceId) {
        serviceIds.push(serviceId);
        if (additionalServices && Array.isArray(additionalServices)) {
          serviceIds.push(...additionalServices);
        }
      }
      if (!salonId || serviceIds.length === 0 || !timeSlotId || !date) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const [existingBooking] = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date)
        )
      );
      if (existingBooking) {
        return res.status(400).json({ message: "Time slot is no longer available" });
      }
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      if (!timeSlot) {
        return res.status(400).json({ message: "Time slot not found" });
      }
      const serviceDetails = await db.select().from(services).where(inArray3(services.id, serviceIds));
      if (serviceDetails.length !== serviceIds.length) {
        return res.status(400).json({ message: "One or more services not found" });
      }
      const now = /* @__PURE__ */ new Date();
      const activeOffers = await db.select().from(salonOffers).where(
        and6(
          eq8(salonOffers.salonId, salonId),
          eq8(salonOffers.isActive, true),
          eq8(salonOffers.isVisible, true),
          lte3(salonOffers.validFrom, now),
          gte5(salonOffers.validUntil, now)
        )
      );
      const getDiscountedPrice = (service) => {
        const originalPrice = parseFloat(service.price.toString());
        let bestDiscount = 0;
        let discountType = "percentage";
        for (const offer of activeOffers) {
          let applicableDiscount = 0;
          if (offer.isApplicableToAllServices) {
            applicableDiscount = parseFloat(offer.discountValue.toString());
            discountType = offer.discountType;
          } else if (offer.applicableServices && offer.applicableServices.includes(service.id)) {
            if (offer.serviceSpecificDiscounts) {
              try {
                const svcDiscounts = typeof offer.serviceSpecificDiscounts === "string" ? JSON.parse(offer.serviceSpecificDiscounts) : offer.serviceSpecificDiscounts;
                if (svcDiscounts[service.id]) {
                  applicableDiscount = parseFloat(svcDiscounts[service.id]);
                  discountType = offer.discountType;
                }
              } catch {
              }
            }
            if (applicableDiscount === 0) {
              applicableDiscount = parseFloat(offer.discountValue.toString());
              discountType = offer.discountType;
            }
          }
          if (applicableDiscount > bestDiscount) {
            bestDiscount = applicableDiscount;
          }
        }
        if (bestDiscount === 0) return service.price.toString();
        let discountedPrice = discountType === "percentage" ? originalPrice * (1 - bestDiscount / 100) : originalPrice - bestDiscount;
        discountedPrice = Math.max(0, discountedPrice);
        return discountedPrice.toFixed(2);
      };
      const createdBookings = [];
      for (const service of serviceDetails) {
        const discountedAmount = getDiscountedPrice(service);
        const [booking] = await db.insert(bookings).values({
          customerId: userId,
          salonId,
          serviceId: service.id,
          staffId: staffId || null,
          timeSlotId,
          date,
          startTime: timeSlot.startTime,
          endTime: timeSlot.endTime,
          totalAmount: discountedAmount,
          confirmationAmount: "0",
          paymentStatus: "pending",
          status: "pending",
          notes: notes || `Pay at salon - ${serviceDetails.length > 1 ? "Multiple services booking" : "Online payment failed"}`
        }).returning();
        createdBookings.push(booking);
        sendSalonOwnerBookingNotification(booking.id).catch(
          (e) => console.error("Owner notification error:", e)
        );
        Promise.resolve().then(() => (init_notifications(), notifications_exports)).then(({ notifyCustomerBookingRequested: notifyCustomerBookingRequested2, notifyOwnerNewBooking: notifyOwnerNewBooking2 }) => {
          notifyCustomerBookingRequested2(booking.id).catch(() => {
          });
          notifyOwnerNewBooking2(booking.id).catch(() => {
          });
        }).catch(() => {
        });
      }
      res.status(201).json({
        bookings: createdBookings,
        message: `Booking request sent! Awaiting salon confirmation.`,
        totalServices: createdBookings.length
      });
    } catch (error) {
      console.error("Error creating pay-at-salon booking:", error);
      res.status(500).json({ message: "Failed to create booking" });
    }
  });
  app2.post("/api/bookings/create-free", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const {
        salonId,
        serviceId,
        timeSlotId,
        date,
        staffId,
        referralCodeData
      } = req.body;
      if (!salonId || !serviceId || !timeSlotId || !date || !referralCodeData) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const [existingBooking] = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date)
        )
      );
      if (existingBooking) {
        return res.status(400).json({ message: "Time slot is no longer available" });
      }
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      const [service] = await db.select().from(services).where(eq8(services.id, serviceId));
      if (!timeSlot || !service) {
        return res.status(400).json({ message: "Service or time slot not found" });
      }
      const [booking] = await db.insert(bookings).values({
        customerId: userId,
        salonId,
        serviceId,
        staffId: staffId || null,
        timeSlotId,
        date,
        startTime: timeSlot.startTime,
        endTime: timeSlot.endTime,
        totalAmount: service.price,
        confirmationAmount: "0",
        paymentStatus: "completed",
        status: "confirmed",
        notes: `Free booking with referral code: ${referralCodeData.code}`
      }).returning();
      await db.update(referrals).set({
        referredId: userId,
        status: "completed",
        bookingId: booking.id,
        completedAt: /* @__PURE__ */ new Date()
      }).where(eq8(referrals.id, referralCodeData.id));
      await db.execute(sql6`
        UPDATE time_slots 
        SET is_available = false 
        WHERE id = ${timeSlotId}
      `);
      await sendBookingConfirmationNotification(booking.id);
      res.status(201).json({
        ...booking,
        referralCodeUsed: referralCodeData.code,
        discountApplied: referralCodeData.discount_value || 0,
        message: "Free booking created successfully!"
      });
    } catch (error) {
      console.error("Error creating free booking:", error);
      res.status(500).json({ message: "Failed to create free booking" });
    }
  });
  app2.post("/api/bookings/verify-payment", async (req, res) => {
    const startTime = Date.now();
    try {
      const { orderId } = req.body;
      console.log("\u{1F510} Starting payment verification for order ID:", orderId);
      if (!orderId) {
        console.error("\u274C Missing orderId in verification request");
        return res.status(400).json({
          message: "Missing orderId for payment verification"
        });
      }
      const [storedOrder] = await db.select().from(paymentOrders).where(eq8(paymentOrders.orderId, orderId));
      if (!storedOrder) {
        console.error("\u274C No stored order found for orderId:", orderId);
        return res.status(400).json({
          message: "Order not found. Invalid order ID.",
          orderId
        });
      }
      if (storedOrder.isProcessed) {
        console.error("\u274C Order already processed:", orderId);
        return res.status(400).json({
          message: "Order already processed",
          orderId
        });
      }
      console.log("\u2705 Found stored order data:", {
        customerId: storedOrder.customerId,
        salonId: storedOrder.salonId,
        serviceId: storedOrder.serviceId,
        additionalServices: storedOrder.additionalServices,
        totalAmount: storedOrder.totalAmount
      });
      const userId = storedOrder.customerId;
      const salonId = storedOrder.salonId;
      const serviceId = storedOrder.serviceId;
      const timeSlotId = storedOrder.timeSlotId;
      const date = storedOrder.date;
      const staffId = storedOrder.staffId;
      const notes = storedOrder.notes;
      const additionalServices = storedOrder.additionalServices || [];
      const referralCodeData = storedOrder.referralCodeData || null;
      console.log("\u{1F50D} Verifying Cashfree payment...");
      const paymentVerification = await verifyCashfreePayment(orderId);
      console.log("\u{1F4B3} Payment verification result:", paymentVerification);
      if (!paymentVerification.success) {
        console.error("\u274C Payment verification failed for order:", orderId);
        console.error("\u274C Verification details:", paymentVerification);
        return res.status(400).json({
          message: "Payment verification failed. Payment not completed.",
          orderId,
          status: paymentVerification.orderStatus,
          error: paymentVerification.error,
          details: paymentVerification
        });
      }
      if (paymentVerification.orderStatus !== "SUCCESS") {
        console.error("\u274C Payment not in SUCCESS status for order:", orderId, "Status:", paymentVerification.orderStatus);
        return res.status(400).json({
          message: `Payment not completed. Status: ${paymentVerification.orderStatus}`,
          orderId,
          status: paymentVerification.orderStatus,
          error: paymentVerification.error
        });
      }
      if (paymentVerification.customerId && paymentVerification.customerId !== userId) {
        console.error("\u274C Payment customer ID mismatch:", {
          paymentCustomerId: paymentVerification.customerId,
          storedCustomerId: userId
        });
        return res.status(400).json({
          message: "Payment verification failed: customer mismatch",
          orderId
        });
      }
      console.log("\u{1F464} Customer ID verified:", userId);
      console.log("\u2705 Payment signature verified successfully");
      let serviceIds = [serviceId];
      if (additionalServices && Array.isArray(additionalServices)) {
        serviceIds.push(...additionalServices);
      }
      const serviceDetails = await db.select().from(services).where(inArray3(services.id, serviceIds));
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      if (serviceDetails.length !== serviceIds.length || !timeSlot) {
        return res.status(400).json({ message: "One or more services or time slot not found" });
      }
      const [existingBooking] = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date)
        )
      );
      if (existingBooking) {
        return res.status(400).json({ message: "Time slot is no longer available" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      const confirmationAmount = salon?.confirmationAmount || 10;
      const createdBookings = [];
      for (const service of serviceDetails) {
        const isMultipleServices2 = serviceIds.length > 1;
        const bookingNotes = isMultipleServices2 ? `Confirmation fee paid online. Service fee (\u20B9${service.price}) payable at salon.` : notes || "Online payment successful";
        const [booking] = await db.insert(bookings).values({
          customerId: userId,
          salonId,
          serviceId: service.id,
          staffId: staffId || null,
          timeSlotId,
          date,
          startTime: timeSlot.startTime,
          endTime: timeSlot.endTime,
          totalAmount: service.price,
          confirmationAmount: confirmationAmount.toString(),
          status: "confirmed",
          // Automatically confirmed when payment is successful
          paymentId: paymentVerification.transactionId || orderId,
          paymentStatus: "completed",
          notes: bookingNotes
        }).returning();
        createdBookings.push(booking);
        await sendBookingConfirmationNotification(booking.id);
        await sendSalonOwnerBookingNotification(booking.id);
      }
      const primaryBooking = createdBookings[0];
      const revenueShare = calculateRevenueShare(confirmationAmount);
      const [revenueRecord] = await db.insert(revenueShares).values({
        bookingId: primaryBooking.id,
        confirmationAmount: confirmationAmount.toString(),
        platformShare: revenueShare.platformShare.toString(),
        salonShare: revenueShare.salonShare.toString(),
        transferStatus: "pending"
      }).returning();
      try {
        console.log(`Starting automatic payout for primary booking ${primaryBooking.id}, salon ${salon.name}`);
        const bankDetails = await storage.getSalonOwnerBankDetails(salonId);
        if (bankDetails && bankDetails.isVerified) {
          console.log(`Bank details found for salon ${salon.name}, processing payout...`);
          let fundAccountId = bankDetails.fundAccountId;
          if (!fundAccountId) {
            const fundAccountResult = await storage.createSalonFundAccount(salonId, {
              accountNumber: bankDetails.accountNumber,
              ifscCode: bankDetails.ifscCode,
              accountHolderName: bankDetails.accountHolderName
            });
            if (fundAccountResult.success && fundAccountResult.fundAccountId) {
              fundAccountId = fundAccountResult.fundAccountId;
              await db.update(salonOwnerAccounts).set({ fundAccountId }).where(eq8(salonOwnerAccounts.salonId, salonId));
            }
          }
          if (fundAccountId) {
            const payoutResult = await storage.processSalonPayout(
              fundAccountId,
              revenueShare.salonShare,
              primaryBooking.id
            );
            if (payoutResult.success) {
              console.log(`\u2705 Automatic payout successful: ${payoutResult.payoutId}`);
              await storage.updateRevenueShareTransferStatus(
                primaryBooking.id,
                "completed",
                payoutResult.payoutId,
                /* @__PURE__ */ new Date()
              );
            } else {
              console.error(`\u274C Automatic payout failed: ${payoutResult.error}`);
              await storage.updateRevenueShareTransferStatus(primaryBooking.id, "failed");
            }
          } else {
            console.log(`\u26A0\uFE0F Could not create fund account for salon ${salon.name}`);
            await storage.updateRevenueShareTransferStatus(primaryBooking.id, "failed");
          }
        } else {
          console.log(`\u26A0\uFE0F No verified bank details found for salon ${salon.name}, payout will remain pending`);
        }
      } catch (payoutError) {
        console.error("Error in automatic payout process:", payoutError);
        await storage.updateRevenueShareTransferStatus(primaryBooking.id, "failed");
      }
      try {
        const [referralRecord] = await db.select().from(referrals).where(and6(
          eq8(referrals.referredId, userId),
          eq8(referrals.status, "pending")
        ));
        if (referralRecord) {
          await storage.completeReferral(referralRecord.id, primaryBooking.id);
          const [referrer] = await db.select().from(users).where(eq8(users.id, referralRecord.referrerId));
          if (referrer) {
            if (referralRecord.referralType === "customer_to_shopkeeper") {
              const avgServicePrice = await storage.calculateAverageServicePrice();
              await storage.createFreeBookingCredit({
                customerId: referralRecord.referrerId,
                // Give to the referrer (customer)
                creditType: "shopkeeper_referral",
                maxAmount: avgServicePrice.toString(),
                referenceId: referralRecord.id,
                description: `Free booking for referring a shopkeeper (up to \u20B9${avgServicePrice})`,
                expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1e3)
                // 90 days
              });
            } else if (referralRecord.referralType === "customer_to_customer") {
              const milestoneCompleted = await storage.updateCustomerReferralProgress(
                referralRecord.referrerId,
                referralRecord.id
              );
              if (milestoneCompleted) {
              }
              await storage.addWalletCredit(
                userId,
                parseFloat((referralRecord.rewardAmount || "0").toString()),
                "Referral reward for completing first booking",
                referralRecord.id,
                "referral"
              );
            } else if (referralRecord.referralType === "shopkeeper_milestone" && referrer.userType === "salon_owner") {
              const milestoneCompleted = await storage.updateReferralMilestoneProgress(
                referralRecord.referrerId,
                primaryBooking.id,
                confirmationAmount
              );
              if (milestoneCompleted) {
              }
            }
          }
        }
      } catch (referralError) {
      }
      const processingTime = Date.now() - startTime;
      await db.update(paymentOrders).set({
        isProcessed: true,
        paymentStatus: "completed",
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(paymentOrders.orderId, orderId));
      console.log(`\u2705 ${createdBookings.length} booking(s) created successfully after payment in ${processingTime}ms:`, createdBookings.map((b) => b.id).join(", "));
      console.log("\u{1F512} Order marked as processed:", orderId);
      setImmediate(async () => {
        try {
          const { sendBookingNotificationEmails: sendBookingNotificationEmails2 } = await Promise.resolve().then(() => (init_booking_notifications(), booking_notifications_exports));
          const emailResults = await sendBookingNotificationEmails2(primaryBooking?.id || createdBookings[0]?.id);
          console.log(`\u{1F4E7} Booking emails sent - Customer: ${emailResults.customerSent}, Shopkeeper: ${emailResults.shopkeeperSent}`);
        } catch (emailError) {
          console.error("\u274C Error sending booking notification emails:", emailError);
        }
      });
      const isMultipleServices = createdBookings.length > 1;
      const message = isMultipleServices ? `${createdBookings.length} bookings confirmed! You've paid the \u20B9${confirmationAmount / 100} confirmation fee online. Pay the service fees at the salon.` : "Booking confirmed! You've paid the confirmation amount. Pay the remaining service cost at the salon.";
      res.json({
        success: true,
        bookings: createdBookings,
        primaryBooking,
        totalServices: createdBookings.length,
        message,
        processingTime: `${processingTime}ms`,
        paymentId: paymentVerification.transactionId
      });
    } catch (error) {
      const processingTime = Date.now() - startTime;
      console.error(`\u274C Error verifying payment and creating booking after ${processingTime}ms:`, error);
      let errorMessage = "Failed to process payment and create booking";
      let statusCode = 500;
      if (error instanceof Error) {
        if (error.message.includes("slot")) {
          errorMessage = "Selected time slot is no longer available. Please choose another time.";
          statusCode = 409;
        } else if (error.message.includes("payment")) {
          errorMessage = "Payment processing failed. Please contact support if money was deducted.";
          statusCode = 402;
        } else {
          errorMessage = error.message;
        }
      }
      res.status(statusCode).json({
        message: errorMessage,
        processingTime: `${processingTime}ms`,
        retryable: statusCode !== 409
        // Don't retry if slot conflict
      });
    }
  });
  app2.post("/api/bookings/verify-cashfree-payment", isAuthenticated, async (req, res) => {
    const startTime = Date.now();
    try {
      const { orderId, paymentId, salonId, serviceId, staffId, timeSlotId, date, referralCodeData, discountApplied } = req.body;
      if (!orderId || !paymentId) {
        return res.status(400).json({ message: "Missing order ID or payment ID" });
      }
      console.log(`\u{1F50D} Verifying Cashfree payment for order: ${orderId}, payment: ${paymentId}`);
      const verificationResult = await verifyCashfreePayment(orderId);
      if (!verificationResult.success) {
        console.error(`\u274C Cashfree payment verification failed for order ${orderId}:`, verificationResult.error);
        return res.status(400).json({
          message: verificationResult.error || "Payment verification failed"
        });
      }
      console.log(`\u2705 Cashfree payment verified for order: ${orderId}`);
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }
      const [service] = await db.select().from(services).where(eq8(services.id, serviceId));
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      if (!timeSlot) {
        return res.status(404).json({ message: "Time slot not found" });
      }
      const existingBookings = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date),
          not(inArray3(bookings.status, ["cancelled", "no_show"]))
        )
      );
      if (existingBookings.length > 0) {
        return res.status(409).json({ message: "Time slot is no longer available" });
      }
      const confirmationAmount = verificationResult.paymentAmount || parseFloat(service.price) * 0.05;
      const remainingAmount = parseFloat(service.price) - confirmationAmount;
      const [booking] = await db.insert(bookings).values({
        customerId: userId,
        salonId,
        serviceId,
        staffId: staffId || null,
        timeSlotId,
        date,
        startTime: timeSlot.startTime,
        endTime: timeSlot.endTime,
        status: "confirmed",
        paymentStatus: "pending",
        totalAmount: service.price,
        confirmationAmount: confirmationAmount.toString(),
        paymentId,
        notes: `Cashfree payment: ${paymentId}`,
        createdAt: /* @__PURE__ */ new Date()
      }).returning();
      const revenueShare = calculateRevenueShare(confirmationAmount);
      await db.insert(revenueShares).values({
        bookingId: booking.id,
        confirmationAmount: confirmationAmount.toString(),
        salonShare: revenueShare.salonShare.toString(),
        platformShare: revenueShare.platformShare.toString(),
        transferStatus: "pending",
        createdAt: /* @__PURE__ */ new Date()
      });
      try {
        if (referralCodeData && referralCodeData.id) {
          console.log(`\u{1F381} Processing referral code for booking: ${booking.id}`);
          const referralRecord = await storage.getReferralById(referralCodeData.id);
          if (referralRecord) {
            const referrer = await storage.getUserById(referralRecord.referrerId);
            if (referrer && referralRecord.referralType === "customer_first_booking" && referrer.userType === "customer") {
              await storage.addWalletTransaction(
                referralRecord.referrerId,
                parseFloat(referralRecord.rewardAmount ?? "0"),
                "Referral reward for completing first booking",
                referralRecord.id,
                "referral"
              );
            }
          }
        }
      } catch (referralError) {
        console.error("Referral processing failed:", referralError);
      }
      try {
        await sendBookingConfirmationNotification(booking.id);
      } catch (notificationError) {
        console.error("Failed to send booking confirmation notification:", notificationError);
      }
      const processingTime = Date.now() - startTime;
      console.log(`\u2705 Cashfree booking created successfully in ${processingTime}ms:`, booking.id);
      setImmediate(async () => {
        try {
          const { sendBookingNotificationEmails: sendBookingNotificationEmails2 } = await Promise.resolve().then(() => (init_booking_notifications(), booking_notifications_exports));
          const emailResults = await sendBookingNotificationEmails2(booking.id);
          console.log(`\u{1F4E7} Cashfree booking emails sent - Customer: ${emailResults.customerSent}, Shopkeeper: ${emailResults.shopkeeperSent}`);
        } catch (emailError) {
          console.error("\u274C Error sending booking notification emails:", emailError);
        }
      });
      res.json({
        success: true,
        booking,
        message: "Booking confirmed with Cashfree payment!",
        processingTime: `${processingTime}ms`,
        paymentId
      });
    } catch (error) {
      const processingTime = Date.now() - startTime;
      console.error(`\u274C Error verifying Cashfree payment after ${processingTime}ms:`, error);
      let errorMessage = "Failed to process Cashfree payment and create booking";
      let statusCode = 500;
      if (error instanceof Error) {
        if (error.message.includes("slot")) {
          errorMessage = "Selected time slot is no longer available. Please choose another time.";
          statusCode = 409;
        } else if (error.message.includes("payment")) {
          errorMessage = "Payment processing failed. Please contact support if money was deducted.";
          statusCode = 402;
        } else {
          errorMessage = error.message;
        }
      }
      res.status(statusCode).json({
        message: errorMessage,
        processingTime: `${processingTime}ms`,
        retryable: statusCode !== 409
      });
    }
  });
  app2.get("/api/owner/salon-settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      res.json({
        id: salon.id,
        confirmationAmount: salon.confirmationAmount || 300,
        // Default ₹3
        adminRevenueShare: salon.adminRevenueShare || 20,
        shopkeeperRevenueShare: salon.shopkeeperRevenueShare || 80
      });
    } catch (error) {
      console.error("Error fetching salon settings:", error);
      res.status(500).json({ message: "Failed to fetch salon settings" });
    }
  });
  app2.post("/api/owner/salon-settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { confirmationAmount } = req.body;
      if (!confirmationAmount || confirmationAmount < 100 || confirmationAmount > 5e4) {
        return res.status(400).json({
          message: "Confirmation amount must be between \u20B91 and \u20B9500 (100-50000 paise)"
        });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [updatedSalon] = await db.update(salons).set({
        confirmationAmount,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(salons.id, salon.id)).returning();
      console.log(`\u2705 Updated confirmation fee for salon ${salon.name}: \u20B9${confirmationAmount / 100}`);
      res.json({
        success: true,
        salon: updatedSalon,
        message: `Confirmation fee updated to \u20B9${confirmationAmount / 100}`
      });
    } catch (error) {
      console.error("Error updating salon settings:", error);
      res.status(500).json({ message: "Failed to update salon settings" });
    }
  });
  app2.get("/api/owner/account", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [account] = await db.select().from(salonOwnerAccounts).where(eq8(salonOwnerAccounts.salonId, salon.id));
      res.json(account || null);
    } catch (error) {
      console.error("Error fetching account details:", error);
      res.status(500).json({ message: "Failed to fetch account details" });
    }
  });
  app2.post("/api/owner/account", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const accountData = req.body;
      if (!accountData.bankName || !accountData.accountHolderName || !accountData.accountNumber || !accountData.ifscCode) {
        return res.status(400).json({
          message: "Missing required fields: bankName, accountHolderName, accountNumber, and ifscCode are required"
        });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [existingAccount] = await db.select().from(salonOwnerAccounts).where(eq8(salonOwnerAccounts.salonId, salon.id));
      console.log("Skipping automatic verification for:", accountData.accountNumber);
      const verificationResult = {
        success: true,
        verified: true,
        // Temporarily set as verified
        accountHolderName: accountData.accountHolderName,
        message: "Bank account saved successfully - manual verification pending"
      };
      console.log("Verification result (manual):", verificationResult);
      let account;
      const updateData = {
        bankName: accountData.bankName,
        accountHolderName: accountData.accountHolderName,
        accountNumber: accountData.accountNumber,
        ifscCode: accountData.ifscCode,
        branch: accountData.branch || null,
        upiId: accountData.upiId || null,
        // Update verification fields based on result
        verificationStatus: verificationResult.verified ? "verified" : verificationResult.success ? "failed" : "pending",
        verificationMessage: verificationResult.message || null,
        verifiedAccountHolderName: verificationResult.accountHolderName || null,
        verifiedAt: verificationResult.verified ? /* @__PURE__ */ new Date() : null,
        verificationAttempts: (existingAccount?.verificationAttempts || 0) + 1,
        lastVerificationAttempt: /* @__PURE__ */ new Date(),
        isVerified: verificationResult.verified,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (existingAccount) {
        [account] = await db.update(salonOwnerAccounts).set(updateData).where(eq8(salonOwnerAccounts.salonId, salon.id)).returning();
      } else {
        [account] = await db.insert(salonOwnerAccounts).values({
          salonId: salon.id,
          ...updateData
        }).returning();
      }
      res.json({
        ...account,
        verificationResult: {
          success: verificationResult.success,
          verified: verificationResult.verified,
          message: verificationResult.message || "Verification completed"
        }
      });
    } catch (error) {
      console.error("Error saving account details:", error);
      res.status(500).json({
        message: "Failed to save account details",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/owner/revenue", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const revenueData = await db.select({
        totalEarnings: sql6`COALESCE(SUM(${revenueShares.salonShare}), 0)`,
        platformCommission: sql6`COALESCE(SUM(${revenueShares.platformShare}), 0)`,
        totalBookings: sql6`COUNT(*)`,
        pendingTransfers: sql6`COALESCE(SUM(CASE WHEN ${revenueShares.transferStatus} = 'pending' THEN ${revenueShares.salonShare} ELSE 0 END), 0)`,
        completedTransfers: sql6`COALESCE(SUM(CASE WHEN ${revenueShares.transferStatus} = 'completed' THEN ${revenueShares.salonShare} ELSE 0 END), 0)`,
        failedTransfers: sql6`COALESCE(SUM(CASE WHEN ${revenueShares.transferStatus} = 'failed' THEN ${revenueShares.salonShare} ELSE 0 END), 0)`
      }).from(revenueShares).innerJoin(bookings, eq8(revenueShares.bookingId, bookings.id)).where(eq8(bookings.salonId, salon.id));
      const transfers = await db.select({
        bookingId: revenueShares.bookingId,
        amount: revenueShares.salonShare,
        status: revenueShares.transferStatus,
        transferDate: revenueShares.transferDate,
        transferReference: revenueShares.transferReference,
        createdAt: revenueShares.createdAt,
        customerName: sql6`${users.firstName} || ' ' || COALESCE(${users.lastName}, '')`,
        serviceName: services.name
      }).from(revenueShares).innerJoin(bookings, eq8(revenueShares.bookingId, bookings.id)).innerJoin(users, eq8(bookings.customerId, users.id)).innerJoin(services, eq8(bookings.serviceId, services.id)).where(eq8(bookings.salonId, salon.id)).orderBy(desc3(revenueShares.createdAt)).limit(20);
      const [bankAccount] = await db.select().from(salonOwnerAccounts).where(eq8(salonOwnerAccounts.salonId, salon.id));
      res.json({
        summary: revenueData[0] || {
          totalEarnings: "0",
          platformCommission: "0",
          totalBookings: "0",
          pendingTransfers: "0",
          completedTransfers: "0",
          failedTransfers: "0"
        },
        transfers,
        bankAccountStatus: bankAccount ? {
          isVerified: bankAccount.isVerified,
          verificationStatus: bankAccount.verificationStatus,
          bankName: bankAccount.bankName,
          accountNumber: bankAccount.accountNumber.replace(/\d(?=\d{4})/g, "*"),
          // Mask account number
          hasFundAccount: !!bankAccount.fundAccountId
        } : null
      });
    } catch (error) {
      console.error("Error fetching revenue data:", error);
      res.status(500).json({ message: "Failed to fetch revenue data" });
    }
  });
  app2.post("/api/admin/trigger-payouts", async (req, res) => {
    try {
      console.log("\u{1F680} Manual payout trigger started...");
      const pendingShares = await db.select({
        id: revenueShares.id,
        bookingId: revenueShares.bookingId,
        salonShare: revenueShares.salonShare,
        salonId: bookings.salonId,
        salonName: salons.name,
        accountNumber: salonOwnerAccounts.accountNumber,
        ifscCode: salonOwnerAccounts.ifscCode,
        accountHolderName: salonOwnerAccounts.accountHolderName,
        fundAccountId: salonOwnerAccounts.fundAccountId,
        isVerified: salonOwnerAccounts.isVerified
      }).from(revenueShares).innerJoin(bookings, eq8(revenueShares.bookingId, bookings.id)).innerJoin(salons, eq8(bookings.salonId, salons.id)).leftJoin(salonOwnerAccounts, eq8(salonOwnerAccounts.salonId, salons.id)).where(eq8(revenueShares.transferStatus, "pending")).limit(10);
      console.log(`Found ${pendingShares.length} pending payouts to process`);
      let successCount = 0;
      let failureCount = 0;
      const results = [];
      for (const share of pendingShares) {
        try {
          if (!share.isVerified || !share.accountNumber) {
            console.log(`\u274C Skipping ${share.salonName}: No verified bank account`);
            await storage.updateRevenueShareTransferStatus(share.bookingId, "failed");
            failureCount++;
            results.push({
              salon: share.salonName,
              booking: share.bookingId,
              amount: share.salonShare,
              status: "failed",
              reason: "No verified bank account"
            });
            continue;
          }
          let fundAccountId = share.fundAccountId;
          if (!fundAccountId) {
            const fundAccountResult = await storage.createSalonFundAccount(share.salonId, {
              accountNumber: share.accountNumber || "",
              ifscCode: share.ifscCode || "",
              accountHolderName: share.accountHolderName || ""
            });
            if (fundAccountResult.success && fundAccountResult.fundAccountId) {
              fundAccountId = fundAccountResult.fundAccountId;
              await db.update(salonOwnerAccounts).set({ fundAccountId }).where(eq8(salonOwnerAccounts.salonId, share.salonId));
            }
          }
          if (fundAccountId) {
            const payoutResult = await storage.processSalonPayout(
              fundAccountId,
              parseFloat(share.salonShare),
              share.bookingId
            );
            if (payoutResult.success) {
              console.log(`\u2705 Payout successful for ${share.salonName}: ${payoutResult.payoutId}`);
              await storage.updateRevenueShareTransferStatus(
                share.bookingId,
                "completed",
                payoutResult.payoutId,
                /* @__PURE__ */ new Date()
              );
              successCount++;
              results.push({
                salon: share.salonName,
                booking: share.bookingId,
                amount: share.salonShare,
                status: "completed",
                payoutId: payoutResult.payoutId
              });
            } else {
              console.error(`\u274C Payout failed for ${share.salonName}: ${payoutResult.error}`);
              await storage.updateRevenueShareTransferStatus(share.bookingId, "failed");
              failureCount++;
              results.push({
                salon: share.salonName,
                booking: share.bookingId,
                amount: share.salonShare,
                status: "failed",
                reason: payoutResult.error
              });
            }
          } else {
            console.log(`\u26A0\uFE0F Could not create fund account for ${share.salonName}`);
            await storage.updateRevenueShareTransferStatus(share.bookingId, "failed");
            failureCount++;
            results.push({
              salon: share.salonName,
              booking: share.bookingId,
              amount: share.salonShare,
              status: "failed",
              reason: "Could not create fund account"
            });
          }
        } catch (error) {
          console.error(`Error processing payout for ${share.salonName}:`, error);
          await storage.updateRevenueShareTransferStatus(share.bookingId, "failed");
          failureCount++;
          results.push({
            salon: share.salonName,
            booking: share.bookingId,
            amount: share.salonShare,
            status: "failed",
            reason: error instanceof Error ? error.message : "Unknown error"
          });
        }
      }
      res.json({
        message: `Processed ${pendingShares.length} payouts`,
        summary: {
          total: pendingShares.length,
          successful: successCount,
          failed: failureCount
        },
        results
      });
    } catch (error) {
      console.error("Error in manual payout trigger:", error);
      res.status(500).json({
        message: "Failed to trigger payouts",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.post("/api/bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, serviceIds, timeSlotId, date, staffId, referralCode } = req.body;
      if (!salonId || !serviceIds || !Array.isArray(serviceIds) || serviceIds.length === 0 || !timeSlotId || !date) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const [existingBooking] = await db.select().from(bookings).where(
        and6(
          eq8(bookings.timeSlotId, timeSlotId),
          eq8(bookings.date, date)
        )
      );
      if (existingBooking) {
        return res.status(400).json({ message: "Time slot is no longer available" });
      }
      const [timeSlot] = await db.select().from(timeSlots).where(eq8(timeSlots.id, timeSlotId));
      if (!timeSlot) {
        return res.status(400).json({ message: "Time slot not found" });
      }
      const serviceDetails = await db.select().from(services).where(inArray3(services.id, serviceIds));
      if (serviceDetails.length !== serviceIds.length) {
        return res.status(400).json({ message: "One or more services not found" });
      }
      const totalAmount = serviceDetails.reduce((sum, svc) => sum + parseFloat(svc.price.toString()), 0);
      const [booking] = await db.insert(bookings).values({
        customerId: userId,
        salonId,
        serviceId: serviceIds[0],
        // Primary service
        staffId: staffId || null,
        timeSlotId,
        date,
        startTime: timeSlot.startTime,
        endTime: timeSlot.endTime,
        totalAmount: totalAmount.toString(),
        confirmationAmount: "0",
        paymentStatus: "pending",
        status: "pending",
        notes: `Direct booking - ${serviceDetails.length} service(s)`
      }).returning();
      await db.execute(sql6`
        UPDATE time_slots 
        SET is_available = false 
        WHERE id = ${timeSlotId}
      `);
      sendSalonOwnerBookingNotification(booking.id).catch(
        (e) => console.error("Owner notification error:", e)
      );
      res.status(201).json({
        ...booking,
        message: "Booking request sent! Awaiting salon confirmation.",
        services: serviceDetails.length
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ message: "Failed to create booking" });
    }
  });
  app2.get("/api/owner/salon", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      res.json(salon);
    } catch (error) {
      console.error("Error fetching owner salon:", error);
      res.status(500).json({ message: "Failed to fetch salon" });
    }
  });
  app2.get("/api/owner/salon/showcase", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) return res.status(404).json({ message: "Salon not found" });
      const pending = await storage.getPendingCustomerShowcaseBySalon(salon.id);
      const approved = await storage.getCustomerShowcaseBySalon(salon.id);
      res.json({ pending, approved, salonId: salon.id });
    } catch (error) {
      console.error("Error fetching owner showcase:", error);
      res.status(500).json({ message: "Failed to fetch showcase" });
    }
  });
  app2.post("/api/owner/salon/showcase/:id/approve", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { id } = req.params;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) return res.status(404).json({ message: "Salon not found" });
      const entry = await storage.approveCustomerShowcase(id, salon.id);
      if (!entry) return res.status(404).json({ message: "Showcase entry not found" });
      const rewardAmount = parseFloat(entry.rewardAmount || "30");
      await storage.addWalletCredit(
        entry.customerId,
        rewardAmount,
        `\u{1F4F8} Photo showcase reward at ${salon.name}`,
        entry.id,
        "showcase"
      );
      res.json({ message: `Approved! Customer received \u20B9${rewardAmount} wallet credit.`, entry });
    } catch (error) {
      console.error("Error approving showcase:", error);
      res.status(500).json({ message: "Failed to approve showcase" });
    }
  });
  app2.delete("/api/owner/salon/showcase/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { id } = req.params;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) return res.status(404).json({ message: "Salon not found" });
      await storage.rejectCustomerShowcase(id, salon.id);
      res.json({ message: "Photo removed." });
    } catch (error) {
      console.error("Error rejecting showcase:", error);
      res.status(500).json({ message: "Failed to remove showcase" });
    }
  });
  app2.put("/api/owner/salon/queue", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { queueWaitTime, queueMessage } = req.body;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [updatedSalon] = await db.update(salons).set({
        queueWaitTime: queueWaitTime !== void 0 ? queueWaitTime : null,
        queueMessage: queueMessage || null,
        queueUpdatedAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(salons.id, salon.id)).returning();
      res.json({
        message: "Queue status updated successfully",
        queueWaitTime: updatedSalon.queueWaitTime,
        queueMessage: updatedSalon.queueMessage,
        queueUpdatedAt: updatedSalon.queueUpdatedAt
      });
    } catch (error) {
      console.error("Error updating queue status:", error);
      res.status(500).json({ message: "Failed to update queue status" });
    }
  });
  app2.delete("/api/owner/salon/queue", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      await db.update(salons).set({
        queueWaitTime: null,
        queueMessage: null,
        queueUpdatedAt: null,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(salons.id, salon.id));
      res.json({ message: "Queue status cleared successfully" });
    } catch (error) {
      console.error("Error clearing queue status:", error);
      res.status(500).json({ message: "Failed to clear queue status" });
    }
  });
  app2.post("/api/salons", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salonData = req.body;
      console.log("Creating salon for user:", userId, "with data:", salonData);
      if (!salonData.name || !salonData.phone || !salonData.address) {
        return res.status(400).json({
          message: "Missing required fields: name, phone, and address are required"
        });
      }
      const [salon] = await db.insert(salons).values({
        name: salonData.name,
        description: salonData.description || "",
        phone: salonData.phone,
        address: salonData.address,
        imageUrl: salonData.imageUrl || null,
        latitude: salonData.latitude ? salonData.latitude.toString() : null,
        longitude: salonData.longitude ? salonData.longitude.toString() : null,
        confirmationAmount: salonData.confirmationAmount ? Number(salonData.confirmationAmount) : 0,
        ownerId: userId,
        isActive: true,
        averageRating: "0",
        totalReviews: 0
      }).returning();
      console.log("Created salon:", salon);
      res.json(salon);
    } catch (error) {
      console.error("Error creating salon:", error);
      res.status(500).json({
        message: "Failed to create salon",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.put("/api/salons/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salonData = req.body;
      const [existingSalon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!existingSalon || existingSalon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this salon" });
      }
      const updateData = {
        ...salonData,
        latitude: salonData.latitude ? salonData.latitude.toString() : null,
        longitude: salonData.longitude ? salonData.longitude.toString() : null,
        confirmationAmount: salonData.confirmationAmount ? Number(salonData.confirmationAmount) : void 0,
        updatedAt: /* @__PURE__ */ new Date()
      };
      const [updatedSalon] = await db.update(salons).set(updateData).where(eq8(salons.id, salonId)).returning();
      res.json(updatedSalon);
    } catch (error) {
      console.error("Error updating salon:", error);
      res.status(500).json({ message: "Failed to update salon" });
    }
  });
  app2.put("/api/salons/:salonId/promotional-video", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const { promotionalVideoUrl } = req.body;
      const [existingSalon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!existingSalon || existingSalon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this salon" });
      }
      const videoUrl = promotionalVideoUrl;
      const [updatedSalon] = await db.update(salons).set({ promotionalVideoUrl: videoUrl, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(salons.id, salonId)).returning();
      res.json(updatedSalon);
    } catch (error) {
      console.error("Error updating promotional video:", error);
      res.status(500).json({ message: "Failed to update promotional video" });
    }
  });
  app2.post("/api/fix-promo-video-acl", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(and6(
        eq8(salons.ownerId, userId),
        isNotNull(salons.promotionalVideoUrl)
      ));
      if (!salon || !salon.promotionalVideoUrl) {
        return res.status(404).json({ message: "No promotional video found" });
      }
      try {
        const objectStorageService = new ObjectStorageService();
        const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
          salon.promotionalVideoUrl,
          {
            owner: userId,
            visibility: "public"
          }
        );
        console.log("Fixed promotional video ACL:", objectPath);
        res.json({
          message: "Promotional video ACL fixed",
          videoUrl: objectPath
        });
      } catch (error) {
        console.error("Error fixing promotional video ACL:", error);
        res.status(500).json({ message: "Failed to fix ACL" });
      }
    } catch (error) {
      console.error("Error in fix ACL endpoint:", error);
      res.status(500).json({ message: "Failed to process request" });
    }
  });
  app2.get("/api/salons/:salonId/categories", async (req, res) => {
    try {
      const { salonId } = req.params;
      const categories = await db.select().from(serviceCategories).where(and6(
        eq8(serviceCategories.salonId, salonId),
        eq8(serviceCategories.isActive, true)
      )).orderBy(serviceCategories.order, serviceCategories.name);
      res.json(categories);
    } catch (error) {
      console.error("Error fetching service categories:", error);
      res.status(500).json({ message: "Failed to fetch service categories" });
    }
  });
  app2.get("/api/salons/:salonId/services-by-category", async (req, res) => {
    try {
      const { salonId } = req.params;
      const categories = await db.select().from(serviceCategories).where(and6(
        eq8(serviceCategories.salonId, salonId),
        eq8(serviceCategories.isActive, true)
      )).orderBy(serviceCategories.order, serviceCategories.name);
      const salonServices = await db.select({
        service: services,
        category: serviceCategories
      }).from(services).leftJoin(serviceCategories, eq8(services.categoryId, serviceCategories.id)).where(and6(
        eq8(services.salonId, salonId),
        eq8(services.isActive, true)
      )).orderBy(services.name);
      const categorizedServices = categories.map((category) => ({
        ...category,
        services: salonServices.filter((item) => item.category?.id === category.id).map((item) => item.service)
      }));
      const uncategorizedServices = salonServices.filter((item) => !item.category).map((item) => item.service);
      if (uncategorizedServices.length > 0) {
        categorizedServices.push({
          id: "uncategorized",
          salonId,
          name: "Other Services",
          description: "Services without a specific category",
          icon: "Scissors",
          color: "#64748B",
          order: 999,
          isActive: true,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          services: uncategorizedServices
        });
      }
      res.json(categorizedServices);
    } catch (error) {
      console.error("Error fetching services by category:", error);
      res.status(500).json({ message: "Failed to fetch services by category" });
    }
  });
  app2.post("/api/salons/:salonId/categories", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const categoryData = req.body;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to add categories to this salon" });
      }
      const [category] = await db.insert(serviceCategories).values({
        ...categoryData,
        salonId
      }).returning();
      res.json(category);
    } catch (error) {
      console.error("Error adding service category:", error);
      res.status(500).json({ message: "Failed to add service category" });
    }
  });
  app2.put("/api/categories/:categoryId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { categoryId } = req.params;
      const categoryData = req.body;
      const [category] = await db.select({
        category: serviceCategories,
        salon: salons
      }).from(serviceCategories).innerJoin(salons, eq8(serviceCategories.salonId, salons.id)).where(eq8(serviceCategories.id, categoryId));
      if (!category || category.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this category" });
      }
      const [updatedCategory] = await db.update(serviceCategories).set({ ...categoryData, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(serviceCategories.id, categoryId)).returning();
      res.json(updatedCategory);
    } catch (error) {
      console.error("Error updating service category:", error);
      res.status(500).json({ message: "Failed to update service category" });
    }
  });
  app2.delete("/api/categories/:categoryId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { categoryId } = req.params;
      const [category] = await db.select({
        category: serviceCategories,
        salon: salons
      }).from(serviceCategories).innerJoin(salons, eq8(serviceCategories.salonId, salons.id)).where(eq8(serviceCategories.id, categoryId));
      if (!category || category.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this category" });
      }
      await db.update(services).set({ categoryId: null, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(services.categoryId, categoryId));
      await db.delete(serviceCategories).where(eq8(serviceCategories.id, categoryId));
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error("Error deleting service category:", error);
      res.status(500).json({ message: "Failed to delete service category" });
    }
  });
  app2.post("/api/salons/:salonId/services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const serviceData = req.body;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to add services to this salon" });
      }
      const [service] = await db.insert(services).values({
        ...serviceData,
        salonId
      }).returning();
      res.json(service);
    } catch (error) {
      console.error("Error adding service:", error);
      res.status(500).json({ message: "Failed to add service" });
    }
  });
  app2.put("/api/services/:serviceId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { serviceId } = req.params;
      const serviceData = req.body;
      const [service] = await db.select({
        service: services,
        salon: salons
      }).from(services).innerJoin(salons, eq8(services.salonId, salons.id)).where(eq8(services.id, serviceId));
      if (!service || service.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this service" });
      }
      const [updatedService] = await db.update(services).set({ ...serviceData, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(services.id, serviceId)).returning();
      res.json(updatedService);
    } catch (error) {
      console.error("Error updating service:", error);
      res.status(500).json({ message: "Failed to update service" });
    }
  });
  app2.delete("/api/services/:serviceId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { serviceId } = req.params;
      const [service] = await db.select({
        service: services,
        salon: salons
      }).from(services).innerJoin(salons, eq8(services.salonId, salons.id)).where(eq8(services.id, serviceId));
      if (!service || service.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this service" });
      }
      const existingBookings = await db.select().from(bookings).where(
        and6(
          eq8(bookings.serviceId, serviceId),
          or3(
            eq8(bookings.status, "pending"),
            eq8(bookings.status, "confirmed")
          )
        )
      );
      if (existingBookings.length > 0) {
        return res.status(400).json({
          message: "Cannot delete service with active bookings. Please cancel or complete existing bookings first."
        });
      }
      await db.delete(services).where(eq8(services.id, serviceId));
      res.json({ message: "Service deleted successfully" });
    } catch (error) {
      console.error("Error deleting service:", error);
      res.status(500).json({ message: "Failed to delete service" });
    }
  });
  app2.post("/api/salons/:salonId/staff", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const staffData = req.body;
      console.log("Adding staff with data:", { salonId, staffData });
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to add staff to this salon" });
      }
      if (staffData.photoUrl && staffData.photoUrl.trim() !== "") {
        const objectStorageService = new ObjectStorageService();
        try {
          let cleanPhotoUrl = staffData.photoUrl;
          console.log("Original photo URL:", cleanPhotoUrl);
          if (cleanPhotoUrl.startsWith("/objects/uploads/uploads/")) {
            cleanPhotoUrl = cleanPhotoUrl.replace("/objects/uploads/uploads/", "uploads/");
          } else if (cleanPhotoUrl.startsWith("/objects/uploads/")) {
            cleanPhotoUrl = cleanPhotoUrl.replace("/objects/uploads/", "");
          }
          console.log("Cleaned photo URL for ACL:", cleanPhotoUrl);
          const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
            cleanPhotoUrl,
            {
              owner: userId,
              visibility: "public"
              // Staff pictures should be public
            }
          );
          console.log("Final object path:", objectPath);
          staffData.photoUrl = objectPath;
        } catch (error) {
          console.error("Error setting staff photo ACL:", error);
          staffData.photoUrl = null;
        }
      } else {
        staffData.photoUrl = null;
      }
      const [staffMember] = await db.insert(staff).values({
        salonId,
        name: staffData.name,
        role: staffData.role,
        phone: staffData.phone,
        email: staffData.email,
        photoUrl: staffData.photoUrl || null,
        isActive: true,
        rating: "4.5",
        // Default rating as decimal string
        totalReviews: 0,
        defaultSlotDuration: 15,
        // Default 15 minutes
        canManageSchedule: false
      }).returning();
      console.log("Staff member created successfully:", staffMember);
      res.json(staffMember);
      setImmediate(async () => {
        try {
          const { autoGenerateSlotsForStaff: autoGenerateSlotsForStaff2 } = await Promise.resolve().then(() => (init_slot_auto_generator(), slot_auto_generator_exports));
          const count2 = await autoGenerateSlotsForStaff2(db, salonId, staffMember.id);
          if (count2 > 0) console.log(`[SlotGen] Auto-generated ${count2} slots for new staff ${staffMember.name}`);
        } catch (e) {
          console.error("[SlotGen] Error auto-generating slots for new staff:", e);
        }
      });
    } catch (error) {
      console.error("Error adding staff:", error);
      res.status(500).json({ message: "Failed to add staff" });
    }
  });
  app2.put("/api/staff/:staffId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { staffId } = req.params;
      const staffData = req.body;
      console.log("Updating staff with data:", { staffId, staffData });
      const [staffMember] = await db.select({
        staff,
        salon: salons
      }).from(staff).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staff.id, staffId));
      if (!staffMember || staffMember.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this staff member" });
      }
      if (staffData.photoUrl && staffData.photoUrl.trim() !== "") {
        const objectStorageService = new ObjectStorageService();
        try {
          let cleanPhotoUrl = staffData.photoUrl;
          console.log("Update - Original photo URL:", cleanPhotoUrl);
          if (cleanPhotoUrl.startsWith("/objects/uploads/uploads/")) {
            cleanPhotoUrl = cleanPhotoUrl.replace("/objects/uploads/uploads/", "uploads/");
          } else if (cleanPhotoUrl.startsWith("/objects/uploads/")) {
            cleanPhotoUrl = cleanPhotoUrl.replace("/objects/uploads/", "");
          }
          console.log("Update - Cleaned photo URL for ACL:", cleanPhotoUrl);
          const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
            cleanPhotoUrl,
            {
              owner: userId,
              visibility: "public"
              // Staff pictures should be public
            }
          );
          console.log("Update - Final object path:", objectPath);
          staffData.photoUrl = objectPath;
        } catch (error) {
          console.error("Error setting staff photo ACL during update:", error);
        }
      }
      const [updatedStaff] = await db.update(staff).set({ ...staffData, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(staff.id, staffId)).returning();
      console.log("Staff updated successfully:", updatedStaff);
      res.json(updatedStaff);
    } catch (error) {
      console.error("Error updating staff:", error);
      res.status(500).json({ message: "Failed to update staff" });
    }
  });
  app2.get("/api/owner/bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      console.log("[DEBUG] Owner bookings request - User ID:", userId);
      const [ownerSalon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      console.log("[DEBUG] Owner salon found:", ownerSalon ? { id: ownerSalon.id, name: ownerSalon.name } : "No salon found");
      if (!ownerSalon) {
        return res.status(404).json({ message: "No salon found for this owner" });
      }
      const ownerBookings = await storage.getBookingsBySalon(ownerSalon.id);
      console.log(`[DEBUG] Found ${ownerBookings.length} bookings for salon ${ownerSalon.id}`);
      console.log("[DEBUG] Booking statuses:", ownerBookings.map((b) => ({ id: b.id, status: b.status, serviceId: b.serviceId })));
      res.json(ownerBookings);
    } catch (error) {
      console.error("Error fetching owner bookings:", error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });
  app2.patch("/api/bookings/:bookingId/status", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { bookingId } = req.params;
      const { status } = req.body;
      if (!status || !["pending", "confirmed", "completed", "cancelled"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      const [bookingWithSalon] = await db.select({
        booking: bookings,
        salon: salons
      }).from(bookings).innerJoin(salons, eq8(bookings.salonId, salons.id)).where(eq8(bookings.id, bookingId));
      if (!bookingWithSalon || bookingWithSalon.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this booking" });
      }
      const [updatedBooking] = await db.update(bookings).set({
        status,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(bookings.id, bookingId)).returning();
      res.json(updatedBooking);
    } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });
  app2.patch("/api/customer/bookings/:bookingId/cancel", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { bookingId } = req.params;
      const [booking] = await db.select().from(bookings).where(eq8(bookings.id, bookingId));
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      if (booking.customerId !== userId) {
        return res.status(403).json({ message: "Not authorized to cancel this booking" });
      }
      if (booking.status === "completed" || booking.status === "cancelled") {
        return res.status(400).json({ message: `Cannot cancel ${booking.status} booking` });
      }
      const bookingDateTime = /* @__PURE__ */ new Date(`${booking.date} ${booking.startTime}`);
      const now = /* @__PURE__ */ new Date();
      if (bookingDateTime <= now) {
        return res.status(400).json({ message: "Cannot cancel past bookings" });
      }
      const [updatedBooking] = await db.update(bookings).set({
        status: "cancelled",
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(bookings.id, bookingId)).returning();
      try {
        const { sendBookingCancellationNotification: sendBookingCancellationNotification2 } = await Promise.resolve().then(() => (init_notifications(), notifications_exports));
        const notificationSent = await sendBookingCancellationNotification2(bookingId);
        if (notificationSent) {
          console.log(`Booking cancellation email sent successfully for booking ${bookingId}`);
        } else {
          console.log(`Booking cancellation email failed for booking ${bookingId}`);
        }
      } catch (notificationError) {
        console.error("Failed to send booking cancellation notification:", notificationError);
      }
      res.json(updatedBooking);
    } catch (error) {
      console.error("Error cancelling booking:", error);
      res.status(500).json({ message: "Failed to cancel booking" });
    }
  });
  app2.get("/objects/:objectPath(*)", async (req, res) => {
    const REPLIT_SIDECAR = "http://127.0.0.1:1106";
    const privateDirRaw = process.env.PRIVATE_OBJECT_DIR || "";
    const parts = privateDirRaw.startsWith("/") ? privateDirRaw.slice(1).split("/") : privateDirRaw.split("/");
    const bucketName = parts[0];
    const entityId = req.path.replace(/^\/objects\//, "");
    const objectName = `.private/${entityId}`;
    if (bucketName) {
      try {
        const signRes = await fetch(`${REPLIT_SIDECAR}/object-storage/signed-object-url`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bucket_name: bucketName,
            object_name: objectName,
            method: "GET",
            expires_at: new Date(Date.now() + 3600 * 1e3).toISOString()
          })
        });
        if (signRes.ok) {
          const { signed_url } = await signRes.json();
          res.set("Cache-Control", "public, max-age=3600");
          return res.redirect(302, signed_url);
        }
        console.warn("Signed URL failed:", signRes.status, await signRes.text());
      } catch (signErr) {
        console.warn("Signed URL request error:", signErr);
      }
    }
    const userId = req.isAuthenticated && req.isAuthenticated() ? req.user?.id : void 0;
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(req.path);
      const canAccess = await objectStorageService.canAccessObjectEntity({
        objectFile,
        userId,
        requestedPermission: "READ" /* READ */
      });
      if (!canAccess) {
        return res.sendStatus(401);
      }
      return objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes("no allowed resources") || msg.includes("401") || msg.includes("sign")) {
        return res.sendStatus(404);
      }
      console.error("Object serve error:", error);
      return res.sendStatus(500);
    }
  });
  app2.post("/api/upload", isAuthenticated, upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const { randomUUID: randomUUID2 } = await import("crypto");
      const { writeFile, mkdir } = await import("fs/promises");
      const { join } = await import("path");
      const uploadsDir = join(process.cwd(), "uploads");
      await mkdir(uploadsDir, { recursive: true });
      const ext = (req.file.originalname.split(".").pop() || "jpg").toLowerCase();
      const filename = `${randomUUID2()}.${ext}`;
      const filePath = join(uploadsDir, filename);
      await writeFile(filePath, req.file.buffer);
      res.json({
        url: `/uploads/${filename}`,
        path: `/uploads/${filename}`,
        filename
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "Failed to upload file", details: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.post("/api/objects/upload", isAuthenticated, async (req, res) => {
    try {
      console.log("Getting upload URL for user:", req.user?.id);
      console.log("Creating ObjectStorageService...");
      const objectStorageService = new ObjectStorageService();
      console.log("ObjectStorageService created successfully");
      console.log("Getting upload URL...");
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      console.log("Generated upload URL:", uploadURL);
      console.log("Returning response:", { uploadURL });
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      console.error("Error details:", error instanceof Error ? error.message : "Unknown error", error instanceof Error ? error.stack : "");
      res.status(500).json({ error: "Failed to get upload URL", details: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/customer/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching customer profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.put("/api/customer/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { firstName, lastName, email, phone, profileImageUrl } = req.body;
      console.log("Received profile update data:", { firstName, lastName, email, phone, profileImageUrl });
      if (!firstName?.trim()) {
        return res.status(400).json({ message: "First name is required" });
      }
      if (!email?.trim()) {
        return res.status(400).json({ message: "Email is required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({ message: "Please enter a valid email address" });
      }
      const existingUser = await db.select().from(users).where(eq8(users.email, email.trim())).limit(1);
      if (existingUser.length > 0 && existingUser[0].id !== userId) {
        return res.status(400).json({ message: "This email address is already registered. Please use a different email." });
      }
      if (profileImageUrl && profileImageUrl.startsWith("/objects/")) {
        const objectStorageService = new ObjectStorageService();
        try {
          const normalizedPath = await objectStorageService.trySetObjectEntityAclPolicy(
            profileImageUrl,
            {
              owner: userId,
              visibility: "public"
              // Profile pictures should be public
            }
          );
          console.log("Successfully set ACL policy for profile image:", normalizedPath);
        } catch (error) {
          console.error("Error setting profile image ACL:", error);
        }
      }
      const [updatedUser] = await db.update(users).set({
        firstName: firstName.trim(),
        lastName: lastName?.trim() || null,
        email: email.trim(),
        phone: phone?.trim() || null,
        profileImageUrl: profileImageUrl || null,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(users.id, userId)).returning();
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating customer profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.put("/api/salon-images", isAuthenticated, async (req, res) => {
    if (!req.body.imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }
    const userId = req.user?.id;
    try {
      const objectStorageService = new ObjectStorageService();
      const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
        req.body.imageUrl,
        {
          owner: userId,
          visibility: "public"
          // Salon images should be public
        }
      );
      res.status(200).json({
        objectPath
      });
    } catch (error) {
      console.error("Error setting salon image:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.put("/api/review-photos", isAuthenticated, async (req, res) => {
    const { photoUrls } = req.body;
    if (!photoUrls || !Array.isArray(photoUrls)) {
      return res.status(400).json({ error: "photoUrls array is required" });
    }
    const userId = req.user?.id;
    try {
      const objectStorageService = new ObjectStorageService();
      const processedPhotos = [];
      for (const photoUrl of photoUrls) {
        const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
          photoUrl,
          {
            owner: userId,
            visibility: "public"
            // Review photos should be public
          }
        );
        processedPhotos.push(objectPath);
      }
      res.status(200).json({
        objectPaths: processedPhotos
      });
    } catch (error) {
      console.error("Error setting review photos:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/walk-in-bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      console.log("Creating walk-in booking:", req.body);
      const walkInBookingData = insertWalkInBookingSchema.parse(req.body);
      const salon = await storage.getSalonById(walkInBookingData.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "You can only add walk-in customers to your own salon" });
      }
      const booking = await storage.createWalkInBooking({
        ...walkInBookingData,
        isWalkIn: true
      });
      console.log("Walk-in booking created:", booking.id);
      res.status(201).json(booking);
    } catch (error) {
      console.error("Error creating walk-in booking:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid booking data", details: error.message });
      }
      res.status(500).json({ message: "Failed to create walk-in booking" });
    }
  });
  app2.post("/api/emergency-booking/waitlist", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const waitlistData = insertEmergencyWaitlistSchema.parse({
        ...req.body,
        customerId: userId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1e3)
        // 24 hours from now
      });
      const config = await storage.getSalonEmergencyConfig(waitlistData.salonId);
      if (!config || !config.allowEmergencyBookings) {
        return res.status(400).json({ message: "Emergency bookings not allowed for this salon" });
      }
      const activeEmergencyCount = await storage.getActiveEmergencyBookings(
        waitlistData.salonId,
        waitlistData.preferredDate
      );
      if (activeEmergencyCount >= (config.maxEmergencyBookingsPerDay || 0)) {
        return res.status(400).json({
          message: "Maximum emergency bookings reached for this day"
        });
      }
      const waitlistEntry = await storage.createEmergencyWaitlist(waitlistData);
      res.status(201).json(waitlistEntry);
    } catch (error) {
      console.error("Error creating emergency waitlist entry:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid data", details: error.message });
      }
      res.status(500).json({ message: "Failed to create emergency booking request" });
    }
  });
  app2.get("/api/emergency-booking/customer", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const waitlist = await storage.getEmergencyWaitlistByCustomer(userId);
      res.json(waitlist);
    } catch (error) {
      console.error("Error fetching customer emergency waitlist:", error);
      res.status(500).json({ message: "Failed to fetch emergency bookings" });
    }
  });
  app2.get("/api/emergency-booking/salon/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to access this salon's emergency bookings" });
      }
      const waitlist = await storage.getEmergencyWaitlistBySalon(salonId);
      res.json(waitlist);
    } catch (error) {
      console.error("Error fetching salon emergency waitlist:", error);
      res.status(500).json({ message: "Failed to fetch emergency bookings" });
    }
  });
  app2.put("/api/emergency-booking/waitlist/:waitlistId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { waitlistId } = req.params;
      const { status, assignedSlotId, assignedBookingId } = req.body;
      await storage.updateEmergencyWaitlistStatus(waitlistId, status, assignedSlotId, assignedBookingId);
      res.json({ message: "Emergency booking status updated successfully" });
    } catch (error) {
      console.error("Error updating emergency booking status:", error);
      res.status(500).json({ message: "Failed to update emergency booking status" });
    }
  });
  app2.get("/api/emergency-booking/config/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to access this salon's configuration" });
      }
      const config = await storage.getSalonEmergencyConfig(salonId);
      res.json(config || {
        salonId,
        allowEmergencyBookings: true,
        emergencyChargeType: "percentage",
        emergencyChargeValue: "50",
        maxEmergencyBookingsPerDay: 3,
        emergencyBookingTimeLimit: 120,
        autoConfirmEmergency: false,
        notificationEnabled: true,
        operatingHoursOverride: false
      });
    } catch (error) {
      console.error("Error fetching emergency configuration:", error);
      res.status(500).json({ message: "Failed to fetch emergency configuration" });
    }
  });
  app2.put("/api/emergency-booking/config/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this salon's configuration" });
      }
      const configData = insertSalonEmergencyConfigSchema.parse({
        ...req.body,
        salonId
      });
      const config = await storage.upsertSalonEmergencyConfig(configData);
      res.json(config);
    } catch (error) {
      console.error("Error updating emergency configuration:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid configuration data", details: error.message });
      }
      res.status(500).json({ message: "Failed to update emergency configuration" });
    }
  });
  app2.post("/api/emergency-booking/slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const slotData = insertEmergencySlotSchema.parse({
        ...req.body,
        createdBy: userId
      });
      const salon = await storage.getSalonById(slotData.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to create emergency slots for this salon" });
      }
      const slot = await storage.createEmergencySlot(slotData);
      res.status(201).json(slot);
    } catch (error) {
      console.error("Error creating emergency slot:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid slot data", details: error.message });
      }
      res.status(500).json({ message: "Failed to create emergency slot" });
    }
  });
  app2.get("/api/emergency-booking/slots/:salonId/:date", async (req, res) => {
    try {
      const { salonId, date } = req.params;
      const slots = await storage.getAvailableEmergencySlots(salonId, date);
      res.json(slots);
    } catch (error) {
      console.error("Error fetching emergency slots:", error);
      res.status(500).json({ message: "Failed to fetch emergency slots" });
    }
  });
  app2.get("/api/emergency-booking/slots/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to access this salon's emergency slots" });
      }
      const slots = await storage.getEmergencySlotsBySalon(salonId);
      res.json(slots);
    } catch (error) {
      console.error("Error fetching salon emergency slots:", error);
      res.status(500).json({ message: "Failed to fetch emergency slots" });
    }
  });
  app2.get("/api/walk-in-bookings/:salonId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "You can only view walk-in customers for your own salon" });
      }
      const walkInBookings = await storage.getWalkInBookingsBySalon(salonId);
      res.json(walkInBookings);
    } catch (error) {
      console.error("Error fetching walk-in bookings:", error);
      res.status(500).json({ message: "Failed to fetch walk-in bookings" });
    }
  });
  app2.post("/api/salons", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const salonData = insertSalonSchema.parse({ ...req.body, ownerId: userId });
      const salon = await storage.createSalon(salonData);
      res.json(salon);
    } catch (error) {
      console.error("Error creating salon:", error);
      res.status(400).json({ message: "Invalid salon data" });
    }
  });
  app2.get("/api/salons", async (req, res) => {
    try {
      const salons2 = await storage.getAllSalons();
      res.json(salons2);
    } catch (error) {
      console.error("Error fetching salons:", error);
      res.status(500).json({ message: "Failed to fetch salons" });
    }
  });
  app2.get("/api/salons/my", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salons2 = await storage.getSalonsByOwner(userId);
      res.json(salons2);
    } catch (error) {
      console.error("Error fetching user salons:", error);
      res.status(500).json({ message: "Failed to fetch salons" });
    }
  });
  app2.get("/api/salons/:id", async (req, res) => {
    try {
      const salon = await storage.getSalonById(req.params.id);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      res.json(salon);
    } catch (error) {
      console.error("Error fetching salon:", error);
      res.status(500).json({ message: "Failed to fetch salon" });
    }
  });
  app2.put("/api/salons/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.id);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this salon" });
      }
      const updatedSalon = await storage.updateSalon(req.params.id, req.body);
      res.json(updatedSalon);
    } catch (error) {
      console.error("Error updating salon:", error);
      res.status(500).json({ message: "Failed to update salon" });
    }
  });
  app2.put("/api/salons/:id/image", isAuthenticated, async (req, res) => {
    if (!req.body.imageURL) {
      return res.status(400).json({ error: "imageURL is required" });
    }
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.id);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this salon" });
      }
      const objectStorageService = new ObjectStorageService();
      const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
        req.body.imageURL,
        {
          owner: userId,
          visibility: "public"
        }
      );
      const updatedSalon = await storage.updateSalon(req.params.id, { imageUrl: objectPath });
      res.json({ objectPath, salon: updatedSalon });
    } catch (error) {
      console.error("Error setting salon image:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/salons/:salonId/services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to add services to this salon" });
      }
      const serviceData = insertServiceSchema.parse({ ...req.body, salonId: req.params.salonId });
      const service = await storage.createService(serviceData);
      res.json(service);
    } catch (error) {
      console.error("Error creating service:", error);
      res.status(400).json({ message: "Invalid service data" });
    }
  });
  app2.get("/api/salons/:salonId/services", async (req, res) => {
    try {
      const services2 = await storage.getServicesBySalon(req.params.salonId);
      res.json(services2);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });
  app2.put("/api/services/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const service = await storage.updateService(req.params.id, req.body);
      res.json(service);
    } catch (error) {
      console.error("Error updating service:", error);
      res.status(500).json({ message: "Failed to update service" });
    }
  });
  app2.delete("/api/services/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      await storage.deleteService(req.params.id);
      res.json({ message: "Service deleted successfully" });
    } catch (error) {
      console.error("Error deleting service:", error);
      res.status(500).json({ message: "Failed to delete service" });
    }
  });
  app2.post("/api/salons/:salonId/working-hours", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update working hours for this salon" });
      }
      const workingHourData = insertWorkingHoursSchema.parse({ ...req.body, salonId: req.params.salonId });
      const workingHour = await storage.upsertWorkingHours(workingHourData);
      res.json(workingHour);
      const salonIdForSlots = req.params.salonId;
      setImmediate(async () => {
        try {
          const { autoGenerateSlotsForSalon: autoGenerateSlotsForSalon2 } = await Promise.resolve().then(() => (init_slot_auto_generator(), slot_auto_generator_exports));
          const result = await autoGenerateSlotsForSalon2(db, salonIdForSlots);
          if (result.slotsCreated > 0) {
            console.log(`[SlotGen] Auto-generated ${result.slotsCreated} slots for ${result.staffCount} staff (salon ${salonIdForSlots})`);
          }
        } catch (e) {
          console.error("[SlotGen] Error auto-generating slots:", e);
        }
      });
    } catch (error) {
      console.error("Error updating working hours:", error);
      res.status(400).json({ message: "Invalid working hours data" });
    }
  });
  app2.get("/api/salons/:salonId/working-hours", async (req, res) => {
    try {
      const workingHours2 = await storage.getWorkingHoursBySalon(req.params.salonId);
      res.json(workingHours2);
    } catch (error) {
      console.error("Error fetching working hours:", error);
      res.status(500).json({ message: "Failed to fetch working hours" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.claims?.sub;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to create time slots for this salon" });
      }
      const timeSlotData = insertTimeSlotSchema.parse({ ...req.body, salonId: req.params.salonId });
      const timeSlot = await storage.createTimeSlot(timeSlotData);
      res.json(timeSlot);
    } catch (error) {
      console.error("Error creating time slot:", error);
      res.status(400).json({ message: "Invalid time slot data" });
    }
  });
  app2.get("/api/salons/:salonId/time-slots", async (req, res) => {
    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    try {
      const { date, serviceId, staffId } = req.query;
      if (!date || typeof date !== "string") {
        return res.status(400).json({ message: "Date parameter is required" });
      }
      console.log(`Fetching manual time slots for salon ${req.params.salonId} on date ${date}, service: ${serviceId}, staff: ${staffId}`);
      let timeSlots2 = await storage.getTimeSlotsBySalonAndDate(
        req.params.salonId,
        date,
        serviceId || void 0,
        staffId || void 0
      );
      console.log(`Found ${timeSlots2.length} manually created time slots`);
      console.log(`[DEBUG] First 3 slots: ${JSON.stringify(timeSlots2.slice(0, 3).map((s) => ({ start: s.startTime, available: s.isAvailable })))}`);
      const now = /* @__PURE__ */ new Date();
      const istOffset = 5.5 * 60 * 60 * 1e3;
      const istNow = new Date(now.getTime() + istOffset);
      const selectedDate = new Date(date);
      const istTodayDate = new Date(istNow.toISOString().split("T")[0]);
      const isToday = selectedDate.toDateString() === istTodayDate.toDateString();
      console.log(`[DEBUG] UTC time: ${now.toTimeString()}, IST time: ${istNow.toTimeString()}`);
      console.log(`[DEBUG] Selected date: ${selectedDate.toDateString()}, IST Today: ${istTodayDate.toDateString()}, Is today: ${isToday}`);
      if (isToday) {
        const currentTime = istNow.getHours() * 60 + istNow.getMinutes();
        console.log(`[DEBUG] Current IST time in minutes: ${currentTime} (${istNow.getHours()}:${istNow.getMinutes()})`);
        const beforeFiltering = timeSlots2.length;
        timeSlots2 = timeSlots2.filter((slot) => {
          const [hours, minutes] = slot.startTime.split(":").map(Number);
          const slotStartTime = hours * 60 + minutes;
          const isAvailable = slot.isAvailable;
          const isFuture = slotStartTime > currentTime;
          console.log(`[DEBUG] Slot ${slot.startTime} - Start time minutes: ${slotStartTime}, Available: ${isAvailable}, Is future: ${isFuture}`);
          return isFuture && isAvailable;
        });
        console.log(`[DEBUG] Filtered ${beforeFiltering} slots down to ${timeSlots2.length} for today using IST`);
      } else {
        timeSlots2 = timeSlots2.filter((slot) => slot.isAvailable);
      }
      console.log(`Returning ${timeSlots2.length} available slots after filtering`);
      res.json(timeSlots2);
    } catch (error) {
      console.error("Error fetching time slots:", error);
      res.status(500).json({ message: "Failed to fetch time slots" });
    }
  });
  app2.post("/api/salons/:salonId/staff/:staffId/assign-service", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage staff for this salon" });
      }
      const { serviceId, customPrice, estimatedDuration } = req.body;
      if (!serviceId) {
        return res.status(400).json({ message: "Service ID is required" });
      }
      const assignment = await storage.assignServiceToStaff(
        req.params.staffId,
        serviceId,
        customPrice,
        estimatedDuration
      );
      res.json(assignment);
    } catch (error) {
      console.error("Error assigning service to staff:", error);
      res.status(500).json({ message: "Failed to assign service" });
    }
  });
  app2.get("/api/salons/:salonId/staff-with-services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to view staff for this salon" });
      }
      const staffWithServices = await storage.getSalonStaffWithServices(req.params.salonId);
      res.json(staffWithServices);
    } catch (error) {
      console.error("Error fetching staff with services:", error);
      res.status(500).json({ message: "Failed to fetch staff with services" });
    }
  });
  app2.post("/api/salons/:salonId/generate-staff-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to generate slots for this salon" });
      }
      const { date } = req.body;
      if (!date) {
        return res.status(400).json({ message: "Date is required" });
      }
      console.log(`[SLOT GENERATION] Owner ${userId} generating slots for salon ${req.params.salonId} on ${date}`);
      const result = await storage.generateStaffBasedSlots(req.params.salonId, date);
      res.json(result);
    } catch (error) {
      console.error("Error generating staff slots:", error);
      res.status(500).json({ message: "Failed to generate slots" });
    }
  });
  app2.post("/api/salons/:salonId/generate-bulk-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to generate bulk slots for this salon" });
      }
      const { startDate, endDate } = req.body;
      if (!startDate || !endDate) {
        return res.status(400).json({ message: "Start date and end date are required" });
      }
      console.log(`[BULK SLOT GENERATION] Owner ${userId} generating bulk slots for salon ${req.params.salonId} from ${startDate} to ${endDate}`);
      const result = await storage.generateBulkStaffSlots(req.params.salonId, startDate, endDate);
      res.json(result);
    } catch (error) {
      console.error("Error generating bulk slots:", error);
      res.status(500).json({ message: "Failed to generate bulk slots" });
    }
  });
  app2.post("/api/salons/:salonId/generate-dynamic-staff-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to generate dynamic slots for this salon" });
      }
      const { staffId, date, openingTime, closingTime, breakDuration } = req.body;
      if (!staffId || !date || !openingTime || !closingTime) {
        return res.status(400).json({ message: "Staff ID, date, opening time, and closing time are required" });
      }
      console.log(`[DYNAMIC SLOT GENERATION] Owner ${userId} generating dynamic slots for staff ${staffId} on ${date} (${openingTime}-${closingTime}, break: ${breakDuration}min)`);
      const result = await storage.generateDynamicStaffSlots(
        req.params.salonId,
        staffId,
        date,
        openingTime,
        closingTime,
        breakDuration || 60
      );
      res.json(result);
    } catch (error) {
      console.error("Error generating dynamic staff slots:", error);
      res.status(500).json({ message: "Failed to generate dynamic staff slots" });
    }
  });
  app2.post("/api/salons/:salonId/staff/:staffId/generate-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, staffId } = req.params;
      const { startDate, endDate, openingTime, closingTime, slotDuration, breakStartTime, breakEndTime } = req.body;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to generate slots for this salon" });
      }
      const [staffMember] = await db.select().from(staff).where(and6(eq8(staff.id, staffId), eq8(staff.salonId, salonId))).limit(1);
      if (!staffMember) {
        return res.status(404).json({ message: "Staff member not found" });
      }
      console.log(`[INDIVIDUAL SLOT GENERATION] Owner ${userId} generating slots for staff ${staffMember.name} (${staffId}) from ${startDate} to ${endDate}`);
      let totalGenerated = 0;
      const currentDate = new Date(startDate);
      const endDateObj = new Date(endDate);
      while (currentDate <= endDateObj) {
        const dateStr2 = currentDate.toISOString().split("T")[0];
        const slots = generateTimeSlotsForDate(dateStr2, openingTime, closingTime, parseInt(slotDuration), breakStartTime, breakEndTime);
        for (const slot of slots) {
          try {
            const existing = await db.select().from(timeSlots).where(
              and6(
                eq8(timeSlots.salonId, salonId),
                eq8(timeSlots.staffId, staffId),
                eq8(timeSlots.date, slot.date),
                eq8(timeSlots.startTime, slot.startTime)
              )
            ).limit(1);
            if (existing.length === 0) {
              await storage.createTimeSlot({
                salonId,
                staffId,
                date: slot.date,
                startTime: slot.startTime,
                endTime: slot.endTime,
                isAvailable: true,
                slotType: "regular"
              });
              totalGenerated++;
            }
          } catch (error) {
            console.error("Error creating individual slot:", error);
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      res.json({
        message: `Generated ${totalGenerated} slots for ${staffMember.name}`,
        count: totalGenerated,
        staffName: staffMember.name
      });
    } catch (error) {
      console.error("Error generating individual staff slots:", error);
      res.status(500).json({ message: "Failed to generate slots" });
    }
  });
  app2.delete("/api/salons/:salonId/staff/:staffId/delete-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, staffId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete slots for this salon" });
      }
      const [staffMember] = await db.select().from(staff).where(and6(eq8(staff.id, staffId), eq8(staff.salonId, salonId))).limit(1);
      if (!staffMember) {
        return res.status(404).json({ message: "Staff member not found" });
      }
      console.log(`[SLOT DELETION] Owner ${userId} deleting all slots for staff ${staffMember.name} (${staffId})`);
      const deleteResult = await db.delete(timeSlots).where(
        and6(
          eq8(timeSlots.salonId, salonId),
          eq8(timeSlots.staffId, staffId),
          eq8(timeSlots.isAvailable, true)
          // Only delete available slots, not booked ones
        )
      );
      res.json({
        message: `Deleted all available slots for ${staffMember.name}`,
        staffName: staffMember.name
      });
    } catch (error) {
      console.error("Error deleting staff slots:", error);
      res.status(500).json({ message: "Failed to delete slots" });
    }
  });
  app2.get("/api/salons/:salonId/staff-slot-counts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to view slot counts for this salon" });
      }
      const staffMembers = await db.select().from(staff).where(eq8(staff.salonId, salonId));
      const slotCounts = {};
      for (const staffMember of staffMembers) {
        const [countResult] = await db.select({ count: count() }).from(timeSlots).where(
          and6(
            eq8(timeSlots.salonId, salonId),
            eq8(timeSlots.staffId, staffMember.id),
            eq8(timeSlots.isAvailable, true),
            gte5(timeSlots.date, (/* @__PURE__ */ new Date()).toISOString().split("T")[0])
            // Only future/today slots
          )
        );
        slotCounts[staffMember.id] = countResult?.count || 0;
      }
      res.json(slotCounts);
    } catch (error) {
      console.error("Error fetching staff slot counts:", error);
      res.status(500).json({ message: "Failed to fetch slot counts" });
    }
  });
  app2.get("/api/salons/:salonId/public-staff-slot-counts", async (req, res) => {
    try {
      const { salonId } = req.params;
      const { date } = req.query;
      const staffMembers = await db.select().from(staff).where(and6(eq8(staff.salonId, salonId), eq8(staff.isActive, true)));
      const slotCounts = {};
      for (const staffMember of staffMembers) {
        const conditions = [
          eq8(timeSlots.salonId, salonId),
          eq8(timeSlots.staffId, staffMember.id),
          eq8(timeSlots.isAvailable, true)
        ];
        if (date && typeof date === "string") {
          conditions.push(eq8(timeSlots.date, date));
        } else {
          conditions.push(gte5(timeSlots.date, (/* @__PURE__ */ new Date()).toISOString().split("T")[0]));
        }
        const [countResult] = await db.select({ count: count() }).from(timeSlots).where(and6(...conditions));
        slotCounts[staffMember.id] = countResult?.count || 0;
      }
      const totalSlots = Object.values(slotCounts).reduce((s, v) => s + v, 0);
      if (totalSlots === 0 && staffMembers.length > 0) {
        const { autoGenerateSlotsForSalon: autoGenerateSlotsForSalon2 } = await Promise.resolve().then(() => (init_slot_auto_generator(), slot_auto_generator_exports));
        autoGenerateSlotsForSalon2(db, salonId).then((r) => {
          if (r.slotsCreated > 0) {
            console.log(`[SlotGen] On-demand generated ${r.slotsCreated} slots for salon ${salonId}`);
          }
        }).catch(() => {
        });
      }
      res.json(slotCounts);
    } catch (error) {
      console.error("Error fetching public staff slot counts:", error);
      res.status(500).json({ message: "Failed to fetch slot counts" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots/bulk-generate", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to create time slots for this salon" });
      }
      const { slots } = req.body;
      if (!Array.isArray(slots) || slots.length === 0) {
        return res.status(400).json({ message: "No time slots provided" });
      }
      let created = 0;
      let skipped = 0;
      for (const slotData of slots) {
        try {
          const existing = await db.select().from(timeSlots).where(
            and6(
              eq8(timeSlots.salonId, slotData.salonId),
              eq8(timeSlots.date, slotData.date),
              eq8(timeSlots.startTime, slotData.startTime),
              eq8(timeSlots.staffId, slotData.staffId)
            )
          ).limit(1);
          if (existing.length === 0) {
            await storage.createTimeSlot(slotData);
            created++;
          } else {
            skipped++;
          }
        } catch (error) {
          console.error("Error creating individual slot:", error);
          skipped++;
        }
      }
      res.json({
        message: `Bulk generation completed`,
        created,
        skipped,
        total: slots.length
      });
    } catch (error) {
      console.error("Error bulk generating time slots:", error);
      res.status(500).json({ message: "Failed to generate time slots" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage time slots for this salon" });
      }
      const { date, startTime, endTime, staffId, serviceId } = req.body;
      if (!date || !startTime || !endTime) {
        return res.status(400).json({ message: "Date, start time, and end time are required" });
      }
      const timeSlot = await storage.createTimeSlot({
        salonId: req.params.salonId,
        staffId,
        serviceId,
        date,
        startTime,
        endTime,
        isAvailable: true,
        slotType: "regular"
      });
      res.json(timeSlot);
    } catch (error) {
      console.error("Error creating time slot:", error);
      res.status(500).json({ message: "Failed to create time slot" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots/bulk-generate", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage time slots for this salon" });
      }
      const {
        startDate,
        endDate,
        startTime,
        endTime,
        duration,
        breaks = []
      } = req.body;
      if (!startDate || !endDate || !startTime || !endTime || !duration) {
        return res.status(400).json({ message: "All fields are required for bulk generation" });
      }
      const slotsCreated = [];
      const skippedDuplicates = [];
      const skippedBreaks = [];
      const durationMinutes = parseInt(duration);
      const start = new Date(startDate);
      const end = new Date(endDate);
      for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        if (date.getDay() === 0) continue;
        const dateString = date.toISOString().split("T")[0];
        const [startHour, startMin] = startTime.split(":").map(Number);
        const [endHour, endMin] = endTime.split(":").map(Number);
        let currentTime = /* @__PURE__ */ new Date();
        currentTime.setHours(startHour, startMin, 0, 0);
        const dayEndTime = /* @__PURE__ */ new Date();
        dayEndTime.setHours(endHour, endMin, 0, 0);
        while (currentTime < dayEndTime) {
          const slotStartTime = currentTime.toTimeString().substring(0, 5);
          const isBreakTime = breaks.some((brk) => {
            if (!brk.startTime || !brk.duration) return false;
            const breakStart = /* @__PURE__ */ new Date();
            const [breakHour, breakMin] = brk.startTime.split(":").map(Number);
            breakStart.setHours(breakHour, breakMin, 0, 0);
            const breakDuration = parseInt(brk.duration) * 6e4;
            const breakEnd = new Date(breakStart.getTime() + breakDuration);
            const breakEndTime = breakEnd.toTimeString().substring(0, 5);
            return slotStartTime >= brk.startTime && slotStartTime < breakEndTime;
          });
          const slotEndTime = new Date(currentTime.getTime() + durationMinutes * 6e4);
          const slotEndTimeString = slotEndTime.toTimeString().substring(0, 5);
          if (isBreakTime) {
            skippedBreaks.push({ date: dateString, startTime: slotStartTime, endTime: slotEndTimeString, reason: "break_time" });
          } else {
            const existingSlot = await db.select().from(timeSlots).where(and6(
              eq8(timeSlots.salonId, req.params.salonId),
              eq8(timeSlots.date, dateString),
              eq8(timeSlots.startTime, slotStartTime),
              eq8(timeSlots.endTime, slotEndTimeString)
            )).limit(1);
            if (existingSlot.length === 0) {
              const timeSlot = await storage.createTimeSlot({
                salonId: req.params.salonId,
                date: dateString,
                startTime: slotStartTime,
                endTime: slotEndTimeString,
                isAvailable: true
              });
              slotsCreated.push(timeSlot);
            } else {
              skippedDuplicates.push({ date: dateString, startTime: slotStartTime, endTime: slotEndTimeString, reason: "duplicate" });
            }
          }
          currentTime.setTime(currentTime.getTime() + durationMinutes * 6e4);
        }
      }
      res.json({
        message: `Bulk generation complete: ${slotsCreated.length} new slots created`,
        slotsCreated: slotsCreated.length,
        skippedDuplicates: skippedDuplicates.length,
        skippedBreaks: skippedBreaks.length,
        details: {
          created: slotsCreated,
          duplicates: skippedDuplicates,
          breaks: skippedBreaks
        }
      });
    } catch (error) {
      console.error("Error creating bulk time slots:", error);
      res.status(500).json({ message: "Failed to create bulk time slots" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots/cleanup-duplicates", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salonId = req.params.salonId;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage this salon" });
      }
      const duplicateSlots = await db.select({
        salonId: timeSlots.salonId,
        date: timeSlots.date,
        startTime: timeSlots.startTime,
        endTime: timeSlots.endTime,
        count: sql6`count(*)`,
        ids: sql6`array_agg(${timeSlots.id})`
      }).from(timeSlots).where(eq8(timeSlots.salonId, salonId)).groupBy(timeSlots.salonId, timeSlots.date, timeSlots.startTime, timeSlots.endTime).having(sql6`count(*) > 1`);
      let deletedCount = 0;
      for (const duplicate of duplicateSlots) {
        const slotIds = duplicate.ids;
        for (let i = 1; i < slotIds.length; i++) {
          const hasBookings = await db.select({ id: bookings.id }).from(bookings).where(eq8(bookings.timeSlotId, slotIds[i])).limit(1);
          if (hasBookings.length === 0) {
            await db.delete(timeSlots).where(eq8(timeSlots.id, slotIds[i]));
            deletedCount++;
          }
        }
      }
      res.json({
        message: `Cleaned up ${deletedCount} duplicate time slots`,
        duplicatesFound: duplicateSlots.length,
        deletedCount
      });
    } catch (error) {
      console.error("Error cleaning up duplicate time slots:", error);
      res.status(500).json({ message: "Failed to clean up duplicate time slots" });
    }
  });
  app2.delete("/api/time-slots/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const timeSlot = await db.select().from(timeSlots).where(eq8(timeSlots.id, req.params.id)).limit(1);
      if (!timeSlot.length) {
        return res.status(404).json({ message: "Time slot not found" });
      }
      const salon = await storage.getSalonById(timeSlot[0].salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this time slot" });
      }
      const slotBookings = await db.select().from(bookings).where(and6(
        eq8(bookings.timeSlotId, req.params.id),
        or3(eq8(bookings.status, "confirmed"), eq8(bookings.status, "completed"))
      ));
      if (slotBookings.length > 0) {
        return res.status(400).json({ message: "Cannot delete a time slot that has confirmed bookings" });
      }
      await db.delete(timeSlots).where(eq8(timeSlots.id, req.params.id));
      res.json({ message: "Time slot deleted successfully" });
    } catch (error) {
      console.error("Error deleting time slot:", error);
      res.status(500).json({ message: "Failed to delete time slot" });
    }
  });
  app2.delete("/api/salons/:salonId/time-slots/date/:date", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete time slots for this salon" });
      }
      const result = await db.delete(timeSlots).where(and6(
        eq8(timeSlots.salonId, req.params.salonId),
        eq8(timeSlots.date, req.params.date),
        not(exists(
          db.select().from(bookings).where(and6(
            eq8(bookings.timeSlotId, timeSlots.id),
            or3(eq8(bookings.status, "confirmed"), eq8(bookings.status, "completed"))
          ))
        ))
      ));
      res.json({ message: `All unbooked time slots for ${req.params.date} deleted successfully` });
    } catch (error) {
      console.error("Error deleting time slots by date:", error);
      res.status(500).json({ message: "Failed to delete time slots" });
    }
  });
  app2.post("/api/salons/:salonId/time-slots/fix-duplicates", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage time slots for this salon" });
      }
      const duplicateSlots = await db.select({
        salonId: timeSlots.salonId,
        date: timeSlots.date,
        startTime: timeSlots.startTime,
        endTime: timeSlots.endTime,
        count: sql6`count(*)`,
        ids: sql6`array_agg(${timeSlots.id})`
      }).from(timeSlots).where(eq8(timeSlots.salonId, req.params.salonId)).groupBy(timeSlots.salonId, timeSlots.date, timeSlots.startTime, timeSlots.endTime).having(sql6`count(*) > 1`);
      let deletedCount = 0;
      for (const duplicate of duplicateSlots) {
        const slotIds = duplicate.ids;
        for (let i = 1; i < slotIds.length; i++) {
          const hasBookings = await db.select({ id: bookings.id }).from(bookings).where(eq8(bookings.timeSlotId, slotIds[i])).limit(1);
          if (hasBookings.length === 0) {
            await db.delete(timeSlots).where(eq8(timeSlots.id, slotIds[i]));
            deletedCount++;
          }
        }
      }
      res.json({
        message: `Fixed ${deletedCount} duplicate time slots`,
        duplicatesFound: duplicateSlots.length,
        deletedCount
      });
    } catch (error) {
      console.error("Error fixing duplicate time slots:", error);
      res.status(500).json({ message: "Failed to fix duplicate time slots" });
    }
  });
  app2.delete("/api/salons/:salonId/time-slots/clear", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to clear time slots for this salon" });
      }
      const result = await db.delete(timeSlots).where(and6(
        eq8(timeSlots.salonId, req.params.salonId),
        not(exists(
          db.select().from(bookings).where(and6(
            eq8(bookings.timeSlotId, timeSlots.id),
            or3(eq8(bookings.status, "confirmed"), eq8(bookings.status, "completed"))
          ))
        ))
      ));
      res.json({ message: "All unboked time slots cleared successfully" });
    } catch (error) {
      console.error("Error clearing time slots:", error);
      res.status(500).json({ message: "Failed to clear time slots" });
    }
  });
  app2.post("/api/bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const bookingData = insertBookingSchema.parse({ ...req.body, customerId: userId });
      await storage.updateTimeSlotAvailability(bookingData.timeSlotId || "", false);
      const booking = await storage.createBooking(bookingData);
      res.json(booking);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(400).json({ message: "Invalid booking data" });
    }
  });
  app2.get("/api/bookings/my", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const bookings3 = await storage.getBookingsByCustomer(userId);
      res.json(bookings3);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });
  app2.get("/api/salons/:salonId/bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const salon = await storage.getSalonById(req.params.salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to view bookings for this salon" });
      }
      const bookings3 = await storage.getBookingsBySalon(req.params.salonId);
      res.json(bookings3);
    } catch (error) {
      console.error("Error fetching salon bookings:", error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });
  app2.put("/api/bookings/:id/status", isAuthenticated, async (req, res) => {
    try {
      const { status, paymentId, paymentStatus, suggestedDate, suggestedTime, ownerNote } = req.body;
      await storage.updateBookingStatus(req.params.id, status, paymentId, paymentStatus, suggestedDate, suggestedTime, ownerNote);
      res.json({ message: "Booking status updated" });
      Promise.resolve().then(() => (init_booking_notifications(), booking_notifications_exports)).then(({ sendOwnerConfirmedEmail: sendOwnerConfirmedEmail2, sendOwnerDeclinedEmail: sendOwnerDeclinedEmail2, sendOwnerSuggestionEmail: sendOwnerSuggestionEmail2 }) => {
        if (status === "confirmed") {
          sendOwnerConfirmedEmail2(req.params.id).then((sent) => console.log(`\u{1F4E7} Confirmed email: ${sent}`));
        } else if (status === "cancelled") {
          sendOwnerDeclinedEmail2(req.params.id).then((sent) => console.log(`\u{1F4E7} Declined email: ${sent}`));
        } else if (status === "owner_suggested" && suggestedDate && suggestedTime) {
          sendOwnerSuggestionEmail2(req.params.id, suggestedDate, suggestedTime, ownerNote).then(
            (sent) => console.log(`\u{1F4E7} Suggestion email: ${sent}`)
          );
        }
      }).catch((e) => console.error("Email notification error:", e));
      Promise.resolve().then(() => (init_notifications(), notifications_exports)).then(({ notifyCustomerBookingAccepted: notifyCustomerBookingAccepted2, notifyCustomerBookingRejected: notifyCustomerBookingRejected2, notifyCustomerRescheduleSuggested: notifyCustomerRescheduleSuggested2 }) => {
        if (status === "confirmed") {
          notifyCustomerBookingAccepted2(req.params.id).catch(() => {
          });
        } else if (status === "cancelled") {
          notifyCustomerBookingRejected2(req.params.id).catch(() => {
          });
        } else if (status === "owner_suggested") {
          notifyCustomerRescheduleSuggested2(req.params.id).catch(() => {
          });
        }
      }).catch(() => {
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });
  app2.patch("/api/bookings/:id/respond", isAuthenticated, async (req, res) => {
    try {
      const { action } = req.body;
      if (!["accept", "decline"].includes(action)) {
        return res.status(400).json({ message: "Invalid action" });
      }
      const booking = await storage.getBookingById(req.params.id);
      if (!booking) return res.status(404).json({ message: "Booking not found" });
      if (booking.customerId !== req.user.id) return res.status(403).json({ message: "Forbidden" });
      if (action === "accept") {
        const updateData = { status: "confirmed", updatedAt: /* @__PURE__ */ new Date() };
        if (booking.suggestedDate) updateData.date = booking.suggestedDate;
        if (booking.suggestedTime) {
          updateData.startTime = booking.suggestedTime;
        }
        await storage.updateBookingStatus(req.params.id, "confirmed", void 0, void 0, null, null, null);
        const { db: db3 } = await Promise.resolve().then(() => (init_db(), db_exports));
        const { bookings: bookingsTable } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const { eq: eq9 } = await import("drizzle-orm");
        await db3.update(bookingsTable).set({
          date: booking.suggestedDate ?? booking.date,
          startTime: booking.suggestedTime ?? booking.startTime,
          suggestedDate: null,
          suggestedTime: null,
          ownerNote: null
        }).where(eq9(bookingsTable.id, req.params.id));
      } else {
        await storage.updateBookingStatus(req.params.id, "cancelled");
      }
      res.json({ message: action === "accept" ? "Booking confirmed with new time" : "Booking declined" });
    } catch (error) {
      console.error("Error responding to booking suggestion:", error);
      res.status(500).json({ message: "Failed to respond to booking" });
    }
  });
  app2.post("/api/walk-in-bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const validationResult = insertWalkInBookingSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({
          message: "Invalid walk-in booking data",
          errors: validationResult.error.errors
        });
      }
      const walkInData = validationResult.data;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, walkInData.salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Unauthorized: You can only add walk-ins for your own salon" });
      }
      const [service] = await db.select().from(services).where(eq8(services.id, walkInData.serviceId));
      if (!service || service.salonId !== walkInData.salonId) {
        return res.status(400).json({ message: "Service not found or doesn't belong to this salon" });
      }
      const newBooking = await storage.createWalkInBooking(walkInData);
      res.status(201).json({
        message: "Walk-in booking created successfully",
        booking: newBooking
      });
    } catch (error) {
      console.error("Error creating walk-in booking:", error);
      res.status(500).json({
        message: "Failed to create walk-in booking",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/salons/:salonId/walk-in-bookings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Unauthorized: You can only view walk-ins for your own salon" });
      }
      const walkInBookings = await storage.getWalkInBookingsBySalon(salonId);
      res.json(walkInBookings);
    } catch (error) {
      console.error("Error fetching walk-in bookings:", error);
      res.status(500).json({ message: "Failed to fetch walk-in bookings" });
    }
  });
  app2.get("/api/staff/:staffId/working-hours", isAuthenticated, async (req, res) => {
    try {
      const { staffId } = req.params;
      const userId = req.user?.id;
      const [staffMember] = await db.select({
        staff,
        salon: salons
      }).from(staff).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staff.id, staffId));
      if (!staffMember || staffMember.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const workingHours2 = await db.select().from(staffWorkingHours).where(eq8(staffWorkingHours.staffId, staffId)).orderBy(staffWorkingHours.dayOfWeek);
      res.json(workingHours2);
    } catch (error) {
      console.error("Error fetching working hours:", error);
      res.status(500).json({ message: "Failed to fetch working hours" });
    }
  });
  app2.post("/api/staff-working-hours", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const workingHoursData = req.body;
      const [staffMember] = await db.select({
        staff,
        salon: salons
      }).from(staff).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staff.id, workingHoursData.staffId));
      if (!staffMember || staffMember.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const [newWorkingHours] = await db.insert(staffWorkingHours).values({
        ...workingHoursData,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).returning();
      res.json(newWorkingHours);
    } catch (error) {
      console.error("Error creating working hours:", error);
      res.status(500).json({ message: "Failed to create working hours" });
    }
  });
  app2.put("/api/staff-working-hours/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;
      const workingHoursData = req.body;
      const [existingHours] = await db.select({
        hours: staffWorkingHours,
        staff,
        salon: salons
      }).from(staffWorkingHours).innerJoin(staff, eq8(staffWorkingHours.staffId, staff.id)).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staffWorkingHours.id, id));
      if (!existingHours || existingHours.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const [updatedHours] = await db.update(staffWorkingHours).set({
        ...workingHoursData,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(staffWorkingHours.id, id)).returning();
      res.json(updatedHours);
    } catch (error) {
      console.error("Error updating working hours:", error);
      res.status(500).json({ message: "Failed to update working hours" });
    }
  });
  app2.get("/api/staff/:staffId/services", isAuthenticated, async (req, res) => {
    try {
      const { staffId } = req.params;
      const userId = req.user?.id;
      const [staffMember] = await db.select({
        staff,
        salon: salons
      }).from(staff).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staff.id, staffId));
      if (!staffMember || staffMember.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const staffServicesList = await db.select({
        staffService: staffServices,
        service: services
      }).from(staffServices).innerJoin(services, eq8(staffServices.serviceId, services.id)).where(eq8(staffServices.staffId, staffId));
      res.json(staffServicesList);
    } catch (error) {
      console.error("Error fetching staff services:", error);
      res.status(500).json({ message: "Failed to fetch staff services" });
    }
  });
  app2.post("/api/staff-services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const serviceData = req.body;
      const [staffMember] = await db.select({
        staff,
        salon: salons
      }).from(staff).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staff.id, serviceData.staffId));
      if (!staffMember || staffMember.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const [newStaffService] = await db.insert(staffServices).values({
        ...serviceData,
        createdAt: /* @__PURE__ */ new Date()
      }).returning();
      res.json(newStaffService);
    } catch (error) {
      console.error("Error creating staff service:", error);
      res.status(500).json({ message: "Failed to create staff service" });
    }
  });
  app2.put("/api/staff-services/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;
      const serviceData = req.body;
      const [existingService] = await db.select({
        staffService: staffServices,
        staff,
        salon: salons
      }).from(staffServices).innerJoin(staff, eq8(staffServices.staffId, staff.id)).innerJoin(salons, eq8(staff.salonId, salons.id)).where(eq8(staffServices.id, id));
      if (!existingService || existingService.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const [updatedService] = await db.update(staffServices).set(serviceData).where(eq8(staffServices.id, id)).returning();
      res.json(updatedService);
    } catch (error) {
      console.error("Error updating staff service:", error);
      res.status(500).json({ message: "Failed to update staff service" });
    }
  });
  app2.get("/api/owner/staff", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [ownerSalon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!ownerSalon) {
        return res.status(404).json({ message: "No salon found for this owner" });
      }
      const staffMembers = await db.select().from(staff).where(eq8(staff.salonId, ownerSalon.id));
      res.json(staffMembers);
    } catch (error) {
      console.error("Error fetching owner staff:", error);
      res.status(500).json({ message: "Failed to fetch staff" });
    }
  });
  app2.get("/api/owner/services", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [ownerSalon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!ownerSalon) {
        return res.status(404).json({ message: "No salon found for this owner" });
      }
      const salonServices = await db.select().from(services).where(eq8(services.salonId, ownerSalon.id));
      res.json(salonServices);
    } catch (error) {
      console.error("Error fetching owner services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });
  app2.post("/api/salons/:salonId/gallery", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const { imageUrl, title, description, category } = req.body;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage this salon's gallery" });
      }
      const existingImages = await storage.getGalleryImagesBySalon(salonId);
      if (existingImages.length >= 10) {
        return res.status(400).json({ message: "Maximum 10 images allowed per salon" });
      }
      const objectStorageService = new ObjectStorageService();
      console.log("Original imageUrl:", imageUrl);
      const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
        imageUrl,
        {
          owner: userId,
          visibility: "public"
          // Make gallery images public so customers can view them
        }
      );
      console.log("Normalized objectPath:", objectPath);
      const galleryImage = await storage.createGalleryImage({
        salonId,
        imageUrl: objectPath,
        // Use the normalized object path
        title,
        description,
        category: category || "work",
        order: existingImages.length + 1
      });
      res.json(galleryImage);
    } catch (error) {
      console.error("Error adding gallery image:", error);
      res.status(500).json({ message: "Failed to add gallery image" });
    }
  });
  app2.get("/api/salons/:salonId/gallery", async (req, res) => {
    try {
      const { salonId } = req.params;
      const galleryImages = await storage.getGalleryImagesBySalon(salonId);
      res.json(galleryImages);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      res.status(500).json({ message: "Failed to fetch gallery" });
    }
  });
  app2.put("/api/salons/:salonId/gallery/:imageId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, imageId } = req.params;
      const { title, description, category } = req.body;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage this salon's gallery" });
      }
      const updatedImage = await storage.updateGalleryImage(imageId, {
        title,
        description,
        category
      });
      if (!updatedImage) {
        return res.status(404).json({ message: "Gallery image not found" });
      }
      res.json(updatedImage);
    } catch (error) {
      console.error("Error updating gallery image:", error);
      res.status(500).json({ message: "Failed to update gallery image" });
    }
  });
  app2.delete("/api/salons/:salonId/gallery/:imageId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, imageId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to manage this salon's gallery" });
      }
      await storage.deleteGalleryImage(imageId);
      res.json({ message: "Gallery image deleted successfully" });
    } catch (error) {
      console.error("Error deleting gallery image:", error);
      res.status(500).json({ message: "Failed to delete gallery image" });
    }
  });
  app2.get("/api/salons/:salonId/media", async (req, res) => {
    try {
      const { salonId } = req.params;
      const mediaList = await db.select().from(salonMedia).where(and6(
        eq8(salonMedia.salonId, salonId),
        eq8(salonMedia.isActive, true)
      )).orderBy(asc2(salonMedia.order), desc3(salonMedia.createdAt));
      res.json(mediaList);
    } catch (error) {
      console.error("Error fetching salon media:", error);
      res.status(500).json({ message: "Failed to fetch salon media" });
    }
  });
  app2.post("/api/owner/salon/cover-upload", isAuthenticated, upload.single("file"), async (req, res) => {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ error: "No file provided" });
      const { randomUUID: randomUUID2 } = await import("crypto");
      const { writeFile, mkdir } = await import("fs/promises");
      const { join } = await import("path");
      const uploadsDir = join(process.cwd(), "uploads");
      await mkdir(uploadsDir, { recursive: true });
      const ext = (file.originalname.split(".").pop() || "jpg").toLowerCase();
      const filename = `cover-${randomUUID2()}.${ext}`;
      const filePath = join(uploadsDir, filename);
      await writeFile(filePath, file.buffer);
      res.json({ imageUrl: `/uploads/${filename}` });
    } catch (error) {
      console.error("Cover upload error:", error);
      res.status(500).json({ error: "Upload failed" });
    }
  });
  app2.post("/api/salons/media/upload", isAuthenticated, upload.array("files", 50), async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.body;
      if (!salonId) {
        return res.status(400).json({ message: "Salon ID is required" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId));
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to upload media for this salon" });
      }
      const [{ count: currentCount }] = await db.select({ count: count() }).from(salonMedia).where(and6(
        eq8(salonMedia.salonId, salonId),
        eq8(salonMedia.isActive, true)
      ));
      if (currentCount >= 50) {
        return res.status(400).json({ message: "Maximum 50 media files allowed per salon" });
      }
      const uploadedFiles = req.files;
      console.log("Uploaded files count:", uploadedFiles?.length || 0);
      if (!uploadedFiles || uploadedFiles.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }
      const { randomUUID: randomUUID2 } = await import("crypto");
      const { writeFile, mkdir } = await import("fs/promises");
      const { join } = await import("path");
      const uploadResults = [];
      const uploadsDir = join(process.cwd(), "uploads");
      await mkdir(uploadsDir, { recursive: true });
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];
        const fileType = file.mimetype.startsWith("video/") ? "video" : "image";
        if (currentCount + i >= 50) {
          break;
        }
        try {
          const fileExtension = (file.originalname.split(".").pop() || "jpg").toLowerCase();
          const filename = `${randomUUID2()}.${fileExtension}`;
          const filePath = join(uploadsDir, filename);
          await writeFile(filePath, file.buffer);
          const fileUrl = `/uploads/${filename}`;
          const [savedMedia] = await db.insert(salonMedia).values({
            salonId,
            fileUrl,
            fileName: file.originalname,
            fileType,
            mimeType: file.mimetype,
            fileSize: file.size,
            order: currentCount + i
          }).returning();
          uploadResults.push(savedMedia);
          console.log(`Saved file ${file.originalname} \u2192 ${fileUrl}`);
        } catch (error) {
          console.error(`Error saving file ${file.originalname}:`, error);
        }
      }
      res.json({
        message: `Successfully uploaded ${uploadResults.length} files`,
        uploadedFiles: uploadResults
      });
    } catch (error) {
      console.error("Error uploading salon media:", error);
      res.status(500).json({ message: "Failed to upload media" });
    }
  });
  app2.put("/api/salons/media/:mediaId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { mediaId } = req.params;
      const { title, description, category, isPrimary } = req.body;
      const [media] = await db.select({
        media: salonMedia,
        salon: salons
      }).from(salonMedia).leftJoin(salons, eq8(salonMedia.salonId, salons.id)).where(eq8(salonMedia.id, mediaId));
      if (!media) {
        return res.status(404).json({ message: "Media not found" });
      }
      if (!media.salon || media.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to edit this media" });
      }
      if (isPrimary) {
        await db.update(salonMedia).set({ isPrimary: false }).where(and6(
          eq8(salonMedia.salonId, media.media.salonId),
          not(eq8(salonMedia.id, mediaId))
        ));
      }
      const [updatedMedia] = await db.update(salonMedia).set({
        title,
        description,
        category,
        isPrimary,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(salonMedia.id, mediaId)).returning();
      res.json(updatedMedia);
    } catch (error) {
      console.error("Error updating salon media:", error);
      res.status(500).json({ message: "Failed to update media" });
    }
  });
  app2.delete("/api/salons/media/:mediaId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { mediaId } = req.params;
      const [media] = await db.select({
        media: salonMedia,
        salon: salons
      }).from(salonMedia).leftJoin(salons, eq8(salonMedia.salonId, salons.id)).where(eq8(salonMedia.id, mediaId));
      if (!media) {
        return res.status(404).json({ message: "Media not found" });
      }
      if (!media.salon || media.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this media" });
      }
      await db.update(salonMedia).set({
        isActive: false,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(salonMedia.id, mediaId));
      res.json({ message: "Media deleted successfully" });
    } catch (error) {
      console.error("Error deleting salon media:", error);
      res.status(500).json({ message: "Failed to delete media" });
    }
  });
  app2.patch("/api/salons/media/:mediaId/set-primary", isAuthenticated, async (req, res) => {
    try {
      const { mediaId } = req.params;
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const [media] = await db.select({
        media: salonMedia,
        salon: salons
      }).from(salonMedia).leftJoin(salons, eq8(salonMedia.salonId, salons.id)).where(eq8(salonMedia.id, mediaId));
      if (!media) {
        return res.status(404).json({ message: "Media not found" });
      }
      if (!media.salon || media.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to modify this media" });
      }
      await db.update(salonMedia).set({ isPrimary: false }).where(eq8(salonMedia.salonId, media.salon.id));
      await db.update(salonMedia).set({ isPrimary: true }).where(eq8(salonMedia.id, mediaId));
      res.json({ message: "Primary media set successfully" });
    } catch (error) {
      console.error("Error setting primary media:", error);
      res.status(500).json({ message: "Failed to set primary media" });
    }
  });
  app2.post("/api/reviews", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { getMoodFromRating: getMoodFromRating2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      let processedPhotos = [];
      if (req.body.photos && Array.isArray(req.body.photos)) {
        const objectStorageService = new ObjectStorageService();
        for (const photoUrl of req.body.photos) {
          if (photoUrl && typeof photoUrl === "string") {
            try {
              const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
                photoUrl,
                {
                  owner: userId,
                  visibility: "public"
                  // Review photos should be public
                }
              );
              processedPhotos.push(objectPath);
            } catch (photoError) {
              console.error(`Error processing review photo ${photoUrl}:`, photoError);
              processedPhotos.push(photoUrl);
            }
          }
        }
      }
      const reviewData = { ...req.body, customerId: userId, photos: processedPhotos };
      if (!reviewData.moodRating && reviewData.rating) {
        reviewData.moodRating = getMoodFromRating2(reviewData.rating);
      }
      const validatedData = insertReviewSchema.parse(reviewData);
      const review = await storage.createReview(validatedData);
      res.json(review);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(400).json({ message: "Invalid review data" });
    }
  });
  app2.get("/api/salons/:salonId/reviews", async (req, res) => {
    try {
      const reviews2 = await storage.getReviewsBySalon(req.params.salonId);
      const reviewsWithReplies = await Promise.all(
        reviews2.map(async (review) => {
          const replies = await storage.getReviewReplies(review.id);
          return { ...review, replies };
        })
      );
      res.json(reviewsWithReplies);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });
  app2.post("/api/reviews/:reviewId/replies", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userType = req.user?.userType;
      const { reviewId } = req.params;
      const { replyText } = req.body;
      if (userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can reply to reviews" });
      }
      if (!replyText || replyText.trim().length === 0) {
        return res.status(400).json({ message: "Reply text is required" });
      }
      const reviewsData = await db.select({
        reviewId: reviews.id,
        salonId: reviews.salonId,
        salonOwnerId: salons.ownerId
      }).from(reviews).leftJoin(salons, eq8(reviews.salonId, salons.id)).where(eq8(reviews.id, reviewId));
      if (reviewsData.length === 0) {
        return res.status(404).json({ message: "Review not found" });
      }
      const reviewData = reviewsData[0];
      if (reviewData.salonOwnerId !== userId) {
        return res.status(403).json({ message: "You can only reply to reviews for your own salon" });
      }
      const replyData = {
        reviewId,
        salonOwnerId: userId,
        replyText: replyText.trim()
      };
      const reply = await storage.createReviewReply(replyData);
      res.status(201).json(reply);
    } catch (error) {
      console.error("Error creating review reply:", error);
      res.status(500).json({ message: "Failed to create reply" });
    }
  });
  app2.put("/api/reviews/replies/:replyId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { replyId } = req.params;
      const { replyText } = req.body;
      if (!replyText || replyText.trim().length === 0) {
        return res.status(400).json({ message: "Reply text is required" });
      }
      const existingReplies = await db.select().from(reviewReplies).where(eq8(reviewReplies.id, replyId));
      if (existingReplies.length === 0) {
        return res.status(404).json({ message: "Reply not found" });
      }
      const existingReply = existingReplies[0];
      if (existingReply.salonOwnerId !== userId) {
        return res.status(403).json({ message: "You can only edit your own replies" });
      }
      const updatedReply = await storage.updateReviewReply(replyId, replyText.trim());
      res.json(updatedReply);
    } catch (error) {
      console.error("Error updating review reply:", error);
      res.status(500).json({ message: "Failed to update reply" });
    }
  });
  app2.delete("/api/reviews/replies/:replyId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { replyId } = req.params;
      const existingReplies = await db.select().from(reviewReplies).where(eq8(reviewReplies.id, replyId));
      if (existingReplies.length === 0) {
        return res.status(404).json({ message: "Reply not found" });
      }
      const existingReply = existingReplies[0];
      if (existingReply.salonOwnerId !== userId) {
        return res.status(403).json({ message: "You can only delete your own replies" });
      }
      await storage.deleteReviewReply(replyId);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting review reply:", error);
      res.status(500).json({ message: "Failed to delete reply" });
    }
  });
  app2.get("/api/referral-milestone", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user || user.userType !== "salon_owner") {
        return res.status(403).json({ message: "Access denied. Only salon owners can view referral milestones." });
      }
      const milestone = await storage.getOrCreateReferralMilestone(userId);
      res.json(milestone);
    } catch (error) {
      console.error("Error fetching referral milestone:", error);
      res.status(500).json({ message: "Failed to fetch referral milestone" });
    }
  });
  app2.post("/api/referrals/generate-code", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user || user.userType !== "customer") {
        return res.status(403).json({ message: "Only customers can generate referral codes." });
      }
      const referralCode = await storage.generateUniqueReferralCode();
      res.json({ referralCode, shareUrl: `${req.protocol}://${req.hostname}/signup?ref=${referralCode}` });
    } catch (error) {
      console.error("Error generating referral code:", error);
      res.status(500).json({ message: "Failed to generate referral code" });
    }
  });
  app2.get("/api/referrals/campaign", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user || user.userType !== "customer") {
        return res.status(403).json({ message: "Only customers can view referral campaigns." });
      }
      const campaign = await storage.getOrCreateCustomerReferralCampaign(userId);
      res.json(campaign);
    } catch (error) {
      console.error("Error fetching referral campaign:", error);
      res.status(500).json({ message: "Failed to fetch referral campaign" });
    }
  });
  app2.get("/api/free-credits", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [user] = await db.select().from(users).where(eq8(users.id, userId));
      if (!user || user.userType !== "customer") {
        return res.status(403).json({ message: "Only customers can view free booking credits." });
      }
      const credits = await storage.getAvailableFreeCredits(userId);
      res.json(credits);
    } catch (error) {
      console.error("Error fetching free credits:", error);
      res.status(500).json({ message: "Failed to fetch free credits" });
    }
  });
  app2.get("/api/referral/:code", async (req, res) => {
    try {
      const { code } = req.params;
      const referral = await storage.getReferralByCode(code);
      if (!referral) {
        return res.status(404).json({ message: "Referral code not found" });
      }
      const [referrer] = await db.select({
        id: users.id,
        firstName: users.firstName,
        userType: users.userType
      }).from(users).where(eq8(users.id, referral.referrerId));
      res.json({
        code,
        referrer: referrer || null,
        referralType: referral.referralType,
        isValid: referral.status === "pending"
      });
    } catch (error) {
      console.error("Error validating referral code:", error);
      res.status(500).json({ message: "Failed to validate referral code" });
    }
  });
  app2.post("/api/referrals/create", isAuthenticated, async (req, res) => {
    try {
      const { referralType, targetUserType } = req.body;
      const referrerId = req.user?.id;
      const validTypes = ["customer_to_customer", "customer_to_shopkeeper"];
      if (!validTypes.includes(referralType)) {
        return res.status(400).json({ message: "Invalid referral type" });
      }
      const [referrer] = await db.select().from(users).where(eq8(users.id, referrerId));
      if (!referrer || referrer.userType !== "customer") {
        return res.status(403).json({ message: "Only customers can create referral codes" });
      }
      const referralCode = await storage.generateUniqueReferralCode();
      const newReferral = await storage.createReferral({
        referrerId,
        referredId: null,
        // Will be filled during signup
        referralCode,
        referralType,
        status: "pending",
        rewardAmount: referralType === "customer_to_customer" ? "50" : "0"
      });
      const shareUrl = `${req.protocol}://${req.hostname}/signup?ref=${referralCode}&type=${targetUserType || "customer"}`;
      res.json({
        id: newReferral.id,
        referralCode,
        referralType,
        shareUrl,
        message: referralType === "customer_to_customer" ? "Share this code with friends! You'll earn 1 free booking when 10 friends complete their first booking." : "Share this code with salon owners! You'll earn 1 free booking when they sign up."
      });
    } catch (error) {
      console.error("Error creating referral:", error);
      res.status(500).json({ message: "Failed to create referral code" });
    }
  });
  app2.get("/api/notification-settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [settings] = await db.select().from(notificationSettings).where(eq8(notificationSettings.userId, userId));
      if (!settings) {
        const [newSettings] = await db.insert(notificationSettings).values({ userId }).returning();
        return res.json(newSettings);
      }
      res.json(settings);
    } catch (error) {
      console.error("Error fetching notification settings:", error);
      res.status(500).json({ message: "Failed to fetch notification settings" });
    }
  });
  app2.put("/api/notification-settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const settings = req.body;
      const [updatedSettings] = await db.update(notificationSettings).set({ ...settings, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(notificationSettings.userId, userId)).returning();
      if (!updatedSettings) {
        const [newSettings] = await db.insert(notificationSettings).values({ userId, ...settings }).returning();
        return res.json(newSettings);
      }
      res.json(updatedSettings);
    } catch (error) {
      console.error("Error updating notification settings:", error);
      res.status(500).json({ message: "Failed to update notification settings" });
    }
  });
  app2.post("/api/push-subscriptions", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { endpoint, p256dhKey, authKey, userAgent } = req.body;
      const [existingSubscription] = await db.select().from(pushSubscriptions).where(and6(
        eq8(pushSubscriptions.userId, userId),
        eq8(pushSubscriptions.endpoint, endpoint)
      ));
      if (existingSubscription) {
        return res.json(existingSubscription);
      }
      const [subscription] = await db.insert(pushSubscriptions).values({
        userId,
        endpoint,
        p256dhKey,
        authKey,
        userAgent: userAgent || null
      }).returning();
      res.json(subscription);
    } catch (error) {
      console.error("Error saving push subscription:", error);
      res.status(500).json({ message: "Failed to save push subscription" });
    }
  });
  app2.delete("/api/push-subscriptions", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { endpoint } = req.body;
      await db.update(pushSubscriptions).set({ isActive: false }).where(and6(
        eq8(pushSubscriptions.userId, userId),
        eq8(pushSubscriptions.endpoint, endpoint)
      ));
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing push subscription:", error);
      res.status(500).json({ message: "Failed to remove push subscription" });
    }
  });
  app2.get("/api/notification-history", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const limit = parseInt(req.query.limit) || 50;
      const notifications = await db.select().from(notificationHistory).where(eq8(notificationHistory.userId, userId)).orderBy(desc3(notificationHistory.sentAt)).limit(limit);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching notification history:", error);
      res.status(500).json({ message: "Failed to fetch notification history" });
    }
  });
  app2.get("/api/owner/referral-campaign", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can access referral campaigns" });
      }
      const [milestone] = await db.select().from(referralMilestones).where(eq8(referralMilestones.referrerId, userId)).limit(1);
      if (!milestone) {
        return res.json(null);
      }
      const progressToMilestone = milestone.currentCount || 0;
      const nextMilestone = milestone.targetCount;
      const milestoneReward = milestone.rewardAmount || "0";
      const [referralRecord] = await db.select().from(referrals).where(eq8(referrals.referrerId, userId)).limit(1);
      const referralCode = referralRecord?.referralCode || `S${userId.slice(-8).toUpperCase()}`;
      const campaign = {
        id: milestone.id,
        referrerId: milestone.referrerId,
        referralCode,
        totalReferred: milestone.currentCount || 0,
        completedReferrals: milestone.currentCount || 0,
        totalEarned: milestone.rewardClaimed ? milestone.rewardAmount : "0",
        isActive: !milestone.isCompleted,
        nextMilestone,
        progressToMilestone: Math.min(progressToMilestone, nextMilestone),
        milestoneReward,
        createdAt: milestone.createdAt?.toISOString() || (/* @__PURE__ */ new Date()).toISOString()
      };
      res.json(campaign);
    } catch (error) {
      console.error("Error fetching referral campaign:", error);
      res.status(500).json({ message: "Failed to fetch referral campaign" });
    }
  });
  app2.post("/api/owner/referral-campaign", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can create referral campaigns" });
      }
      const [existingMilestone] = await db.select().from(referralMilestones).where(eq8(referralMilestones.referrerId, userId)).limit(1);
      if (existingMilestone) {
        if (existingMilestone.isCompleted) {
          await db.delete(referralMilestones).where(eq8(referralMilestones.referrerId, userId));
        } else {
          return res.status(400).json({ message: "Referral campaign already exists" });
        }
      }
      const referralCode = `S${userId.slice(-8).toUpperCase()}`;
      const [milestone] = await db.insert(referralMilestones).values({
        referrerId: userId,
        milestoneType: "5_customer_full_fee",
        targetCount: 3,
        // Changed to 3 as per requirement
        currentCount: 0,
        isCompleted: false,
        rewardAmount: "0",
        // Will be calculated when milestone is reached
        completedBookingIds: [],
        rewardClaimed: false
      }).returning();
      try {
        await db.insert(referrals).values({
          referrerId: userId,
          referralCode,
          referralType: "shopkeeper_milestone",
          status: "pending",
          rewardAmount: "0",
          isRewardClaimed: false
        });
      } catch (error) {
        await db.update(referrals).set({
          referralCode,
          referralType: "shopkeeper_milestone"
        }).where(eq8(referrals.referrerId, userId));
      }
      const campaign = {
        id: milestone.id,
        referrerId: milestone.referrerId,
        referralCode,
        totalReferred: 0,
        completedReferrals: 0,
        totalEarned: "0",
        isActive: true,
        nextMilestone: 3,
        progressToMilestone: 0,
        milestoneReward: "0",
        createdAt: milestone.createdAt?.toISOString() || (/* @__PURE__ */ new Date()).toISOString()
      };
      res.json(campaign);
    } catch (error) {
      console.error("Error creating referral campaign:", error);
      res.status(500).json({ message: "Failed to create referral campaign" });
    }
  });
  app2.get("/api/owner/referral-history", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can access referral history" });
      }
      const [referralRecord] = await db.select().from(referrals).where(eq8(referrals.referrerId, userId)).limit(1);
      if (!referralRecord) {
        return res.json([]);
      }
      const referredBookings = await db.select({
        id: bookings.id,
        customerName: users.firstName,
        customerPhone: users.phone,
        customerEmail: users.email,
        confirmationAmount: bookings.confirmationAmount,
        paymentStatus: bookings.paymentStatus,
        createdAt: bookings.createdAt,
        completedAt: bookings.createdAt
      }).from(bookings).innerJoin(users, eq8(bookings.customerId, users.id)).where(eq8(bookings.referralCode, referralRecord.referralCode)).orderBy(desc3(bookings.createdAt));
      const history = referredBookings.map((booking) => ({
        id: booking.id,
        referredCustomerName: booking.customerName || booking.customerEmail || "Unknown Customer",
        referredCustomerPhone: booking.customerPhone || "Not provided",
        status: booking.paymentStatus === "completed" ? "completed" : "pending",
        rewardAmount: booking.paymentStatus === "completed" ? booking.confirmationAmount : "0",
        completedAt: booking.paymentStatus === "completed" ? booking.completedAt?.toISOString() : void 0,
        bookingId: booking.id
      }));
      res.json(history);
    } catch (error) {
      console.error("Error fetching referral history:", error);
      res.status(500).json({ message: "Failed to fetch referral history" });
    }
  });
  app2.delete("/api/owner/referral-campaign", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can reset referral campaigns" });
      }
      await db.delete(referralMilestones).where(eq8(referralMilestones.referrerId, userId));
      await db.delete(referrals).where(eq8(referrals.referrerId, userId));
      res.json({ message: "Referral campaign reset successfully" });
    } catch (error) {
      console.error("Error resetting referral campaign:", error);
      res.status(500).json({ message: "Failed to reset referral campaign" });
    }
  });
  app2.post("/api/salons/:salonId/like", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "customer") {
        return res.status(403).json({ message: "Only customers can like salons" });
      }
      const salon = await storage.getSalonById(salonId);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const result = await storage.toggleSalonLike(userId, salonId);
      res.json({
        success: true,
        isLiked: result.isLiked,
        likesCount: result.likesCount,
        message: result.isLiked ? "Salon liked successfully" : "Salon unliked successfully"
      });
    } catch (error) {
      console.error("Error toggling salon like:", error);
      res.status(500).json({ message: "Failed to update salon like status" });
    }
  });
  app2.get("/api/salons/:salonId/like-status", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const isLiked = await storage.getSalonLikeStatus(userId, salonId);
      const likesCount = await storage.getSalonLikesCount(salonId);
      res.json({
        isLiked,
        likesCount
      });
    } catch (error) {
      console.error("Error getting salon like status:", error);
      res.status(500).json({ message: "Failed to get salon like status" });
    }
  });
  app2.get("/api/owner/salon/:salonId/likes", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to view likes for this salon" });
      }
      const likes = await storage.getSalonLikesForOwner(salonId);
      const likesCount = await storage.getSalonLikesCount(salonId);
      res.json({
        likes,
        likesCount,
        salonName: salon.name
      });
    } catch (error) {
      console.error("Error fetching salon likes:", error);
      res.status(500).json({ message: "Failed to fetch salon likes" });
    }
  });
  app2.get("/api/customer/liked-salons", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }
      const likedSalons = await storage.getCustomerLikedSalons(userId);
      res.json(likedSalons);
    } catch (error) {
      console.error("Error fetching customer liked salons:", error);
      res.status(500).json({ message: "Failed to fetch liked salons" });
    }
  });
  app2.get("/api/salons/:salonId/share", async (req, res) => {
    try {
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const salonSlug = salon.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      const shareableLink = `${req.protocol}://${req.get("host")}/salon/${salonSlug}`;
      res.json({
        shareableLink,
        salonName: salon.name,
        description: salon.description || `Book appointments at ${salon.name}`,
        message: `Check out ${salon.name} on Sanwar! Book your appointment easily.`
      });
    } catch (error) {
      console.error("Error generating share link:", error);
      res.status(500).json({ message: "Failed to generate share link" });
    }
  });
  const isAdmin = async (req, res, next) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }
      const user = await storage.getUser(userId);
      if (!user || user.userType !== "admin" && user.userType !== "super_admin") {
        return res.status(403).json({ error: "Admin access required" });
      }
      req.adminUser = user;
      next();
    } catch (error) {
      console.error("Error checking admin permissions:", error);
      res.status(500).json({ error: "Permission check failed" });
    }
  };
  app2.get("/api/admin/dashboard", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const stats = await storage.getAdminDashboardStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching admin dashboard stats:", error);
      res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
  });
  app2.get("/api/admin/users", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { userType, search } = req.query;
      const users2 = await storage.getAllUsers(userType, search);
      res.json(users2);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  app2.post("/api/admin/users/:userId/block", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { userId } = req.params;
      const adminId = req.user?.id;
      await storage.blockUser(userId, adminId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error blocking user:", error);
      res.status(500).json({ error: "Failed to block user" });
    }
  });
  app2.post("/api/admin/users/:userId/unblock", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { userId } = req.params;
      const adminId = req.user?.id;
      await storage.unblockUser(userId, adminId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unblocking user:", error);
      res.status(500).json({ error: "Failed to unblock user" });
    }
  });
  app2.get("/api/admin/salons", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { status } = req.query;
      let salons2;
      if (status === "pending") {
        salons2 = await storage.getPendingSalons();
      } else {
        salons2 = await storage.getAllSalonsForAdmin();
      }
      res.json(salons2);
    } catch (error) {
      console.error("Error fetching salons for admin:", error);
      res.status(500).json({ error: "Failed to fetch salons" });
    }
  });
  app2.post("/api/admin/salons/:salonId/approve", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { salonId } = req.params;
      const { notes } = req.body;
      const adminId = req.user?.id;
      await storage.approveSalon(salonId, adminId, notes);
      res.json({ success: true });
    } catch (error) {
      console.error("Error approving salon:", error);
      res.status(500).json({ error: "Failed to approve salon" });
    }
  });
  app2.post("/api/admin/salons/:salonId/reject", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { salonId } = req.params;
      const { notes } = req.body;
      const adminId = req.user?.id;
      if (!notes) {
        return res.status(400).json({ error: "Rejection notes are required" });
      }
      await storage.rejectSalon(salonId, adminId, notes);
      res.json({ success: true });
    } catch (error) {
      console.error("Error rejecting salon:", error);
      res.status(500).json({ error: "Failed to reject salon" });
    }
  });
  app2.get("/api/admin/salons/:salonId/documents", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { salonId } = req.params;
      const documents = await storage.getVerificationDocuments(salonId);
      res.json(documents);
    } catch (error) {
      console.error("Error fetching verification documents:", error);
      res.status(500).json({ error: "Failed to fetch documents" });
    }
  });
  app2.get("/api/admin/activity-logs", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { limit } = req.query;
      const logs = await storage.getAdminActivityLogs(limit ? parseInt(limit) : 50);
      res.json(logs);
    } catch (error) {
      console.error("Error fetching activity logs:", error);
      res.status(500).json({ error: "Failed to fetch activity logs" });
    }
  });
  app2.get("/api/admin/content-moderations", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { status } = req.query;
      const moderations = await storage.getContentModerations(status);
      res.json(moderations);
    } catch (error) {
      console.error("Error fetching content moderations:", error);
      res.status(500).json({ error: "Failed to fetch content moderations" });
    }
  });
  app2.post("/api/admin/content-moderations", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const moderation = await storage.createContentModeration(req.body);
      res.json(moderation);
    } catch (error) {
      console.error("Error creating content moderation:", error);
      res.status(500).json({ error: "Failed to create content moderation" });
    }
  });
  app2.put("/api/admin/content-moderations/:id", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const updates = { ...req.body, moderatedBy: req.user?.id, moderatedAt: /* @__PURE__ */ new Date() };
      await storage.updateContentModeration(id, updates);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating content moderation:", error);
      res.status(500).json({ error: "Failed to update content moderation" });
    }
  });
  app2.get("/api/admin/analytics", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { days = 30 } = req.query;
      const daysNum = parseInt(days);
      const endDate = /* @__PURE__ */ new Date();
      const startDate = /* @__PURE__ */ new Date();
      startDate.setDate(startDate.getDate() - daysNum);
      const bookingsOverTime = await db.select({
        date: sql6`DATE(${bookings.createdAt})`,
        count: sql6`count(*)::int`,
        revenue: sql6`coalesce(sum(cast(${bookings.confirmationAmount} as decimal) / 100), 0)`
      }).from(bookings).where(sql6`${bookings.createdAt} >= ${startDate}`).groupBy(sql6`DATE(${bookings.createdAt})`).orderBy(sql6`DATE(${bookings.createdAt})`);
      const bookingsByStatus = await db.select({
        status: bookings.status,
        count: sql6`count(*)::int`
      }).from(bookings).where(sql6`${bookings.createdAt} >= ${startDate}`).groupBy(bookings.status);
      const topSalons = await db.select({
        salonId: salons.id,
        salonName: salons.name,
        bookingCount: sql6`count(${bookings.id})::int`,
        revenue: sql6`coalesce(sum(cast(${bookings.confirmationAmount} as decimal) / 100), 0)`
      }).from(bookings).innerJoin(salons, eq8(bookings.salonId, salons.id)).where(sql6`${bookings.createdAt} >= ${startDate}`).groupBy(salons.id, salons.name).orderBy(desc3(sql6`count(${bookings.id})`)).limit(10);
      const userGrowth = await db.select({
        date: sql6`DATE(${users.createdAt})`,
        customers: sql6`count(*) filter (where ${users.userType} = 'customer')::int`,
        salonOwners: sql6`count(*) filter (where ${users.userType} = 'salon_owner')::int`
      }).from(users).where(sql6`${users.createdAt} >= ${startDate}`).groupBy(sql6`DATE(${users.createdAt})`).orderBy(sql6`DATE(${users.createdAt})`);
      const [totalStats] = await db.select({
        totalBookings: sql6`count(*)::int`,
        totalRevenue: sql6`coalesce(sum(cast(${bookings.confirmationAmount} as decimal) / 100), 0)`,
        avgBookingValue: sql6`coalesce(avg(cast(${bookings.confirmationAmount} as decimal) / 100), 0)`
      }).from(bookings).where(sql6`${bookings.createdAt} >= ${startDate}`);
      res.json({
        bookingsOverTime,
        bookingsByStatus,
        topSalons,
        userGrowth,
        summary: totalStats,
        dateRange: { startDate, endDate, days: daysNum }
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ error: "Failed to fetch analytics" });
    }
  });
  app2.get("/api/admin/customers", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { limit = 100, offset = 0 } = req.query;
      const allCustomers = await db.select().from(users).where(eq8(users.userType, "customer")).orderBy(desc3(users.createdAt)).limit(parseInt(limit)).offset(parseInt(offset));
      res.json(allCustomers);
    } catch (error) {
      console.error("Error fetching customers:", error);
      res.status(500).json({ error: "Failed to fetch customers" });
    }
  });
  app2.get("/api/admin/bookings", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { limit = 100, offset = 0, status } = req.query;
      const whereConditions = status ? eq8(bookings.status, status) : void 0;
      const allBookings = await db.select({
        booking: bookings,
        customer: {
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          phone: users.phone
        },
        salon: {
          id: salons.id,
          name: salons.name,
          address: salons.address,
          phone: salons.phone
        },
        service: {
          id: services.id,
          name: services.name,
          price: services.price
        },
        staff: {
          id: staff.id,
          name: staff.name
        }
      }).from(bookings).innerJoin(users, eq8(bookings.customerId, users.id)).innerJoin(salons, eq8(bookings.salonId, salons.id)).innerJoin(services, eq8(bookings.serviceId, services.id)).leftJoin(staff, eq8(bookings.staffId, staff.id)).where(whereConditions).orderBy(desc3(bookings.createdAt)).limit(parseInt(limit)).offset(parseInt(offset));
      const [countResult] = await db.select({ count: sql6`count(*)::int` }).from(bookings).where(whereConditions);
      res.json({
        bookings: allBookings,
        total: countResult.count,
        limit: parseInt(limit),
        offset: parseInt(offset)
      });
    } catch (error) {
      console.error("Error fetching admin bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });
  app2.get("/api/admin/settings", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const settings = await storage.getAdminSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching admin settings:", error);
      res.status(500).json({ error: "Failed to fetch settings" });
    }
  });
  app2.put("/api/admin/settings/:settingKey", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { settingKey } = req.params;
      const { settingValue } = req.body;
      if (!settingValue) {
        return res.status(400).json({ error: "Setting value is required" });
      }
      const updated = await storage.updateAdminSetting(settingKey, settingValue, req.user.id);
      res.json(updated);
    } catch (error) {
      console.error("Error updating admin setting:", error);
      res.status(500).json({ error: "Failed to update setting" });
    }
  });
  app2.post("/api/admin/impersonate/:userId", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { userId } = req.params;
      const adminUser = req.adminUser;
      const targetUser = await storage.getUser(userId);
      if (!targetUser) {
        return res.status(404).json({ error: "User not found" });
      }
      if (targetUser.userType === "admin") {
        return res.status(400).json({ error: "Cannot impersonate admin users" });
      }
      req.session.originalAdmin = {
        id: adminUser.id,
        email: adminUser.email,
        userType: adminUser.userType
      };
      req.session.passport = {
        user: targetUser.id
        // Passport expects just the user ID here
      };
      console.log(`[ADMIN IMPERSONATION] Admin ${adminUser.email} is now impersonating ${targetUser.email} (${targetUser.userType})`);
      res.json({
        success: true,
        message: `Now logged in as ${targetUser.firstName} ${targetUser.lastName}`,
        targetUser: {
          id: targetUser.id,
          firstName: targetUser.firstName,
          lastName: targetUser.lastName,
          email: targetUser.email,
          userType: targetUser.userType
        }
      });
    } catch (error) {
      console.error("Error during admin impersonation:", error);
      res.status(500).json({ error: "Failed to impersonate user" });
    }
  });
  app2.get("/api/auth/session-check", async (req, res) => {
    try {
      const isImpersonating = !!(req.session && req.session.originalAdmin);
      res.json({
        isImpersonating,
        originalAdmin: req.session?.originalAdmin || null
      });
    } catch (error) {
      console.error("Error checking session:", error);
      res.json({ isImpersonating: false, originalAdmin: null });
    }
  });
  app2.post("/api/admin/exit-impersonation", async (req, res) => {
    try {
      if (!req.session.originalAdmin) {
        return res.status(400).json({ error: "Not currently impersonating a user" });
      }
      const originalAdmin = req.session.originalAdmin;
      req.session.passport = {
        user: originalAdmin.id
        // Passport expects just the user ID here
      };
      delete req.session.originalAdmin;
      console.log(`[ADMIN IMPERSONATION] Restored admin session for ${originalAdmin.email}`);
      res.json({
        success: true,
        message: "Returned to admin account",
        adminUser: originalAdmin
      });
    } catch (error) {
      console.error("Error exiting impersonation:", error);
      res.status(500).json({ error: "Failed to exit impersonation" });
    }
  });
  app2.get("/api/upcoming-features", async (req, res) => {
    try {
      const videos = await db.select().from(upcomingFeatureVideos).where(eq8(upcomingFeatureVideos.isActive, true)).orderBy(asc2(upcomingFeatureVideos.order));
      res.json(videos);
    } catch (error) {
      console.error("Error fetching upcoming feature videos:", error);
      res.status(500).json({ error: "Failed to fetch videos" });
    }
  });
  app2.get("/api/admin/upcoming-features", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const videos = await db.select().from(upcomingFeatureVideos).orderBy(asc2(upcomingFeatureVideos.order));
      res.json(videos);
    } catch (error) {
      console.error("Error fetching upcoming feature videos:", error);
      res.status(500).json({ error: "Failed to fetch videos" });
    }
  });
  app2.post("/api/admin/upcoming-features", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const videoData = insertUpcomingFeatureVideoSchema.parse(req.body);
      const [video] = await db.insert(upcomingFeatureVideos).values({
        ...videoData,
        createdBy: req.user.id
      }).returning();
      res.json(video);
    } catch (error) {
      console.error("Error creating upcoming feature video:", error);
      res.status(500).json({ error: "Failed to create video" });
    }
  });
  app2.put("/api/admin/upcoming-features/:id", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const videoData = req.body;
      const [updated] = await db.update(upcomingFeatureVideos).set({
        ...videoData,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(upcomingFeatureVideos.id, id)).returning();
      if (!updated) {
        return res.status(404).json({ error: "Video not found" });
      }
      res.json(updated);
    } catch (error) {
      console.error("Error updating upcoming feature video:", error);
      res.status(500).json({ error: "Failed to update video" });
    }
  });
  app2.delete("/api/admin/upcoming-features/:id", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      await db.delete(upcomingFeatureVideos).where(eq8(upcomingFeatureVideos.id, id));
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting upcoming feature video:", error);
      res.status(500).json({ error: "Failed to delete video" });
    }
  });
  app2.get("/api/notifications/history", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const notifications = await db.select().from(notificationHistory).where(eq8(notificationHistory.userId, userId)).orderBy(desc3(notificationHistory.sentAt)).limit(50);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching notification history:", error);
      res.status(500).json({ message: "Failed to fetch notification history" });
    }
  });
  app2.get("/api/notifications/unread-count", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const result = await db.select({ count: sql6`count(*)::int` }).from(notificationHistory).where(
        and6(
          eq8(notificationHistory.userId, userId),
          eq8(notificationHistory.isRead, false)
        )
      );
      res.json({ count: result[0]?.count ?? 0 });
    } catch (error) {
      console.error("Error fetching unread count:", error);
      res.status(500).json({ count: 0 });
    }
  });
  app2.patch("/api/notifications/read-all", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      await db.update(notificationHistory).set({ isRead: true, deliveredAt: /* @__PURE__ */ new Date() }).where(
        and6(
          eq8(notificationHistory.userId, userId),
          eq8(notificationHistory.isRead, false)
        )
      );
      res.json({ message: "All notifications marked as read" });
    } catch (error) {
      console.error("Error marking notifications as read:", error);
      res.status(500).json({ message: "Failed to mark notifications as read" });
    }
  });
  app2.patch("/api/notifications/:id/read", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      await db.update(notificationHistory).set({ isRead: true, deliveredAt: /* @__PURE__ */ new Date() }).where(
        and6(
          eq8(notificationHistory.id, req.params.id),
          eq8(notificationHistory.userId, userId)
        )
      );
      res.json({ message: "Notification marked as read" });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to mark notification as read" });
    }
  });
  app2.get("/api/notifications/settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [settings] = await db.select().from(notificationSettings).where(eq8(notificationSettings.userId, userId));
      if (!settings) {
        const [defaultSettings] = await db.insert(notificationSettings).values({
          userId,
          bookingConfirmation: true,
          bookingReminder: true,
          dayBeforeReminder: true,
          hourBeforeReminder: true,
          promotionalNotifications: false,
          emailNotifications: true,
          smsNotifications: true,
          webPushNotifications: false
        }).returning();
        return res.json(defaultSettings);
      }
      res.json(settings);
    } catch (error) {
      console.error("Error fetching notification settings:", error);
      res.status(500).json({ message: "Failed to fetch notification settings" });
    }
  });
  app2.put("/api/notifications/settings", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const settingsData = req.body;
      const [updatedSettings] = await db.update(notificationSettings).set({
        ...settingsData,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(notificationSettings.userId, userId)).returning();
      if (!updatedSettings) {
        const [newSettings] = await db.insert(notificationSettings).values({
          userId,
          ...settingsData
        }).returning();
        return res.json(newSettings);
      }
      res.json(updatedSettings);
    } catch (error) {
      console.error("Error updating notification settings:", error);
      res.status(500).json({ message: "Failed to update notification settings" });
    }
  });
  app2.post("/api/test-send-email", async (req, res) => {
    try {
      const { to, subject, message, type } = req.body;
      if (!to || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields: to, subject, message" });
      }
      if (type === "welcome") {
        const success = await sendWelcomeEmail(to, "Test User", "customer");
        return res.json({ success, message: success ? "Welcome email sent" : "Welcome email failed" });
      } else if (type === "booking") {
        const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
        const success = await sendEmail2({
          to,
          subject: subject || "\u{1F389} Test Booking Confirmation",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #8B5CF6;">Test Booking Confirmation</h1>
              <p>This is a test email to verify the booking confirmation system is working.</p>
              <p><strong>Message:</strong> ${message}</p>
              <p>If you receive this email, the system is working correctly.</p>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Sent from:</strong> Sanwar booking system</p>
                <p style="margin: 5px 0 0 0;"><strong>Test time:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
              </div>
            </div>
          `
        });
        return res.json({ success, message: success ? "Booking test email sent" : "Booking test email failed" });
      } else {
        const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
        const success = await sendEmail2({
          to,
          subject,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1>Test Email</h1>
              <p>${message}</p>
              <p><em>Sent from Sanwar at ${(/* @__PURE__ */ new Date()).toLocaleString()}</em></p>
            </div>
          `
        });
        return res.json({ success, message: success ? "Test email sent" : "Test email failed" });
      }
    } catch (error) {
      console.error("Test email error:", error);
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.post("/api/test-booking-notification", async (req, res) => {
    try {
      const { bookingId } = req.body;
      if (!bookingId) {
        return res.status(400).json({ error: "Booking ID is required" });
      }
      const results = [];
      try {
        const notificationResult = await sendBookingConfirmationNotification(bookingId);
        results.push({ system: "notification", success: !!notificationResult, result: notificationResult });
      } catch (error) {
        results.push({ system: "notification", success: false, error: error instanceof Error ? error.message : "Unknown error" });
      }
      try {
        const { sendBookingNotificationEmails: sendBookingNotificationEmails2 } = await Promise.resolve().then(() => (init_booking_notifications(), booking_notifications_exports));
        const emailResult = await sendBookingNotificationEmails2(bookingId);
        results.push({ system: "direct_email", success: emailResult.customerSent || emailResult.shopkeeperSent, result: emailResult });
      } catch (error) {
        results.push({ system: "direct_email", success: false, error: error instanceof Error ? error.message : "Unknown error" });
      }
      res.json({ results });
    } catch (error) {
      console.error("Test booking notification error:", error);
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/seo", (req, res) => {
    res.redirect(301, "/");
  });
  app2.get("/seo/", (req, res) => {
    res.redirect(301, "/");
  });
  app2.get("/seo/index.html", (req, res) => {
    res.redirect(301, "/");
  });
  app2.use("/seo", express.static(path.join(__dirname, "../public/seo")));
  app2.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/seo/sitemap.xml"));
  });
  app2.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /

# Block admin, API, and internal routes
Disallow: /admin/
Disallow: /api/
Disallow: /auth
Disallow: /owner/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /.env
Disallow: /server/

# Sitemap location
Sitemap: https://sanwarhub.in/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1
`);
  });
  app2.get("/api/owner/salon/offers", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const offers = await db.select().from(salonOffers).where(eq8(salonOffers.salonId, salon.id)).orderBy(desc3(salonOffers.createdAt));
      res.json(offers);
    } catch (error) {
      console.error("Error fetching salon offers:", error);
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });
  app2.post("/api/owner/salon/offers", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const transformedData = {
        ...req.body,
        discountValue: req.body.discountValue.toString(),
        minOrderAmount: req.body.minOrderAmount ? req.body.minOrderAmount.toString() : "0",
        maxDiscountAmount: req.body.maxDiscountAmount ? req.body.maxDiscountAmount.toString() : null,
        validFrom: new Date(req.body.validFrom),
        validUntil: new Date(req.body.validUntil),
        maxUsagePerCustomer: parseInt(req.body.maxUsagePerCustomer),
        maxTotalUsage: req.body.maxTotalUsage ? parseInt(req.body.maxTotalUsage) : null,
        priority: parseInt(req.body.priority || "0"),
        applicableServices: req.body.applicableServices || [],
        isApplicableToAllServices: req.body.isApplicableToAllServices ?? true,
        serviceSpecificDiscounts: req.body.serviceSpecificDiscounts ? JSON.stringify(req.body.serviceSpecificDiscounts) : null
      };
      const offerData = insertSalonOfferSchema.parse(transformedData);
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const [newOffer] = await db.insert(salonOffers).values({
        ...offerData,
        salonId: salon.id,
        createdBy: userId,
        promoCode: offerData.promoCode || null,
        serviceSpecificDiscounts: transformedData.serviceSpecificDiscounts
      }).returning();
      if (newOffer && newOffer.isActive && newOffer.isVisible) {
        notifyFollowersNewOffer(newOffer.id, salon.id).catch(console.error);
      }
      res.json(newOffer);
    } catch (error) {
      console.error("Error creating salon offer:", error);
      res.status(500).json({ message: "Failed to create offer" });
    }
  });
  app2.put("/api/owner/salon/offers/:offerId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { offerId } = req.params;
      const transformedData = {
        ...req.body,
        discountValue: req.body.discountValue.toString(),
        minOrderAmount: req.body.minOrderAmount ? req.body.minOrderAmount.toString() : "0",
        maxDiscountAmount: req.body.maxDiscountAmount ? req.body.maxDiscountAmount.toString() : null,
        validFrom: new Date(req.body.validFrom),
        validUntil: new Date(req.body.validUntil),
        maxUsagePerCustomer: parseInt(req.body.maxUsagePerCustomer),
        maxTotalUsage: req.body.maxTotalUsage ? parseInt(req.body.maxTotalUsage) : null,
        priority: parseInt(req.body.priority || "0"),
        applicableServices: req.body.applicableServices || [],
        isApplicableToAllServices: req.body.isApplicableToAllServices ?? true
      };
      const offerData = insertSalonOfferSchema.parse(transformedData);
      const [existingOffer] = await db.select({
        offer: salonOffers,
        salon: salons
      }).from(salonOffers).innerJoin(salons, eq8(salonOffers.salonId, salons.id)).where(eq8(salonOffers.id, offerId));
      if (!existingOffer || existingOffer.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this offer" });
      }
      const [updatedOffer] = await db.update(salonOffers).set({ ...offerData, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(salonOffers.id, offerId)).returning();
      res.json(updatedOffer);
    } catch (error) {
      console.error("Error updating salon offer:", error);
      res.status(500).json({ message: "Failed to update offer" });
    }
  });
  app2.delete("/api/owner/salon/offers/:offerId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { offerId } = req.params;
      const [existingOffer] = await db.select({
        offer: salonOffers,
        salon: salons
      }).from(salonOffers).innerJoin(salons, eq8(salonOffers.salonId, salons.id)).where(eq8(salonOffers.id, offerId));
      if (!existingOffer || existingOffer.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this offer" });
      }
      await db.delete(salonOffers).where(eq8(salonOffers.id, offerId));
      res.json({ message: "Offer deleted successfully" });
    } catch (error) {
      console.error("Error deleting salon offer:", error);
      res.status(500).json({ message: "Failed to delete offer" });
    }
  });
  app2.get("/api/public/offers", async (req, res) => {
    try {
      const { salonId } = req.query;
      let whereCondition = and6(
        eq8(salonOffers.isActive, true),
        eq8(salonOffers.isVisible, true),
        gte5(salonOffers.validUntil, /* @__PURE__ */ new Date())
      );
      if (salonId) {
        whereCondition = and6(whereCondition, eq8(salonOffers.salonId, salonId));
      }
      const offers = await db.select({
        id: salonOffers.id,
        salonId: salonOffers.salonId,
        salonName: salons.name,
        title: salonOffers.title,
        description: salonOffers.description,
        discountType: salonOffers.discountType,
        discountValue: salonOffers.discountValue,
        minOrderAmount: salonOffers.minOrderAmount,
        maxDiscountAmount: salonOffers.maxDiscountAmount,
        validFrom: salonOffers.validFrom,
        validUntil: salonOffers.validUntil,
        maxUsagePerCustomer: salonOffers.maxUsagePerCustomer,
        currentUsageCount: salonOffers.currentUsageCount,
        maxTotalUsage: salonOffers.maxTotalUsage,
        promoCode: salonOffers.promoCode,
        isPromoCodeRequired: salonOffers.isPromoCodeRequired,
        priority: salonOffers.priority
      }).from(salonOffers).innerJoin(salons, eq8(salonOffers.salonId, salons.id)).where(whereCondition).orderBy(desc3(salonOffers.priority), desc3(salonOffers.createdAt));
      const offersWithDefaults = offers.map((offer) => ({
        ...offer,
        customerUsageCount: 0,
        canUse: true
      }));
      res.json(offersWithDefaults);
    } catch (error) {
      console.error("Error fetching public offers:", error);
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });
  app2.get("/api/owner/salon/faqs", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const salonFaqs = await db.select().from(faqs).where(eq8(faqs.salonId, salon.id)).orderBy(faqs.displayOrder, faqs.createdAt);
      res.json(salonFaqs);
    } catch (error) {
      console.error("Error fetching salon FAQs:", error);
      res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });
  app2.post("/api/owner/salon/faqs", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { question, answer, displayOrder } = req.body;
      if (!question?.trim() || !answer?.trim()) {
        return res.status(400).json({ message: "Question and answer are required" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const existingFaqsCount = await db.select({ count: sql6`count(*)` }).from(faqs).where(eq8(faqs.salonId, salon.id));
      if (existingFaqsCount[0].count >= 10) {
        return res.status(400).json({
          message: "Maximum 10 FAQs allowed per salon. Please delete some FAQs to add new ones."
        });
      }
      const [newFaq] = await db.insert(faqs).values({
        salonId: salon.id,
        question: question.trim(),
        answer: answer.trim(),
        displayOrder: displayOrder || 0,
        isActive: true
      }).returning();
      res.status(201).json(newFaq);
    } catch (error) {
      console.error("Error creating FAQ:", error);
      res.status(500).json({ message: "Failed to create FAQ" });
    }
  });
  app2.put("/api/owner/salon/faqs/:faqId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { faqId } = req.params;
      const { question, answer, displayOrder, isActive } = req.body;
      if (!question?.trim() || !answer?.trim()) {
        return res.status(400).json({ message: "Question and answer are required" });
      }
      const [existingFaq] = await db.select({
        faq: faqs,
        salon: salons
      }).from(faqs).innerJoin(salons, eq8(faqs.salonId, salons.id)).where(eq8(faqs.id, faqId));
      if (!existingFaq || existingFaq.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to update this FAQ" });
      }
      const [updatedFaq] = await db.update(faqs).set({
        question: question.trim(),
        answer: answer.trim(),
        displayOrder: displayOrder || 0,
        isActive: isActive ?? true,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(faqs.id, faqId)).returning();
      res.json(updatedFaq);
    } catch (error) {
      console.error("Error updating FAQ:", error);
      res.status(500).json({ message: "Failed to update FAQ" });
    }
  });
  app2.delete("/api/owner/salon/faqs/:faqId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { faqId } = req.params;
      const [existingFaq] = await db.select({
        faq: faqs,
        salon: salons
      }).from(faqs).innerJoin(salons, eq8(faqs.salonId, salons.id)).where(eq8(faqs.id, faqId));
      if (!existingFaq || existingFaq.salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized to delete this FAQ" });
      }
      await db.delete(faqs).where(eq8(faqs.id, faqId));
      res.json({ message: "FAQ deleted successfully" });
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      res.status(500).json({ message: "Failed to delete FAQ" });
    }
  });
  app2.get("/api/salons/:salonId/faqs", async (req, res) => {
    try {
      const { salonId } = req.params;
      const salonFaqs = await db.select().from(faqs).where(
        and6(
          eq8(faqs.salonId, salonId),
          eq8(faqs.isActive, true)
        )
      ).orderBy(faqs.displayOrder, faqs.createdAt);
      res.json(salonFaqs);
    } catch (error) {
      console.error("Error fetching salon FAQs:", error);
      res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });
  app2.get("/api/customer/available-offers", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.query;
      let whereCondition = and6(
        eq8(salonOffers.isActive, true),
        eq8(salonOffers.isVisible, true),
        gte5(salonOffers.validUntil, /* @__PURE__ */ new Date())
      );
      if (salonId) {
        whereCondition = and6(whereCondition, eq8(salonOffers.salonId, salonId));
      }
      const offers = await db.select({
        id: salonOffers.id,
        salonId: salonOffers.salonId,
        salonName: salons.name,
        title: salonOffers.title,
        description: salonOffers.description,
        discountType: salonOffers.discountType,
        discountValue: salonOffers.discountValue,
        minOrderAmount: salonOffers.minOrderAmount,
        maxDiscountAmount: salonOffers.maxDiscountAmount,
        validFrom: salonOffers.validFrom,
        validUntil: salonOffers.validUntil,
        maxUsagePerCustomer: salonOffers.maxUsagePerCustomer,
        currentUsageCount: salonOffers.currentUsageCount,
        maxTotalUsage: salonOffers.maxTotalUsage,
        promoCode: salonOffers.promoCode,
        isPromoCodeRequired: salonOffers.isPromoCodeRequired,
        priority: salonOffers.priority
      }).from(salonOffers).innerJoin(salons, eq8(salonOffers.salonId, salons.id)).where(whereCondition).orderBy(desc3(salonOffers.priority), desc3(salonOffers.createdAt));
      const offersWithUsage = await Promise.all(
        offers.map(async (offer) => {
          const [usage] = await db.select({ count: sql6`count(*)` }).from(salonOfferUsage).where(and6(
            eq8(salonOfferUsage.offerId, offer.id),
            eq8(salonOfferUsage.customerId, userId)
          ));
          return {
            ...offer,
            customerUsageCount: usage?.count || 0,
            canUse: (usage?.count || 0) < (offer.maxUsagePerCustomer || 1) && (!offer.maxTotalUsage || (offer.currentUsageCount ?? 0) < offer.maxTotalUsage)
          };
        })
      );
      res.json(offersWithUsage);
    } catch (error) {
      console.error("Error fetching available offers:", error);
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });
  app2.post("/api/feedback", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const feedbackData = insertFeedbackSchema.parse({
        ...req.body,
        userId,
        userType: req.user?.userType || "customer"
      });
      const [newFeedback] = await db.insert(feedback).values(feedbackData).returning();
      res.status(201).json(newFeedback);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      res.status(500).json({ message: "Failed to submit feedback" });
    }
  });
  app2.get("/api/feedback", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userFeedback = await db.select().from(feedback).where(eq8(feedback.userId, userId)).orderBy(desc3(feedback.createdAt));
      res.json(userFeedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      res.status(500).json({ message: "Failed to fetch feedback" });
    }
  });
  app2.post("/api/help-tickets", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userType = req.user?.userType || "customer";
      const ticketNumber = `HELP-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      const ticketData = {
        ...insertHelpTicketSchema.parse({
          ...req.body,
          userId,
          userType
        }),
        ticketNumber
      };
      const [newTicket] = await db.insert(helpTickets).values(ticketData).returning();
      if (req.body.description) {
        await db.insert(helpTicketMessages).values({
          ticketId: newTicket.id,
          senderId: userId,
          senderType: userType,
          message: req.body.description
        });
      }
      res.status(201).json(newTicket);
    } catch (error) {
      console.error("Error creating help ticket:", error);
      res.status(500).json({ message: "Failed to create help ticket" });
    }
  });
  app2.get("/api/help-tickets", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const tickets = await db.select().from(helpTickets).where(eq8(helpTickets.userId, userId)).orderBy(desc3(helpTickets.createdAt));
      res.json(tickets);
    } catch (error) {
      console.error("Error fetching help tickets:", error);
      res.status(500).json({ message: "Failed to fetch help tickets" });
    }
  });
  app2.get("/api/admin/feedback", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const allFeedback = await db.select({
        id: feedback.id,
        userId: feedback.userId,
        userType: feedback.userType,
        rating: feedback.rating,
        moodRating: feedback.moodRating,
        category: feedback.category,
        subject: feedback.subject,
        message: feedback.message,
        status: feedback.status,
        respondedBy: feedback.respondedBy,
        respondedAt: feedback.respondedAt,
        createdAt: feedback.createdAt,
        userName: users.firstName,
        userLastName: users.lastName,
        userEmail: users.email
      }).from(feedback).leftJoin(users, eq8(feedback.userId, users.id)).orderBy(desc3(feedback.createdAt));
      const transformedFeedback = allFeedback.map((item) => ({
        ...item,
        user: item.userName ? {
          name: `${item.userName} ${item.userLastName || ""}`.trim(),
          email: item.userEmail
        } : void 0
      }));
      res.json(transformedFeedback);
    } catch (error) {
      console.error("Error fetching admin feedback:", error);
      res.status(500).json({ message: "Failed to fetch feedback" });
    }
  });
  app2.get("/api/admin/help-tickets", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const allTickets = await db.select({
        id: helpTickets.id,
        userId: helpTickets.userId,
        userType: helpTickets.userType,
        ticketNumber: helpTickets.ticketNumber,
        category: helpTickets.category,
        subject: helpTickets.subject,
        description: helpTickets.description,
        priority: helpTickets.priority,
        status: helpTickets.status,
        assignedTo: helpTickets.assignedTo,
        adminNotes: helpTickets.adminNotes,
        resolvedAt: helpTickets.resolvedAt,
        createdAt: helpTickets.createdAt,
        userName: users.firstName,
        userLastName: users.lastName,
        userEmail: users.email
      }).from(helpTickets).leftJoin(users, eq8(helpTickets.userId, users.id)).orderBy(desc3(helpTickets.createdAt));
      const transformedTickets = allTickets.map((item) => ({
        ...item,
        user: item.userName ? {
          name: `${item.userName} ${item.userLastName || ""}`.trim(),
          email: item.userEmail
        } : void 0
      }));
      res.json(transformedTickets);
    } catch (error) {
      console.error("Error fetching admin help tickets:", error);
      res.status(500).json({ message: "Failed to fetch help tickets" });
    }
  });
  app2.put("/api/admin/feedback/:id", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const { id } = req.params;
      const { status, response } = req.body;
      const adminId = req.user.id;
      const updateData = {
        status,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (response) {
        updateData.adminResponse = response;
        updateData.respondedBy = adminId;
        updateData.respondedAt = /* @__PURE__ */ new Date();
      }
      const [updatedFeedback] = await db.update(feedback).set(updateData).where(eq8(feedback.id, id)).returning();
      res.json(updatedFeedback);
    } catch (error) {
      console.error("Error updating feedback:", error);
      res.status(500).json({ message: "Failed to update feedback" });
    }
  });
  app2.put("/api/admin/help-tickets/:id", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const { id } = req.params;
      const { status, adminNotes } = req.body;
      const adminId = req.user.id;
      const updateData = {
        status,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (status === "in_progress") {
        updateData.assignedTo = adminId;
      }
      if (status === "resolved") {
        updateData.resolvedAt = /* @__PURE__ */ new Date();
      }
      if (adminNotes) {
        updateData.adminNotes = adminNotes;
      }
      const [updatedTicket] = await db.update(helpTickets).set(updateData).where(eq8(helpTickets.id, id)).returning();
      res.json(updatedTicket);
    } catch (error) {
      console.error("Error updating help ticket:", error);
      res.status(500).json({ message: "Failed to update help ticket" });
    }
  });
  app2.get("/api/admin/help-tickets/:id/messages", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const { id } = req.params;
      const messages = await db.select({
        id: helpTicketMessages.id,
        ticketId: helpTicketMessages.ticketId,
        senderId: helpTicketMessages.senderId,
        senderType: helpTicketMessages.senderType,
        message: helpTicketMessages.message,
        createdAt: helpTicketMessages.createdAt,
        senderName: users.firstName,
        senderLastName: users.lastName,
        senderEmail: users.email
      }).from(helpTicketMessages).leftJoin(users, eq8(helpTicketMessages.senderId, users.id)).where(eq8(helpTicketMessages.ticketId, id)).orderBy(helpTicketMessages.createdAt);
      const transformedMessages = messages.map((item) => ({
        ...item,
        sender: item.senderName ? {
          name: `${item.senderName} ${item.senderLastName || ""}`.trim(),
          email: item.senderEmail
        } : void 0
      }));
      res.json(transformedMessages);
    } catch (error) {
      console.error("Error fetching ticket messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });
  app2.post("/api/admin/help-tickets/:id/messages", isAuthenticated, async (req, res) => {
    try {
      if (req.user?.userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const { id } = req.params;
      const { message } = req.body;
      const adminId = req.user.id;
      const [newMessage] = await db.insert(helpTicketMessages).values({
        ticketId: id,
        senderId: adminId,
        senderType: "admin",
        message: message.trim(),
        isInternal: false
        // Admin responses should be visible to customers
      }).returning();
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error sending ticket message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/help-tickets/:ticketId/messages", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { ticketId } = req.params;
      const [ticket] = await db.select().from(helpTickets).where(and6(
        eq8(helpTickets.id, ticketId),
        eq8(helpTickets.userId, userId)
      ));
      if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
      }
      const messages = await db.select({
        id: helpTicketMessages.id,
        ticketId: helpTicketMessages.ticketId,
        senderId: helpTicketMessages.senderId,
        senderType: helpTicketMessages.senderType,
        message: helpTicketMessages.message,
        createdAt: helpTicketMessages.createdAt,
        senderName: users.firstName,
        senderLastName: users.lastName,
        senderEmail: users.email
      }).from(helpTicketMessages).leftJoin(users, eq8(helpTicketMessages.senderId, users.id)).where(and6(
        eq8(helpTicketMessages.ticketId, ticketId),
        or3(
          eq8(helpTicketMessages.isInternal, false),
          isNull3(helpTicketMessages.isInternal)
        )
      )).orderBy(helpTicketMessages.createdAt);
      const transformedMessages = messages.map((item) => ({
        ...item,
        sender: item.senderName || item.senderType === "admin" ? {
          name: item.senderType === "admin" ? "Admin Support" : `${item.senderName} ${item.senderLastName || ""}`.trim(),
          email: item.senderEmail
        } : {
          name: "System",
          email: null
        }
      }));
      res.json(transformedMessages);
    } catch (error) {
      console.error("Error fetching ticket messages:", error);
      res.status(500).json({ message: "Failed to fetch ticket messages" });
    }
  });
  app2.post("/api/help-tickets/:ticketId/messages", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userType = req.user?.userType || "customer";
      const { ticketId } = req.params;
      const { message, attachmentUrl } = req.body;
      const [ticket] = await db.select().from(helpTickets).where(and6(
        eq8(helpTickets.id, ticketId),
        eq8(helpTickets.userId, userId)
      ));
      if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
      }
      const messageData = {
        ticketId,
        senderId: userId,
        senderType: userType,
        message,
        attachmentUrl: attachmentUrl || null,
        isInternal: false
      };
      const [newMessage] = await db.insert(helpTicketMessages).values(messageData).returning();
      await db.update(helpTickets).set({
        status: ticket.status === "waiting_customer" ? "in_progress" : ticket.status,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(helpTickets.id, ticketId));
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error adding ticket message:", error);
      res.status(500).json({ message: "Failed to add message" });
    }
  });
  app2.get("/api/admin/feedback", isAuthenticated, async (req, res) => {
    try {
      const userType = req.user?.userType;
      if (userType !== "admin" && userType !== "super_admin") {
        return res.status(403).json({ message: "Admin access required" });
      }
      const status = req.query.status;
      const category = req.query.category;
      const limit = parseInt(req.query.limit) || 50;
      let query = db.select({
        id: feedback.id,
        userId: feedback.userId,
        userType: feedback.userType,
        category: feedback.category,
        subject: feedback.subject,
        message: feedback.message,
        rating: feedback.rating,
        moodRating: feedback.moodRating,
        priority: feedback.priority,
        status: feedback.status,
        adminResponse: feedback.adminResponse,
        createdAt: feedback.createdAt,
        userName: users.firstName,
        userEmail: users.email
      }).from(feedback).leftJoin(users, eq8(feedback.userId, users.id));
      let conditions = [];
      if (status) {
        conditions.push(eq8(feedback.status, status));
      }
      if (category) {
        conditions.push(eq8(feedback.category, category));
      }
      if (conditions.length > 0) {
        query = query.where(and6(...conditions));
      }
      const adminFeedback = await query.orderBy(desc3(feedback.createdAt)).limit(limit);
      res.json(adminFeedback);
    } catch (error) {
      console.error("Error fetching admin feedback:", error);
      res.status(500).json({ message: "Failed to fetch feedback" });
    }
  });
  app2.get("/api/salons/:salonId/facilities", async (req, res) => {
    try {
      const { salonId } = req.params;
      const facilities = await db.select().from(salonFacilities).where(eq8(salonFacilities.salonId, salonId)).orderBy(salonFacilities.name);
      res.json(facilities);
    } catch (error) {
      console.error("Error fetching salon facilities:", error);
      res.status(500).json({ message: "Failed to fetch facilities" });
    }
  });
  app2.post("/api/salons/:salonId/facilities", isAuthenticated, async (req, res) => {
    try {
      const { salonId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const facilityData = insertSalonFacilitySchema.parse({
        ...req.body,
        salonId
      });
      const [facility] = await db.insert(salonFacilities).values(facilityData).returning();
      res.status(201).json(facility);
    } catch (error) {
      console.error("Error adding salon facility:", error);
      res.status(500).json({ message: "Failed to add facility" });
    }
  });
  app2.put("/api/salons/:salonId/facilities/:facilityId", isAuthenticated, async (req, res) => {
    try {
      const { salonId, facilityId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const updateData = insertSalonFacilitySchema.partial().parse(req.body);
      const [facility] = await db.update(salonFacilities).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(and6(
        eq8(salonFacilities.id, facilityId),
        eq8(salonFacilities.salonId, salonId)
      )).returning();
      if (!facility) {
        return res.status(404).json({ message: "Facility not found" });
      }
      res.json(facility);
    } catch (error) {
      console.error("Error updating salon facility:", error);
      res.status(500).json({ message: "Failed to update facility" });
    }
  });
  app2.delete("/api/salons/:salonId/facilities/:facilityId", isAuthenticated, async (req, res) => {
    try {
      const { salonId, facilityId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const [deleted] = await db.delete(salonFacilities).where(and6(
        eq8(salonFacilities.id, facilityId),
        eq8(salonFacilities.salonId, salonId)
      )).returning();
      if (!deleted) {
        return res.status(404).json({ message: "Facility not found" });
      }
      res.json({ message: "Facility deleted successfully" });
    } catch (error) {
      console.error("Error deleting salon facility:", error);
      res.status(500).json({ message: "Failed to delete facility" });
    }
  });
  app2.get("/api/salons/:salonId/products", async (req, res) => {
    try {
      const { salonId } = req.params;
      const products = await db.select().from(salonProducts).where(eq8(salonProducts.salonId, salonId)).orderBy(salonProducts.name);
      res.json(products);
    } catch (error) {
      console.error("Error fetching salon products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.post("/api/salons/:salonId/products", isAuthenticated, async (req, res) => {
    try {
      const { salonId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const productData = insertSalonProductSchema.parse({
        ...req.body,
        salonId
      });
      const [product] = await db.insert(salonProducts).values(productData).returning();
      res.status(201).json(product);
    } catch (error) {
      console.error("Error adding salon product:", error);
      res.status(500).json({ message: "Failed to add product" });
    }
  });
  app2.put("/api/salons/:salonId/products/:productId", isAuthenticated, async (req, res) => {
    try {
      const { salonId, productId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const updateData = insertSalonProductSchema.partial().parse(req.body);
      const [product] = await db.update(salonProducts).set({ ...updateData, updatedAt: /* @__PURE__ */ new Date() }).where(and6(
        eq8(salonProducts.id, productId),
        eq8(salonProducts.salonId, salonId)
      )).returning();
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error updating salon product:", error);
      res.status(500).json({ message: "Failed to update product" });
    }
  });
  app2.delete("/api/salons/:salonId/products/:productId", isAuthenticated, async (req, res) => {
    try {
      const { salonId, productId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner" && userType !== "admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      if (userType === "salon_owner") {
        const [salon] = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.ownerId, userId)));
        if (!salon) {
          return res.status(404).json({ message: "Salon not found" });
        }
      }
      const [deleted] = await db.delete(salonProducts).where(and6(
        eq8(salonProducts.id, productId),
        eq8(salonProducts.salonId, salonId)
      )).returning();
      if (!deleted) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting salon product:", error);
      res.status(500).json({ message: "Failed to delete product" });
    }
  });
  const httpServer = createServer(app2);
  app2.get("/api/brand/salons/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const { brandOwnerId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userId !== brandOwnerId && userType !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const brandSalons = await db.select({
        id: salons.id,
        name: salons.name,
        address: salons.address,
        averageRating: salons.averageRating,
        totalReviews: salons.totalReviews,
        isActive: salons.isActive,
        isPremium: salons.isPremium,
        ownerId: salons.ownerId,
        owner: {
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email
        }
      }).from(salons).leftJoin(users, eq8(salons.ownerId, users.id)).where(eq8(salons.brandOwnerId, brandOwnerId));
      const salonsWithCounts = await Promise.all(
        brandSalons.map(async (salon) => {
          const [bookingsCount, servicesCount, staffCount] = await Promise.all([
            db.select({ count: count() }).from(bookings).where(eq8(bookings.salonId, salon.id)),
            db.select({ count: count() }).from(services).where(eq8(services.salonId, salon.id)),
            db.select({ count: count() }).from(staff).where(eq8(staff.salonId, salon.id))
          ]);
          const totalEarnings = await db.select({
            total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
          }).from(bookings).where(and6(eq8(bookings.salonId, salon.id), eq8(bookings.status, "completed")));
          const monthlyEarnings = await db.select({
            total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
          }).from(bookings).where(and6(
            eq8(bookings.salonId, salon.id),
            eq8(bookings.status, "completed"),
            sql6`${bookings.createdAt} >= NOW() - INTERVAL '30 days'`
          ));
          return {
            ...salon,
            _count: {
              bookings: Number(bookingsCount[0]?.count) || 0,
              services: Number(servicesCount[0]?.count) || 0,
              staff: Number(staffCount[0]?.count) || 0
            },
            totalEarnings: Number(totalEarnings[0]?.total) || 0,
            monthlyEarnings: Number(monthlyEarnings[0]?.total) || 0
          };
        })
      );
      res.json(salonsWithCounts);
    } catch (error) {
      console.error("Error fetching brand salons:", error);
      res.status(500).json({ message: "Failed to fetch brand salons" });
    }
  });
  app2.get("/api/brand/stats/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const { brandOwnerId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userId !== brandOwnerId && userType !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const brandSalons = await db.select({ id: salons.id }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId));
      const salonIds = brandSalons.map((s) => s.id);
      if (salonIds.length === 0) {
        return res.json({
          totalSalons: 0,
          activeSalons: 0,
          totalBookings: 0,
          totalEarnings: 0,
          monthlyEarnings: 0,
          totalCustomers: 0,
          averageRating: 0,
          totalReviews: 0
        });
      }
      const [
        totalSalonsResult,
        activeSalonsResult,
        totalBookingsResult,
        totalEarningsResult,
        monthlyEarningsResult,
        uniqueCustomersResult,
        ratingsResult
      ] = await Promise.all([
        db.select({ count: count() }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId)),
        db.select({ count: count() }).from(salons).where(and6(eq8(salons.brandOwnerId, brandOwnerId), eq8(salons.isActive, true))),
        db.select({ count: count() }).from(bookings).where(inArray3(bookings.salonId, salonIds)),
        db.select({
          total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
        }).from(bookings).where(and6(inArray3(bookings.salonId, salonIds), eq8(bookings.status, "completed"))),
        db.select({
          total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
        }).from(bookings).where(and6(
          inArray3(bookings.salonId, salonIds),
          eq8(bookings.status, "completed"),
          sql6`${bookings.createdAt} >= NOW() - INTERVAL '30 days'`
        )),
        db.selectDistinct({ customerId: bookings.customerId }).from(bookings).where(inArray3(bookings.salonId, salonIds)),
        db.select({
          avgRating: sql6`COALESCE(AVG(CAST(${salons.averageRating} AS DECIMAL)), 0)`,
          totalReviews: sql6`COALESCE(SUM(${salons.totalReviews}), 0)`
        }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId))
      ]);
      const stats = {
        totalSalons: Number(totalSalonsResult[0]?.count) || 0,
        activeSalons: Number(activeSalonsResult[0]?.count) || 0,
        totalBookings: Number(totalBookingsResult[0]?.count) || 0,
        totalEarnings: Number(totalEarningsResult[0]?.total) || 0,
        monthlyEarnings: Number(monthlyEarningsResult[0]?.total) || 0,
        totalCustomers: uniqueCustomersResult.length || 0,
        averageRating: Number(ratingsResult[0]?.avgRating) || 0,
        totalReviews: Number(ratingsResult[0]?.totalReviews) || 0
      };
      res.json(stats);
    } catch (error) {
      console.error("Error fetching brand stats:", error);
      res.status(500).json({ message: "Failed to fetch brand statistics" });
    }
  });
  app2.get("/api/brand/services/popular/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const { brandOwnerId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userId !== brandOwnerId && userType !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const brandSalons = await db.select({ id: salons.id }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId));
      const salonIds = brandSalons.map((s) => s.id);
      if (salonIds.length === 0) {
        return res.json([]);
      }
      const popularServices = await db.select({
        serviceName: services.name,
        salonName: salons.name,
        bookingCount: sql6`COUNT(${bookings.id})`,
        revenue: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
      }).from(bookings).innerJoin(services, eq8(bookings.serviceId, services.id)).innerJoin(salons, eq8(bookings.salonId, salons.id)).where(inArray3(bookings.salonId, salonIds)).groupBy(services.name, salons.name).orderBy(sql6`COUNT(${bookings.id}) DESC`).limit(10);
      res.json(popularServices);
    } catch (error) {
      console.error("Error fetching popular services:", error);
      res.status(500).json({ message: "Failed to fetch popular services" });
    }
  });
  app2.get("/api/brand/reviews/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const { brandOwnerId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userId !== brandOwnerId && userType !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const brandSalons = await db.select({ id: salons.id }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId));
      const salonIds = brandSalons.map((s) => s.id);
      if (salonIds.length === 0) {
        return res.json({ recent: [], themes: [] });
      }
      const recentReviews = await db.select({
        id: reviews.id,
        rating: reviews.rating,
        comment: reviews.comment,
        createdAt: reviews.createdAt,
        salonName: salons.name
      }).from(reviews).innerJoin(salons, eq8(reviews.salonId, salons.id)).where(inArray3(reviews.salonId, salonIds)).orderBy(desc3(reviews.createdAt)).limit(10);
      const positiveKeywords = ["excellent", "great", "amazing", "wonderful", "perfect", "love", "best"];
      const negativeKeywords = ["bad", "terrible", "awful", "worst", "hate", "poor", "disappointing"];
      const themes = [
        { keyword: "Service Quality", sentiment: "positive", count: Math.floor(Math.random() * 20) + 10 },
        { keyword: "Staff Behavior", sentiment: "positive", count: Math.floor(Math.random() * 15) + 8 },
        { keyword: "Cleanliness", sentiment: "positive", count: Math.floor(Math.random() * 10) + 5 },
        { keyword: "Wait Time", sentiment: "negative", count: Math.floor(Math.random() * 8) + 3 }
      ];
      res.json({ recent: recentReviews, themes });
    } catch (error) {
      console.error("Error fetching brand reviews:", error);
      res.status(500).json({ message: "Failed to fetch brand reviews" });
    }
  });
  app2.get("/api/brand-invitations/:userId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.params.userId;
      const currentUserId = req.user?.id;
      if (userId !== currentUserId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const { brandInvitations: brandInvitations2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const sentInvitations = await db.select({
        id: brandInvitations2.id,
        salonOwnerId: brandInvitations2.salonOwnerId,
        salonId: brandInvitations2.salonId,
        salonName: brandInvitations2.salonName,
        status: brandInvitations2.status,
        message: brandInvitations2.message,
        invitationType: brandInvitations2.invitationType,
        createdAt: brandInvitations2.createdAt,
        ownerName: users.firstName,
        ownerEmail: users.email
      }).from(brandInvitations2).leftJoin(users, eq8(brandInvitations2.salonOwnerId, users.id)).where(eq8(brandInvitations2.brandOwnerId, userId));
      const receivedInvitations = await db.select({
        id: brandInvitations2.id,
        brandOwnerId: brandInvitations2.brandOwnerId,
        brandName: brandInvitations2.brandName,
        status: brandInvitations2.status,
        message: brandInvitations2.message,
        invitationType: brandInvitations2.invitationType,
        createdAt: brandInvitations2.createdAt,
        brandOwnerName: users.firstName,
        brandOwnerEmail: users.email
      }).from(brandInvitations2).leftJoin(users, eq8(brandInvitations2.brandOwnerId, users.id)).where(eq8(brandInvitations2.salonOwnerId, userId));
      res.json({
        sent: sentInvitations,
        received: receivedInvitations
      });
    } catch (error) {
      console.error("Error fetching brand invitations:", error);
      res.status(500).json({ message: "Failed to fetch brand invitations" });
    }
  });
  app2.post("/api/brand-invitations/send", isAuthenticated, async (req, res) => {
    try {
      const brandOwnerId = req.user?.id;
      const { salonId, message } = req.body;
      const { brandInvitations: brandInvitations2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const brandOwner = await db.select().from(users).where(and6(eq8(users.id, brandOwnerId), eq8(users.userType, "brand_owner"))).limit(1);
      if (!brandOwner.length) {
        return res.status(403).json({ message: "Only brand owners can send invitations" });
      }
      const salon = await db.select({
        id: salons.id,
        name: salons.name,
        ownerId: salons.ownerId
      }).from(salons).where(eq8(salons.id, salonId)).limit(1);
      if (!salon.length) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const existingInvitation = await db.select().from(brandInvitations2).where(and6(
        eq8(brandInvitations2.brandOwnerId, brandOwnerId),
        eq8(brandInvitations2.salonId, salonId),
        eq8(brandInvitations2.status, "pending")
      )).limit(1);
      if (existingInvitation.length > 0) {
        return res.status(400).json({ message: "Invitation already sent to this salon" });
      }
      const invitation = await db.insert(brandInvitations2).values({
        brandOwnerId,
        salonOwnerId: salon[0].ownerId,
        salonId,
        invitationType: "brand_to_salon",
        brandName: brandOwner[0].brandName,
        salonName: salon[0].name,
        message: message || `${brandOwner[0].brandName} wants to add your salon to their brand network`,
        status: "pending"
      }).returning();
      res.json({
        message: "Brand invitation sent successfully",
        invitation: invitation[0]
      });
    } catch (error) {
      console.error("Error sending brand invitation:", error);
      res.status(500).json({ message: "Failed to send brand invitation" });
    }
  });
  app2.put("/api/brand-invitations/:invitationId", isAuthenticated, async (req, res) => {
    try {
      const invitationId = req.params.invitationId;
      const userId = req.user?.id;
      const { status } = req.body;
      const { brandInvitations: brandInvitations2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      if (!["accepted", "rejected"].includes(status)) {
        return res.status(400).json({ message: "Status must be 'accepted' or 'rejected'" });
      }
      const invitation = await db.select().from(brandInvitations2).where(eq8(brandInvitations2.id, invitationId)).limit(1);
      if (!invitation.length) {
        return res.status(404).json({ message: "Invitation not found" });
      }
      const inv = invitation[0];
      const canRespond = inv.invitationType === "brand_to_salon" && inv.salonOwnerId === userId || inv.invitationType === "salon_to_brand" && inv.brandOwnerId === userId;
      if (!canRespond) {
        return res.status(403).json({ message: "Not authorized to respond to this invitation" });
      }
      if (inv.status !== "pending") {
        return res.status(400).json({ message: "Invitation has already been responded to" });
      }
      await db.update(brandInvitations2).set({
        status,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(brandInvitations2.id, invitationId));
      if (status === "accepted") {
        await db.update(salons).set({ brandOwnerId: inv.brandOwnerId }).where(eq8(salons.id, inv.salonId));
      }
      res.json({
        message: `Invitation ${status} successfully`,
        status
      });
    } catch (error) {
      console.error("Error responding to brand invitation:", error);
      res.status(500).json({ message: "Failed to respond to invitation" });
    }
  });
  app2.get("/api/admin/brand-owners", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const adminUser = await db.select().from(users).where(and6(eq8(users.id, userId), inArray3(users.userType, ["admin", "super_admin"]))).limit(1);
      if (!adminUser.length) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const brandOwners = await db.select({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        phone: users.phone,
        brandName: users.brandName,
        brandDescription: users.brandDescription,
        isActive: users.isActive,
        isVerified: users.isVerified,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
        userType: users.userType
      }).from(users).where(eq8(users.userType, "brand_owner"));
      const brandOwnersWithStats = await Promise.all(
        brandOwners.map(async (brandOwner) => {
          const [salonCount, totalBookings, totalEarnings] = await Promise.all([
            db.select({ count: count() }).from(salons).where(eq8(salons.brandOwnerId, brandOwner.id)),
            db.select({ count: count() }).from(bookings).where(
              inArray3(
                bookings.salonId,
                db.select({ id: salons.id }).from(salons).where(eq8(salons.brandOwnerId, brandOwner.id))
              )
            ),
            db.select({
              total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
            }).from(bookings).where(
              and6(
                inArray3(
                  bookings.salonId,
                  db.select({ id: salons.id }).from(salons).where(eq8(salons.brandOwnerId, brandOwner.id))
                ),
                eq8(bookings.status, "completed")
              )
            )
          ]);
          return {
            ...brandOwner,
            _count: {
              salons: Number(salonCount[0]?.count) || 0,
              totalBookings: Number(totalBookings[0]?.count) || 0,
              totalEarnings: Number(totalEarnings[0]?.total) || 0
            }
          };
        })
      );
      res.json(brandOwnersWithStats);
    } catch (error) {
      console.error("Error fetching brand owners:", error);
      res.status(500).json({ message: "Failed to fetch brand owners" });
    }
  });
  app2.get("/api/admin/brand-owners/:brandOwnerId/details", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { brandOwnerId } = req.params;
      const adminUser = await db.select().from(users).where(and6(eq8(users.id, userId), inArray3(users.userType, ["admin", "super_admin"]))).limit(1);
      if (!adminUser.length) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const brandOwner = await db.select().from(users).where(and6(eq8(users.id, brandOwnerId), eq8(users.userType, "brand_owner"))).limit(1);
      if (!brandOwner.length) {
        return res.status(404).json({ message: "Brand owner not found" });
      }
      const brandSalons = await db.select({
        id: salons.id,
        name: salons.name,
        address: salons.address,
        isActive: salons.isActive,
        averageRating: salons.averageRating,
        totalReviews: salons.totalReviews
      }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId));
      const [totalBookings, totalEarnings] = await Promise.all([
        db.select({ count: count() }).from(bookings).where(
          inArray3(bookings.salonId, brandSalons.map((s) => s.id))
        ),
        db.select({
          total: sql6`COALESCE(SUM(CAST(${bookings.totalAmount} AS DECIMAL)), 0)`
        }).from(bookings).where(
          and6(
            inArray3(bookings.salonId, brandSalons.map((s) => s.id)),
            eq8(bookings.status, "completed")
          )
        )
      ]);
      const result = {
        ...brandOwner[0],
        salons: brandSalons,
        _count: {
          salons: brandSalons.length,
          totalBookings: Number(totalBookings[0]?.count) || 0,
          totalEarnings: Number(totalEarnings[0]?.total) || 0
        }
      };
      res.json(result);
    } catch (error) {
      console.error("Error fetching brand owner details:", error);
      res.status(500).json({ message: "Failed to fetch brand owner details" });
    }
  });
  app2.put("/api/admin/brand-owners/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { brandOwnerId } = req.params;
      const updates = req.body;
      const adminUser = await db.select().from(users).where(and6(eq8(users.id, userId), inArray3(users.userType, ["admin", "super_admin"]))).limit(1);
      if (!adminUser.length) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const updatedBrandOwner = await db.update(users).set({
        ...updates,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(and6(eq8(users.id, brandOwnerId), eq8(users.userType, "brand_owner"))).returning();
      if (!updatedBrandOwner.length) {
        return res.status(404).json({ message: "Brand owner not found" });
      }
      res.json({
        message: "Brand owner updated successfully",
        brandOwner: updatedBrandOwner[0]
      });
    } catch (error) {
      console.error("Error updating brand owner:", error);
      res.status(500).json({ message: "Failed to update brand owner" });
    }
  });
  app2.delete("/api/admin/brand-owners/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { brandOwnerId } = req.params;
      const adminUser = await db.select().from(users).where(and6(eq8(users.id, userId), inArray3(users.userType, ["admin", "super_admin"]))).limit(1);
      if (!adminUser.length) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const brandSalons = await db.select({ count: count() }).from(salons).where(eq8(salons.brandOwnerId, brandOwnerId));
      if (Number(brandSalons[0]?.count) > 0) {
        return res.status(400).json({
          message: "Cannot delete brand owner with active salons. Please transfer or remove salons first."
        });
      }
      const deletedBrandOwner = await db.delete(users).where(and6(eq8(users.id, brandOwnerId), eq8(users.userType, "brand_owner"))).returning();
      if (!deletedBrandOwner.length) {
        return res.status(404).json({ message: "Brand owner not found" });
      }
      res.json({
        message: "Brand owner deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting brand owner:", error);
      res.status(500).json({ message: "Failed to delete brand owner" });
    }
  });
  app2.post("/api/brand/messages/send", isAuthenticated, async (req, res) => {
    try {
      const brandOwnerId = req.user?.id;
      const { salonId, message } = req.body;
      const brandOwner = await db.select().from(users).where(and6(eq8(users.id, brandOwnerId), eq8(users.userType, "brand_owner"))).limit(1);
      if (!brandOwner.length) {
        return res.status(403).json({ message: "Only brand owners can send messages" });
      }
      const salon = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.brandOwnerId, brandOwnerId))).limit(1);
      if (!salon.length) {
        return res.status(404).json({ message: "Salon not found or not connected to your brand" });
      }
      const [newMessage] = await db.insert(brandMessages).values({
        brandOwnerId,
        salonId,
        salonOwnerId: salon[0].ownerId,
        message,
        priority: "medium"
      }).returning();
      res.json({
        message: "Message sent successfully",
        messageId: newMessage.id,
        timestamp: newMessage.createdAt
      });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/owner/messages", isAuthenticated, async (req, res) => {
    try {
      const salonOwnerId = req.user?.id;
      const user = await db.select().from(users).where(and6(eq8(users.id, salonOwnerId), eq8(users.userType, "salon_owner"))).limit(1);
      if (!user.length) {
        return res.status(403).json({ message: "Access denied. Only salon owners can view messages." });
      }
      const salon = await db.select().from(salons).where(eq8(salons.ownerId, salonOwnerId)).limit(1);
      if (!salon.length) {
        return res.json([]);
      }
      const messages = await db.select({
        id: brandMessages.id,
        message: brandMessages.message,
        isRead: brandMessages.isRead,
        priority: brandMessages.priority,
        createdAt: brandMessages.createdAt,
        brandOwnerName: sql6`${users.firstName} || ' ' || ${users.lastName}`.as("brandOwnerName"),
        brandOwnerEmail: users.email,
        salonName: salons.name
      }).from(brandMessages).innerJoin(users, eq8(brandMessages.brandOwnerId, users.id)).innerJoin(salons, eq8(brandMessages.salonId, salons.id)).where(eq8(brandMessages.salonOwnerId, salonOwnerId)).orderBy(desc3(brandMessages.createdAt));
      res.json(messages);
    } catch (error) {
      console.error("Error fetching salon owner messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });
  app2.put("/api/owner/messages/:messageId/read", isAuthenticated, async (req, res) => {
    try {
      const salonOwnerId = req.user?.id;
      const messageId = req.params.messageId;
      const [updatedMessage] = await db.update(brandMessages).set({ isRead: true, updatedAt: /* @__PURE__ */ new Date() }).where(and6(
        eq8(brandMessages.id, messageId),
        eq8(brandMessages.salonOwnerId, salonOwnerId)
      )).returning();
      if (!updatedMessage) {
        return res.status(404).json({ message: "Message not found" });
      }
      res.json({ message: "Message marked as read", messageId: updatedMessage.id });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ message: "Failed to mark message as read" });
    }
  });
  app2.get("/api/brand/salon-analytics/:salonId", isAuthenticated, async (req, res) => {
    try {
      const brandOwnerId = req.user?.id;
      const salonId = req.params.salonId;
      const salon = await db.select().from(salons).where(and6(eq8(salons.id, salonId), eq8(salons.brandOwnerId, brandOwnerId))).limit(1);
      if (!salon.length) {
        return res.status(404).json({ message: "Salon not found or access denied" });
      }
      const analytics = await db.select({
        totalBookings: sql6`count(${bookings.id})`,
        totalRevenue: sql6`coalesce(sum(${bookings.totalAmount}), 0)`,
        monthlyRevenue: sql6`coalesce(sum(case when ${bookings.createdAt} >= date_trunc('month', current_date) then ${bookings.totalAmount} else 0 end), 0)`,
        averageBookingValue: sql6`coalesce(avg(${bookings.totalAmount}), 0)`,
        completedBookings: sql6`count(case when ${bookings.status} = 'completed' then 1 end)`,
        cancelledBookings: sql6`count(case when ${bookings.status} = 'cancelled' then 1 end)`
      }).from(bookings).where(eq8(bookings.salonId, salonId));
      const recentBookings = await db.select({
        date: sql6`date(${bookings.createdAt})`,
        count: sql6`count(*)`,
        revenue: sql6`sum(${bookings.totalAmount})`
      }).from(bookings).where(and6(
        eq8(bookings.salonId, salonId),
        sql6`${bookings.createdAt} >= current_date - interval '30 days'`
      )).groupBy(sql6`date(${bookings.createdAt})`).orderBy(sql6`date(${bookings.createdAt})`);
      const topServices = await db.select({
        serviceName: services.name,
        bookingCount: sql6`count(${bookings.id})`,
        revenue: sql6`sum(${bookings.totalAmount})`
      }).from(bookings).innerJoin(services, eq8(bookings.serviceId, services.id)).where(eq8(bookings.salonId, salonId)).groupBy(services.name).orderBy(sql6`count(${bookings.id}) desc`).limit(10);
      res.json({
        salonId,
        analytics: analytics[0],
        recentBookings,
        topServices,
        brandRevenuePart: analytics[0].monthlyRevenue * 0.45,
        salonRevenuePart: analytics[0].monthlyRevenue * 0.55
      });
    } catch (error) {
      console.error("Error fetching salon analytics:", error);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });
  app2.get("/api/brand/offers/:brandOwnerId", isAuthenticated, async (req, res) => {
    try {
      const { brandOwnerId } = req.params;
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userId !== brandOwnerId && userType !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const offers = await db.select().from(brandOffers).where(eq8(brandOffers.brandOwnerId, brandOwnerId)).orderBy(desc3(brandOffers.createdAt));
      res.json(offers);
    } catch (error) {
      console.error("Error fetching brand offers:", error);
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });
  app2.post("/api/brand/offers", isAuthenticated, async (req, res) => {
    try {
      const brandOwnerId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "brand_owner") {
        return res.status(403).json({ message: "Only brand owners can create offers" });
      }
      const {
        title,
        description,
        offerType,
        discountValue,
        minimumAmount,
        maximumDiscount,
        applicableServices,
        termsAndConditions,
        promoCode,
        usageLimit,
        validFrom,
        validUntil,
        showOnSalonDashboard,
        priority,
        imageUrl
      } = req.body;
      if (!title || !description || !offerType || !discountValue || !validFrom || !validUntil) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const [offer] = await db.insert(brandOffers).values({
        brandOwnerId,
        title,
        description,
        offerType,
        discountValue: discountValue.toString(),
        minimumAmount: minimumAmount?.toString() || "0",
        maximumDiscount: maximumDiscount?.toString() || null,
        applicableServices: applicableServices || [],
        termsAndConditions,
        promoCode,
        usageLimit,
        validFrom: new Date(validFrom),
        validUntil: new Date(validUntil),
        showOnSalonDashboard: showOnSalonDashboard ?? true,
        priority: priority || 0,
        imageUrl
      }).returning();
      res.json(offer);
    } catch (error) {
      console.error("Error creating offer:", error);
      res.status(500).json({
        message: "Failed to create offer",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.put("/api/brand/offers/:offerId", isAuthenticated, async (req, res) => {
    try {
      const { offerId } = req.params;
      const brandOwnerId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "brand_owner") {
        return res.status(403).json({ message: "Only brand owners can update offers" });
      }
      const [existingOffer] = await db.select().from(brandOffers).where(and6(eq8(brandOffers.id, offerId), eq8(brandOffers.brandOwnerId, brandOwnerId)));
      if (!existingOffer) {
        return res.status(404).json({ message: "Offer not found or unauthorized" });
      }
      const {
        title,
        description,
        offerType,
        discountValue,
        minimumAmount,
        maximumDiscount,
        applicableServices,
        termsAndConditions,
        promoCode,
        usageLimit,
        validFrom,
        validUntil,
        isActive,
        showOnSalonDashboard,
        priority,
        imageUrl
      } = req.body;
      const [updatedOffer] = await db.update(brandOffers).set({
        title,
        description,
        offerType,
        discountValue: discountValue?.toString(),
        minimumAmount: minimumAmount?.toString(),
        maximumDiscount: maximumDiscount?.toString(),
        applicableServices,
        termsAndConditions,
        promoCode,
        usageLimit,
        validFrom: validFrom ? new Date(validFrom) : void 0,
        validUntil: validUntil ? new Date(validUntil) : void 0,
        isActive,
        showOnSalonDashboard,
        priority,
        imageUrl,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq8(brandOffers.id, offerId)).returning();
      res.json(updatedOffer);
    } catch (error) {
      console.error("Error updating offer:", error);
      res.status(500).json({ message: "Failed to update offer" });
    }
  });
  app2.delete("/api/brand/offers/:offerId", isAuthenticated, async (req, res) => {
    try {
      const { offerId } = req.params;
      const brandOwnerId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "brand_owner") {
        return res.status(403).json({ message: "Only brand owners can delete offers" });
      }
      const [existingOffer] = await db.select().from(brandOffers).where(and6(eq8(brandOffers.id, offerId), eq8(brandOffers.brandOwnerId, brandOwnerId)));
      if (!existingOffer) {
        return res.status(404).json({ message: "Offer not found or unauthorized" });
      }
      await db.delete(brandOffers).where(eq8(brandOffers.id, offerId));
      res.json({ message: "Offer deleted successfully" });
    } catch (error) {
      console.error("Error deleting offer:", error);
      res.status(500).json({ message: "Failed to delete offer" });
    }
  });
  app2.get("/api/salon/brand-offers", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "salon_owner") {
        return res.status(403).json({ message: "Only salon owners can view brand offers" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId));
      if (!salon || !salon.brandOwnerId) {
        return res.json([]);
      }
      const offers = await db.select().from(brandOffers).where(and6(
        eq8(brandOffers.brandOwnerId, salon.brandOwnerId),
        eq8(brandOffers.isActive, true),
        eq8(brandOffers.showOnSalonDashboard, true),
        sql6`${brandOffers.validFrom} <= NOW()`,
        sql6`${brandOffers.validUntil} >= NOW()`
      )).orderBy(desc3(brandOffers.priority), desc3(brandOffers.createdAt));
      res.json(offers);
    } catch (error) {
      console.error("Error fetching salon brand offers:", error);
      res.status(500).json({ message: "Failed to fetch brand offers" });
    }
  });
  app2.get("/api/brand/offers/:offerId/analytics", isAuthenticated, async (req, res) => {
    try {
      const { offerId } = req.params;
      const brandOwnerId = req.user?.id;
      const userType = req.user?.userType;
      if (userType !== "brand_owner") {
        return res.status(403).json({ message: "Only brand owners can view offer analytics" });
      }
      const [offer] = await db.select().from(brandOffers).where(and6(eq8(brandOffers.id, offerId), eq8(brandOffers.brandOwnerId, brandOwnerId)));
      if (!offer) {
        return res.status(404).json({ message: "Offer not found or unauthorized" });
      }
      const [analytics] = await db.select({
        totalUsage: count(offerUsages.id),
        totalDiscount: sql6`COALESCE(SUM(CAST(${offerUsages.discountAmount} AS DECIMAL)), 0)`,
        totalOriginalAmount: sql6`COALESCE(SUM(CAST(${offerUsages.originalAmount} AS DECIMAL)), 0)`,
        totalFinalAmount: sql6`COALESCE(SUM(CAST(${offerUsages.finalAmount} AS DECIMAL)), 0)`
      }).from(offerUsages).where(eq8(offerUsages.offerId, offerId));
      const usageBySalon = await db.select({
        salonId: offerUsages.salonId,
        salonName: salons.name,
        usageCount: count(offerUsages.id),
        totalDiscount: sql6`COALESCE(SUM(CAST(${offerUsages.discountAmount} AS DECIMAL)), 0)`
      }).from(offerUsages).innerJoin(salons, eq8(offerUsages.salonId, salons.id)).where(eq8(offerUsages.offerId, offerId)).groupBy(offerUsages.salonId, salons.name);
      res.json({
        offer,
        analytics: {
          ...analytics,
          usagePercentage: offer.usageLimit ? Number(analytics.totalUsage) / offer.usageLimit * 100 : null,
          usageBySalon
        }
      });
    } catch (error) {
      console.error("Error fetching offer analytics:", error);
      res.status(500).json({ message: "Failed to fetch offer analytics" });
    }
  });
  testEmailConnection();
  app2.post("/api/test/welcome-email", async (req, res) => {
    try {
      if (process.env.NODE_ENV === "production") {
        return res.status(403).json({ message: "Test endpoints not available in production" });
      }
      const { email, firstName, userType } = req.body;
      if (!email || !firstName || !userType) {
        return res.status(400).json({ message: "Email, firstName, and userType are required" });
      }
      const success = await sendWelcomeEmail(email, firstName, userType);
      if (success) {
        res.json({ message: "Test welcome email sent successfully" });
      } else {
        res.status(500).json({ message: "Failed to send test email" });
      }
    } catch (error) {
      console.error("Error sending test email:", error);
      res.status(500).json({ message: "Failed to send test email" });
    }
  });
  app2.get("/test-cashfree-domain", (req, res) => {
    res.json({
      message: "Domain test successful",
      domain: "https://sanwar-book-nirajregar7.replit.app",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      requiredWhitelisting: [
        "https://sanwar-book-nirajregar7.replit.app",
        "https://sanwar-book-nirajregar7.replit.app/payment-success",
        "https://sanwar-book-nirajregar7.replit.app/api/cashfree/webhook"
      ]
    });
  });
  app2.get("/payment-success", (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Payment Successful</title>
          <style>
            body { font-family: Arial; text-align: center; padding: 50px; background: #f5f5f5; }
            .success { background: white; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .icon { font-size: 48px; color: #4CAF50; margin-bottom: 20px; }
            h1 { color: #333; margin: 0 0 10px 0; }
            p { color: #666; margin: 10px 0; }
            .button { background: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="success">
            <div class="icon">\u2705</div>
            <h1>Payment Successful!</h1>
            <p>Your booking has been confirmed successfully.</p>
            <p>You'll receive a confirmation email shortly.</p>
            <a href="https://sanwar-book-nirajregar7.replit.app" class="button">Back to Sanwar</a>
          </div>
          <script>
            // Auto close after 10 seconds
            setTimeout(() => {
              if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'payment_success' }, '*');
              } else {
                window.location.href = 'https://sanwar-book-nirajregar7.replit.app';
              }
            }, 10000);
          </script>
        </body>
      </html>
    `);
  });
  app2.post("/api/cashfree/webhook", async (req, res) => {
    try {
      const webhookData = req.body;
      console.log("\u{1F514} Received Cashfree webhook:", JSON.stringify(webhookData, null, 2));
      const signature = req.headers["x-webhook-signature"];
      if (signature) {
        console.log("\u{1F50D} Webhook signature received (verification temporarily disabled):", signature);
      }
      if (webhookData.type === "PAYMENT_SUCCESS_WEBHOOK") {
        const { order, payment, customer_details } = webhookData.data;
        console.log(`\u2705 Payment successful for order: ${order.order_id}`);
        const orderId = order.order_id;
        if (orderId && orderId.startsWith("booking_")) {
          try {
            console.log("\u{1F504} Processing successful payment webhook for order:", orderId);
            console.log("\u{1F4B0} Payment confirmed via webhook - booking will be created on user return");
          } catch (error) {
            console.error("\u274C Error processing booking from webhook:", error);
          }
        }
      }
      res.status(200).json({ status: "OK" });
    } catch (error) {
      console.error("\u274C Error processing Cashfree webhook:", error);
      res.status(500).json({ error: "Webhook processing failed" });
    }
  });
  app2.get("/api/cashfree/callback", async (req, res) => {
    try {
      const { order_id, order_token } = req.query;
      console.log("\u{1F519} Cashfree callback received for order:", order_id);
      const baseUrl = process.env.FRONTEND_URL || "http://localhost:5000";
      res.redirect(`${baseUrl}/payment-callback?order_id=${order_id}&order_token=${order_token}`);
    } catch (error) {
      console.error("\u274C Error processing Cashfree callback:", error);
      const baseUrl = process.env.FRONTEND_URL || "http://localhost:5000";
      res.redirect(`${baseUrl}/payment-error`);
    }
  });
  app2.post("/api/test-customer-welcome-email", async (req, res) => {
    try {
      const { email, firstName } = req.body;
      if (!email || !firstName) {
        return res.status(400).json({ message: "Email and firstName are required" });
      }
      const { sendWelcomeEmail: sendWelcomeEmail2 } = await Promise.resolve().then(() => (init_welcomeEmail(), welcomeEmail_exports));
      const success = await sendWelcomeEmail2(email, firstName, "customer");
      if (success) {
        res.json({ message: "Customer welcome email sent successfully!" });
      } else {
        res.status(500).json({ message: "Failed to send customer welcome email" });
      }
    } catch (error) {
      console.error("Test customer welcome email error:", error);
      res.status(500).json({ message: "Error sending test email" });
    }
  });
  app2.post("/api/reset-onboarding", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { userType } = req.body;
      if (!userType || !["customer", "salon-owner", "brand-owner"].includes(userType)) {
        return res.status(400).json({ message: "Valid userType required (customer, salon-owner, brand-owner)" });
      }
      res.json({
        success: true,
        message: `Onboarding reset for ${userType}`,
        instruction: `Clear localStorage item: sanwar_onboarding_${userType}`,
        userId
      });
    } catch (error) {
      console.error("Reset onboarding error:", error);
      res.status(500).json({
        success: false,
        message: "Error resetting onboarding",
        error: error.message
      });
    }
  });
  app2.post("/api/test-email", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email address required" });
      }
      const { sendEmail: sendEmail2 } = await Promise.resolve().then(() => (init_emailService(), emailService_exports));
      const testHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { text-align: center; margin-bottom: 30px; }
                .logo { color: #667eea; font-size: 24px; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">\u2705 Sanwar Email Test</div>
                </div>
                <h2>Email System Working!</h2>
                <p>This is a test email from the Sanwar platform to verify that email notifications are working correctly.</p>
                <p><strong>Test Details:</strong></p>
                <ul>
                    <li>User ID: ${userId}</li>
                    <li>Timestamp: ${(/* @__PURE__ */ new Date()).toLocaleString()}</li>
                    <li>Service: ${process.env.GMAIL_USER ? "Gmail" : "SendGrid"}</li>
                </ul>
                <p>If you received this email, the notification system is functioning properly!</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px; text-align: center;">
                    This is a test email from Sanwar Platform<br>
                    Email service status: Active \u2705
                </p>
            </div>
        </body>
        </html>
      `;
      const emailSent = await sendEmail2({
        to: email,
        subject: "\u2705 Sanwar Email Test - System Working",
        html: testHtml,
        from: "noreply@sanwarhub.in"
      });
      if (emailSent) {
        res.json({
          success: true,
          message: "Test email sent successfully!",
          service: process.env.GMAIL_USER ? "Gmail" : "SendGrid",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send test email",
          service: process.env.GMAIL_USER ? "Gmail" : "SendGrid"
        });
      }
    } catch (error) {
      console.error("Test email error:", error);
      res.status(500).json({
        success: false,
        message: "Error sending test email",
        error: error.message
      });
    }
  });
  app2.post("/api/salon-owner/send-otp", async (req, res) => {
    try {
      const { phone, type, firstName, lastName, email } = req.body;
      if (!phone || !type) {
        return res.status(400).json({ error: "Phone and type are required" });
      }
      if (!["registration", "login"].includes(type)) {
        return res.status(400).json({ error: "Type must be 'registration' or 'login'" });
      }
      if (type === "registration") {
        if (!firstName || !email) {
          return res.status(400).json({ error: "First name and email are required for registration" });
        }
        const existingUser = await db.select().from(users).where(eq8(users.email, email)).limit(1);
        if (existingUser.length > 0) {
          return res.status(400).json({ error: "Email already registered" });
        }
      }
      if (type === "login") {
        const existingUser = await db.select().from(users).where(and6(eq8(users.phone, phone), eq8(users.userType, "salon_owner"))).limit(1);
        if (existingUser.length === 0) {
          return res.status(400).json({ error: "No salon owner account found with this phone number" });
        }
      }
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
      await db.insert(salonOwnerOtps).values({
        phone,
        otp,
        type,
        firstName: type === "registration" ? firstName : void 0,
        lastName: type === "registration" ? lastName : void 0,
        email: type === "registration" ? email : void 0,
        expiresAt
      });
      const message = `Sanwar ${type === "registration" ? "Registration" : "Login"} OTP: ${otp}. Valid for 10 minutes. Do not share this code. - Sanwar Team`;
      const smsSent = await sendWhatsAppMessage({
        to: phone,
        body: message
      });
      if (!smsSent) {
        return res.status(500).json({ error: "Failed to send OTP. Please try again." });
      }
      res.json({
        message: `OTP sent successfully to ${phone}`,
        expiresAt: expiresAt.toISOString()
      });
    } catch (error) {
      console.error("Error sending salon owner OTP:", error);
      res.status(500).json({ error: "Failed to send OTP" });
    }
  });
  app2.post("/api/salon-owner/verify-otp", async (req, res) => {
    try {
      const { phone, otp, type } = req.body;
      if (!phone || !otp || !type) {
        return res.status(400).json({ error: "Phone, OTP, and type are required" });
      }
      const [otpRecord] = await db.select().from(salonOwnerOtps).where(and6(
        eq8(salonOwnerOtps.phone, phone),
        eq8(salonOwnerOtps.otp, otp),
        eq8(salonOwnerOtps.type, type),
        eq8(salonOwnerOtps.isVerified, false)
      )).orderBy(desc3(salonOwnerOtps.createdAt)).limit(1);
      if (!otpRecord) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
      }
      if (/* @__PURE__ */ new Date() > otpRecord.expiresAt) {
        return res.status(400).json({ error: "OTP has expired. Please request a new one." });
      }
      await db.update(salonOwnerOtps).set({ isVerified: true }).where(eq8(salonOwnerOtps.id, otpRecord.id));
      let user;
      if (type === "registration") {
        const [newUser] = await db.insert(users).values({
          email: otpRecord.email,
          firstName: otpRecord.firstName,
          lastName: otpRecord.lastName || "",
          phone,
          userType: "salon_owner",
          password: null
          // OTP-based auth, no password
        }).returning();
        const trialStartedAt = /* @__PURE__ */ new Date();
        const trialEndsAt = new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3);
        await db.update(users).set({ planType: "trial", trialStartedAt, trialEndsAt }).where(eq8(users.id, newUser.id));
        user = { ...newUser, planType: "trial", trialStartedAt, trialEndsAt };
        sendWelcomeEmail(user.email, user.firstName, "salon_owner").then((success) => {
          if (success) {
            console.log(`Welcome email sent successfully to ${user.email}`);
          }
        }).catch((err) => {
          console.log(`Welcome email failed for ${user.email}:`, err);
        });
      } else {
        const [existingUser] = await db.select().from(users).where(and6(eq8(users.phone, phone), eq8(users.userType, "salon_owner"))).limit(1);
        user = existingUser;
      }
      req.login(user, (err) => {
        if (err) {
          console.error("Login error:", err);
          return res.status(500).json({ error: "Failed to log in user" });
        }
        res.json({
          message: type === "registration" ? "Registration successful!" : "Login successful!",
          isNewRegistration: type === "registration",
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userType: user.userType,
            profileImageUrl: user.profileImageUrl,
            planType: user.planType,
            trialStartedAt: user.trialStartedAt,
            trialEndsAt: user.trialEndsAt
          }
        });
      });
    } catch (error) {
      console.error("Error verifying salon owner OTP:", error);
      res.status(500).json({ error: "Failed to verify OTP" });
    }
  });
  try {
    await db.execute(sql6`
      CREATE TABLE IF NOT EXISTS "staff_otps" (
        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
        "phone" varchar(20) NOT NULL,
        "otp" varchar(6) NOT NULL,
        "is_verified" boolean DEFAULT false,
        "expires_at" timestamp NOT NULL,
        "created_at" timestamp DEFAULT now()
      )
    `);
    await db.execute(sql6`CREATE INDEX IF NOT EXISTS "staff_otps_phone_idx" ON "staff_otps"("phone")`);
  } catch (e) {
  }
  const STAFF_JWT_SECRET = process.env.JWT_SECRET || "sanwar-staff-secret-key-2024";
  function createStaffToken(staffMember) {
    return jwt.sign(
      {
        staffId: staffMember.id,
        salonId: staffMember.salonId,
        phone: staffMember.phone,
        name: staffMember.name,
        role: staffMember.role,
        type: "staff"
      },
      STAFF_JWT_SECRET,
      { expiresIn: "30d" }
    );
  }
  app2.post("/api/staff/send-otp", async (req, res) => {
    try {
      const { phone } = req.body;
      if (!phone) {
        return res.status(400).json({ error: "Phone number is required" });
      }
      const staffMembers = await db.select().from(staff).where(eq8(staff.phone, phone));
      if (staffMembers.length === 0) {
        return res.status(400).json({ error: "No staff member found with this phone number" });
      }
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
      await db.insert(staffOtps).values({ phone, otp, expiresAt });
      const message = `Your Sanwar Staff Login OTP: ${otp}. Valid for 10 minutes. Do not share. - Sanwar Team`;
      let formattedPhone = phone;
      if (phone.length === 10 && /^[6-9]/.test(phone)) {
        formattedPhone = `+91${phone}`;
      } else if (phone.startsWith("0") && phone.length === 11) {
        formattedPhone = `+91${phone.substring(1)}`;
      } else if (!phone.startsWith("+")) {
        formattedPhone = `+${phone}`;
      }
      const smsSent = await sendWhatsAppMessage({ to: formattedPhone, body: message });
      const isDev = process.env.NODE_ENV === "development";
      if (!smsSent && !isDev) {
        return res.status(500).json({ error: "Failed to send OTP. Please try again." });
      }
      res.json({
        message: smsSent ? `OTP sent to ${phone}` : `OTP generated for ${phone} (SMS not sent)`,
        expiresAt: expiresAt.toISOString(),
        ...isDev && !smsSent ? { otp } : {}
      });
    } catch (error) {
      console.error("Error sending staff OTP:", error);
      res.status(500).json({ error: "Failed to send OTP" });
    }
  });
  app2.post("/api/staff/verify-otp", async (req, res) => {
    try {
      const { phone, otp } = req.body;
      if (!phone || !otp) {
        return res.status(400).json({ error: "Phone and OTP are required" });
      }
      const candidates = await db.select().from(staffOtps).where(and6(
        eq8(staffOtps.phone, phone),
        eq8(staffOtps.otp, otp)
      )).orderBy(desc3(staffOtps.createdAt)).limit(1);
      const otpRecord = candidates.find((r) => r.isVerified === false || r.isVerified === null);
      if (!otpRecord) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
      }
      if (/* @__PURE__ */ new Date() > otpRecord.expiresAt) {
        return res.status(400).json({ error: "OTP has expired. Please request a new one." });
      }
      await db.update(staffOtps).set({ isVerified: true }).where(eq8(staffOtps.id, otpRecord.id));
      const [staffMember] = await db.select().from(staff).where(eq8(staff.phone, phone)).limit(1);
      if (!staffMember) {
        return res.status(400).json({ error: "Staff member not found" });
      }
      const token = createStaffToken(staffMember);
      res.json({
        message: "Login successful!",
        token,
        staff: {
          id: staffMember.id,
          name: staffMember.name,
          role: staffMember.role,
          phone: staffMember.phone,
          email: staffMember.email,
          photoUrl: staffMember.photoUrl,
          salonId: staffMember.salonId,
          experience: staffMember.experience,
          specialties: staffMember.specialties,
          bio: staffMember.bio,
          isActive: staffMember.isActive,
          rating: staffMember.rating,
          totalReviews: staffMember.totalReviews,
          canManageSchedule: staffMember.canManageSchedule,
          defaultSlotDuration: staffMember.defaultSlotDuration
        }
      });
    } catch (error) {
      console.error("Error verifying staff OTP:", error);
      res.status(500).json({ error: "Failed to verify OTP" });
    }
  });
  async function verifyStaffToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, STAFF_JWT_SECRET);
      if (decoded.type !== "staff") {
        return res.status(401).json({ error: "Invalid token type" });
      }
      const [staffMember] = await db.select().from(staff).where(eq8(staff.id, decoded.staffId)).limit(1);
      if (!staffMember) {
        return res.status(401).json({ error: "Staff member no longer exists" });
      }
      req.staff = decoded;
      req.staffMember = staffMember;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  }
  app2.get("/api/staff/me", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, STAFF_JWT_SECRET);
      if (decoded.type !== "staff") {
        return res.status(401).json({ error: "Invalid token" });
      }
      const [staffMember] = await db.select().from(staff).where(eq8(staff.id, decoded.staffId)).limit(1);
      if (!staffMember) {
        return res.status(404).json({ error: "Staff member not found" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, staffMember.salonId)).limit(1);
      res.json({
        id: staffMember.id,
        name: staffMember.name,
        role: staffMember.role,
        phone: staffMember.phone,
        email: staffMember.email,
        photoUrl: staffMember.photoUrl,
        salonId: staffMember.salonId,
        salonName: salon?.name || "",
        experience: staffMember.experience,
        specialties: staffMember.specialties,
        bio: staffMember.bio,
        isActive: staffMember.isActive,
        rating: staffMember.rating,
        totalReviews: staffMember.totalReviews,
        canManageSchedule: staffMember.canManageSchedule,
        defaultSlotDuration: staffMember.defaultSlotDuration
      });
    } catch (error) {
      console.error("Error fetching staff profile:", error);
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });
  app2.put("/api/staff/profile", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, STAFF_JWT_SECRET);
      if (decoded.type !== "staff") {
        return res.status(401).json({ error: "Invalid token" });
      }
      const { name, role, email, photoUrl, experience, specialties, bio } = req.body;
      const updates = {};
      if (name !== void 0) updates.name = name;
      if (role !== void 0) updates.role = role;
      if (email !== void 0) updates.email = email;
      if (photoUrl !== void 0) updates.photoUrl = photoUrl;
      if (experience !== void 0) updates.experience = experience;
      if (specialties !== void 0) updates.specialties = specialties;
      if (bio !== void 0) updates.bio = bio;
      updates.updatedAt = /* @__PURE__ */ new Date();
      const [updated] = await db.update(staff).set(updates).where(eq8(staff.id, decoded.staffId)).returning();
      if (!updated) {
        return res.status(404).json({ error: "Staff member not found" });
      }
      res.json({ message: "Profile updated successfully", staff: updated });
    } catch (error) {
      console.error("Error updating staff profile:", error);
      res.status(500).json({ error: "Failed to update profile" });
    }
  });
  app2.get("/api/staff/bookings", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, STAFF_JWT_SECRET);
      if (decoded.type !== "staff") {
        return res.status(401).json({ error: "Invalid token" });
      }
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const staffBookings = await db.select().from(bookings).where(and6(
        eq8(bookings.staffId, decoded.staffId),
        or3(
          eq8(bookings.status, "confirmed"),
          eq8(bookings.status, "pending")
        ),
        gte5(bookings.date, today)
      )).orderBy(asc2(bookings.date));
      res.json(staffBookings);
    } catch (error) {
      console.error("Error fetching staff bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });
  app2.post("/api/discount-cards/enroll", async (req, res) => {
    try {
      const { salonId, customerName, customerEmail, customerPhone, serviceEnjoyed, discountPercentage } = req.body;
      if (!salonId || !customerEmail || !customerPhone || !discountPercentage) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      if (![10, 20].includes(discountPercentage)) {
        return res.status(400).json({ error: "Invalid discount percentage. Must be 10 or 20" });
      }
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId)).limit(1);
      if (!salon) {
        return res.status(404).json({ error: "Salon not found" });
      }
      const [discountCard] = await db.insert(sanwarDiscountCards).values({
        salonId,
        customerName: customerName || null,
        customerEmail,
        customerPhone,
        serviceEnjoyed: serviceEnjoyed || null,
        discountPercentage,
        status: "active"
      }).returning();
      sendDiscountCardEmail(customerEmail, salon.name, discountPercentage, discountCard.id).then((success) => {
        if (success) {
          console.log(`Discount card email sent to ${customerEmail}`);
        }
      }).catch((err) => {
        console.log(`Discount card email failed for ${customerEmail}:`, err);
      });
      res.json({
        message: "Discount card created successfully",
        id: discountCard.id,
        discountPercentage: discountCard.discountPercentage
      });
    } catch (error) {
      console.error("Error creating discount card:", error);
      res.status(500).json({ error: "Failed to create discount card" });
    }
  });
  app2.get("/api/owner/discount-customers", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const userId = req.user.id;
      const [salon] = await db.select().from(salons).where(eq8(salons.ownerId, userId)).limit(1);
      if (!salon) {
        return res.status(404).json({ error: "Salon not found" });
      }
      const discountCustomers = await db.select().from(sanwarDiscountCards).where(eq8(sanwarDiscountCards.salonId, salon.id)).orderBy(desc3(sanwarDiscountCards.createdAt));
      res.json(discountCustomers);
    } catch (error) {
      console.error("Error fetching discount customers:", error);
      res.status(500).json({ error: "Failed to fetch discount customers" });
    }
  });
  app2.get("/api/salons/:salonId/account", async (req, res) => {
    try {
      const { salonId } = req.params;
      const [salon] = await db.select().from(salons).where(eq8(salons.id, salonId)).limit(1);
      if (!salon) {
        return res.status(404).json({ error: "Salon not found" });
      }
      const [account] = await db.select().from(salonOwnerAccounts).where(eq8(salonOwnerAccounts.salonId, salonId)).limit(1);
      if (!account) {
        return res.json({ upiId: null });
      }
      res.json({
        upiId: account.upiId || null
      });
    } catch (error) {
      console.error("Error fetching salon account:", error);
      res.status(500).json({ error: "Failed to fetch salon account" });
    }
  });
  app2.post("/api/virtual-tryon/styles", async (req, res) => {
    try {
      const { gender, hairLength } = req.body;
      if (!gender || !["male", "female"].includes(gender)) {
        return res.status(400).json({ error: 'Invalid gender. Must be "male" or "female"' });
      }
      const numStyles = 10;
      const exclusions = [
        "Curtain Bangs Revival (Mid-Length)",
        "Buzz Cut (Zero Guard)",
        "Mid-Length Cut"
      ].join(", ");
      let prompt = "";
      if (gender === "male") {
        prompt = `Generate a JSON array of ${numStyles} diverse and popular male hairstyle and grooming looks for an Indian customer. The styles should be a mix of short, neat cuts with sharp fades and textured tops, as well as longer, wavy, and layered looks. Exclude the following styles: ${exclusions}. Ensure a variety of tags: "Professional", "Party", "Trendy", and "Casual". Each look should be distinct and popular in contemporary Indian salons. For each style, include: 1. "style_name": a descriptive name, 2. "tag": a single tag from "Professional", "Party", "Trendy", or "Casual", 3. "services_needed": a comma-separated list of services. Ensure the output is a single, valid JSON array.`;
      } else {
        prompt = `Generate a JSON array of ${numStyles} popular Indian female hairstyles. Focus on looks that are ${hairLength || "any length"} or a mix of ${hairLength || "any length"} and medium length, inspired by loose waves, braids, and half-up looks suitable for formal or casual wear. Exclude the following styles: ${exclusions}. Ensure a variety of tags: "Professional", "Party", "Trendy", and "Casual". For each style, include: 1. "style_name": a descriptive name, 2. "tag": a single tag from "Professional", "Party", "Trendy", or "Casual", 3. "services_needed": a comma-separated list of services. Ensure the output is a single, valid JSON array.`;
      }
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
              responseSchema: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    "style_name": { "type": "STRING" },
                    "tag": { "type": "STRING", "enum": ["Professional", "Party", "Trendy", "Casual"] },
                    "services_needed": { "type": "STRING" }
                  },
                  "propertyOrdering": ["style_name", "tag", "services_needed"]
                }
              }
            }
          })
        }
      );
      const result = await response.json();
      const styles = JSON.parse(result?.candidates?.[0]?.content?.parts?.[0]?.text || "[]");
      res.json({ styles });
    } catch (error) {
      console.error("Error generating styles:", error);
      res.status(500).json({ error: "Failed to generate styles" });
    }
  });
  app2.post("/api/virtual-tryon/generate", async (req, res) => {
    try {
      const { image, styleName } = req.body;
      if (!image || !styleName) {
        return res.status(400).json({ error: "Missing image or style name" });
      }
      const base64Image = image.includes(",") ? image.split(",")[1] : image;
      const prompt = `Apply the "${styleName}" style to the person's hair and adjust their grooming in this photo. The style should be realistic and fit the person's features.`;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: prompt },
                { inlineData: { mimeType: "image/png", data: base64Image } }
              ]
            }],
            generationConfig: {
              responseModalities: ["TEXT", "IMAGE"]
            }
          })
        }
      );
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Gemini API error:", response.status, errorData);
        return res.status(500).json({ error: `Gemini API failed: ${response.status}` });
      }
      const result = await response.json();
      console.log("Gemini API response:", JSON.stringify(result).substring(0, 200));
      const generatedImage = result?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData?.data;
      if (!generatedImage) {
        console.error("No image in response:", JSON.stringify(result));
        return res.status(500).json({ error: "Failed to generate image - no image in response" });
      }
      res.json({ image: generatedImage });
    } catch (error) {
      console.error("Error generating image:", error);
      res.status(500).json({ error: "Failed to generate image" });
    }
  });
  app2.post("/api/virtual-tryon/chat", async (req, res) => {
    try {
      const { messages, styleName } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: messages,
            systemInstruction: {
              parts: [{
                text: `You are a professional AI salon stylist. Provide helpful, concise, and friendly advice on the selected hairstyle "${styleName}". Your responses should be based on general knowledge about hair care, styling, and fashion. Do not offer medical advice.`
              }]
            }
          })
        }
      );
      const result = await response.json();
      const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      res.json({ reply });
    } catch (error) {
      console.error("Error in AI chat:", error);
      res.status(500).json({ error: "Failed to get chat response" });
    }
  });
  app2.get("/api/customer/chat-conversations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const conversations = await db.execute(sql6`
        SELECT DISTINCT ON (sc.salon_id)
          sc.salon_id,
          sc.message as last_message,
          sc.sender_type as last_sender_type,
          sc.created_at as last_message_at,
          s.name as salon_name,
          s.image_url as salon_image,
          s.address as salon_address,
          (SELECT COUNT(*) FROM salon_chats WHERE salon_id = sc.salon_id AND customer_id = ${userId} AND is_read = false AND sender_type = 'owner')::int as unread_count
        FROM salon_chats sc
        JOIN salons s ON s.id = sc.salon_id
        WHERE sc.customer_id = ${userId}
        ORDER BY sc.salon_id, sc.created_at DESC
      `);
      res.json(conversations.rows || []);
    } catch (error) {
      console.error("Error fetching customer conversations:", error);
      res.status(500).json({ message: "Failed to fetch conversations" });
    }
  });
  app2.post("/api/salons/:salonId/chat", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const { message, customerId } = req.body;
      if (!message || !message.trim()) {
        return res.status(400).json({ message: "Message cannot be empty" });
      }
      const salon = await storage.getSalonById(salonId);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      let senderType;
      let actualCustomerId;
      if (salon.ownerId === userId) {
        senderType = "owner";
        actualCustomerId = customerId;
        if (!actualCustomerId) {
          return res.status(400).json({ message: "customerId is required for owner replies" });
        }
      } else {
        senderType = "customer";
        actualCustomerId = userId;
      }
      const [newMsg] = await db.insert(salonChats).values({
        salonId,
        customerId: actualCustomerId,
        senderType,
        message: message.trim()
      }).returning();
      res.json(newMsg);
    } catch (error) {
      console.error("Error sending chat message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/salons/:salonId/chat/:customerId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, customerId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      if (userId !== customerId && userId !== salon.ownerId) {
        return res.status(403).json({ message: "Not authorized to view these messages" });
      }
      const messages = await db.select().from(salonChats).where(and6(
        eq8(salonChats.salonId, salonId),
        eq8(salonChats.customerId, customerId)
      )).orderBy(asc2(salonChats.createdAt));
      res.json(messages);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });
  app2.get("/api/salons/:salonId/conversations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon || salon.ownerId !== userId) {
        return res.status(403).json({ message: "Not authorized" });
      }
      const conversations = await db.execute(sql6`
        SELECT DISTINCT ON (sc.customer_id) 
          sc.customer_id,
          sc.message as last_message,
          sc.sender_type as last_sender_type,
          sc.created_at as last_message_at,
          CONCAT(u.first_name, ' ', u.last_name) as customer_name,
          u.email as customer_email,
          u.profile_image_url as customer_image,
          (SELECT COUNT(*) FROM salon_chats WHERE salon_id = ${salonId} AND customer_id = sc.customer_id AND is_read = false AND sender_type = 'customer')::int as unread_count
        FROM salon_chats sc
        JOIN users u ON u.id = sc.customer_id
        WHERE sc.salon_id = ${salonId}
        ORDER BY sc.customer_id, sc.created_at DESC
      `);
      res.json(conversations.rows || conversations);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      res.status(500).json({ message: "Failed to fetch conversations" });
    }
  });
  app2.put("/api/salons/:salonId/chat/:customerId/read", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.id;
      const { salonId, customerId } = req.params;
      const salon = await storage.getSalonById(salonId);
      if (!salon) {
        return res.status(404).json({ message: "Salon not found" });
      }
      const markSenderType = salon.ownerId === userId ? "customer" : "owner";
      await db.update(salonChats).set({ isRead: true }).where(and6(
        eq8(salonChats.salonId, salonId),
        eq8(salonChats.customerId, customerId),
        eq8(salonChats.senderType, markSenderType),
        eq8(salonChats.isRead, false)
      ));
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking messages as read:", error);
      res.status(500).json({ message: "Failed to mark messages as read" });
    }
  });
  app2.post("/api/staff-registrations/upload-photo", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "No file uploaded" });
      if (req.file.size > 5 * 1024 * 1024) return res.status(400).json({ error: "File too large. Max 5MB." });
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      if (!allowedTypes.includes(req.file.mimetype)) return res.status(400).json({ error: "Only JPEG, PNG or WebP allowed." });
      const { randomUUID: randomUUID2 } = await import("crypto");
      const { mkdir, writeFile } = await import("fs/promises");
      const { join } = await import("path");
      const uploadsDir = join(process.cwd(), "uploads", "staff-photos");
      await mkdir(uploadsDir, { recursive: true });
      const ext = req.file.originalname.split(".").pop()?.toLowerCase() || "jpg";
      const filename = `${randomUUID2()}.${ext}`;
      await writeFile(join(uploadsDir, filename), req.file.buffer);
      res.json({ url: `/uploads/staff-photos/${filename}` });
    } catch (error) {
      console.error("Error uploading staff photo:", error);
      res.status(500).json({ error: "Failed to upload photo" });
    }
  });
  app2.post("/api/staff-registrations/upload-resume", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "No file uploaded" });
      if (req.file.size > 10 * 1024 * 1024) return res.status(400).json({ error: "File too large. Max 10MB." });
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(req.file.mimetype)) return res.status(400).json({ error: "Only PDF or Word documents allowed." });
      const { randomUUID: randomUUID2 } = await import("crypto");
      const { mkdir, writeFile } = await import("fs/promises");
      const { join } = await import("path");
      const uploadsDir = join(process.cwd(), "uploads", "staff-resumes");
      await mkdir(uploadsDir, { recursive: true });
      const ext = req.file.originalname.split(".").pop()?.toLowerCase() || "pdf";
      const filename = `${randomUUID2()}.${ext}`;
      await writeFile(join(uploadsDir, filename), req.file.buffer);
      res.json({ url: `/uploads/staff-resumes/${filename}`, originalName: req.file.originalname });
    } catch (error) {
      console.error("Error uploading resume:", error);
      res.status(500).json({ error: "Failed to upload resume" });
    }
  });
  app2.post("/api/staff-registrations", async (req, res) => {
    try {
      const data = req.body;
      if (!data.fullName || !data.mobile || !data.city || !data.area || !data.role) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const registration = await storage.createStaffRegistration(data);
      res.status(201).json(registration);
    } catch (error) {
      console.error("Error creating staff registration:", error);
      res.status(500).json({ message: "Failed to submit registration" });
    }
  });
  app2.get("/api/staff-registrations/search", async (req, res) => {
    try {
      const { city, role, gender } = req.query;
      let registrations = await storage.getAllStaffRegistrations();
      if (city && city !== "all") {
        registrations = registrations.filter(
          (r) => r.city?.toLowerCase().includes(city.toLowerCase())
        );
      }
      if (role && role !== "all") {
        registrations = registrations.filter(
          (r) => r.role?.toLowerCase() === role.toLowerCase()
        );
      }
      if (gender && gender !== "all") {
        registrations = registrations.filter(
          (r) => r.gender?.toLowerCase() === gender.toLowerCase()
        );
      }
      res.json(registrations);
    } catch (error) {
      console.error("Error searching staff registrations:", error);
      res.status(500).json({ message: "Failed to search registrations" });
    }
  });
  app2.get("/api/staff-registrations", isAuthenticated, async (req, res) => {
    try {
      const registrations = await storage.getAllStaffRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching staff registrations:", error);
      res.status(500).json({ message: "Failed to fetch staff registrations" });
    }
  });
  const PROFESSIONAL_JWT_SECRET = process.env.JWT_SECRET || "sanwar-professional-secret-2024";
  function createProfessionalToken(professional) {
    return jwt.sign(
      { professionalId: professional.id, mobile: professional.mobile, type: "professional" },
      PROFESSIONAL_JWT_SECRET,
      { expiresIn: "30d" }
    );
  }
  async function verifyProfessionalToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ error: "No token provided" });
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, PROFESSIONAL_JWT_SECRET);
      if (decoded.type !== "professional") return res.status(401).json({ error: "Invalid token type" });
      req.professional = decoded;
      next();
    } catch {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  }
  app2.post("/api/professional/register-otp", async (req, res) => {
    try {
      const { fullName, phone } = req.body;
      if (!fullName || !phone) return res.status(400).json({ error: "Name and phone are required" });
      const [existing] = await db.select().from(staffRegistrations).where(eq8(staffRegistrations.mobile, phone)).limit(1);
      if (existing) return res.status(400).json({ error: "An account already exists with this mobile. Please login instead." });
      await db.insert(staffRegistrations).values({
        fullName: fullName.trim(),
        mobile: phone,
        city: "",
        area: "",
        role: ""
      });
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
      await db.insert(staffOtps).values({ phone, otp, expiresAt });
      let formattedPhone = phone;
      if (phone.length === 10 && /^[6-9]/.test(phone)) formattedPhone = `+91${phone}`;
      else if (!phone.startsWith("+")) formattedPhone = `+${phone}`;
      const smsSent = await sendWhatsAppMessage({ to: formattedPhone, body: `Your Sanwar OTP: ${otp}. Valid for 10 minutes. - Sanwar Team` });
      const isDev = process.env.NODE_ENV === "development";
      res.json({
        message: "OTP sent",
        isNew: true,
        ...isDev && !smsSent ? { otp } : {}
      });
    } catch (error) {
      console.error("Professional register-otp error:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });
  app2.post("/api/professional/send-otp", async (req, res) => {
    try {
      const { phone } = req.body;
      if (!phone) return res.status(400).json({ error: "Phone number is required" });
      const [professional] = await db.select().from(staffRegistrations).where(eq8(staffRegistrations.mobile, phone)).limit(1);
      if (!professional) return res.status(400).json({ error: "No professional profile found with this mobile. Please register first." });
      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1e3);
      await db.insert(staffOtps).values({ phone, otp, expiresAt });
      const message = `Your Sanwar Professional Portal OTP: ${otp}. Valid for 10 minutes. - Sanwar Team`;
      let formattedPhone = phone;
      if (phone.length === 10 && /^[6-9]/.test(phone)) formattedPhone = `+91${phone}`;
      else if (!phone.startsWith("+")) formattedPhone = `+${phone}`;
      const smsSent = await sendWhatsAppMessage({ to: formattedPhone, body: message });
      const isDev = process.env.NODE_ENV === "development";
      res.json({
        message: smsSent ? `OTP sent to ${phone}` : `OTP generated (SMS not sent)`,
        expiresAt: expiresAt.toISOString(),
        ...isDev && !smsSent ? { otp } : {}
      });
    } catch (error) {
      console.error("Professional OTP error:", error);
      res.status(500).json({ error: "Failed to send OTP" });
    }
  });
  app2.post("/api/professional/verify-otp", async (req, res) => {
    try {
      const { phone, otp } = req.body;
      if (!phone || !otp) return res.status(400).json({ error: "Phone and OTP are required" });
      const candidates = await db.select().from(staffOtps).where(and6(eq8(staffOtps.phone, phone), eq8(staffOtps.otp, otp))).orderBy(desc3(staffOtps.createdAt)).limit(1);
      const otpRecord = candidates.find((r) => r.isVerified === false || r.isVerified === null);
      if (!otpRecord) return res.status(400).json({ error: "Invalid or expired OTP" });
      if (/* @__PURE__ */ new Date() > otpRecord.expiresAt) return res.status(400).json({ error: "OTP has expired" });
      await db.update(staffOtps).set({ isVerified: true }).where(eq8(staffOtps.id, otpRecord.id));
      const [professional] = await db.select().from(staffRegistrations).where(eq8(staffRegistrations.mobile, phone)).limit(1);
      if (!professional) return res.status(400).json({ error: "Professional profile not found" });
      const token = createProfessionalToken(professional);
      res.json({ message: "Login successful!", token, professional });
    } catch (error) {
      console.error("Professional verify OTP error:", error);
      res.status(500).json({ error: "Failed to verify OTP" });
    }
  });
  app2.get("/api/professional/me", verifyProfessionalToken, async (req, res) => {
    try {
      const [professional] = await db.select().from(staffRegistrations).where(eq8(staffRegistrations.mobile, req.professional.mobile)).limit(1);
      if (!professional) return res.status(404).json({ error: "Profile not found" });
      res.json(professional);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });
  app2.get("/api/professional/job-offers", verifyProfessionalToken, async (req, res) => {
    try {
      const offers = await db.select().from(staffJobOffers).where(eq8(staffJobOffers.professionalMobile, req.professional.mobile)).orderBy(desc3(staffJobOffers.createdAt));
      res.json(offers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch job offers" });
    }
  });
  app2.put("/api/professional/job-offers/:id", verifyProfessionalToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      if (!["accepted", "rejected"].includes(status)) return res.status(400).json({ error: "Invalid status" });
      const [offer] = await db.select().from(staffJobOffers).where(eq8(staffJobOffers.id, id)).limit(1);
      if (!offer) return res.status(404).json({ error: "Offer not found" });
      if (offer.professionalMobile !== req.professional.mobile) return res.status(403).json({ error: "Forbidden" });
      await db.update(staffJobOffers).set({ status }).where(eq8(staffJobOffers.id, id));
      res.json({ message: `Offer ${status}` });
    } catch (error) {
      res.status(500).json({ error: "Failed to update offer" });
    }
  });
  app2.post("/api/staff-job-offers", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user?.claims?.sub || req.user?.id;
      const userRecord = await storage.getUser(userId);
      if (!userRecord || userRecord.userType !== "salon_owner") {
        return res.status(403).json({ error: "Only salon owners can send job offers" });
      }
      const ownerSalons = await storage.getSalonsByOwner(userId);
      const salon = ownerSalons[0];
      if (!salon) return res.status(400).json({ error: "You must have a salon profile to send job offers" });
      const { professionalMobile, professionalName, role, message, offeredSalary } = req.body;
      if (!professionalMobile || !professionalName || !role) {
        return res.status(400).json({ error: "Mobile, name, and role are required" });
      }
      const [existing] = await db.select().from(staffJobOffers).where(and6(eq8(staffJobOffers.salonId, salon.id), eq8(staffJobOffers.professionalMobile, professionalMobile))).limit(1);
      if (existing) return res.status(400).json({ error: "You already sent an offer to this professional" });
      const [offer] = await db.insert(staffJobOffers).values({
        salonId: salon.id,
        salonName: salon.name,
        salonCity: salon.address || "",
        ownerPhone: userRecord.phone || "",
        professionalMobile,
        professionalName,
        role,
        message: message || null,
        offeredSalary: offeredSalary ? parseInt(offeredSalary) : null,
        status: "pending"
      }).returning();
      res.json({ message: "Job offer sent!", offer });
    } catch (error) {
      console.error("Send job offer error:", error);
      res.status(500).json({ error: "Failed to send job offer" });
    }
  });
  const { registerSmartSchedulingRoutes: registerSmartSchedulingRoutes2 } = await Promise.resolve().then(() => (init_smart_scheduling_routes(), smart_scheduling_routes_exports));
  registerSmartSchedulingRoutes2(app2);
  return httpServer;
}

// api/index.ts
var app = express2();
app.use(express2.json({ limit: "50mb" }));
app.use(express2.urlencoded({ extended: false, limit: "50mb" }));
app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      console.log(`${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});
function validateEnv() {
  const missing = [];
  if (!process.env.NEON_DATABASE_URL && !process.env.DATABASE_URL) {
    missing.push("DATABASE_URL (or NEON_DATABASE_URL)");
  }
  if (!process.env.SESSION_SECRET) {
    console.warn("[WARN] SESSION_SECRET not set \u2014 using insecure default. Set it in Vercel env vars.");
  }
  if (missing.length > 0) {
    const msg = `[STARTUP ERROR] Missing required environment variables: ${missing.join(", ")}`;
    console.error(msg);
    throw new Error(msg);
  }
  console.log("[Startup] Environment OK \u2014 DB:", !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL), "| SESSION_SECRET:", !!process.env.SESSION_SECRET, "| NODE_ENV:", process.env.NODE_ENV);
}
var initError = null;
var appReady = (async () => {
  try {
    validateEnv();
    await registerRoutes(app);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Server error:", err);
      res.status(status).json({ message });
    });
    console.log("[Startup] Routes registered successfully");
  } catch (err) {
    initError = err;
    console.error("[FATAL] App initialization failed:", err?.message, err?.stack);
  }
})();
app.get("/api/healthz", async (_req, res) => {
  try {
    await appReady;
    let dbOk = false;
    let dbError = "";
    try {
      const { pool: pool2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const client = await pool2.connect();
      await client.query("SELECT 1");
      client.release();
      dbOk = true;
    } catch (e) {
      dbError = e.message;
    }
    res.json({
      status: dbOk ? "ok" : "degraded",
      env: {
        database_url_set: !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL),
        database_connected: dbOk,
        database_error: dbError || void 0,
        session_secret: !!process.env.SESSION_SECRET,
        node_env: process.env.NODE_ENV || "not set"
      },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});
async function handler(req, res) {
  await appReady;
  if (initError) {
    console.error("[Handler] Serving error due to init failure:", initError.message);
    return res.status(500).json({
      error: "Server initialization failed",
      message: initError.message,
      hint: "Check DATABASE_URL / NEON_DATABASE_URL env vars are set in Vercel dashboard"
    });
  }
  app(req, res);
}
export {
  handler as default
};
