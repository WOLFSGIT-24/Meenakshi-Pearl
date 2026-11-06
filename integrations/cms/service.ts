import { WixDataItem, WixDataQueryResult } from './types';

export interface PaginationOptions {
  limit?: number;
  skip?: number;
}

// Initial seed data for Meenakshi Pearl
const initialData: Record<string, WixDataItem[]> = {
  legalapprovals: [
    {
      _id: 'legal-1',
      approvalName: 'MPA Approved Layout',
      description: 'Fully approved by Malur Planning Authority (MPA) with sanctioned layout plan and DC conversion order.',
      issuingAuthority: 'Malur Planning Authority (MPA)',
      approvalDate: new Date('2024-03-15'),
      isVerified: true,
    },
    {
      _id: 'legal-2',
      approvalName: 'RERA Registered Project',
      description: 'Fully compliant and registered under Karnataka RERA ensuring complete buyer transparency and security.',
      issuingAuthority: 'Karnataka RERA Authority',
      approvalDate: new Date('2024-04-10'),
      isVerified: true,
    },
    {
      _id: 'legal-3',
      approvalName: '100% Clear Titles & Ownership',
      description: 'Freehold ownership with zero legal encumbrances, title deed verified by premier legal counsels.',
      issuingAuthority: 'Revenue Department of Karnataka',
      approvalDate: new Date('2024-01-20'),
      isVerified: true,
    },
    {
      _id: 'legal-4',
      approvalName: 'Leading Bank Loan Approvals',
      description: 'Pre-approved home & plot loan facilities from SBI, HDFC, ICICI, and Axis Bank with expedited sanctioning.',
      issuingAuthority: 'State Bank of India & Major Banks',
      approvalDate: new Date('2024-05-01'),
      isVerified: true,
    },
    {
      _id: 'legal-5',
      approvalName: 'KPTCL & BESCOM Clearance',
      description: 'Sanctioned power infrastructure with dedicated transformer yard, substations, and underground cabling.',
      issuingAuthority: 'Electricity Transmission Corp',
      approvalDate: new Date('2024-02-18'),
      isVerified: true,
    },
    {
      _id: 'legal-6',
      approvalName: 'Pollution Control Board NOC',
      description: 'Environmental compliance certificate with dedicated eco-friendly sewage treatment plant and drainage network.',
      issuingAuthority: 'State Pollution Control Board',
      approvalDate: new Date('2024-03-28'),
      isVerified: true,
    },
  ],

  plotconfigurations: [
    {
      _id: 'plot-1',
      plotName: 'Standard Villa Plot',
      dimensions: '30x50',
      areaSqFt: 1500,
      description: 'Perfect for modern 3 & 4 BHK independent duplex villas with private garden space and car porch.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_1ed0e26987f94f4da1faa6988026c93d~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-2',
      plotName: 'Premium Luxury Plot',
      dimensions: '30x60',
      areaSqFt: 1800,
      description: 'Spacious layout tailored for grand luxury residences with expansive private lawns and multi-car parking.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_3afbc2ed677e4695a734f9bc4f870313~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-3',
      plotName: 'Grand Executive Plot',
      dimensions: '40x60',
      areaSqFt: 2400,
      description: 'Prestigious corner and avenue-facing plots for bespoke custom architectural estate designs.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_3dec255cbbec4e8e8c3a0710bcec325c~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-4',
      plotName: 'Bespoke Estate Plot',
      dimensions: 'Custom Sizes',
      areaSqFt: 3000,
      description: 'Exclusive plots for signature custom villas surrounded by lush green tree-lined boulevards.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_a8107fbfaffd45c88f9a26406a4628a8~mv2.png?originWidth=1152&originHeight=768',
    },
  ],

  infrastructuredetails: [
    {
      _id: 'infra-1',
      featureName: '40ft & 30ft Wide Roads',
      featureDescription: 'Wide asphalted internal blacktop roads with paved walkways, concrete kerbs, and landscaped avenues.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_7a72d22d15914ed2bd7c93a8635ce3a6~mv2.png',
      displayOrder: 1,
      isAvailable: true,
    },
    {
      _id: 'infra-2',
      featureName: 'Underground Power Network',
      featureDescription: 'Concealed underground electric cabling with modern feeder pillars, eliminating dangling overhead cables.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_1ab304518da14921b1676a15203cf4fc~mv2.png',
      displayOrder: 2,
      isAvailable: true,
    },
    {
      _id: 'infra-3',
      featureName: 'Dedicated Water Supply',
      featureDescription: '24/7 pressurized water supply via dedicated overhead water tank and individual water connections to each plot.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_2a2e1f78d4c645ada67ef7f0f7d5a5f1~mv2.png',
      displayOrder: 3,
      isAvailable: true,
    },
    {
      _id: 'infra-4',
      featureName: 'Underground Drainage & STP',
      featureDescription: 'Advanced underground sewage network with a centralized state-of-the-art Sewage Treatment Plant.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_a13c0e2b857945caad870f2de465da68~mv2.png',
      displayOrder: 4,
      isAvailable: true,
    },
    {
      _id: 'infra-5',
      featureName: 'Solar LED Streetlights',
      featureDescription: 'Energy-efficient automatic solar street lighting illuminating all avenues, intersections, and public parks.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_d95c251c6e8c446ea798e4118b487426~mv2.png',
      displayOrder: 5,
      isAvailable: true,
    },
    {
      _id: 'infra-6',
      featureName: 'Rainwater Harvesting',
      featureDescription: 'Integrated recharge pits along road networks ensuring sustainable groundwater conservation.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_a157a6e95dd64312b3c3c8f5adfd694b~mv2.png',
      displayOrder: 6,
      isAvailable: true,
    },
  ],

  projectamenities: [
    {
      _id: 'amenity-1',
      amenityName: 'Zen Landscaped Gardens',
      description: 'Meticulously curated green spaces with tranquil water features, walking paths, and seating areas, offering a peaceful escape.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_f448e85482a74cd0869b9e82e5112f82~mv2.png',
      category: 'Nature',
      displayOrder: 1,
    },
    {
      _id: 'amenity-2',
      amenityName: 'Multi-Sport Courts',
      description: 'Premium courts for tennis, basketball, cricket and football designed for both casual play and competitive matches, with professional-grade surfacing.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_41f65441606348b9b6073ca406989294~mv2.png',
      category: 'Sports',
      displayOrder: 2,
    },
    {
      _id: 'amenity-3',
      amenityName: 'Outdoor Yoga Deck',
      description: 'A serene, open-air platform surrounded by lush greenery, ideal for yoga, meditation, and mindful practices under the open sky.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_a147dc6da9b84ac38e9942fefb729428~mv2.png',
      category: 'Wellness',
      displayOrder: 3,
    },
    {
      _id: 'amenity-4',
      amenityName: "Children's Adventure Zone",
      description: 'A safe and engaging play area designed for younger residents, featuring creative play structures and ample space for outdoor fun.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_080b2274e7b343ba80da2e208f9d0dd3~mv2.png',
      category: 'Kids',
      displayOrder: 4,
    },
    {
      _id: 'amenity-5',
      amenityName: 'Amphitheater & Event Lawn',
      description: 'An elegant outdoor venue for community events, cultural performances, and cinematic evenings under the stars.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_1ba34b918a704c9f854b6c85081256ea~mv2.png',
      category: 'Community',
      displayOrder: 5,
    },
    {
      _id: 'amenity-6',
      amenityName: 'Jogging & Cycling Tracks',
      description: 'Dedicated, tree-lined pathways winding through the development, perfect for invigorating runs or leisurely bike rides.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_869711d0a93c4566bb07da59b2be15ed~mv2.png',
      category: 'Fitness',
      displayOrder: 6,
    },
  ],

  gatedlivingbenefits: [
    {
      _id: 'gated-1',
      benefitTitle: '24/7 Multi-Tier Gated Security',
      benefitDescription: 'Guarded entry and exit pavilion with RFID boom barriers, CCTV surveillance across all streets, and perimeter compound wall.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_3b53e36b17524c809d205c5c484292ed~mv2.png',
      displayOrder: 1,
      isActive: true,
    },
    {
      _id: 'gated-2',
      benefitTitle: '100% Vastu-Compliant Layout',
      benefitDescription: 'Every single plot and internal avenue is planned adhering to authentic principles of Vaastu Shastra to invite positive energy, health, and prosperity.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_1ed0e26987f94f4da1faa6988026c93d~mv2.png',
      displayOrder: 2,
      isActive: true,
    },
    {
      _id: 'gated-3',
      benefitTitle: 'Lush Green Parks & Open Spaces',
      benefitDescription: 'Expansive open areas dedicated to lush tree-lined boulevards, landscaped gardens, water features, and jogging tracks.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_869711d0a93c4566bb07da59b2be15ed~mv2.png',
      displayOrder: 3,
      isActive: true,
    },
    {
      _id: 'gated-4',
      benefitTitle: 'Ready-to-Register Clear Titles',
      benefitDescription: 'Complete legal scrutiny with DC conversion, MPA sanction, and individual e-Khata ready for instantaneous registration and immediate construction.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_3afbc2ed677e4695a734f9bc4f870313~mv2.png',
      displayOrder: 4,
      isActive: true,
    },
  ],

  investmenthighlights: [
    {
      _id: 'inv-1',
      highlightTitle: 'High-Growth East Bangalore Corridor',
      highlightQuote: 'Situated right in the epicenter of the emerging Bangalore-Chennai Expressway and Malur industrial growth engine.',
      emphasizedPhrase: 'Exponential Capital Appreciation',
      displayOrder: 1,
      additionalContext: 'Strategic growth belt with continuous civic and industrial investments.',
    },
    {
      _id: 'inv-2',
      highlightTitle: 'Unbeatable Multi-Modal Connectivity',
      highlightQuote: 'Direct access to STRR (Satellite Town Ring Road), Hoskote tech corridor, Whitefield IT Hub, and Kempegowda Intl Airport.',
      emphasizedPhrase: 'Seamless Daily Commute',
      displayOrder: 2,
      additionalContext: '40 mins from Whitefield and 20 mins from Hoskote industrial hub.',
    },
    {
      _id: 'inv-3',
      highlightTitle: 'Grade-A Developer Credibility',
      highlightQuote: "Meenakshi Group's hallmark of on-time delivery, uncompromising construction quality, and absolute customer trust.",
      emphasizedPhrase: '30+ Years of Excellence',
      displayOrder: 3,
      additionalContext: 'Thousands of happy homeowners across prime Bengaluru locations.',
    },
    {
      _id: 'inv-4',
      highlightTitle: 'Immediate Construction & High Rental Yield',
      highlightQuote: 'With complete underground infrastructure, power, and water connections in place, you can build your dream villa immediately.',
      emphasizedPhrase: 'Ready to Build Today',
      displayOrder: 4,
      additionalContext: 'High rental and resale demand from nearby tech parks and industrial clusters.',
    },
  ],

  contactformsubmissions: [],
};

// In-memory data store for local execution
const store: Record<string, WixDataItem[]> = { ...initialData };

function createQueryResult<T extends WixDataItem>(
  items: T[],
  totalCount: number,
  limit: number,
  skip: number
): WixDataQueryResult<T> {
  const currentPage = Math.floor(skip / limit);
  const totalPages = Math.ceil(totalCount / limit) || 1;

  return {
    items,
    totalCount,
    length: items.length,
    pageSize: limit,
    currentPage,
    totalPages,
    hasNext: () => (currentPage + 1) * limit < totalCount,
    hasPrev: () => currentPage > 0,
    next: async () => {
      const nextSkip = skip + limit;
      return createQueryResult(items.slice(nextSkip, nextSkip + limit), totalCount, limit, nextSkip);
    },
    prev: async () => {
      const prevSkip = Math.max(0, skip - limit);
      return createQueryResult(items.slice(prevSkip, prevSkip + limit), totalCount, limit, prevSkip);
    },
  };
}

export class BaseCrudService {
  static async getAll<T extends WixDataItem>(
    collectionId: string,
    options?: PaginationOptions
  ): Promise<WixDataQueryResult<T>> {
    const limit = options?.limit ?? 50;
    const skip = options?.skip ?? 0;

    const collection = (store[collectionId] || []) as T[];
    const paginatedItems = collection.slice(skip, skip + limit);

    return createQueryResult<T>(paginatedItems, collection.length, limit, skip);
  }

  static async getById<T extends WixDataItem>(
    collectionId: string,
    itemId: string
  ): Promise<T | null> {
    const collection = (store[collectionId] || []) as T[];
    const item = collection.find((i) => i._id === itemId);
    return item ? ({ ...item } as T) : null;
  }

  static async create<T extends WixDataItem>(
    collectionId: string,
    item: Partial<T>
  ): Promise<T> {
    if (!store[collectionId]) {
      store[collectionId] = [];
    }

    const newItem = {
      _id: item._id || crypto.randomUUID(),
      _createdDate: new Date(),
      _updatedDate: new Date(),
      ...item,
    } as T;

    store[collectionId].push(newItem);
    return { ...newItem };
  }

  static async update<T extends WixDataItem>(
    collectionId: string,
    item: Partial<T> & { _id: string }
  ): Promise<T> {
    if (!store[collectionId]) {
      store[collectionId] = [];
    }

    const index = store[collectionId].findIndex((i) => i._id === item._id);
    if (index === -1) {
      throw new Error(`Item with id ${item._id} not found in collection ${collectionId}`);
    }

    const updatedItem = {
      ...store[collectionId][index],
      ...item,
      _updatedDate: new Date(),
    } as T;

    store[collectionId][index] = updatedItem;
    return { ...updatedItem };
  }

  static async delete(collectionId: string, itemId: string): Promise<boolean> {
    if (!store[collectionId]) return false;

    const initialLength = store[collectionId].length;
    store[collectionId] = store[collectionId].filter((i) => i._id !== itemId);
    return store[collectionId].length < initialLength;
  }
}
