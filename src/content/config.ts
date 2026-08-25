import { defineCollection, z } from 'astro:content';

const recettes = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    emoji: z.string().default('🍽️'),
    cuisine: z.string(),
    portions: z.number(),
    kcal: z.number(),                  // kcal par portion
    proteines: z.number(),             // g par portion
    glucides: z.number().optional(),
    lipides: z.number().optional(),
    fibres: z.number().optional(),
    congelable: z.boolean().default(false),
    tempsMinutes: z.number().optional(),
    star: z.boolean().default(false),  // "Star du meal prep"
    note: z.string().optional(),       // note affichée sous le titre
    ingredients: z.array(z.object({
      qty: z.number(),                 // quantité pour `portions` portions
      unit: z.string().optional(),     // ex: "g", "ml", "tasse", "gousse"
      unitPluriel: z.string().optional(), // forme au pluriel si irrégulière
      item: z.string(),                // ex: "dinde hachée"
    })).optional(),
  }),
});

export const collections = { recettes };
