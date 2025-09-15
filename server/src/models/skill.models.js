import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Languages', 'Frameworks', 'Other']
  },
  proficiencyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Intermediate'
  },
  yearsOfExperience: {
    type: Number,
    min: 0,
    max: 50
  },
  description: String,
  icon: String,
  color: String,
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const skillCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: String,
  icon: String,
  color: String,
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

skillSchema.index({ category: 1, name: 1 })
skillSchema.index({ proficiencyLevel: 1 })
skillSchema.index({ order: 1 })

skillCategorySchema.index({ order: 1 })

export const Skill = mongoose.model('Skill', skillSchema)
export const SkillCategory = mongoose.model('SkillCategory', skillCategorySchema)