export default function ProposalDashboard() {
  const services = [
    {
      title: 'SEO Services',
      items: [
        'Technical SEO',
        'Advanced On-Page SEO',
        'Off-Page SEO',
        'Local SEO',
        'AI SEO Visibility',
        'Schema Markup',
        'Core Web Vitals Optimization',
        'Website Hygiene & Maintenance',
        'Keyword Research & Clustering',
        'Search Console Monitoring',
      ],
    },
    {
      title: 'Social Media Marketing',
      items: [
        '12 School Activity Reels Monthly',
        '18 Educational & Branding Posts',
        'Content Calendar',
        'Hashtag Strategy',
        'Audience Engagement',
        'Trend-Based Content',
        'Brand Positioning',
        'Creative Strategy',
        'School Event & Festival Campaigns',
        'Monthly Reporting',
      ],
    },
    {
      title: 'Google My Business',
      items: [
        '30 Monthly Google Business Posts',
        'Google Maps Optimization',
        'Review Management',
        'Local SEO',
        'Business Visibility',
        'Weekly Updates',
        'Geo-Targeted Keywords',
        'Citation Building',
        'Reputation Management',
        'Local Ranking Growth',
      ],
    },
    {
      title: 'Website Maintenance',
      items: [
        'Website Updates',
        'Landing Page Edits',
        'Bug Fix Monitoring',
        'Content Upload Support',
        'Performance Monitoring',
        'Backup Monitoring',
        'Image Optimization',
        'Security Checks',
        'UI/UX Improvements',
        'Website Health Reports',
      ],
    },
    {
      title: 'Creative Production',
      items: [
        'Annual Function Coverage',
        'School Event Shoot Coordination',
        'Campus & Classroom Shoot Planning',
        'School Branding Shoot Concepts',
        'Reels Shoot Direction',
        'Social Media Shoot Planning',
        'Creative Storyboarding',
        'Campaign Visual Planning',
        'Student Activity Content Strategy',
        'Admission Campaign Creative Planning',
      ],
    },
  ];

  const deliverables = [
    { name: 'Website Blogs', value: 6 },
    { name: 'Off-Page Blogs', value: 6 },
    { name: 'Backlinks', value: 50 },
    { name: 'School Reels', value: 12 },
    { name: 'Educational Social Posts', value: 18 },
    { name: 'GMB Posts', value: 30 },
    { name: 'SEO Optimization Tasks', value: 40 },
    { name: 'Website Maintenance Tasks', value: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">NIPS Noida Digital Marketing Proposal</h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Comprehensive digital growth proposal for NIPS Noida focused on school branding, admissions visibility, parent engagement, local SEO growth, social media presence, Google visibility, website maintenance, event coverage, and institutional reputation building.
              </p>
            </div>

            <div className="bg-white text-black rounded-3xl p-6 min-w-[320px] shadow-xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Monthly Investment
              </p>

              <h2 className="text-6xl font-bold mt-3">₹40,000</h2>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Annual Investment</span>
                  <span className="font-bold">₹4,80,000</span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Contract Duration</span>
                  <span className="font-bold">12 Months</span>
                </div>

                <div className="flex justify-between pb-1">
                  <span className="text-gray-600">Coverage</span>
                  <span className="font-bold">All Noida Sectors</span>
                </div>
              </div>

              <div className="mt-5 bg-black text-white rounded-2xl p-4 text-sm leading-relaxed">
                Complete SEO, SMM, GMB, website maintenance, content marketing,
                school branding, local SEO, AI SEO visibility, and event coverage
                management package.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <h2 className="text-2xl font-bold mb-5">{service.title}</h2>

              <div className="space-y-3">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Monthly Execution Deliverables</h2>
              <p className="text-gray-500 mt-2">
                Planned monthly execution and performance deliverables.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {deliverables.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{item.name}</span>
                  <span className="font-bold">{item.value}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-black h-4 rounded-full"
                    style={{ width: `${Math.min(item.value * 2, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">SEO Coverage</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Technical SEO',
                'On-Page SEO',
                'Off-Page SEO',
                'Local SEO',
                'AI SEO',
                'Schema Markup',
                'Website Hygiene',
                'Core Web Vitals',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-200"
                >
                  <div className="text-2xl font-bold mb-2">✓</div>
                  <div className="font-semibold text-gray-700">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Expected School Growth Focus</h2>

            <div className="space-y-6">
              {[
                { label: 'Admission Inquiry Growth', percent: 90 },
                { label: 'Local Search Visibility', percent: 85 },
                { label: 'Social Media Engagement', percent: 80 },
                { label: 'School Brand Awareness', percent: 88 },
                { label: 'Parent Inquiry Generation', percent: 78 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.label}</span>
                    <span className="font-bold">{item.percent}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-black h-4 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-3">12-Month Digital Growth Roadmap</h2>
            <p className="text-gray-500 text-lg max-w-4xl">
              Structured one-year execution strategy designed to increase admissions,
              strengthen digital visibility, improve local search rankings, build parent trust,
              enhance school branding, and establish long-term institutional authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                quarter: 'Quarter 1',
                months: 'Month 1 - 3',
                title: 'Foundation & Digital Setup',
                goals: [
                  'Complete Technical SEO Audit',
                  'Website Hygiene & Performance Setup',
                  'GMB Optimization & Maps Visibility',
                  'Social Media Branding Setup',
                  'Keyword Research & SEO Mapping',
                  'Admission-Focused Content Strategy',
                  'Initial Backlink Building Campaigns',
                  'Parent Engagement Framework',
                ],
              },
              {
                quarter: 'Quarter 2',
                months: 'Month 4 - 6',
                title: 'Growth & Visibility Expansion',
                goals: [
                  'Advanced On-Page SEO Optimization',
                  'Regular Blog Publishing Strategy',
                  'Reels & Video Marketing Expansion',
                  'Local SEO Ranking Improvements',
                  'Google Maps Authority Building',
                  'Higher Engagement Social Campaigns',
                  'AI SEO Visibility Optimization',
                  'Admission Inquiry Funnel Improvement',
                ],
              },
              {
                quarter: 'Quarter 3',
                months: 'Month 7 - 9',
                title: 'Authority & Brand Building',
                goals: [
                  'High-Authority Backlink Campaigns',
                  'Advanced Technical SEO Monitoring',
                  'School Reputation Building',
                  'Event & Annual Function Coverage',
                  'Parent Trust Content Campaigns',
                  'AI Search & ChatGPT Visibility',
                  'Brand Awareness Expansion',
                  'Competitor Gap Domination Strategy',
                ],
              },
              {
                quarter: 'Quarter 4',
                months: 'Month 10 - 12',
                title: 'Scaling & Conversion Optimization',
                goals: [
                  'Admission Conversion Optimization',
                  'Advanced Lead Generation Campaigns',
                  'Long-Term SEO Authority Building',
                  'Conversion-Focused Landing Pages',
                  'Performance Scaling & Reporting',
                  'Advanced Social Media Campaigns',
                  'Website Experience Optimization',
                  'Institutional Digital Leadership Positioning',
                ],
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-3xl p-7 border border-gray-200 shadow-sm"
              >
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-black text-white text-sm px-4 py-2 rounded-full font-semibold">
                      {phase.quarter}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">
                      {phase.months}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight">
                    {phase.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {phase.goals.map((goal, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-black mt-2"></div>
                      <span className="text-gray-700 leading-relaxed">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl p-10 border border-gray-200 shadow-xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-3">12-Month Growth Targets & Coverage Strategy</h2>
              <p className="text-gray-500 text-lg max-w-4xl">
                Targeted digital growth strategy focused on dominating local school visibility across all Noida sectors through SEO, social media marketing, Google Maps optimization, and institutional branding.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">SEO Growth Targets</h3>
                  <div className="text-5xl font-bold text-black">01</div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: 'Keyword Ranking Growth',
                      desc: 'Target ranking improvements for school-related keywords across Noida.',
                    },
                    {
                      title: 'Organic Traffic Expansion',
                      desc: 'Consistent increase in parent-focused search traffic over 12 months.',
                    },
                    {
                      title: 'Local Search Visibility',
                      desc: 'Improve visibility for searches like best school in Noida.',
                    },
                    {
                      title: 'AI SEO Visibility',
                      desc: 'Improve discoverability in AI search systems & ChatGPT recommendations.',
                    },
                    {
                      title: 'Authority Building',
                      desc: 'Build long-term educational authority through content & backlinks.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">SMM Growth Targets</h3>
                  <div className="text-5xl font-bold text-black">02</div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: 'Parent Engagement Growth',
                      desc: 'Increase engagement through educational and school activity content.',
                    },
                    {
                      title: 'School Brand Awareness',
                      desc: 'Strengthen recognition of NIPS Noida across social platforms.',
                    },
                    {
                      title: 'Admission Campaign Reach',
                      desc: 'Target local families and parents through consistent campaigns.',
                    },
                    {
                      title: 'Reels & Video Visibility',
                      desc: 'Increase reach using school activity reels and event content.',
                    },
                    {
                      title: 'Community Building',
                      desc: 'Create stronger digital trust among students and parents.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">GMB & Local SEO Targets</h3>
                  <div className="text-5xl font-bold text-black">03</div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: 'Google Maps Visibility',
                      desc: 'Improve rankings across major Noida sectors and nearby locations.',
                    },
                    {
                      title: 'Local Parent Discovery',
                      desc: 'Increase local school discovery via Maps and GMB searches.',
                    },
                    {
                      title: 'Review & Reputation Growth',
                      desc: 'Build stronger online reputation through review management.',
                    },
                    {
                      title: 'Sector-Wise Search Targeting',
                      desc: 'Target all major sectors in Noida for higher search coverage.',
                    },
                    {
                      title: 'Higher Inquiry Generation',
                      desc: 'Improve direct calls, website visits, and parent inquiries.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 bg-black rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Target Coverage',
                    value: 'All Noida',
                    desc: 'Sector-wise local search visibility expansion',
                  },
                  {
                    title: 'SEO Objective',
                    value: 'Top Rankings',
                    desc: 'Educational & admission-focused keyword growth',
                  },
                  {
                    title: 'Social Objective',
                    value: 'Brand Trust',
                    desc: 'Parent engagement & community building',
                  },
                  {
                    title: 'GMB Objective',
                    value: 'Maps Visibility',
                    desc: 'Higher local discovery & inquiry generation',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                    <div className="text-sm text-gray-400 mb-2">{item.title}</div>
                    <div className="text-3xl font-bold mb-2">{item.value}</div>
                    <div className="text-gray-300 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-black rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'SEO Growth',
                  value: '12 Months',
                  desc: 'Continuous ranking & authority growth',
                },
                {
                  title: 'Content Production',
                  value: '720+ Assets',
                  desc: 'Reels, posts, blogs & branding creatives',
                },
                {
                  title: 'Local Visibility',
                  value: 'Google Maps',
                  desc: 'Strong regional school discovery',
                },
                {
                  title: 'Admission Focus',
                  value: 'Lead Growth',
                  desc: 'Higher inquiry & parent engagement',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <div className="text-sm text-gray-400 mb-2">{item.title}</div>
                  <div className="text-3xl font-bold mb-2">{item.value}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-10 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-5">
                Why Choose Our School Marketing Services?
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>✓ Complete SEO + SMM + GMB management under one package</p>
                <p>✓ AI SEO & ChatGPT visibility optimization included</p>
                <p>✓ High-quality backlinks & authority building</p>
                <p>✓ Professional content strategy and execution</p>
                <p>✓ Local SEO & Google Maps ranking optimization</p>
                <p>✓ Dedicated monthly reporting and monitoring</p>
                <p>✓ Website maintenance and performance monitoring included</p>
                <p>✓ Creative shoot planning for events, products & campaigns</p>
                <p>✓ Complete school branding and admission-focused growth strategy</p>
                <p>✓ School event coverage including annual functions & activities</p>
                <p>✓ Parent-focused social media communication strategy</p>
                <p>✓ Educational brand positioning for higher admission visibility</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-black shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Package Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span>Monthly Blogs</span>
                  <span className="font-bold">12 Total</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>Monthly Posts</span>
                  <span className="font-bold">60 Total</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>Monthly Backlinks</span>
                  <span className="font-bold">50</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>SEO Coverage</span>
                  <span className="font-bold">Full Stack</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-2xl font-bold">
                  <span>Monthly Investment</span>
                  <span>₹40,000</span>
                </div>

                <div className="flex justify-between text-xl font-semibold text-gray-700">
                  <span>Annual Investment</span>
                  <span>₹4,80,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 py-6">
          Prepared Exclusively For NIPS Noida
        </div>
      </div>
    </div>
  );
}
