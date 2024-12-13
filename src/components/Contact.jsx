import { Link } from "react-router-dom"
import '../style/contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <h1>Contact Information</h1>
        <div className='contact-info'>
            <p><strong>Service at your fingertips! You can easily request a return, print a free return label, and request certain exchanges via your <Link  to='/'>Order History</Link> under "My Account."</strong></p>
            <p> <strong>Can't find what you need? Our Customer Loyalty Team is available 24/7 for anything you need!</strong> (Zappos believes strongly in a healthy work life balance for employees, so we typically close our support channels on several major U.S. holidays, including: New Year’s Day, MLK Day, President’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving Day, and Christmas Day.)</p>
            <h3>1. CALL the Zappos Customer Loyalty Team:</h3>
            <p><Link to='/'>1-800-927-7671</Link></p>
            <h3>2. TEXT the Zappos Customer Loyalty Team:</h3>
            <p>Text CHAT to <Link to='/'>1-833-927-7898</Link> to chat with the Zappos Customer Loyalty Team by text. Agents are available to text daily from 5am - 8pm PST.</p>
            <p>By texting CHAT, you consent to receive text messages (including automated and marketing messages) from or on behalf of Zappos at your mobile number provided. Consent is not a condition of any purchase. Text STOP to end your chat. Message & data rates may apply.</p>
            <h3>3. CONNECT WITH LIVE HELP VIA CHAT:</h3>
            <p>Ask your question right now with a member of the Zappos Customer Loyalty Team.
             <Link to='/'>Go ahead - start a Live Chat conversation now!</Link></p>
            <p>Frequently Asked Questions: Answers to our most commonly asked questions: Frequently Asked Questions
            Haga click aquí para <Link to='/'>preguntas frecuentes en español</Link></p>
        </div>
    </div>
  )
}
