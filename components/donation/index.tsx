import { payments, jpPayments } from '../../utils/constants';
import { PricingCard } from '../pricing-card';

export function Donation() {
  return (
    <>
      <div className="flex flex-col text-lg text-center mt-10">
        <div>I work so hard to make this product free for everyone.</div>

        <div>If you really enjoy the product. Please consider donating here: 😉</div>

        <div className="mt-5">
          <a
            className="bg-web-gold hover:bg-web-gold-900 px-8 py-3 mt-5 rounded"
            target="_blank"
            rel="noreferrer"
            href="https://www.paypal.com/paypalme/davidnguyen179"
          >
            <svg
              className="inline-block mr-1"
              width={20}
              height={20}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <svg x="0px" y="0px" viewBox="0 0 512.001 512.001">
                <path
                  style={{ fill: '#03A9F4' }}
                  d="M425.457,117.739c-3.121-1.838-6.961-1.966-10.197-0.341c-3.231,1.629-5.416,4.786-5.803,8.384 c-0.384,3.499-0.981,6.997-1.728,10.667c-20.885,94.784-62.827,140.885-128.256,140.885h-96c-5.062,0.009-9.42,3.574-10.432,8.533 l-32,149.995l-5.717,38.187c-3.287,17.365,8.125,34.107,25.489,37.394c1.915,0.362,3.858,0.549,5.807,0.558h64.213 c14.718,0.045,27.55-10,31.04-24.299l25.941-103.701h55.659c65.685,0,111.083-52.373,127.829-147.477l0,0 C482.356,191.238,464.068,143.856,425.457,117.739z"
                ></path>
                <path
                  style={{ fill: '#283593' }}
                  d="M405.339,38.017c-21.078-23.909-51.327-37.731-83.2-38.016h-176.64 C119.064-0.141,96.558,19.2,92.721,45.355L37.873,411.243c-2.627,17.477,9.41,33.774,26.887,36.402 c1.586,0.239,3.189,0.357,4.793,0.356h81.92c5.062-0.009,9.42-3.574,10.432-8.533l30.187-140.8h87.467 c75.904,0,126.059-53.056,149.099-157.867c0.926-4.178,1.638-8.4,2.133-12.651C436.139,95.815,426.81,62.778,405.339,38.017z"
                ></path>
              </svg>
            </svg>
            Paypal
          </a>
        </div>
      </div>

      <div className="flex flex-col text-lg text-center mt-10">
        <div className="flex justify-center items-center gap-x-1">
          If you are in <span className="text-3xl">🇯🇵 🗼</span>
        </div>
      </div>

      <div className="text-center mt-10">
        <div className="flex flex-col justify-center md:flex-row md:space-x-5">
          {jpPayments.map((item) => {
            const { logo, title, href } = item;
            return <PricingCard mode="donation" key={title} src={logo} title={title} href={href} />;
          })}
        </div>
      </div>

      <div className="flex flex-col text-center mt-10">
        <div className="flex justify-center items-center gap-x-1">
          Or <span className="text-3xl">🇻🇳</span>
        </div>
      </div>

      <div className="text-center mt-10">
        <div className="flex flex-col justify-center md:flex-row md:space-x-5">
          {payments.map((item) => {
            const { logo, title, href } = item;
            return <PricingCard mode="donation" key={title} src={logo} title={title} href={href} />;
          })}
        </div>
      </div>
    </>
  );
}
