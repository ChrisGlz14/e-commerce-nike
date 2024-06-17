import faunadb from 'faunadb';

const q = faunadb.query;
const faunaClient = new faunadb.Client({ secret: 'fnAFirM4VoAAQsg9zVhCJxolBkenl8q3Zb9AIjJ6'});

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

