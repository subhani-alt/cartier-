import { seedProducts } from '../seeders/seedData.js';

export const aiConciergeConsult = async (req, res) => {
  try {
    const { userPrompt, preferences } = req.body;
    const promptLower = (userPrompt || '').toLowerCase();

    let matches = seedProducts;

    if (promptLower.includes('watch') || promptLower.includes('timepiece') || promptLower.includes('skeleton') || promptLower.includes('gold')) {
      matches = seedProducts.filter(p => p.category === 'Watches');
    } else if (promptLower.includes('perfume') || promptLower.includes('fragrance') || promptLower.includes('oud') || promptLower.includes('rose') || promptLower.includes('scent')) {
      matches = seedProducts.filter(p => p.category === 'Fragrances');
    }

    const recommendation = matches[0] || seedProducts[0];
    const pairing = matches[1] || seedProducts[6];

    let adviceText = `Based on your refined preference for "${userPrompt}", our Master Stylist recommends pairing the iconic ${recommendation.name} with ${pairing.name}.`;

    if (promptLower.includes('gift') || promptLower.includes('anniversary')) {
      adviceText = `For a celebratory milestone, we recommend our limited release ${recommendation.name}, presented in the signature Maison Aurélia hand-crafted ivory vault with custom plaque engraving.`;
    }

    res.json({
      advice: adviceText,
      recommendations: [recommendation, pairing],
      suggestedNotes: recommendation.fragranceNotes?.topNotes || ["Champagne Gold", "Swiss Precision", "Alligator Leather"]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
