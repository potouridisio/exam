export type Category = {
  id: number;
  name: string;
};
export type Question = {
  id: number,
  question: string,
  description: string,
  answers: {
    answer_a: string,
    answer_b: string,
    answer_c: string,
    answer_d: string | null,
    answer_e: string | null,
    answer_f: string | null
  },
  multiple_correct_answers: boolean,
  correct_answers: {
    answer_a_correct: boolean,
    answer_b_correct: boolean,
    answer_c_correct: boolean,
    answer_d_correct: boolean,
    answer_e_correct: boolean,
    answer_f_correct: boolean
  },
  correct_answer: string,
  explanation: string,
  tip: string,
  tags: [
    {
      name: string
    }
  ],
  category: string,
  difficulty: string

}