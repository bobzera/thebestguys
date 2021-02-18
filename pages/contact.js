import Layout from "../components/layout"
import TituleComponent from "../components/tituleComponent"
import { useState } from 'react'

export default function Contact(){
    
 
    const [ inputName, setInputName ] = useState('');
    const [ inputEmail, setInputEmail ] = useState('');
    const [ inputPhone, setInputPhone ] = useState('');
    const [ inputMsg, setInputMsg ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            const res = fetch('/api/sendmail', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: inputEmail,
                phone: inputPhone,
                name: inputName,
                text: inputMsg

              }) 
            })            
            
          } catch(err) {
            alert(err)
          }              
    }
    
    return <Layout>
        <TituleComponent titule="Get In Touch" tituleSpan="" subTitule="contact us" />
        <div className="m-4 bg-white my-10 py-2">
            <h1 className="font-semibold p-2 py-4">YOUR INQUIRY</h1>
            <p className="text-gray-500 p-2">Contact us with your requirement and one of our project managers will be in touch to see what we can offer.</p>


        <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">Name</label>
                <input value={inputName} onChange={e => setInputName(e.target.value)} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              
              <div className="col-span-6 sm:col-span-4">
                <label for="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input value={inputEmail} onChange={e => setInputEmail(e.target.value)} type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>


              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" className="block text-sm font-medium text-gray-700">Phone</label>
                <input value={inputPhone} onChange={e => setInputPhone(e.target.value)} type="textarea" name="postal_code" id="postal_code" autocomplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div  className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label for="about" class="block text-sm font-medium text-gray-700">
              Comment or Message 
              </label>
              <div class="mt-1">
                <textarea value={inputMsg} onChange={e => setInputMsg(e.target.value)} id="about"  name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder=""></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                We are happy to hear you 
              </p>
            </div>

            </div>
          </div>
          <div className="px-4 py-3 sm:px-6">
            <button type="submit" className="p-2 px-8 cursor-pointer bg-blue-600 text-white rounded-md border-b-2 border-blue-300">
              Submit
            </button>
          </div>
        </div>
      </form>
              
         </div>
    </Layout>
}