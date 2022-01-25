import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

export default function ClientByCode() {
  const router = useRouter();

  return (
    <Layout title='Dynamic Navigation'>
      <div>code = {router.query.code}</div>
      <div>subsidiary = {router.query.subsidiary}</div>
    </Layout>
  );
}
