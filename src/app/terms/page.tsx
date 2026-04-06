import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Proxima Health",
  description: "Proxima Health Terms of Service for Environmental Toxin Testing.",
};

export default function TermsPage() {
  return (
    <main className="bg-proxima-cream text-proxima-black">
      <div className="section-container max-w-3xl py-20 md:py-28">
        <h1 className="font-nb-international text-3xl md:text-5xl mb-2">Terms of Service</h1>
        <p className="font-nb-international text-base md:text-lg text-proxima-black/70 mb-4">
          for Environmental Toxin Testing
        </p>
        <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/60 mb-10">
          Last updated and effective: March 11, 2026
        </p>

        <div className="space-y-5 font-nb-international text-sm md:text-base leading-relaxed text-proxima-black/80 [&_h2]:font-nb-international [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-proxima-black [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-nb-international [&_h3]:text-lg [&_h3]:text-proxima-black [&_h3]:mt-6 [&_h3]:mb-2 [&_a]:underline [&_a]:text-proxima-black hover:[&_a]:opacity-70">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo; or &ldquo;ToS&rdquo;) govern your (&ldquo;Patient&rdquo; or &ldquo;you&rdquo;) agreement to undergo testing of blood, urine, or other biological matrices (&ldquo;Test&rdquo; or &ldquo;Testing&rdquo;) facilitated by Proxima Health, Inc. (&ldquo;Proxima,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By agreeing to these Terms or using the testing services facilitated by Proxima, you acknowledge that you have read, understood, and agree to be bound by the Terms. If you do not agree, you should not proceed with the Testing.
          </p>
          <p className="uppercase tracking-wider text-xs font-mono bg-proxima-black/5 p-4">
            This paragraph contains an important notice: please read it carefully. You agree that disputes between you and Proxima will be resolved by binding, individual arbitration unless you opt out in accordance with the dispute resolution process described at the end of these Terms of Use. Unless you opt out of arbitration, you are waiving your right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. If you wish to opt out of arbitration, follow the opt-out procedure specified in the arbitration section at the end of these Terms of Use.
          </p>

          <h2>Description of Services</h2>
          <p>
            Proxima provides administrative and logistical services to facilitate the Testing, including coordination with independent laboratories and healthcare providers. Proxima is not a testing laboratory and does not design or perform the Test itself. Proxima does not provide medical advice, diagnosis, treatment, or any clinical services. The Test is offered on a business-to-business-to-consumer (B2B2C) basis through order by licensed physicians and is not available for order directly by consumers. The Test is not intended to diagnose, treat, cure, prevent, or mitigate any disease or condition, does not replace the advice of a licensed physician, and is not intended as the sole basis for medical decision-making.
          </p>

          <h2>Acknowledgement and Consent to Testing</h2>
          <p>By proceeding with Testing, you acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Test has been ordered by your clinician, who is responsible for determining whether it is appropriate for you and for obtaining your medical informed consent.</li>
            <li>The Test may detect substances whose health significance is uncertain or not fully understood.</li>
            <li>The Test results may not establish the presence or absence of disease and may require interpretation by your clinician in the context of your medical history and other information.</li>
            <li>You voluntarily consent to the collection and analysis of your biological sample by the independent laboratory for the purposes described in these Terms.</li>
          </ul>

          <h2>Relationships and Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Physician&rsquo;s Role:</strong> The Test must be ordered by a licensed physician (&ldquo;Physician&rdquo;) who is responsible for determining the appropriateness of the Test for you, obtaining your informed consent, interpreting the results, and providing any necessary medical advice, follow-up care, or treatment. The physician may also draw the test sample and ship it to the independent laboratory (&ldquo;Lab&rdquo;). The Physician is solely responsible for all clinical aspects of your care.</li>
            <li><strong>Lab&rsquo;s Role:</strong> The Test is performed by an independent Lab selected by Proxima. The Lab will analyze the sample and provide the results directly to your Physician. Proxima has no control over the Lab&rsquo;s operations, testing methods, or accuracy of results.</li>
            <li><strong>Proxima&rsquo;s Role:</strong> Proxima solely provides non-clinical, administrative and logistical services. Proxima does not supervise, control, or direct the Physician or the Lab and is not responsible for their acts or omissions. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship among Proxima, the Physician, or the Lab. Proxima does not guarantee the accuracy, reliability, or timeliness of the Test results.</li>
            <li><strong>Your Responsibilities:</strong> You agree to follow your Physician&rsquo;s instructions regarding sample collection for the Test, provide accurate information, and comply with these Terms. You understand that you should consult with your Physician for questions, medical advice, and follow-up related to your Test results. You acknowledge that the Test is elective and self-pay only, with no insurance reimbursement.</li>
          </ul>

          <h2>Payment</h2>
          <p>
            All payments for the test are self-pay and collected directly by your Physician. Your Physician will remit to Proxima the applicable lab testing fee plus a service fee for Proxima&rsquo;s administrative and logistical services. Proxima will remit the lab testing fee to the Lab. You are responsible for all fees associated with the Test, and there are no refunds once the sample is collected and shipped.
          </p>

          <h2>Privacy and Data Use</h2>

          <h3>Data Collection and Consent</h3>
          <p>
            By agreeing to these Terms, you consent to the collection, use, and sharing of your personal information and other data as described herein. Your Physician and Lab will collect data related to the Test, including but not limited to your biological sample, demographic information, clinical information, and test results. This data may be shared with Proxima as reasonably necessary to provide the services to you, communicate about the services with you (including sending you promotional materials), and other business purposes consistent with our legitimate interests.
          </p>
          <p>
            Proxima is not a &ldquo;covered entity&rdquo; or &ldquo;business associate&rdquo; under the Health Insurance Portability and Accountability Act of 1996 (HIPAA), and information handled by Proxima in connection with the test may not be subject to HIPAA.
          </p>

          <h3>Anonymized/De-Identified Data</h3>
          <p>
            You hereby grant Proxima your informed, affirmative, and voluntary consent to access, use, retain, disclose, and create derivative works from your de-identified or anonymized data (data from which personal identifiers have been removed in accordance with applicable privacy laws) for research, product development, marketing, and other business purposes. This may include aggregating your data to analyze trends, improve services, or share insights with third parties. De-identified data are not considered personal information and are not subject to the same privacy protections. This consent survives termination of these Terms and is not revocable once data has been de-identified, aggregated, or incorporated into research, analytics, or commercial materials, to the extent permitted by law.
          </p>
          <p>
            You also grant Lab your informed, affirmative, and voluntary consent to access, use, retain, or disclose your de-identified or anonymized data to improve its services, develop benchmarks, and/or support internal analytics.
          </p>

          <h3>Privacy Practices</h3>
          <p>
            Proxima complies with applicable privacy laws. We may disclose your personal information to service providers, affiliates, and as otherwise permitted under or required by law, and as described in these Terms.
          </p>

          <h2>Consent to Receive Electronic Communications</h2>
          <p>
            You agree that we may send the following to you by email: legal disclosures, Terms of Use, future changes to any of the foregoing, and other notices, policies, communications or disclosures and information related to the Testing or Proxima. Emails are not always secure because they travel over networks that we do not own or control. You consent to receive such communications electronically. To the extent you have provided us with your contact information, you agree to promptly update your contact information to ensure accuracy. Your consent to conduct actions electronically covers all interactions between you and Proxima.
          </p>
          <p>
            In addition to the communications described above, you agree that we may send you marketing, promotional, and informational communications from Proxima, including emails about other Proxima services, new or future offerings, educational content, newsletters, surveys, and special offers or invitations related to Proxima&rsquo;s services. These communications may be sent using the contact information you provide to us. You understand that such communications are not required to receive the Test or related services.
          </p>
          <p>
            You may opt out of certain types of electronic communications, including marketing or promotional emails, by following the unsubscribe instructions in any communication you receive from or on behalf of us. Your withdrawal of consent will be effective within a reasonable time after we receive notice of your withdrawal. We will need to send you certain communications electronically. You will not be able to opt out of these transactional or information communications. Your withdrawal of consent will not affect the legal validity or enforceability of the Terms of Use provided to and accepted by you. Opting out of marketing communications will not affect your receipt of transactional, legal, or service-related communications.
          </p>

          <h2>Disclaimers and Limitations of Liability</h2>

          <h3>Disclaimers</h3>
          <p className="uppercase tracking-wide text-xs font-mono">
            The test and Proxima&rsquo;s services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. Proxima makes no clinical warranties regarding the test results, including their accuracy, completeness, or usefulness for any medical purpose. You acknowledge that the test is not a substitute for professional medical advice and that all interpretation and care decisions are the sole responsibility of your physician.
          </p>
          <p>
            The Testing and Proxima&rsquo;s services are for informational purposes only and do not constitute and should not be interpreted as professional medical advice, diagnosis, treatment, or recommendations of any kind. Further, the Testing and Proxima&rsquo;s services are not intended for use in the diagnosis of disease or other conditions or in the cure, mitigation, treatment, or prevention of disease. You should always seek the advice of a qualified health care professional with any questions or concerns you may have regarding your individual needs and any medical conditions.
          </p>
          <p className="uppercase tracking-wide text-xs font-mono">
            Do not use the Testing or Proxima&rsquo;s services during any medical emergency. Do not ignore or delay obtaining professional medical advice because of information accessed through the Testing or Proxima&rsquo;s services. Call 911 or contact your health care professional for all medical emergencies. Proxima is not responsible or liable for any injury, failure of the service, information, and/or products you obtain through Proxima&rsquo;s services to diagnose, treat, or address a medical condition or exacerbation of a medical condition.
          </p>
          <p>
            Proxima is not liable for any actions or omissions of your Physician or the Lab, including delays, errors, or failures in testing or result delivery.
          </p>
          <p>
            Proxima does not represent or warrant that the Test is reviewed, cleared, or approved by the U.S. Food and Drug Administration (FDA), unless expressly stated otherwise. No claims are made regarding clinical utility, medical necessity, or health outcomes.
          </p>

          <h3>Limitations of Liability</h3>
          <p className="uppercase tracking-wide text-xs font-mono">
            To the maximum extent permitted by law, Proxima, its affiliates, officers, directors, employees, agents, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or related to these Terms, the Test, or Proxima&rsquo;s services, even if advised of the possibility of such damages. Proxima&rsquo;s total liability shall not exceed the amount paid to Proxima for the specific test in question.
          </p>

          <h2>Acknowledgement of Risks and Scientific Limitations</h2>
          <p>You acknowledge and agree that environmental toxin testing:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>May detect substances at levels with uncertain or disputed clinical significance;</li>
            <li>May reflect transient, historical, or environmental exposure not associated with disease or harm;</li>
            <li>May lack established reference ranges, regulatory thresholds, or consensus interpretation;</li>
            <li>Should not be used alone to diagnose, treat, cure, or prevent any disease.</li>
          </ul>
          <p>
            You expressly assume all risks associated with undergoing the Test and with any decisions made by you or your Physician based on the test results.
          </p>

          <h2>Indemnification</h2>
          <p>
            By accessing and/or using the Testing, you agree to indemnify and hold Proxima, our subsidiaries, affiliates and parents, and their respective officers, directors, employees, members, agents, representatives, consultants, legal and business advisors, business partners, information providers, licensors and licensees and their respective successors, heirs and assigns (collectively, the &ldquo;Indemnified Parties&rdquo;) harmless from and against any and all liability and costs, including, without limitation, reasonable attorneys&rsquo; fees and expenses, incurred by the Indemnified Parties in connection with (directly or indirectly) or any claim arising out of, or breach by you of, the Terms of Use or from your unauthorized use of the Testing.
          </p>

          <h2>Dispute Resolution</h2>

          <h3>Binding Arbitration</h3>
          <p>
            Any dispute, claim, or controversy arising out of or relating to these Terms, the Test, or Proxima&rsquo;s services (&ldquo;Dispute&rdquo;) shall be resolved exclusively through binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. Arbitration shall take place in Travis County, Texas, or via remote means if agreed. The arbitrator&rsquo;s decision shall be final and binding, and judgment may be entered in any court of competent jurisdiction. The arbitrator shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, enforceability, or formation of this arbitration agreement, including any claim that all or part of it is void or unenforceable. If any portion of this arbitration agreement is found unenforceable, the remainder shall remain in force to the fullest extent permitted by law. Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set forth in the AAA Rules.
          </p>
          <p>
            You have the right to litigate any Dispute if you provide us with written notice to opt out of arbitration (&ldquo;Arbitration Opt-Out Notice&rdquo;) by email at <a href="mailto:info@proxima.health">info@proxima.health</a> within 30 days following the date you first accept these Terms of Use, or if you have not registered for an account, then within 30 days following the date you first order our Testing. If you do not provide us with an Arbitration Opt-Out Notice within the 30-day period, you will be deemed to have knowingly and intentionally waived your right to litigate any Dispute.
          </p>

          <h3>Class Action Waiver</h3>
          <p>
            Unless you provide us with an Arbitration Opt-Out Notice within the time period prescribed above, you acknowledge and agree that you are waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless you otherwise agree with us in writing, the arbitrator may not consolidate more than one person&rsquo;s claims, and may not otherwise preside over any form of any class or representative proceeding.
          </p>

          <h3>Exceptions</h3>
          <p>
            Notwithstanding the above, either party may seek injunctive relief in a court of competent jurisdiction for intellectual property disputes or to enforce an arbitration award.
          </p>

          <h3>Limitation on Time to File Claims</h3>
          <p className="uppercase tracking-wide text-xs font-mono">
            Any cause of action or claim you may have arising out of or relating to these Terms of Use, Testing, or any other items or services included or otherwise made available to you by Proxima must be commenced within one (1) year after the cause of action accrues, otherwise, such cause of action or claim is permanently barred.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of Texas, without regard to conflict of laws principles. You agree to submit to the personal jurisdiction of the courts located in Travis County, Texas for any actions not subject to arbitration.
          </p>

          <h2>Miscellaneous</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Proxima regarding the Test and supersede any prior agreements.</li>
            <li><strong>Severability:</strong> If any provision is held invalid, the remainder shall continue in full force.</li>
            <li><strong>Changes to the Terms of Use:</strong> Proxima may amend these Terms of Use at any time and for any reason. Your continued use of our Testing or other services after amendment constitutes acceptance. We will provide you with notice of these changes in accordance with applicable law.</li>
            <li><strong>Survival:</strong> Provisions relating to data use, disclaimers, limitation of liability, arbitration, class action waiver, indemnification, and governing law shall survive termination or completion of the Test.</li>
            <li><strong>Contact:</strong> For questions, contact us at <a href="mailto:info@proxima.health">info@proxima.health</a>.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
