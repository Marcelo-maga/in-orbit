CREATE TABLE IF NOT EXISTS "gols_completions" (
	"id" text PRIMARY KEY NOT NULL,
	"goal_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gols_completions" ADD CONSTRAINT "gols_completions_goal_id_gols_id_fk" FOREIGN KEY ("goal_id") REFERENCES "public"."gols"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
