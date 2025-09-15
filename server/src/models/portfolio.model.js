import mongoose from 'mongoose'

const portfolioSettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: 'Portfolio'
  },
  tagline: {
    type: String,
    default: 'Illustrator and Designer'
  },
  heroTitle: {
    type: String,
    default: 'PORTFOLIO'
  },
  aboutMeTitle: {
    type: String,
    default: 'A Little About Me'
  },
  aboutMeDescription: String,
  skillsTitle: {
    type: String,
    default: 'Skill & Expertise'
  },
  workExperienceTitle: {
    type: String,
    default: 'Work Experience'
  },
  contactTitle: {
    type: String,
    default: 'Work with me'
  },
  heroImages: [{
    url: String,
    alt: String,
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  aboutImages: [{
    url: String,
    alt: String,
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  theme: {
    primaryColor: {
      type: String,
      default: '#000000'
    },
    secondaryColor: {
      type: String,
      default: '#ffffff'
    },
    accentColor: {
      type: String,
      default: '#424040'
    },
    fontFamily: {
      type: String,
      default: 'Urbanist'
    }
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    ogImage: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

export const PortfolioSettings = mongoose.model('PortfolioSettings', portfolioSettingsSchema)