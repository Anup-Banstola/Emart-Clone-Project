function Privacy() {
  return (
    <div className="px-4 py-5">
      <h2 className="border-b pb-5 text-center text-3xl font-medium">
        E-Mart - Terms of Usage and Privacy Policy
      </h2>
      <div className="px-2">
        <h2 className="mt-4 text-xl font-semibold">
          TERMS OF USAGE AND PRIVACY POLICY
        </h2>
        <p className="mt-2 text-justify text-sm">
          Welcome to our E-Mart App, developed by NIPUNA Prabidhik Sewa. By
          accessing and using this App, you hereby agree to comply with and be
          bound by the following terms and conditions of use, as well as our
          privacy policy. If you do not agree with any part of these terms and
          conditions, please refrain from using our App. The terms
          &quot;E-Mart&quot;, &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;
          refer to the owner of this App, NIPUNA Prabidhik Sewa. The terms
          &quot;you,&quot; &quot;users,&quot; &quot;customers,&quot; or
          &quot;viewers&quot; refer to the individuals who access and utilize
          our services.
        </p>
        <h2 className="mt-5 text-xl font-semibold">GENERAL</h2>
        <p className="mt-2 text-justify text-sm">
          This App is owned and operated by NIPUNA Prabidhik Sewa. The primary
          purpose of our App is to facilitate the process of order taking for
          small orders. It provides a platform for capturing and managing
          customer orders efficiently. It is important to note that we are not
          responsible for the products or services offered by the businesses
          utilizing our App for order taking. Our role is limited to providing a
          technological solution for order management.
        </p>
        <h2 className="mt-5 text-xl font-semibold">PRIVACY POLICY</h2>
        <p className="mt-2 text-justify text-sm">
          At the E-Mart App, we are committed to protecting your privacy and
          ensuring the security of your personal information. This privacy
          policy outlines how we collect, use, and safeguard the data you
          provide while using our App.
        </p>
        <h2 className="mt-5 text-lg font-semibold">Information We Collect:</h2>
        <p className="mt-2 text-justify text-sm">
          We may collect certain information from you when you use our App,
          including but not limited to:
        </p>
        <ul className="ml-4 list-disc text-justify text-sm">
          <li>
            Contact Information: Name, email address, Pan No., phone number, and
            other relevant details.
          </li>

          <li>
            Order Details: Information related to the orders you place through
            the App.
          </li>
          <li>
            Usage Data: Data on how you interact with the App, such as
            navigation paths and timestamps.
          </li>
        </ul>
        <h2 className="mt-5 text-lg font-semibold">
          How We Use Your Information:
        </h2>
        <p className="mt-2 text-justify text-sm">
          {' '}
          We use the collected information for the following purposes:
        </p>

        <ul className="ml-4 list-disc text-justify text-sm">
          <li>
            Order Processing: To facilitate the order-taking process and fulfill
            customer requests.
          </li>
          <li>
            Communication: To send order confirmations, updates, and
            notifications.
          </li>
          <li>
            App Improvement: To enhance and optimize the functionality and user
            experience of the App.
          </li>
          <li>
            Customer Support: To provide assistance and resolve inquiries.
          </li>
        </ul>
        <h2 className="mt-5 text-lg font-semibold">Data Security:</h2>
        <p className="mt-2 text-justify text-sm">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>
        <h2 className="mt-5 text-lg font-semibold">
          Disclosure of Information:
        </h2>
        <p className="mt-2 text-justify text-sm">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share certain information with our business
          partners and service providers for the purpose of providing our
          services.
        </p>
        <h2 className="mt-5 text-lg font-semibold">
          Changes to the Privacy Policy:
        </h2>
        <p className="mt-2 text-justify text-sm">
          We reserve the right to modify or update this privacy policy at any
          time. Any changes will be effective upon posting on the App.
        </p>
        <p className="mt-2 text-justify text-sm">
          By using the E-Mart App, you acknowledge that you have read,
          understood, and agreed to the terms of this privacy policy. If you
          have any questions or concerns about your privacy or the use of your
          information, please contact us at{' '}
          <a href="mailto:contact@mail.com" className="text-blue-500">
            info@nipunasewa.com
          </a>
        </p>
        <p className="mt-3">Thank you for using E-Mart!</p>
      </div>
    </div>
  );
}

export default Privacy;
