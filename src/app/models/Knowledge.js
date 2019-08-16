import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const KnowledgeSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
      required: true,
    },
    ionic: {
      type: Number,
      required: true,
    },
    react_js: {
      type: Number,
      required: true,
    },
    react_native: {
      type: Number,
      required: true,
    },
    android: {
      type: Number,
      required: true,
    },
    ios: {
      type: Number,
      required: true,
    },
    html: {
      type: Number,
      required: true,
    },
    css: {
      type: Number,
      required: true,
    },
    bootstrap: {
      type: Number,
      required: true,
    },
    jquery: {
      type: Number,
      required: true,
    },
    angularjs_1: {
      type: Number,
      required: true,
    },
    angular: {
      type: Number,
      required: true,
    },
    java: {
      type: Number,
      required: true,
    },
    asp_net_mvc: {
      type: Number,
      required: true,
    },
    asp_net_webform: {
      type: Number,
      required: true,
    },
    c: {
      type: Number,
      required: true,
    },
    c_sharp: {
      type: Number,
      required: true,
    },
    nodejs: {
      type: Number,
      required: true,
    },
    cake: {
      type: Number,
      required: true,
    },
    django: {
      type: Number,
      required: true,
    },
    majento: {
      type: Number,
      required: true,
    },
    php: {
      type: Number,
      required: true,
    },
    vue: {
      type: Number,
      required: true,
    },
    wordpress: {
      type: Number,
      required: true,
    },
    phyton: {
      type: Number,
      required: true,
    },
    ruby: {
      type: Number,
      required: true,
    },
    my_sql_server: {
      type: Number,
      required: true,
    },
    mysql: {
      type: Number,
      required: true,
    },
    salesforce: {
      type: Number,
      required: true,
    },
    photoshop: {
      type: Number,
      required: true,
    },
    illustrator: {
      type: Number,
      required: true,
    },
    seo: {
      type: Number,
      required: true,
    },
    laravel: {
      type: Number,
      required: true,
    },
    other_language: {
      type: String,
      required: false,
    },
    link_crud: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

KnowledgeSchema.plugin(mongoosePaginate);

export default mongoose.model('Knowledge', KnowledgeSchema);
