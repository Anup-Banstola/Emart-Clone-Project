import { redirect } from 'next/navigation';

function Admin() {
  redirect('/admin/orders');
}

export default Admin;
