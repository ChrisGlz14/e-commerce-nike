

const q = faunadb.query;
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });

const fetchProducts =  async () => {
  try {
    const result = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("product"))),
        q.Lambda("id", q.Get(q.Var("id")))
      )
    );
    console.log(result);
  } catch (error) {
    console.error('Error: ', error);
  }
};

export default fetchProducts

