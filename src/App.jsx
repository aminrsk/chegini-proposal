import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Target, CheckCircle, AlertCircle, BarChart3, Clock, HelpCircle, Edit3, Save, X } from 'lucide-react';

const API_URL = 'http://localhost:3008/api';

// Default content structure
const defaultContent = {
  header: {
    title: 'Chegini Mortgage AI Platform',
    subtitle: 'Partnership Proposal & Organizational Structure',
    preparedBy: 'Amin Rastikerdar',
    date: 'November 10, 2025'
  },
  executive: {
    businessObjective: 'Build an AI-powered platform that automates underwriting process and potentially other processes for mortgage brokerages, and scales to serve both in-house operations and external brokerages as a SaaS product. As well as building an AI-enhanced digital marketing system that generates qualified leads consistently.',
    revenueTargetShort: '$20-40K/month from direct mortgage deals',
    revenueTargetMedium: 'Scale to $60-100K/month',
    platform1Title: 'AI Underwriter Platform',
    platform1Desc: 'Replaces manual underwriting process, matches clients with optimal lenders from 4,000+ products',
    platform2Title: 'Velocity Integration',
    platform2Desc: 'Seamless data extraction from existing mortgage workflow, API-powered automation',
    platform3Title: 'Marketing & CRM System',
    platform3Desc: 'Lead generation, email automation, sales funnel management for agent network',
    decisionSummary: {
      decision1: 'Select partnership structure (Option 1 or 2)',
      decision2: 'Approve initial capital investment',
      decision3: 'Commit to 8-10 week development timeline',
      capitalInitial: '$500-800',
      capitalMonthly: '$500',
      capitalTotal: '~$7K',
      roiFirstRevenue: 'Week 9-10',
      roiBreakEven: 'Month 2-3',
      roiYear1: '$240K-480K',
      nextCheckpoint: 'Week 2 - Legal entity formation & tool setup completion'
    },
    criticalSuccessFactors: [
      'Platform Launch on Schedule: Complete AI underwriter and CRM system within 8-10 weeks to enable first marketing campaign',
      'Email List Activation: Successfully engage Kambiz\'s 22,000 contact database with 25%+ open rates and 5%+ conversion to qualified leads',
      'First Revenue Milestone: Close 2-3 deals by Week 9-10, validating the business model and AI platform effectiveness',
      'Partnership Alignment: Maintain clear communication on equity split, revenue distribution, and decision-making authority to avoid conflicts'
    ],
    marketPainPoints: [
      'Pre-Construction Appraisal Crisis: Banks valuate 10-30% below purchase price, deals collapse, agents lose commissions',
      'Manual Product Selection: Brokers manually compare 4,000+ products but typically only work with 6-8 familiar lenders',
      'Daily Rate Volatility: Product rates and rules change daily via lender emails, impossible to track manually',
      'Suboptimal Matching: Human limitation leads to missed opportunities and slower processing',
      'Document Fraud Concerns: Some brokers alter documents, Velocity locks files to prevent this'
    ],
    competitiveAdvantages: [
      'Comprehensive Coverage: AI evaluates ALL 4,000+ products, not just familiar ones',
      'Scotiabank Special Channel: Access to proprietary appraisal process (10-15% higher valuations)',
      'B-Lender Expertise: Automatic routing for undocumented income clients (non-income qualified programs)',
      '"Remedy" Function: AI suggests actionable solutions when clients don\'t qualify',
      'Industry Expertise + Tech: Kambiz\'s 15+ years experience combined with cutting-edge AI',
      'GTA Market Focus: Average home price $1.05M, 23% of Canadian mortgage debt'
    ]
  },
  revenue: {
    avgMortgage: '$750K',
    avgMortgageNote: 'Based on 2025 market data',
    commissionRange: '0.7-1.2%',
    commissionNote: 'Prime lenders: 0.7%, Alt lenders: 1.2%+',
    revenuePerDeal: '$5,250',
    revenueNote: 'Conservative estimate @ 0.7%',
    operatingCostsNote: 'Operating costs vary from $500-$1500 CAD/month depending on AI/API usage, hosting requirements, and system scaling after platform launch',
    revenueAssumptionNote: 'Revenue assumes average $750K mortgage @ 0.7% commission (conservative)',
    blendersNote: 'B-lenders and private deals can generate 1.5-3% commissions ($11K-$22K per deal)',
    saasTitle: 'SaaS Product (Month 12+)',
    saasItems: [
      'Sell platform to other brokerages',
      '$500-$1,000/month per brokerage',
      'Target: 10 brokerages = $10K/month'
    ],
    agentToolsTitle: 'Real Estate Agent Tools',
    agentToolsItems: [
      'Lead management system',
      'Marketing automation',
      '$50-$100/month per agent'
    ],
    trainingTitle: 'Training & Consulting',
    trainingItems: [
      'AI adoption workshops',
      'Mortgage broker training',
      '$2,000-$5,000 per program'
    ]
  },
  partnership: {
    recommendedApproach: 'Equal partnership recognizes the combined value of technical innovation and industry expertise. Both partners bring critical, complementary assets that are equally necessary for success.',
    kambizContributes: [
      '22,000+ real estate contact database',
      'Active mortgage broker license & compliance',
      'Industry expertise (15+ years)',
      'Lender relationships & negotiation power',
      'Handles all client consultations & closings',
      'Velocity/Discovery subscriptions',
      'Covers $350 USD/month tool costs',
      'Scotiabank special appraisal channel access'
    ],
    aminContributes: [
      '60 hours already invested in prototype',
      '400 hours committed for 8-10 week build',
      'Ongoing 35-50 hours/week dedicated time',
      'AI/ML expertise & platform architecture',
      'Marketing automation & CRM systems',
      'Lead generation & email campaign management',
      'All technical development & maintenance',
      'Product expansion for SaaS offering'
    ],
    investmentReality: 'Amin will dedicate 400 hours over 8-10 weeks (40 hrs/week average) with NO compensation during this intensive build phase. This is in addition to the 60 hours already invested in the prototype. Total unpaid investment: 460 hours before first revenue.',
    option2Description: 'Acknowledges Amin\'s higher time investment during build phase, transitions to lower split as platform matures.',
    option2Note: 'Requires clear documentation and tracking of phase transitions. Consider simplicity vs. fairness trade-off.',
    questions: [
      'Operational Costs: What are the actual costs per deal? (Processing time, administrative overhead, Dominion Lending split)',
      'Commission Structure & Brokerage Split: How does the 0.7% base commission vary? (A-lenders vs B-lenders, special programs) What percentage goes to Dominion Lending vs. retained by Kambiz?',
      'Time Investment: What is Kambiz\'s realistic hours per week commitment during different phases?',
      'Existing Revenue: What is current monthly mortgage income that this will enhance/replace?'
    ],
    decisionMaking: [
      'Kambiz: Final authority on mortgage operations, lender selection, client relations',
      'Amin: Final authority on technical development, marketing strategy, platform features',
      'Major business decisions (hiring, expansion, pricing): Mutual agreement required'
    ],
    exitStrategy: [
      'Right of first refusal: Partner must offer sale to other partner before external buyers',
      'Valuation: Based on 3x trailing 12-month net profit',
      'Dissolution: Amin retains all source code/IP, Kambiz retains client relationships',
      'No external sale without mutual consent'
    ]
  },
  workflow: {
    steps: [
      { phase: '1. Lead Generation', owner: 'Amin', details: 'Email campaigns to 22K contacts → Landing page → CRM capture → Funnel stages (Discovered → Contacted → Qualified → Converted)' },
      { phase: '2. Client Onboarding', owner: 'Kambiz', details: 'Initial consultation → Velocity form completion → Document upload (T4, NOA, bank statements, credit check via Equifax)' },
      { phase: '3. AI Underwriting', owner: 'AI Platform', details: 'Extract data from Velocity → Match against 1,109 lending rules → 3 outcomes: Product match / Remedies / Optimization recommendations' },
      { phase: '4. Manual Review', owner: 'Kambiz', details: 'Review AI recommendations → Generate submission letter → Select final lender from Discovery → Validate with Broker of Record' },
      { phase: '5. Lender Submission', owner: 'Kambiz', details: 'Submit package to lender underwriter → Handle conditions/additional docs → Negotiate if needed → Secure approval' },
      { phase: '6. Closing & Commission', owner: 'Both', details: 'Client signs mortgage → Lender funds deal → Commission paid to brokerage → Split per agreement → Update CRM for retention marketing' }
    ],
    kambizResponsibilities: [
      'All client-facing consultations and calls',
      'Final lender selection and submission',
      'Negotiation with lenders for better rates/terms',
      'Handling conditions and additional document requests',
      'Managing Velocity and Discovery subscriptions',
      'Maintaining broker license and compliance',
      'Training new brokers if business expands',
      'Industry networking and lender relationships'
    ],
    aminResponsibilities: [
      'AI underwriter platform development & maintenance',
      'Marketing website and landing pages',
      'Custom CRM development and management',
      'Email marketing campaigns and automation',
      'Lead generation and funnel optimization',
      'Velocity API integration and data extraction',
      'AI model training and improvement',
      'Future product expansion (SaaS offerings)'
    ],
    timeReality: 'Both partners are committing substantial time. The equal split reflects the combined value of technical innovation + industry expertise, not just hours worked.',
    kambizWeekly: [
      'Client consultations: 10-15 hours',
      'Document review: 5-8 hours',
      'Lender communication: 5-8 hours',
      'Administrative: 3-5 hours',
      'Total: 25-35 hours/week'
    ],
    aminWeekly: [
      'Platform development: 15-20 hours',
      'Marketing/CRM: 10-15 hours',
      'Campaign management: 5-8 hours',
      'Meetings & coordination: 3-5 hours',
      'Total: 35-50 hours/week'
    ],
    decisionMakingTable: [
      { decision: 'Client acceptance/rejection', authority: 'Kambiz', note: 'Based on risk assessment and compliance' },
      { decision: 'Lender selection for deals', authority: 'Kambiz', note: 'With AI recommendations as guidance' },
      { decision: 'Technical platform features', authority: 'Amin', note: 'Subject to business needs discussion' },
      { decision: 'Marketing campaigns & messaging', authority: 'Amin', note: 'With Kambiz review for industry accuracy' },
      { decision: 'Hiring staff (admin, brokers)', authority: 'Joint Decision', note: 'Both partners must agree' },
      { decision: 'Major capital expenses (over $5K)', authority: 'Joint Decision', note: 'Both partners must agree' },
      { decision: 'SaaS pricing & business model', authority: 'Joint Decision', note: 'Both partners must agree' },
      { decision: 'Partnership changes or exit', authority: 'Joint Decision', note: 'Requires mutual consent' }
    ]
  },
  timeline: {
    phase1Title: 'Weeks 1-2: Partnership Agreement & Legal Setup',
    phase1Badge: 'Decision & Legal',
    phase1LeadBy: 'Both Partners',
    phase1Deliverables: [
      'Choose partnership type (individual vs. company partnership)',
      'Select equity split model (Option 1 or Option 2)',
      'Review and finalize partnership agreement',
      'Sign partnership agreement',
      'Incorporate business entity (Ontario Corp or Partnership)',
      'Open business bank account',
      'Set up accounting system'
    ],
    phase1Investment: '$500-$800 (legal filing, business setup)',
    phase1CriticalNote: 'NO technical work begins until agreement is signed. Amin starts development in Week 3.',
    
    phase2Title: 'Weeks 3-12: AI Platform Development',
    phase2Badge: 'Build Phase',
    phase2LeadBy: 'Amin with Kambiz support',
    phase2AminWork: [
      'AI underwriter platform core development',
      'Velocity API integration for data extraction',
      'Custom CRM with sales funnel stages',
      'Landing page with lead capture form',
      'Email automation sequences (5 drip campaigns)',
      'Marketing website and campaign setup',
      'AI matching logic and testing',
      'Set up development subdomain (test.cheginimortgage.com)',
      'Subscribe to required tools (hosting, email, AI APIs)',
      'Begin email list cleaning (22K contacts)'
    ],
    phase2KambizSupport: [
      'Provide real case files for AI training',
      'Review and approve marketing messaging',
      'Test Velocity data extraction',
      'Secure Velocity API access (resolve pending status)'
    ],
    phase2Investment: 'Tool subscriptions ($500 during the build phase; after launch, costs may increase depending on usage and project scale) will be paid by Kambiz before revenue generation, but Kambiz may recover this cost from the system\'s first generated revenue.',
    phase2Milestone: 'By end of Week 12, platform is operational and ready for first marketing campaign',
    
    phase3Title: 'Month 1-2 Post-Launch: First Marketing Campaign',
    phase3Badge: 'Launch Phase',
    phase3Timeline: 'Weeks 13-16 (or Months 1-2 after platform launch)',
    phase3Marketing: [
      'Send first email campaign to 1,000 segmented contacts (real estate agents) and increase the send gradually over the weeks',
      'Launch landing pages and lead capture',
      'Monitor CRM pipeline and lead quality',
      'A/B test initial messaging'
    ],
    phase3Operations: [
      'Process first qualified leads through AI underwriter',
      'Handle 3-5 client consultations',
      'Provide feedback to refine AI recommendations',
      'Close first 2-3 deals'
    ],
    phase3Metrics: {
      leads: '10-20',
      consultations: '3-5',
      deals: '2-3',
      revenue: '$10,500-$15,750'
    },
    phase3RevenueTarget: '3-4 deals/month average',
    
    phase4Title: 'Month 3-6 Post-Launch: Scale & Optimize',
    phase4Badge: 'Growth Phase',
    phase4Marketing: [
      'Scale email campaigns to full 22K list (segmented)',
      'Launch cold outreach to construction developers',
      'A/B test landing pages for conversion optimization',
      'Set up retargeting ads (Google/Facebook)',
      'Host first webinar: AI in Mortgages for agents'
    ],
    phase4Platform: [
      'AI generates submission letters automatically',
      'Enhance remedy recommendation engine',
      'Integrate with more lenders (B-lenders, private)',
      'Build client self-service portal for example credit repair service'
    ],
    phase4Business: [
      'Prepare agent training presentation',
      'Explore SaaS beta with 1-2 friendly brokers'
    ],
    phase4RevenueTarget: '8-10 deals/month, $40K+/month revenue',
    
    phase5Title: 'Month 7-12 Post-Launch: Market Expansion',
    phase5Badge: 'Scale Phase',
    phase5Revenue: [
      'Core business: 15-20 deals/month',
      'Launch 16-week training program for real estate agents',
      'Partner with 2-3 real estate brokerages',
      'Begin SaaS offerings to other brokerages',
      'Agent tools and training programs'
    ],
    phase5Team: [
      'Hire first admin assistant (part-time)',
      'Consider 1-2 junior brokers (optional)',
      'Marketing coordinator (part-time, optional)',
      'Part-time developer support for Amin (optional)'
    ],
    phase5Strategic: [
      'Patent AI underwriting process',
      'Position for future expansion',
      'Expand to other provinces (future consideration)'
    ],
    phase5RevenueTarget: '15-20 deals/month, $60-100K+/month revenue',
    
    kpis: {
      marketing: [
        'Email open rate (over 25%)',
        'Landing page conversion (over 5%)',
        'Cost per lead (under $50)'
      ],
      sales: [
        'Lead-to-consultation (30%)',
        'Consultation-to-deal (40%)',
        'Average deal size ($750K+)'
      ],
      operations: [
        'Time per deal (under 2 hours)',
        'AI accuracy rate (over 85%)',
        'Client satisfaction (over 4.5/5)'
      ],
      financial: [
        'Monthly revenue growth',
        'Operating margin (over 70%)',
        'Partner income vs. target'
      ]
    }
  }
};

const EditableText = ({ value, onChange, multiline = false, className = '', placeholder = '' }) => {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2 border-2 border-blue-300 rounded focus:border-blue-500 focus:outline-none ${className}`}
        rows={4}
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-2 border-2 border-blue-300 rounded focus:border-blue-500 focus:outline-none ${className}`}
      placeholder={placeholder}
    />
  );
};

const Tooltip = ({ children, content }) => {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block">
      <span
        className="cursor-help border-b border-dashed border-slate-400"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && (
        <span className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-slate-800 rounded-lg shadow-lg whitespace-nowrap">
          {content}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></span>
        </span>
      )}
    </span>
  );
};

const PartnershipProposal = () => {
  const [activeTab, setActiveTab] = useState('executive');
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  
  const tabs = [
    { id: 'executive', label: 'Executive Summary', icon: Target },
    { id: 'partnership-revenue', label: 'Partnership & Revenue Model', icon: DollarSign },
    { id: 'workflow', label: 'System Workflow', icon: BarChart3 },
    { id: 'timeline', label: 'Timeline & Milestones', icon: Clock }
  ];

  // Load content from server
  useEffect(() => {
    fetch(`${API_URL}/content`)
      .then(res => res.json())
      .then(data => {
        if (data.content && Object.keys(data.content).length > 0) {
          setContent({ ...defaultContent, ...data.content });
        }
      })
      .catch(err => console.error('Failed to load content:', err));
  }, []);

  const updateContent = (path, value) => {
    const keys = path.split('.');
    setContent(prev => {
      const newContent = { ...prev };
      let current = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  const saveContent = async () => {
    setSaving(true);
    setSaveMessage('');
    try {
      const response = await fetch(`${API_URL}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      });
      const data = await response.json();
      if (data.success) {
        setSaveMessage('✓ Saved successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
      }
    } catch (error) {
      setSaveMessage('✗ Failed to save');
      console.error('Save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Edit Mode Toggle */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          {editMode && (
            <>
              <button
                onClick={saveContent}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              {saveMessage && (
                <div className={`px-4 py-2 rounded-lg shadow-lg ${saveMessage.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {saveMessage}
                </div>
              )}
            </>
          )}
          <button
            onClick={() => setEditMode(!editMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all ${
              editMode 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {editMode ? (
              <>
                <X className="w-4 h-4" />
                Exit Edit Mode
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" />
                Edit Content
              </>
            )}
          </button>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              {editMode ? (
                <div className="space-y-3">
                  <EditableText
                    value={content.header.title}
                    onChange={(val) => updateContent('header.title', val)}
                    className="text-3xl md:text-4xl font-bold"
                    placeholder="Main Title"
                  />
                  <EditableText
                    value={content.header.subtitle}
                    onChange={(val) => updateContent('header.subtitle', val)}
                    className="text-lg"
                    placeholder="Subtitle"
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {content.header.title}
                  </h1>
                  <p className="text-slate-600 text-lg">{content.header.subtitle}</p>
                </>
              )}
            </div>
            <div className="hidden md:block text-right ml-4">
              <div className="text-sm text-slate-500">Prepared by</div>
              {editMode ? (
                <div className="space-y-2 mt-1">
                  <EditableText
                    value={content.header.preparedBy}
                    onChange={(val) => updateContent('header.preparedBy', val)}
                    placeholder="Name"
                  />
                  <EditableText
                    value={content.header.date}
                    onChange={(val) => updateContent('header.date', val)}
                    placeholder="Date"
                  />
                </div>
              ) : (
                <>
                  <div className="font-semibold text-slate-900">{content.header.preparedBy}</div>
                  <div className="text-sm text-slate-500">{content.header.date}</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {activeTab === 'executive' && <ExecutiveSummary content={content} editMode={editMode} updateContent={updateContent} />}
          {activeTab === 'partnership-revenue' && <PartnershipAndRevenue content={content} editMode={editMode} updateContent={updateContent} />}
          {activeTab === 'workflow' && <SystemWorkflow content={content} editMode={editMode} updateContent={updateContent} />}
          {activeTab === 'timeline' && <Timeline content={content} editMode={editMode} updateContent={updateContent} />}
        </div>
      </div>
    </div>
  );
};

const ExecutiveSummary = ({ content, editMode, updateContent }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Summary</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Business Objective
        </h3>
        {editMode ? (
          <EditableText
            value={content.executive.businessObjective}
            onChange={(val) => updateContent('executive.businessObjective', val)}
            multiline
            placeholder="Business objective description"
          />
        ) : (
          <p className="text-slate-700">{content.executive.businessObjective}</p>
        )}
      </div>

      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Revenue Target
        </h3>
        {editMode ? (
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Short-term (Month 1-3):</label>
              <EditableText
                value={content.executive.revenueTargetShort}
                onChange={(val) => updateContent('executive.revenueTargetShort', val)}
                placeholder="Short-term target"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Medium-term (Month 6-12):</label>
              <EditableText
                value={content.executive.revenueTargetMedium}
                onChange={(val) => updateContent('executive.revenueTargetMedium', val)}
                placeholder="Medium-term target"
              />
            </div>
          </div>
        ) : (
          <>
            <p className="text-slate-700 mb-2">
              <strong>Short-term (Month 1-3):</strong> {content.executive.revenueTargetShort}
            </p>
            <p className="text-slate-700">
              <strong>Medium-term (Month 6-12):</strong> {content.executive.revenueTargetMedium}
            </p>
          </>
        )}
      </div>
    </div>

    <div className="bg-slate-50 rounded-lg p-6">
      <h3 className="font-semibold text-slate-900 mb-4">What We're Building</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            {editMode ? (
              <div className="space-y-2">
                <EditableText
                  value={content.executive.platform1Title}
                  onChange={(val) => updateContent('executive.platform1Title', val)}
                  placeholder="Platform 1 title"
                  className="font-medium"
                />
                <EditableText
                  value={content.executive.platform1Desc}
                  onChange={(val) => updateContent('executive.platform1Desc', val)}
                  multiline
                  placeholder="Platform 1 description"
                  className="text-sm"
                />
              </div>
            ) : (
              <>
                <div className="font-medium text-slate-900">{content.executive.platform1Title}</div>
                <div className="text-sm text-slate-600">{content.executive.platform1Desc}</div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            {editMode ? (
              <div className="space-y-2">
                <EditableText
                  value={content.executive.platform2Title}
                  onChange={(val) => updateContent('executive.platform2Title', val)}
                  placeholder="Platform 2 title"
                  className="font-medium"
                />
                <EditableText
                  value={content.executive.platform2Desc}
                  onChange={(val) => updateContent('executive.platform2Desc', val)}
                  multiline
                  placeholder="Platform 2 description"
                  className="text-sm"
                />
              </div>
            ) : (
              <>
                <div className="font-medium text-slate-900">{content.executive.platform2Title}</div>
                <div className="text-sm text-slate-600">{content.executive.platform2Desc}</div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            {editMode ? (
              <div className="space-y-2">
                <EditableText
                  value={content.executive.platform3Title}
                  onChange={(val) => updateContent('executive.platform3Title', val)}
                  placeholder="Platform 3 title"
                  className="font-medium"
                />
                <EditableText
                  value={content.executive.platform3Desc}
                  onChange={(val) => updateContent('executive.platform3Desc', val)}
                  multiline
                  placeholder="Platform 3 description"
                  className="text-sm"
                />
              </div>
            ) : (
              <>
                <div className="font-medium text-slate-900">{content.executive.platform3Title}</div>
                <div className="text-sm text-slate-600">{content.executive.platform3Desc}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Rest of executive summary - static for now, can be made editable later */}
    <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="font-semibold text-amber-900 mb-2">Critical Success Factors</h3>
          <ul className="space-y-2 text-slate-700">
            {(content.executive?.criticalSuccessFactors || defaultContent.executive.criticalSuccessFactors).map((factor, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={factor}
                    onChange={(val) => {
                      const factors = [...(content.executive?.criticalSuccessFactors || defaultContent.executive.criticalSuccessFactors)];
                      factors[idx] = val;
                      updateContent('executive.criticalSuccessFactors', factors);
                    }}
                    className="inline-block w-full"
                    placeholder="Success factor"
                  />
                ) : (
                  <span>{factor}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-slate-900 text-white rounded-lg p-6">
      <h3 className="font-semibold mb-4">Why This Works Now</h3>
      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-medium mb-3">Market Pain Points</div>
          <ul className="space-y-2 text-slate-300">
            {(content.executive?.marketPainPoints || defaultContent.executive.marketPainPoints).map((point, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={point}
                    onChange={(val) => {
                      const points = [...(content.executive?.marketPainPoints || defaultContent.executive.marketPainPoints)];
                      points[idx] = val;
                      updateContent('executive.marketPainPoints', points);
                    }}
                    multiline
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Pain point"
                  />
                ) : (
                  <span>{point}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Our Competitive Advantage</div>
          <ul className="space-y-2 text-slate-300">
            {(content.executive?.competitiveAdvantages || defaultContent.executive.competitiveAdvantages).map((advantage, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={advantage}
                    onChange={(val) => {
                      const advantages = [...(content.executive?.competitiveAdvantages || defaultContent.executive.competitiveAdvantages)];
                      advantages[idx] = val;
                      updateContent('executive.competitiveAdvantages', advantages);
                    }}
                    multiline
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Competitive advantage"
                  />
                ) : (
                  <span>{advantage}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Combined Partnership & Revenue Model Component
const PartnershipAndRevenue = ({ content, editMode, updateContent }) => {
  const [option1Kambiz, setOption1Kambiz] = useState(60);
  const [option1ToolCost, setOption1ToolCost] = useState(500);
  const [option2Phase1Amin, setOption2Phase1Amin] = useState(45);
  const [option2Phase2Amin, setOption2Phase2Amin] = useState(40);

  const avgMortgage = 750000;
  const commissionRate = 0.007;
  const avgCommission = avgMortgage * commissionRate;
  const netRevenuePerDeal = avgCommission - option1ToolCost;

  const calculateSplit = (kambizPercent) => {
    const kambizShare = netRevenuePerDeal * (kambizPercent / 100);
    const aminShare = netRevenuePerDeal * ((100 - kambizPercent) / 100);
    return { aminShare, kambizShare };
  };

  const option1Split = calculateSplit(option1Kambiz);
  const option2Phase1Split = calculateSplit(100 - option2Phase1Amin);
  const option2Phase2Split = calculateSplit(100 - option2Phase2Amin);

  // Revenue scenarios calculations based on Option 1 settings
  const revenueScenarios = [
    {
      timeline: 'Month 1-2',
      dealsPerMonth: '3-4',
      avgDeals: 3.5,
      months: 2
    },
    {
      timeline: 'Month 3-6',
      dealsPerMonth: '8-10',
      avgDeals: 9,
      months: 4
    },
    {
      timeline: 'Month 7-12',
      dealsPerMonth: '15-20',
      avgDeals: 17.5,
      months: 6
    }
  ].map(scenario => {
    const grossRevenue = scenario.avgDeals * scenario.months * avgCommission;
    const operatingCosts = option1ToolCost * scenario.months;
    const netRevenue = grossRevenue - operatingCosts;
    const kambizShare = netRevenue * (option1Kambiz / 100);
    const aminShare = netRevenue * ((100 - option1Kambiz) / 100);
    return { ...scenario, grossRevenue, operatingCosts, netRevenue, kambizShare, aminShare };
  });

  // Conservative scenario (Month 3-6)
  const conservativeScenario = revenueScenarios[1];
  const conservativeAminIncome = conservativeScenario.aminShare / conservativeScenario.months;
  const conservativeExceeds = conservativeAminIncome - 15000;

  // Optimistic scenario (Month 7-12)
  const optimisticScenario = revenueScenarios[2];
  const optimisticAminIncome = optimisticScenario.aminShare / optimisticScenario.months;
  const optimisticAnnual = optimisticAminIncome * 12;

  return (
    <div className="space-y-6">
      {/* Partnership Structure Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Partnership Structure Options</h2>

        <div className="space-y-4">
          <div className="border-2 border-green-500 bg-green-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Option 1: Adjustable Equity Split</h3>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Interactive</span>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-4">
              <h4 className="font-semibold text-slate-900 mb-4">Adjust Partnership Split:</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Kambiz's Share:</span>
                    <span className="font-bold text-blue-700">{option1Kambiz}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={option1Kambiz}
                    onChange={(e) => setOption1Kambiz(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Amin's Share:</span>
                    <span className="font-bold text-green-700">{100 - option1Kambiz}%</span>
                  </div>
                  <div className="w-full h-2 bg-green-500 rounded-lg" style={{ width: `${100 - option1Kambiz}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Kambiz Contributes</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {(content.partnership?.kambizContributes || defaultContent.partnership.kambizContributes).map((item, idx) => (
                    <li key={idx}>
                      • {editMode ? (
                        <EditableText
                          value={item}
                          onChange={(val) => {
                            const items = [...(content.partnership?.kambizContributes || defaultContent.partnership.kambizContributes)];
                            items[idx] = val;
                            updateContent('partnership.kambizContributes', items);
                          }}
                          className="inline-block w-full"
                          placeholder="Contribution item"
                        />
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Amin Contributes</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {(content.partnership?.aminContributes || defaultContent.partnership.aminContributes).map((item, idx) => (
                    <li key={idx}>
                      • {editMode ? (
                        <EditableText
                          value={item}
                          onChange={(val) => {
                            const items = [...(content.partnership?.aminContributes || defaultContent.partnership.aminContributes)];
                            items[idx] = val;
                            updateContent('partnership.aminContributes', items);
                          }}
                          className="inline-block w-full"
                          placeholder="Contribution item"
                        />
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-slate-900 mb-3">Revenue Distribution (Per Deal)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">Average Mortgage (GTA)</span>
                  <span className="font-medium">${avgMortgage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">Commission @ 0.7%</span>
                  <span className="font-medium">${avgCommission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">Less: Tool, AI & API usages, Host and Database</span>
                  <div className="flex items-center gap-1">
                    <span>-$</span>
                    <input
                      type="number"
                      value={option1ToolCost}
                      onChange={(e) => setOption1ToolCost(Math.max(0, Number(e.target.value)))}
                      className="border border-slate-300 rounded px-2 py-1 w-20 text-right"
                      placeholder="500"
                    />
                    <span className="text-slate-700">CAD/month</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500 italic mb-2 px-1">
                  Note: Costs may vary from $500-$1500 CAD/month depending on AI/API usage, hosting requirements, and system scaling after platform launch.
                </div>
                <div className="flex justify-between py-2 border-t-2 border-slate-300 font-semibold text-slate-900">
                  <span>Net Revenue</span>
                  <span>${netRevenuePerDeal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-blue-700">
                  <span>Kambiz's Share ({option1Kambiz}%)</span>
                  <span>${option1Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-green-700">
                  <span>Amin's Share ({100 - option1Kambiz}%)</span>
                  <span>${option1Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Option 2: Performance-Based Phased Split</h3>
            
            <div className="bg-slate-50 rounded p-4 mb-4">
              {editMode ? (
                <EditableText
                  value={content.partnership?.option2Description || defaultContent.partnership.option2Description}
                  onChange={(val) => updateContent('partnership.option2Description', val)}
                  multiline
                  className="text-slate-700 text-sm mb-4"
                  placeholder="Option 2 description"
                />
              ) : (
                <p className="text-slate-700 text-sm mb-4">
                  {content.partnership?.option2Description || defaultContent.partnership.option2Description}
                </p>
              )}
              
              <div className="space-y-6">
                <div>
                  <div className="font-medium text-slate-900 mb-2">Phase 1 (Months 1-8): Development Phase</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Kambiz: {100 - option2Phase1Amin}%</span>
                    <span className="text-sm text-slate-600">Amin: {option2Phase1Amin}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={option2Phase1Amin}
                    onChange={(e) => setOption2Phase1Amin(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm font-semibold">
                    <span className="text-blue-700">Kambiz: ${option2Phase1Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                    <span className="text-green-700">Amin: ${option2Phase1Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-slate-900 mb-2">Phase 2 (Months 9+): Long-term Partnership</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Kambiz: {100 - option2Phase2Amin}%</span>
                    <span className="text-sm text-slate-600">Amin: {option2Phase2Amin}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={option2Phase2Amin}
                    onChange={(e) => setOption2Phase2Amin(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm font-semibold">
                    <span className="text-blue-700">Kambiz: ${option2Phase2Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                    <span className="text-green-700">Amin: ${option2Phase2Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-slate-600 mt-4">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {editMode ? (
                <EditableText
                  value={content.partnership?.option2Note || defaultContent.partnership.option2Note}
                  onChange={(val) => updateContent('partnership.option2Note', val)}
                  className="flex-1"
                  placeholder="Option 2 note"
                />
              ) : (
                <span>{content.partnership?.option2Note || defaultContent.partnership.option2Note}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-yellow-900 mb-3">Questions to Clarify with Kambiz</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                {(content.partnership?.questions || defaultContent.partnership.questions).map((question, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={question}
                        onChange={(val) => {
                          const questions = [...(content.partnership?.questions || defaultContent.partnership.questions)];
                          questions[idx] = val;
                          updateContent('partnership.questions', questions);
                        }}
                        className="inline-block w-full"
                        placeholder="Question"
                      />
                    ) : (
                      <span>{question}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-lg p-6 mt-6">
          <h3 className="font-semibold mb-4">Key Partnership Terms (All Options)</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-medium mb-2 text-slate-200">Decision Making</div>
              <ul className="space-y-1 text-slate-300">
                {(content.partnership?.decisionMaking || defaultContent.partnership.decisionMaking).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.partnership?.decisionMaking || defaultContent.partnership.decisionMaking)];
                          items[idx] = val;
                          updateContent('partnership.decisionMaking', items);
                        }}
                        className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                        placeholder="Decision making item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2 text-slate-200">Exit Strategy</div>
              <ul className="space-y-1 text-slate-300">
                {(content.partnership?.exitStrategy || defaultContent.partnership.exitStrategy).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.partnership?.exitStrategy || defaultContent.partnership.exitStrategy)];
                          items[idx] = val;
                          updateContent('partnership.exitStrategy', items);
                        }}
                        className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                        placeholder="Exit strategy item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Projections Section */}
      <div className="mt-12 pt-8 border-t-2 border-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Revenue Projections</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-sm text-blue-700 font-medium mb-1">Average GTA Mortgage</div>
            {editMode ? (
              <EditableText
                value={content.revenue?.avgMortgage || '$750K'}
                onChange={(val) => updateContent('revenue.avgMortgage', val)}
                className="text-3xl font-bold text-blue-900"
              />
            ) : (
              <div className="text-3xl font-bold text-blue-900">{content.revenue?.avgMortgage || '$750K'}</div>
            )}
            {editMode ? (
              <EditableText
                value={content.revenue?.avgMortgageNote || 'Based on 2025 market data'}
                onChange={(val) => updateContent('revenue.avgMortgageNote', val)}
                className="text-xs mt-1"
              />
            ) : (
              <div className="text-xs text-slate-600 mt-1">{content.revenue?.avgMortgageNote || 'Based on 2025 market data'}</div>
            )}
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-sm text-green-700 font-medium mb-1">Commission Range</div>
            {editMode ? (
              <EditableText
                value={content.revenue?.commissionRange || '0.7-1.2%'}
                onChange={(val) => updateContent('revenue.commissionRange', val)}
                className="text-3xl font-bold text-green-900"
              />
            ) : (
              <div className="text-3xl font-bold text-green-900">{content.revenue?.commissionRange || '0.7-1.2%'}</div>
            )}
            {editMode ? (
              <EditableText
                value={content.revenue?.commissionNote || 'Prime lenders: 0.7%, Alt lenders: 1.2%+'}
                onChange={(val) => updateContent('revenue.commissionNote', val)}
                className="text-xs mt-1"
              />
            ) : (
              <div className="text-xs text-slate-600 mt-1">{content.revenue?.commissionNote || 'Prime lenders: 0.7%, Alt lenders: 1.2%+'}</div>
            )}
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-sm text-purple-700 font-medium mb-1">Revenue/Deal</div>
            {editMode ? (
              <EditableText
                value={content.revenue?.revenuePerDeal || '$5,250'}
                onChange={(val) => updateContent('revenue.revenuePerDeal', val)}
                className="text-3xl font-bold text-purple-900"
              />
            ) : (
              <div className="text-3xl font-bold text-purple-900">{content.revenue?.revenuePerDeal || '$5,250'}</div>
            )}
            {editMode ? (
              <EditableText
                value={content.revenue?.revenueNote || 'Conservative estimate @ 0.7%'}
                onChange={(val) => updateContent('revenue.revenueNote', val)}
                className="text-xs mt-1"
              />
            ) : (
              <div className="text-xs text-slate-600 mt-1">{content.revenue?.revenueNote || 'Conservative estimate @ 0.7%'}</div>
            )}
          </div>
        </div>

        {/* Live Summary Card */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg p-6 mb-6 shadow-lg">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Current Configuration Summary
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <div className="text-slate-300 text-xs mb-1">Partnership Split</div>
              <div className="text-2xl font-bold">{option1Kambiz}/{100 - option1Kambiz}</div>
              <div className="text-xs text-slate-400 mt-1">Kambiz / Amin</div>
            </div>
            <div>
              <div className="text-slate-300 text-xs mb-1">Net Per Deal</div>
              <div className="text-2xl font-bold">${netRevenuePerDeal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <div className="text-xs text-slate-400 mt-1">After ${option1ToolCost} costs</div>
            </div>
            <div>
              <div className="text-slate-300 text-xs mb-1">Kambiz Per Deal</div>
              <div className="text-2xl font-bold text-blue-300">${option1Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <div className="text-xs text-slate-400 mt-1">{option1Kambiz}% of net</div>
            </div>
            <div>
              <div className="text-slate-300 text-xs mb-1">Amin Per Deal</div>
              <div className="text-2xl font-bold text-green-300">${option1Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <div className="text-xs text-slate-400 mt-1">{100 - option1Kambiz}% of net</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 flex items-center justify-between text-sm">
            <span className="text-slate-300">At 9 deals/month (conservative):</span>
            <div className="flex gap-4">
              <span>Kambiz: <strong className="text-blue-300">${(conservativeAminIncome * (option1Kambiz / (100 - option1Kambiz))).toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</strong></span>
              <span>Amin: <strong className="text-green-300">${conservativeAminIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</strong></span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Revenue Scenarios (Based on Option 1: {option1Kambiz}/{100 - option1Kambiz} Split)</h3>
            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Post-Launch (After Week 10)</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4">Timeline</th>
                  <th className="text-center py-3 px-4">Deals/Month</th>
                  <th className="text-right py-3 px-4">Gross Revenue</th>
                  <th className="text-right py-3 px-4">Operating Costs</th>
                  <th className="text-right py-3 px-4">Net Revenue</th>
                  <th className="text-right py-3 px-4">Kambiz ({option1Kambiz}%)/mo</th>
                  <th className="text-right py-3 px-4">Amin ({100 - option1Kambiz}%)/mo</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {revenueScenarios.map((scenario, idx) => {
                  const bgColors = ['', 'bg-green-50', 'bg-blue-50'];
                  const textColors = ['text-green-700', 'text-green-700', 'text-blue-700'];
                  const kambizMonthly = scenario.kambizShare / scenario.months;
                  const aminMonthly = scenario.aminShare / scenario.months;
                  return (
                    <tr key={idx} className={`border-b border-slate-200 ${bgColors[idx]}`}>
                      <td className="py-3 px-4 font-medium">{scenario.timeline}</td>
                      <td className="text-center py-3 px-4">{scenario.dealsPerMonth}</td>
                      <td className="text-right py-3 px-4">${scenario.grossRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className="text-right py-3 px-4">-${scenario.operatingCosts.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className="text-right py-3 px-4 font-medium">${scenario.netRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className={`text-right py-3 px-4 font-bold ${textColors[idx]}`}>
                        ${kambizMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </td>
                      <td className={`text-right py-3 px-4 font-bold ${textColors[idx]}`}>
                        ${aminMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-xs text-slate-600 space-y-1">
            <div>* {editMode ? (
              <EditableText
                value={content.revenue?.operatingCostsNote || defaultContent.revenue.operatingCostsNote}
                onChange={(val) => updateContent('revenue.operatingCostsNote', val)}
                className="inline-block w-full"
                placeholder="Operating costs note"
              />
            ) : (
              <span>{content.revenue?.operatingCostsNote || defaultContent.revenue.operatingCostsNote}</span>
            )}</div>
            <div>* {editMode ? (
              <EditableText
                value={content.revenue?.revenueAssumptionNote || defaultContent.revenue.revenueAssumptionNote}
                onChange={(val) => updateContent('revenue.revenueAssumptionNote', val)}
                className="inline-block w-full"
                placeholder="Revenue assumption note"
              />
            ) : (
              <span>{content.revenue?.revenueAssumptionNote || defaultContent.revenue.revenueAssumptionNote}</span>
            )}</div>
          </div>
        </div>


        <div className="bg-slate-900 text-white rounded-lg p-6 mt-6">
          <h3 className="font-semibold mb-4">Additional Revenue Streams (Phase 2)</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              {editMode ? (
                <EditableText
                  value={content.revenue?.saasTitle || defaultContent.revenue.saasTitle}
                  onChange={(val) => updateContent('revenue.saasTitle', val)}
                  className="font-medium mb-2 text-slate-200"
                  placeholder="SaaS title"
                />
              ) : (
                <div className="font-medium mb-2 text-slate-200">{content.revenue?.saasTitle || defaultContent.revenue.saasTitle}</div>
              )}
              <ul className="space-y-1 text-slate-300">
                {(content.revenue?.saasItems || defaultContent.revenue.saasItems).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.revenue?.saasItems || defaultContent.revenue.saasItems)];
                          items[idx] = val;
                          updateContent('revenue.saasItems', items);
                        }}
                        className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                        placeholder="SaaS item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {editMode ? (
                <EditableText
                  value={content.revenue?.agentToolsTitle || defaultContent.revenue.agentToolsTitle}
                  onChange={(val) => updateContent('revenue.agentToolsTitle', val)}
                  className="font-medium mb-2 text-slate-200"
                  placeholder="Agent tools title"
                />
              ) : (
                <div className="font-medium mb-2 text-slate-200">{content.revenue?.agentToolsTitle || defaultContent.revenue.agentToolsTitle}</div>
              )}
              <ul className="space-y-1 text-slate-300">
                {(content.revenue?.agentToolsItems || defaultContent.revenue.agentToolsItems).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.revenue?.agentToolsItems || defaultContent.revenue.agentToolsItems)];
                          items[idx] = val;
                          updateContent('revenue.agentToolsItems', items);
                        }}
                        className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                        placeholder="Agent tools item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {editMode ? (
                <EditableText
                  value={content.revenue?.trainingTitle || defaultContent.revenue.trainingTitle}
                  onChange={(val) => updateContent('revenue.trainingTitle', val)}
                  className="font-medium mb-2 text-slate-200"
                  placeholder="Training title"
                />
              ) : (
                <div className="font-medium mb-2 text-slate-200">{content.revenue?.trainingTitle || defaultContent.revenue.trainingTitle}</div>
              )}
              <ul className="space-y-1 text-slate-300">
                {(content.revenue?.trainingItems || defaultContent.revenue.trainingItems).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.revenue?.trainingItems || defaultContent.revenue.trainingItems)];
                          items[idx] = val;
                          updateContent('revenue.trainingItems', items);
                        }}
                        className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                        placeholder="Training item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const SystemWorkflow = ({ content, editMode, updateContent }) => {
  const steps = content.workflow?.steps || defaultContent.workflow.steps;
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">System Workflow & Organizational Structure</h2>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-slate-900 mb-4">Complete Process Flow</h3>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1">
                {editMode ? (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <EditableText
                        value={step.phase}
                        onChange={(val) => {
                          const newSteps = [...steps];
                          newSteps[idx] = { ...newSteps[idx], phase: val };
                          updateContent('workflow.steps', newSteps);
                        }}
                        className="font-semibold flex-1"
                        placeholder="Phase title"
                      />
                      <EditableText
                        value={step.owner}
                        onChange={(val) => {
                          const newSteps = [...steps];
                          newSteps[idx] = { ...newSteps[idx], owner: val };
                          updateContent('workflow.steps', newSteps);
                        }}
                        className="text-xs w-24"
                        placeholder="Owner"
                      />
                    </div>
                    <EditableText
                      value={step.details}
                      onChange={(val) => {
                        const newSteps = [...steps];
                        newSteps[idx] = { ...newSteps[idx], details: val };
                        updateContent('workflow.steps', newSteps);
                      }}
                      multiline
                      className="text-sm"
                      placeholder="Step details"
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-slate-900">{step.phase}</span>
                      <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">{step.owner}</span>
                    </div>
                    <p className="text-sm text-slate-600">{step.details}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="border-2 border-blue-500 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-4">Kambiz's Responsibilities</h3>
        <div className="space-y-3 text-sm text-slate-700">
          {(content.workflow?.kambizResponsibilities || defaultContent.workflow.kambizResponsibilities).map((resp, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              {editMode ? (
                <EditableText
                  value={resp}
                  onChange={(val) => {
                    const resps = [...(content.workflow?.kambizResponsibilities || defaultContent.workflow.kambizResponsibilities)];
                    resps[idx] = val;
                    updateContent('workflow.kambizResponsibilities', resps);
                  }}
                  className="flex-1"
                  placeholder="Responsibility"
                />
              ) : (
                <span>{resp}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-purple-500 rounded-lg p-6">
        <h3 className="font-semibold text-purple-900 mb-4">Amin's Responsibilities</h3>
        <div className="space-y-3 text-sm text-slate-700">
          {(content.workflow?.aminResponsibilities || defaultContent.workflow.aminResponsibilities).map((resp, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
              {editMode ? (
                <EditableText
                  value={resp}
                  onChange={(val) => {
                    const resps = [...(content.workflow?.aminResponsibilities || defaultContent.workflow.aminResponsibilities)];
                    resps[idx] = val;
                    updateContent('workflow.aminResponsibilities', resps);
                  }}
                  className="flex-1"
                  placeholder="Responsibility"
                />
              ) : (
                <span>{resp}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-slate-50 rounded-lg p-6">
      <h3 className="font-semibold text-slate-900 mb-4">Decision-Making Authority</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="text-left py-3 px-4">Decision Type</th>
              <th className="text-center py-3 px-4">Authority</th>
              <th className="text-left py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {(content.workflow?.decisionMakingTable || defaultContent.workflow.decisionMakingTable).map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'border-b border-slate-200' : 'border-b border-slate-200 bg-slate-50'}>
                <td className="py-3 px-4">
                  {editMode ? (
                    <EditableText
                      value={row.decision}
                      onChange={(val) => {
                        const rows = [...(content.workflow?.decisionMakingTable || defaultContent.workflow.decisionMakingTable)];
                        rows[idx] = { ...rows[idx], decision: val };
                        updateContent('workflow.decisionMakingTable', rows);
                      }}
                      className="w-full"
                      placeholder="Decision type"
                    />
                  ) : (
                    <span>{row.decision}</span>
                  )}
                </td>
                <td className={`text-center py-3 px-4 font-medium ${row.authority === 'Joint Decision' ? 'text-blue-600' : ''}`}>
                  {editMode ? (
                    <EditableText
                      value={row.authority}
                      onChange={(val) => {
                        const rows = [...(content.workflow?.decisionMakingTable || defaultContent.workflow.decisionMakingTable)];
                        rows[idx] = { ...rows[idx], authority: val };
                        updateContent('workflow.decisionMakingTable', rows);
                      }}
                      className="w-full text-center"
                      placeholder="Authority"
                    />
                  ) : (
                    <span>{row.authority}</span>
                  )}
                </td>
                <td className="py-3 px-4 text-slate-600">
                  {editMode ? (
                    <EditableText
                      value={row.note}
                      onChange={(val) => {
                        const rows = [...(content.workflow?.decisionMakingTable || defaultContent.workflow.decisionMakingTable)];
                        rows[idx] = { ...rows[idx], note: val };
                        updateContent('workflow.decisionMakingTable', rows);
                      }}
                      className="w-full"
                      placeholder="Note"
                    />
                  ) : (
                    <span>{row.note}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Time Allocation</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium text-slate-900 mb-2">Kambiz's Weekly Commitment</div>
              <ul className="space-y-1 text-slate-700">
                {(content.workflow?.kambizWeekly || defaultContent.workflow.kambizWeekly).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.workflow?.kambizWeekly || defaultContent.workflow.kambizWeekly)];
                          items[idx] = val;
                          updateContent('workflow.kambizWeekly', items);
                        }}
                        className="inline-block w-full"
                        placeholder="Time commitment item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-900 mb-2">Amin's Weekly Commitment</div>
              <ul className="space-y-1 text-slate-700">
                {(content.workflow?.aminWeekly || defaultContent.workflow.aminWeekly).map((item, idx) => (
                  <li key={idx}>
                    • {editMode ? (
                      <EditableText
                        value={item}
                        onChange={(val) => {
                          const items = [...(content.workflow?.aminWeekly || defaultContent.workflow.aminWeekly)];
                          items[idx] = val;
                          updateContent('workflow.aminWeekly', items);
                        }}
                        className="inline-block w-full"
                        placeholder="Time commitment item"
                      />
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const Timeline = ({ content, editMode, updateContent }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Timeline & Milestones</h2>

    <div className="space-y-4">
      <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          {editMode ? (
            <EditableText
              value={content.timeline?.phase1Title || defaultContent.timeline.phase1Title}
              onChange={(val) => updateContent('timeline.phase1Title', val)}
              className="font-bold text-blue-900"
            />
          ) : (
            <h3 className="font-bold text-blue-900">{content.timeline?.phase1Title || defaultContent.timeline.phase1Title}</h3>
          )}
          <span className="text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium">
            {content.timeline?.phase1Badge || defaultContent.timeline.phase1Badge}
          </span>
        </div>
        
        <div className="mb-3 text-sm text-blue-800">
          <strong>Led by:</strong> {content.timeline?.phase1LeadBy || defaultContent.timeline.phase1LeadBy}
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Deliverables</h4>
          <ul className="space-y-1 text-sm text-slate-700">
            {(content.timeline?.phase1Deliverables || defaultContent.timeline.phase1Deliverables).map((item, idx) => (
              <li key={idx}>
                ✓ {editMode ? (
                  <EditableText
                    value={item}
                    onChange={(val) => {
                      const items = [...(content.timeline?.phase1Deliverables || defaultContent.timeline.phase1Deliverables)];
                      items[idx] = val;
                      updateContent('timeline.phase1Deliverables', items);
                    }}
                    className="inline-block w-full"
                    placeholder="Deliverable"
                  />
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          {editMode ? (
            <EditableText
              value={content.timeline?.phase2Title || defaultContent.timeline.phase2Title}
              onChange={(val) => updateContent('timeline.phase2Title', val)}
              className="font-bold text-green-900"
            />
          ) : (
            <h3 className="font-bold text-green-900">{content.timeline?.phase2Title || defaultContent.timeline.phase2Title}</h3>
          )}
          <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full font-medium">
            {content.timeline?.phase2Badge || defaultContent.timeline.phase2Badge}
          </span>
        </div>
        
        <div className="mb-3 text-sm text-green-800">
          <strong>Led by:</strong> {content.timeline?.phase2LeadBy || defaultContent.timeline.phase2LeadBy}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Amin's Development Work</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              {(content.timeline?.phase2AminWork || defaultContent.timeline.phase2AminWork).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase2AminWork || defaultContent.timeline.phase2AminWork)];
                        items[idx] = val;
                        updateContent('timeline.phase2AminWork', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Development task"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Kambiz's Support Activities</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              {(content.timeline?.phase2KambizSupport || defaultContent.timeline.phase2KambizSupport).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase2KambizSupport || defaultContent.timeline.phase2KambizSupport)];
                        items[idx] = val;
                        updateContent('timeline.phase2KambizSupport', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Support activity"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-start gap-2 text-blue-800">
            <DollarSign className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <strong>Investment:</strong> 
              {editMode ? (
                <EditableText
                  value={content.timeline?.phase2Investment || defaultContent.timeline.phase2Investment}
                  onChange={(val) => updateContent('timeline.phase2Investment', val)}
                  multiline
                  className="ml-1"
                  placeholder="Investment details"
                />
              ) : (
                <span className="ml-1">{content.timeline?.phase2Investment || defaultContent.timeline.phase2Investment}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-center gap-2 text-green-800 mb-1">
            <Target className="w-4 h-4" />
            <span className="font-semibold">Milestone:</span>
          </div>
          {editMode ? (
            <EditableText
              value={content.timeline?.phase2Milestone || defaultContent.timeline.phase2Milestone}
              onChange={(val) => updateContent('timeline.phase2Milestone', val)}
              multiline
              className="text-slate-600"
              placeholder="Milestone description"
            />
          ) : (
            <p className="text-slate-600">{content.timeline?.phase2Milestone || defaultContent.timeline.phase2Milestone}</p>
          )}
        </div>
      </div>

      <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          {editMode ? (
            <EditableText
              value={content.timeline?.phase3Title || defaultContent.timeline.phase3Title}
              onChange={(val) => updateContent('timeline.phase3Title', val)}
              className="font-bold text-purple-900"
            />
          ) : (
            <h3 className="font-bold text-purple-900">{content.timeline?.phase3Title || defaultContent.timeline.phase3Title}</h3>
          )}
          <span className="text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-medium">
            {content.timeline?.phase3Badge || defaultContent.timeline.phase3Badge}
          </span>
        </div>
        
        <div className="mb-3 text-sm text-purple-800">
          <strong>Timeline:</strong> {content.timeline?.phase3Timeline || defaultContent.timeline.phase3Timeline}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Marketing Activities (Amin)</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              {(content.timeline?.phase3Marketing || defaultContent.timeline.phase3Marketing).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase3Marketing || defaultContent.timeline.phase3Marketing)];
                        items[idx] = val;
                        updateContent('timeline.phase3Marketing', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Marketing activity"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Operations (Kambiz)</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              {(content.timeline?.phase3Operations || defaultContent.timeline.phase3Operations).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase3Operations || defaultContent.timeline.phase3Operations)];
                        items[idx] = val;
                        updateContent('timeline.phase3Operations', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Operations item"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm">Expected Metrics</h4>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {editMode ? (
                  <EditableText
                    value={content.timeline?.phase3Metrics?.leads || defaultContent.timeline.phase3Metrics.leads}
                    onChange={(val) => updateContent('timeline.phase3Metrics.leads', val)}
                    className="w-full text-center"
                    placeholder="Leads"
                  />
                ) : (
                  <span>{content.timeline?.phase3Metrics?.leads || defaultContent.timeline.phase3Metrics.leads}</span>
                )}
              </div>
              <div className="text-slate-600">Qualified Leads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {editMode ? (
                  <EditableText
                    value={content.timeline?.phase3Metrics?.consultations || defaultContent.timeline.phase3Metrics.consultations}
                    onChange={(val) => updateContent('timeline.phase3Metrics.consultations', val)}
                    className="w-full text-center"
                    placeholder="Consultations"
                  />
                ) : (
                  <span>{content.timeline?.phase3Metrics?.consultations || defaultContent.timeline.phase3Metrics.consultations}</span>
                )}
              </div>
              <div className="text-slate-600">Consultations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {editMode ? (
                  <EditableText
                    value={content.timeline?.phase3Metrics?.deals || defaultContent.timeline.phase3Metrics.deals}
                    onChange={(val) => updateContent('timeline.phase3Metrics.deals', val)}
                    className="w-full text-center"
                    placeholder="Deals"
                  />
                ) : (
                  <span>{content.timeline?.phase3Metrics?.deals || defaultContent.timeline.phase3Metrics.deals}</span>
                )}
              </div>
              <div className="text-slate-600">Closed Deals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {editMode ? (
                  <EditableText
                    value={content.timeline?.phase3Metrics?.revenue || defaultContent.timeline.phase3Metrics.revenue}
                    onChange={(val) => updateContent('timeline.phase3Metrics.revenue', val)}
                    className="w-full text-center"
                    placeholder="Revenue"
                  />
                ) : (
                  <span>{content.timeline?.phase3Metrics?.revenue || defaultContent.timeline.phase3Metrics.revenue}</span>
                )}
              </div>
              <div className="text-slate-600">First Revenue</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-700"><strong>Revenue Target:</strong></span>
            {editMode ? (
              <EditableText
                value={content.timeline?.phase3RevenueTarget || defaultContent.timeline.phase3RevenueTarget}
                onChange={(val) => updateContent('timeline.phase3RevenueTarget', val)}
                className="font-bold text-purple-600"
                placeholder="Revenue target"
              />
            ) : (
              <span className="font-bold text-purple-600">{content.timeline?.phase3RevenueTarget || defaultContent.timeline.phase3RevenueTarget}</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          {editMode ? (
            <EditableText
              value={content.timeline?.phase4Title || defaultContent.timeline.phase4Title}
              onChange={(val) => updateContent('timeline.phase4Title', val)}
              className="font-bold text-orange-900"
            />
          ) : (
            <h3 className="font-bold text-orange-900">{content.timeline?.phase4Title || defaultContent.timeline.phase4Title}</h3>
          )}
          <span className="text-sm bg-orange-200 text-orange-800 px-3 py-1 rounded-full font-medium">
            {content.timeline?.phase4Badge || defaultContent.timeline.phase4Badge}
          </span>
        </div>
        
        <div className="space-y-3 text-sm text-slate-700">
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Marketing Scale (Amin)</div>
            <ul className="space-y-1">
              {(content.timeline?.phase4Marketing || defaultContent.timeline.phase4Marketing).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase4Marketing || defaultContent.timeline.phase4Marketing)];
                        items[idx] = val;
                        updateContent('timeline.phase4Marketing', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Marketing activity"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Platform Enhancements (Amin)</div>
            <ul className="space-y-1">
              {(content.timeline?.phase4Platform || defaultContent.timeline.phase4Platform).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase4Platform || defaultContent.timeline.phase4Platform)];
                        items[idx] = val;
                        updateContent('timeline.phase4Platform', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Platform enhancement"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Business Development (Both)</div>
            <ul className="space-y-1">
              {(content.timeline?.phase4Business || defaultContent.timeline.phase4Business).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase4Business || defaultContent.timeline.phase4Business)];
                        items[idx] = val;
                        updateContent('timeline.phase4Business', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Business development item"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-700"><strong>Revenue Target:</strong></span>
            {editMode ? (
              <EditableText
                value={content.timeline?.phase4RevenueTarget || defaultContent.timeline.phase4RevenueTarget}
                onChange={(val) => updateContent('timeline.phase4RevenueTarget', val)}
                className="font-bold text-orange-600"
                placeholder="Revenue target"
              />
            ) : (
              <span className="font-bold text-orange-600">{content.timeline?.phase4RevenueTarget || defaultContent.timeline.phase4RevenueTarget}</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          {editMode ? (
            <EditableText
              value={content.timeline?.phase5Title || defaultContent.timeline.phase5Title}
              onChange={(val) => updateContent('timeline.phase5Title', val)}
              className="font-bold text-red-900"
            />
          ) : (
            <h3 className="font-bold text-red-900">{content.timeline?.phase5Title || defaultContent.timeline.phase5Title}</h3>
          )}
          <span className="text-sm bg-red-200 text-red-800 px-3 py-1 rounded-full font-medium">
            {content.timeline?.phase5Badge || defaultContent.timeline.phase5Badge}
          </span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Revenue Streams</div>
            <ul className="space-y-1 text-slate-700">
              {(content.timeline?.phase5Revenue || defaultContent.timeline.phase5Revenue).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase5Revenue || defaultContent.timeline.phase5Revenue)];
                        items[idx] = val;
                        updateContent('timeline.phase5Revenue', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Revenue stream"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Team Expansion</div>
            <ul className="space-y-1 text-slate-700">
              {(content.timeline?.phase5Team || defaultContent.timeline.phase5Team).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase5Team || defaultContent.timeline.phase5Team)];
                        items[idx] = val;
                        updateContent('timeline.phase5Team', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Team expansion item"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Strategic Goals</div>
            <ul className="space-y-1 text-slate-700">
              {(content.timeline?.phase5Strategic || defaultContent.timeline.phase5Strategic).map((item, idx) => (
                <li key={idx}>
                  • {editMode ? (
                    <EditableText
                      value={item}
                      onChange={(val) => {
                        const items = [...(content.timeline?.phase5Strategic || defaultContent.timeline.phase5Strategic)];
                        items[idx] = val;
                        updateContent('timeline.phase5Strategic', items);
                      }}
                      className="inline-block w-full"
                      placeholder="Strategic goal"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-700"><strong>Revenue Target:</strong></span>
            {editMode ? (
              <EditableText
                value={content.timeline?.phase5RevenueTarget || defaultContent.timeline.phase5RevenueTarget}
                onChange={(val) => updateContent('timeline.phase5RevenueTarget', val)}
                className="font-bold text-red-600"
                placeholder="Revenue target"
              />
            ) : (
              <span className="font-bold text-red-600">{content.timeline?.phase5RevenueTarget || defaultContent.timeline.phase5RevenueTarget}</span>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="bg-slate-900 text-white rounded-lg p-6 mt-8">
      <h3 className="font-semibold mb-4">Key Performance Indicators (KPIs) to Track</h3>
      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-slate-400 mb-1">Marketing</div>
          <ul className="space-y-1">
            {(content.timeline?.kpis?.marketing || defaultContent.timeline.kpis.marketing).map((kpi, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={kpi}
                    onChange={(val) => {
                      const kpis = [...(content.timeline?.kpis?.marketing || defaultContent.timeline.kpis.marketing)];
                      kpis[idx] = val;
                      updateContent('timeline.kpis.marketing', kpis);
                    }}
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Marketing KPI"
                  />
                ) : (
                  <span>{kpi}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Sales</div>
          <ul className="space-y-1">
            {(content.timeline?.kpis?.sales || defaultContent.timeline.kpis.sales).map((kpi, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={kpi}
                    onChange={(val) => {
                      const kpis = [...(content.timeline?.kpis?.sales || defaultContent.timeline.kpis.sales)];
                      kpis[idx] = val;
                      updateContent('timeline.kpis.sales', kpis);
                    }}
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Sales KPI"
                  />
                ) : (
                  <span>{kpi}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Operations</div>
          <ul className="space-y-1">
            {(content.timeline?.kpis?.operations || defaultContent.timeline.kpis.operations).map((kpi, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={kpi}
                    onChange={(val) => {
                      const kpis = [...(content.timeline?.kpis?.operations || defaultContent.timeline.kpis.operations)];
                      kpis[idx] = val;
                      updateContent('timeline.kpis.operations', kpis);
                    }}
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Operations KPI"
                  />
                ) : (
                  <span>{kpi}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Financial</div>
          <ul className="space-y-1">
            {(content.timeline?.kpis?.financial || defaultContent.timeline.kpis.financial).map((kpi, idx) => (
              <li key={idx}>
                • {editMode ? (
                  <EditableText
                    value={kpi}
                    onChange={(val) => {
                      const kpis = [...(content.timeline?.kpis?.financial || defaultContent.timeline.kpis.financial)];
                      kpis[idx] = val;
                      updateContent('timeline.kpis.financial', kpis);
                    }}
                    className="inline-block w-full bg-white/10 text-white placeholder-white/50"
                    placeholder="Financial KPI"
                  />
                ) : (
                  <span>{kpi}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return <PartnershipProposal />;
}

export default App;
