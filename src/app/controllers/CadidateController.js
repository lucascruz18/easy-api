import * as Yup from 'yup';
import Candidate from '../models/Candidate';
import Knowledge from '../models/Knowledge';

import NewCandidateMail from '../job/NewCandidateMail';
import Queue from '../../lib/Queue';

class CandidateController {
  async index(req, res) {
    const candidates = await Candidate.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 10,
        populate: ['knowledge'],
        sort: '-createdAt',
      }
    );

    return res.json({ candidates });
  }

  async store(req, res) {
    const { knowledges } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      skype: Yup.string().required(),
      telphone: Yup.string().required(),
      linkedin: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      portfolio: Yup.string().required(),
      job_availability: Yup.string().required(),
      best_time_to_work: Yup.string().required(),
      hourly_wage: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const candidate = await Candidate.create({
      ...req.body,
    });

    candidate.knowledge = [];

    const userKnowledge = await Knowledge.create({
      ...knowledges,
      user_id: candidate.id,
    });

    candidate.knowledge.push(userKnowledge);

    await candidate.save();

    await Queue.add(NewCandidateMail.key, { candidate });

    const { id, name, email, knowledge } = candidate;

    return res.json({ id, name, email, knowledge });
  }

  async update(req, res) {
    const { knowledges } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      skype: Yup.string(),
      telphone: Yup.string(),
      linkedin: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      portfolio: Yup.string(),
      job_availability: Yup.string(),
      best_time_to_work: Yup.string(),
      hourly_wage: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },

      { new: true }
    );

    candidate.knowledge = [];

    const userKnowledge = await Knowledge.create({
      ...knowledges,
      user_id: candidate.id,
    });

    candidate.knowledge.push(userKnowledge);

    await candidate.save();

    const { id, name, email, knowledge } = candidate;

    return res.json({ id, name, email, knowledge });
  }

  async show(req, res) {
    const candidate = await Candidate.findOne({ _id: req.params.id }).populate(
      'knowledge'
    );

    return res.json({ candidate });
  }
}

export default new CandidateController();
