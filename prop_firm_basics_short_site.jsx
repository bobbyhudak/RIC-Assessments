export default function PropFirmBasicsShortSite() {
  const cards = [
    {
      title: "1. Pay",
      text: "You pay a fee to get access to a test account."
    },
    {
      title: "2. Prove it",
      text: "You must follow rules and hit profit goals without losing too much."
    },
    {
      title: "3. Get funded",
      text: "If you pass, the firm lets you trade a larger account."
    },
    {
      title: "4. Get paid",
      text: "If you make money, the firm gives you a payout and keeps a cut."
    }
  ];

  const payoutExamples = [
    {
      label: "Simple idea",
      value: "$1,000 profit"
    },
    {
      label: "Example split",
      value: "80/20"
    },
    {
      label: "Your payout",
      value: "$800"
    }
  ];

  const accountExamples = [
    {
      name: "Tradeify",
      cost: "$139 each",
      ten: "$1,390 for 10",
      twenty: "$2,780 for 20"
    },
    {
      name: "Topstep",
      cost: "$109 each",
      ten: "$1,090 for 10",
      twenty: "$2,180 for 20"
    },
    {
      name: "Take Profit Trader",
      cost: "$150 each",
      ten: "$1,500 for 10",
      twenty: "$3,000 for 20"
    }
  ];

  const rules = [
    {
      title: "Daily loss limit",
      text: "Example: lose too much in one day and the account is done."
    },
    {
      title: "Max drawdown",
      text: "Example: if total losses get too large, you fail even if you were winning before."
    },
    {
      title: "Profit target",
      text: "Example: you may need to make a certain amount before you pass."
    },
    {
      title: "Trading days minimum",
      text: "Example: you may have to trade at least 5 days, not just 1 lucky day."
    },
    {
      title: "News rules",
      text: "Example: some firms do not let you trade during big economic announcements."
    },
    {
      title: "Position limits",
      text: "Example: you may only be allowed to trade a certain number of contracts."
    }
  ];

  const algoReasons = [
    "It follows fixed rules well.",
    "It can keep losses tight.",
    "It removes some emotion.",
    "It matches a rule-based environment."
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <main className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Prop firm basics</div>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">What a prop firm is</h1>
            <p className="mt-4 text-lg leading-8 text-stone-600 md:text-xl">
              A prop firm is a company that lets you trade using its capital. You pay for access, follow its rules, and if you do well, you get paid a share of the profits.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-stone-900">{card.title}</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">{card.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">Payout example</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {payoutExamples.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-300">{item.label}</div>
                  <div className="mt-3 text-3xl font-black text-orange-300">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-stone-200">
              That does not mean you keep every dollar made in the account. The firm usually keeps part, and you get the rest.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-orange-50 p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-700">One warning</div>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              If you break the rules or lose too much, the account is gone. Then you usually have to buy another one if you want to keep going.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Standard rules</div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {rules.map((rule) => (
              <div key={rule.title} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                <div className="text-lg font-black">{rule.title}</div>
                <div className="mt-3 text-stone-700 leading-7">{rule.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Example account math</div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {accountExamples.map((item) => (
              <div key={item.name} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                <div className="text-xl font-black">{item.name}</div>
                <div className="mt-4 space-y-2 text-stone-700">
                  <div>1 account: {item.cost}</div>
                  <div>10 accounts: {item.ten}</div>
                  <div>20 accounts: {item.twenty}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-orange-600 p-8 text-center text-white shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-100">Bottom line</div>
          <p className="mx-auto mt-4 max-w-3xl text-2xl font-black leading-10">
            You pay for a shot, follow the firm's rules, and try to earn payouts that are bigger than the cost of the accounts.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-900 p-8 text-white shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">Why algos can make sense here</div>
          <h2 className="mt-3 text-3xl font-black">Because prop firms are rule-based, tight algos can be smart</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-200">
            Yes, generally I agree. Since prop firms are built around hard rules, algo trading with tight parameters can be a smart fit because the system can follow the same plan every time.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {algoReasons.map((reason) => (
              <div key={reason} className="rounded-[1.5rem] bg-white/10 p-5 text-stone-100">
                {reason}
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-stone-300">
            That said, a bad algorithm will still fail fast. The idea only works if the strategy is actually good and the risk limits are tight.
          </p>
        </section>
      </main>
    </div>
  );
}
