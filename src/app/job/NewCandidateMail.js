import Mail from '../../lib/Mail';

class NewCandidateMail {
  get key() {
    return 'NewCandidateMail';
  }

  async handle({ data }) {
    const { candidate } = data;

    console.log('A fila executou!');

    await Mail.sendMail({
      to: `${candidate.name} <${candidate.email}>`,
      subject: 'Novo usuário cadastrado no banco de talentos',
      template: 'newCandidate',
      context: {
        name: candidate.name,
        email: candidate.email,
        city: candidate.city,
        state: candidate.state,
      },
    });
  }
}

export default new NewCandidateMail();
