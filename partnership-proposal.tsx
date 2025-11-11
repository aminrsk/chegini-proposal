import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, CheckCircle, AlertCircle, BarChart3, Clock, Wrench, HelpCircle } from 'lucide-react';

const PartnershipProposal = () => {
  const [activeTab, setActiveTab] = useState('executive');
  
  const tabs = [
    { id: 'executive', label: 'Executive Summary', icon: Target },
    { id: 'structure', label: 'Partnership Options', icon: Users },
    { id: 'revenue', label: 'Revenue Model', icon: DollarSign },
    { id: 'workflow', label: 'System Workflow', icon: BarChart3 },
    { id: 'timeline', label: 'Timeline & Milestones', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Chegini Mortgage AI Platform
              </h1>
              <p className="text-slate-600 text-lg">Partnership Proposal & Organizational Structure</p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm text-slate-500">Prepared by</div>
              <div className="font-semibold text-slate-900">Amin Rastikerdar</div>
              <div className="text-sm text-slate-500">November 10, 2025</div>
            </div>
          </div>
        </div>

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

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {activeTab === 'executive' && <ExecutiveSummary />}
          {activeTab === 'structure' && <PartnershipStructure />}
          {activeTab === 'revenue' && <RevenueModel />}
          {activeTab === 'workflow' && <SystemWorkflow />}
          {activeTab === 'timeline' && <Timeline />}
        </div>
      </div>
    </div>
  );
};

const ExecutiveSummary = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Summary</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Business Objective
        </h3>
        <p className="text-slate-700">
          Build an AI-powered platform that automates underwriting process and potentially other processes for mortgage 
          brokerages, and scales to serve both in-house operations and external brokerages as a SaaS product. As well 
          as building an AI-enhanced digital marketing system that generates qualified leads consistently.
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Revenue Target
        </h3>
        <p className="text-slate-700 mb-2">
          <strong>Short-term (Month 1-3):</strong> $20-40K/month from direct mortgage deals
        </p>
        <p className="text-slate-700">
          <strong>Medium-term (Month 6-12):</strong> Scale to $60-100K/month
        </p>
      </div>
    </div>

    <div className="bg-slate-50 rounded-lg p-6">
      <h3 className="font-semibold text-slate-900 mb-4">What We're Building</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-slate-900">AI Underwriter Platform</div>
            <div className="text-sm text-slate-600">Replaces manual underwriting process, matches clients with optimal lenders from 4,000+ products</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-slate-900">Velocity Integration</div>
            <div className="text-sm text-slate-600">Seamless data extraction from existing mortgage workflow, API-powered automation</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-slate-900">Marketing & CRM System</div>
            <div className="text-sm text-slate-600">Lead generation, email automation, sales funnel management for agent network</div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Critical Success Factors</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• <strong>Qualified Leads:</strong> Begin generating qualified leads within 8-10 weeks</li>
            <li>• <strong>Clear Partnership Terms:</strong> Defined equity, revenue split, and decision-making authority</li>
            <li>• <strong>Real Estate Agent Network:</strong> Leverage Kambiz's 22,000+ contacts as primary lead source</li>
            <li>• <strong>Operational Efficiency:</strong> AI reduces underwriting process time significantly</li>
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
            <li>• <strong>Pre-Construction Appraisal Crisis:</strong> Banks valuate 10-30% below purchase price, deals collapse, agents lose commissions</li>
            <li>• <strong>Manual Product Selection:</strong> Brokers manually compare 4,000+ products but typically only work with 6-8 familiar lenders</li>
            <li>• <strong>Daily Rate Volatility:</strong> Product rates and rules change daily via lender emails, impossible to track manually</li>
            <li>• <strong>Suboptimal Matching:</strong> Human limitation leads to missed opportunities and slower processing</li>
            <li>• <strong>Document Fraud Concerns:</strong> Some brokers alter documents, Velocity locks files to prevent this</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Our Competitive Advantage</div>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Comprehensive Coverage:</strong> AI evaluates ALL 4,000+ products, not just familiar ones</li>
            <li>• <strong>Scotiabank Special Channel:</strong> Access to proprietary appraisal process (10-15% higher valuations)</li>
            <li>• <strong>B-Lender Expertise:</strong> Automatic routing for undocumented income clients (non-income qualified programs)</li>
            <li>• <strong>"Remedy" Function:</strong> AI suggests actionable solutions when clients don't qualify</li>
            <li>• <strong>Industry Expertise + Tech:</strong> Kambiz's 15+ years experience combined with cutting-edge AI</li>
            <li>• <strong>GTA Market Focus:</strong> Average home price $1.05M, 23% of Canadian mortgage debt</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const PartnershipStructure = () => {
  const [option1Amin, setOption1Amin] = useState(50);
  const [option2Phase1Amin, setOption2Phase1Amin] = useState(60);
  const [option2Phase2Amin, setOption2Phase2Amin] = useState(55);
  const [option2Phase3Amin, setOption2Phase3Amin] = useState(50);

  const avgMortgage = 750000;
  const commissionRate = 0.007;
  const avgCommission = avgMortgage * commissionRate;

  const calculateSplit = (aminPercent) => {
    const aminShare = avgCommission * (aminPercent / 100);
    const kambizShare = avgCommission * ((100 - aminPercent) / 100);
    return { aminShare, kambizShare };
  };

  const option1Split = calculateSplit(option1Amin);
  const option2Phase1Split = calculateSplit(option2Phase1Amin);
  const option2Phase2Split = calculateSplit(option2Phase2Amin);
  const option2Phase3Split = calculateSplit(option2Phase3Amin);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Partnership Structure Options</h2>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-blue-900 mb-3">Recommended Approach: Equal Equity Partnership</h3>
        <p className="text-slate-700 mb-4">
          Equal partnership recognizes the combined value of technical innovation and industry expertise. Both partners 
          bring critical, complementary assets that are equally necessary for success.
        </p>
      </div>

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
                  <span className="text-slate-700">Amin's Share:</span>
                  <span className="font-bold text-green-700">{option1Amin}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="70"
                  value={option1Amin}
                  onChange={(e) => setOption1Amin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700">Kambiz's Share:</span>
                  <span className="font-bold text-blue-700">{100 - option1Amin}%</span>
                </div>
                <div className="w-full h-2 bg-blue-500 rounded-lg" style={{ width: `${100 - option1Amin}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Kambiz Contributes</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• 22,000+ real estate contact database</li>
                <li>• Active mortgage broker license & compliance</li>
                <li>• Industry expertise (15+ years)</li>
                <li>• Lender relationships & negotiation power</li>
                <li>• Handles all client consultations & closings</li>
                <li>• Velocity/Discovery subscriptions</li>
                <li>• Covers $350 USD/month tool costs</li>
                <li>• Scotiabank special appraisal channel access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Amin Contributes</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• <strong>60 hours already invested</strong> in prototype</li>
                <li>• <strong>400 hours</strong> committed for 8-10 week build</li>
                <li>• Ongoing 35-50 hours/week dedicated time</li>
                <li>• AI/ML expertise & platform architecture</li>
                <li>• Marketing automation & CRM systems</li>
                <li>• Lead generation & email campaign management</li>
                <li>• All technical development & maintenance</li>
                <li>• Product expansion for SaaS offering</li>
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
                <span className="text-slate-700">Less: Tool/Operating Costs</span>
                <span className="font-medium">~$475 CAD/month</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-green-700">
                <span>Amin's Share ({option1Amin}%)</span>
                <span>${option1Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-blue-700">
                <span>Kambiz's Share ({100 - option1Amin}%)</span>
                <span>${option1Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="text-amber-900">Investment Reality:</strong>
                <p className="text-slate-700 mt-1">
                  Amin will dedicate <strong>400 hours over 8-10 weeks</strong> (40 hrs/week average) with NO compensation 
                  during this intensive build phase. This is in addition to the 60 hours already invested in the prototype. 
                  Total unpaid investment: <strong>460 hours</strong> before first revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-slate-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Option 2: Performance-Based Phased Split</h3>
          
          <div className="bg-slate-50 rounded p-4 mb-4">
            <p className="text-slate-700 text-sm mb-4">Acknowledges Amin's higher time investment during build phase, transitions to equal split as platform matures.</p>
            
            <div className="space-y-6">
              <div>
                <div className="font-medium text-slate-900 mb-2">Phase 1 (Months 1-6): Development Phase</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">Amin: {option2Phase1Amin}%</span>
                  <span className="text-sm text-slate-600">Kambiz: {100 - option2Phase1Amin}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="70"
                  value={option2Phase1Amin}
                  onChange={(e) => setOption2Phase1Amin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm font-semibold">
                  <span className="text-green-700">Amin: ${option2Phase1Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                  <span className="text-blue-700">Kambiz: ${option2Phase1Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                </div>
              </div>

              <div>
                <div className="font-medium text-slate-900 mb-2">Phase 2 (Months 7-12): Transition Period</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">Amin: {option2Phase2Amin}%</span>
                  <span className="text-sm text-slate-600">Kambiz: {100 - option2Phase2Amin}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="70"
                  value={option2Phase2Amin}
                  onChange={(e) => setOption2Phase2Amin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm font-semibold">
                  <span className="text-green-700">Amin: ${option2Phase2Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                  <span className="text-blue-700">Kambiz: ${option2Phase2Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                </div>
              </div>

              <div>
                <div className="font-medium text-slate-900 mb-2">Phase 3 (Month 13+): Long-term Partnership</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">Amin: {option2Phase3Amin}%</span>
                  <span className="text-sm text-slate-600">Kambiz: {100 - option2Phase3Amin}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="60"
                  value={option2Phase3Amin}
                  onChange={(e) => setOption2Phase3Amin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm font-semibold">
                  <span className="text-green-700">Amin: ${option2Phase3Split.aminShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                  <span className="text-blue-700">Kambiz: ${option2Phase3Split.kambizShare.toLocaleString(undefined, { maximumFractionDigits: 0 })}/deal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600 mt-4">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Requires clear documentation and tracking of phase transitions. Consider simplicity vs. fairness trade-off.</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <HelpCircle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-3">Questions to Clarify with Kambiz</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• <strong>Operational Costs:</strong> What are the actual costs per deal? (Processing time, administrative overhead, Dominion Lending split)</li>
              <li>• <strong>Commission Structure:</strong> How does the 0.7% base commission vary? (A-lenders vs B-lenders, special programs)</li>
              <li>• <strong>Time Investment:</strong> What is Kambiz's realistic hours per week commitment during different phases?</li>
              <li>• <strong>Brokerage Split:</strong> What percentage goes to Dominion Lending vs. retained by Kambiz?</li>
              <li>• <strong>Existing Revenue:</strong> What is current monthly mortgage income that this will enhance/replace?</li>
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
              <li>• Kambiz: Final authority on mortgage operations, lender selection, client relations</li>
              <li>• Amin: Final authority on technical development, marketing strategy, platform features</li>
              <li>• Major business decisions (hiring, expansion, pricing): Mutual agreement required</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2 text-slate-200">Exit Strategy</div>
            <ul className="space-y-1 text-slate-300">
              <li>• Right of first refusal: Partner must offer sale to other partner before external buyers</li>
              <li>• Valuation: Based on 3x trailing 12-month net profit</li>
              <li>• Dissolution: Amin retains all source code/IP, Kambiz retains client relationships</li>
              <li>• No external sale without mutual consent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const RevenueModel = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Revenue Model & Projections</h2>

    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="text-sm text-blue-700 font-medium mb-1">Average GTA Mortgage</div>
        <div className="text-3xl font-bold text-blue-900">$750K</div>
        <div className="text-xs text-slate-600 mt-1">Based on 2025 market data</div>
      </div>
      <div className="bg-green-50 rounded-lg p-6">
        <div className="text-sm text-green-700 font-medium mb-1">Commission Range</div>
        <div className="text-3xl font-bold text-green-900">0.7-1.2%</div>
        <div className="text-xs text-slate-600 mt-1">Prime lenders: 0.7%, Alt lenders: 1.2%+</div>
      </div>
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="text-sm text-purple-700 font-medium mb-1">Revenue/Deal</div>
        <div className="text-3xl font-bold text-purple-900">$5,250</div>
        <div className="text-xs text-slate-600 mt-1">Conservative estimate @ 0.7%</div>
      </div>
    </div>

    <div className="bg-slate-50 rounded-lg p-6 mb-6">
      <h3 className="font-semibold text-slate-900 mb-4">Revenue Scenarios (50/50 Partnership)</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="text-left py-3 px-4">Timeline</th>
              <th className="text-center py-3 px-4">Deals/Month</th>
              <th className="text-right py-3 px-4">Gross Revenue</th>
              <th className="text-right py-3 px-4">Tools Costs</th>
              <th className="text-right py-3 px-4">Net Revenue</th>
              <th className="text-right py-3 px-4">Per Partner</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b border-slate-200">
              <td className="py-3 px-4 font-medium">Month 1-2</td>
              <td className="text-center py-3 px-4">3-4</td>
              <td className="text-right py-3 px-4">$15,750</td>
              <td className="text-right py-3 px-4">-$475</td>
              <td className="text-right py-3 px-4 font-medium">$15,275</td>
              <td className="text-right py-3 px-4 font-bold text-green-700">$7,638</td>
            </tr>
            <tr className="border-b border-slate-200 bg-green-50">
              <td className="py-3 px-4 font-medium">Month 3-6</td>
              <td className="text-center py-3 px-4">8-10</td>
              <td className="text-right py-3 px-4">$42,000</td>
              <td className="text-right py-3 px-4">-$475</td>
              <td className="text-right py-3 px-4 font-medium">$41,525</td>
              <td className="text-right py-3 px-4 font-bold text-green-700">$20,763</td>
            </tr>
            <tr className="border-b border-slate-200 bg-blue-50">
              <td className="py-3 px-4 font-medium">Month 7-12</td>
              <td className="text-center py-3 px-4">15-20</td>
              <td className="text-right py-3 px-4">$78,750</td>
              <td className="text-right py-3 px-4">-$475</td>
              <td className="text-right py-3 px-4 font-medium">$78,275</td>
              <td className="text-right py-3 px-4 font-bold text-blue-700">$39,138</td>
            </tr>
            <tr className="bg-purple-50">
              <td className="py-3 px-4 font-medium">Year 2+</td>
              <td className="text-center py-3 px-4">25-30</td>
              <td className="text-right py-3 px-4">$131,250</td>
              <td className="text-right py-3 px-4">-$475</td>
              <td className="text-right py-3 px-4 font-medium">$130,775</td>
              <td className="text-right py-3 px-4 font-bold text-purple-700">$65,388</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-xs text-slate-600 space-y-1">
        <div>* Operating costs include hosting, AI API usage, email tools, domain, CRM (~$350 USD/month)</div>
        <div>* Revenue assumes average $750K mortgage @ 0.7% commission (conservative)</div>
        <div>* B-lenders and private deals can generate 1.5-3% commissions ($11K-$22K per deal)</div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border-2 border-green-500 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Conservative Scenario
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-700">Target by Month 3:</span>
            <span className="font-bold text-slate-900">8-10 deals/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-700">Amin's Monthly Income:</span>
            <span className="font-bold text-green-700">$20,763</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-700">Exceeds Minimum Target:</span>
            <span className="font-bold text-green-700">+$5,763 (38% above $15K goal)</span>
          </div>
        </div>
      </div>

      <div className="border-2 border-blue-500 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Optimistic Scenario
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-700">Target by Month 6:</span>
            <span className="font-bold text-slate-900">15-20 deals/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-700">Amin's Monthly Income:</span>
            <span className="font-bold text-blue-700">$39,138</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-700">Annual Projection:</span>
            <span className="font-bold text-blue-700">$469,656/year</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-slate-900 text-white rounded-lg p-6">
      <h3 className="font-semibold mb-4">Additional Revenue Streams (Phase 2)</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="font-medium mb-2 text-slate-200">SaaS Product (Month 12+)</div>
          <ul className="space-y-1 text-slate-300">
            <li>• Sell platform to other brokerages</li>
            <li>• $500-$1,000/month per brokerage</li>
            <li>• Target: 10 brokerages = $10K/month</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2 text-slate-200">Real Estate Agent Tools</div>
          <ul className="space-y-1 text-slate-300">
            <li>• Lead management system</li>
            <li>• Marketing automation</li>
            <li>• $50-$100/month per agent</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2 text-slate-200">Training & Consulting</div>
          <ul className="space-y-1 text-slate-300">
            <li>• AI adoption workshops</li>
            <li>• Mortgage broker training</li>
            <li>• $2,000-$5,000 per program</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SystemWorkflow = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">System Workflow & Organizational Structure</h2>

    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
      <h3 className="font-semibold text-slate-900 mb-4">Complete Process Flow</h3>
      <div className="space-y-4">
        {[
          {
            phase: '1. Lead Generation',
            owner: 'Amin',
            details: 'Email campaigns to 22K contacts → Landing page → CRM capture → Funnel stages (Discovered → Contacted → Qualified → Converted)'
          },
          {
            phase: '2. Client Onboarding',
            owner: 'Kambiz',
            details: 'Initial consultation → Velocity form completion → Document upload (T4, NOA, bank statements, credit check via Equifax)'
          },
          {
            phase: '3. AI Underwriting',
            owner: 'AI Platform',
            details: 'Extract data from Velocity → Match against 1,109 lending rules → 3 outcomes: Product match / Remedies / Optimization recommendations'
          },
          {
            phase: '4. Manual Review',
            owner: 'Kambiz',
            details: 'Review AI recommendations → Generate submission letter → Select final lender from Discovery → Validate with Broker of Record'
          },
          {
            phase: '5. Lender Submission',
            owner: 'Kambiz',
            details: 'Submit package to lender underwriter → Handle conditions/additional docs → Negotiate if needed → Secure approval'
          },
          {
            phase: '6. Closing & Commission',
            owner: 'Both',
            details: 'Client signs mortgage → Lender funds deal → Commission paid to brokerage → Split per agreement → Update CRM for retention marketing'
          }
        ].map((step, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              {idx + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-slate-900">{step.phase}</span>
                <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">{step.owner}</span>
              </div>
              <p className="text-sm text-slate-600">{step.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="border-2 border-blue-500 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-4">Kambiz's Responsibilities</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>All client-facing consultations and calls</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Final lender selection and submission</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Negotiation with lenders for better rates/terms</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Handling conditions and additional document requests</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Managing Velocity and Discovery subscriptions</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Maintaining broker license and compliance</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Training new brokers if business expands</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Industry networking and lender relationships</span>
          </div>
        </div>
      </div>

      <div className="border-2 border-purple-500 rounded-lg p-6">
        <h3 className="font-semibold text-purple-900 mb-4">Amin's Responsibilities</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>AI underwriter platform development & maintenance</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Marketing website and landing pages</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Custom CRM development and management</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Email marketing campaigns and automation</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Lead generation and funnel optimization</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Velocity API integration and data extraction</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>AI model training and improvement</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Future product expansion (SaaS offerings)</span>
          </div>
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
            <tr className="border-b border-slate-200">
              <td className="py-3 px-4">Client acceptance/rejection</td>
              <td className="text-center py-3 px-4 font-medium">Kambiz</td>
              <td className="py-3 px-4 text-slate-600">Based on risk assessment and compliance</td>
            </tr>
            <tr className="border-b border-slate-200 bg-slate-50">
              <td className="py-3 px-4">Lender selection for deals</td>
              <td className="text-center py-3 px-4 font-medium">Kambiz</td>
              <td className="py-3 px-4 text-slate-600">With AI recommendations as guidance</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-4">Technical platform features</td>
              <td className="text-center py-3 px-4 font-medium">Amin</td>
              <td className="py-3 px-4 text-slate-600">Subject to business needs discussion</td>
            </tr>
            <tr className="border-b border-slate-200 bg-slate-50">
              <td className="py-3 px-4">Marketing campaigns & messaging</td>
              <td className="text-center py-3 px-4 font-medium">Amin</td>
              <td className="py-3 px-4 text-slate-600">With Kambiz review for industry accuracy</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-4">Hiring staff (admin, brokers)</td>
              <td className="text-center py-3 px-4 font-medium text-blue-600">Joint Decision</td>
              <td className="py-3 px-4 text-slate-600">Both partners must agree</td>
            </tr>
            <tr className="border-b border-slate-200 bg-slate-50">
              <td className="py-3 px-4">Major capital expenses (over $5K)</td>
              <td className="text-center py-3 px-4 font-medium text-blue-600">Joint Decision</td>
              <td className="py-3 px-4 text-slate-600">Both partners must agree</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-4">SaaS pricing & business model</td>
              <td className="text-center py-3 px-4 font-medium text-blue-600">Joint Decision</td>
              <td className="py-3 px-4 text-slate-600">Both partners must agree</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="py-3 px-4">Partnership changes or exit</td>
              <td className="text-center py-3 px-4 font-medium text-blue-600">Joint Decision</td>
              <td className="py-3 px-4 text-slate-600">Requires mutual consent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Time Allocation Reality Check</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium text-slate-900 mb-2">Amin's Weekly Commitment</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Platform development: 15-20 hours</li>
                <li>• Marketing/CRM: 10-15 hours</li>
                <li>• Campaign management: 5-8 hours</li>
                <li>• Meetings & coordination: 3-5 hours</li>
                <li><strong>Total: 35-50 hours/week</strong></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-900 mb-2">Kambiz's Weekly Commitment</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Client consultations: 10-15 hours</li>
                <li>• Document review: 5-8 hours</li>
                <li>• Lender communication: 5-8 hours</li>
                <li>• Administrative: 3-5 hours</li>
                <li><strong>Total: 25-35 hours/week</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 mt-3">
            Both partners are committing substantial time. The equal split reflects the combined value 
            of technical innovation + industry expertise, not just hours worked.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Timeline & Milestones</h2>

    <div className="space-y-4">
      <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-blue-900">Weeks 1-2: Foundation & Legal</h3>
          <span className="text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium">Immediate</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Legal & Administrative</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>✓ Finalize partnership agreement (chosen equity model)</li>
              <li>✓ Incorporate business entity (Ontario Corp or Partnership)</li>
              <li>✓ Open business bank account</li>
              <li>✓ Set up accounting system</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Technical Setup</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>✓ Secure Velocity API access (resolve pending status)</li>
              <li>✓ Set up development subdomain (test.cheginimortgage.com)</li>
              <li>✓ Subscribe to required tools (hosting, email, AI APIs)</li>
              <li>✓ Begin email list cleaning (22K contacts)</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-blue-800">
          <DollarSign className="w-4 h-4" />
          <span><strong>Investment Required:</strong> $500-$800 (legal filing, tools setup)</span>
        </div>
      </div>

      <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-green-900">Weeks 3-6: Platform Development Phase 1</h3>
          <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full font-medium">Critical Path</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Amin's Deliverables</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Landing page with lead capture form (Week 3)</li>
              <li>• Custom CRM with sales funnel stages (Week 4)</li>
              <li>• Email automation sequences (5 drip campaigns) (Week 5)</li>
              <li>• Velocity API integration for data extraction (Week 6)</li>
              <li>• AI underwriter: Basic matching logic (Week 6)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Kambiz's Deliverables</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Provide real case files for AI training (Week 3)</li>
              <li>• Review and approve marketing messaging (Week 4)</li>
              <li>• Test Velocity data extraction (Week 6)</li>
              <li>• Begin outreach to Keller Williams contact (Kirby)</li>
              <li>• Prepare agent training presentation outline</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-3 text-sm">
          <div className="flex items-center gap-2 text-green-800 mb-1">
            <Target className="w-4 h-4" />
            <span className="font-semibold">Milestone: First Campaign Launch</span>
          </div>
          <p className="text-slate-600">By end of Week 6, send first email campaign to 1,000 segmented contacts (real estate agents)</p>
        </div>
      </div>

      <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-purple-900">Weeks 7-10: Qualified Leads Begin</h3>
          <span className="text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-medium">First Leads</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Marketing Activities</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Scale email campaigns to full 22K list (segmented)</li>
              <li>• Launch cold outreach to construction developers</li>
              <li>• A/B test landing pages for conversion optimization</li>
              <li>• Set up retargeting ads (Google/Facebook)</li>
              <li>• Host first webinar: AI in Mortgages for agents</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Operations</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Process first qualified leads through AI underwriter</li>
              <li>• Kambiz handles 3-5 client consultations</li>
              <li>• Refine AI recommendations based on feedback</li>
              <li>• Close first 2-3 deals (Week 9-10)</li>
              <li>• Generate first revenue: $10,500-$15,750</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-3">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-purple-600">25-40</div>
              <div className="text-slate-600">Qualified Leads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">8-12</div>
              <div className="text-slate-600">Consultations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">2-3</div>
              <div className="text-slate-600">Closed Deals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-orange-900">Months 3-6: Scale & Optimize</h3>
          <span className="text-sm bg-orange-200 text-orange-800 px-3 py-1 rounded-full font-medium">Growth Phase</span>
        </div>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Platform Enhancements</div>
            <ul className="space-y-1">
              <li>• AI generates submission letters automatically</li>
              <li>• Add remedy recommendation engine</li>
              <li>• Integrate with more lenders (B-lenders, private)</li>
              <li>• Build client self-service portal</li>
              <li>• Mobile app for Kambiz (deal tracking)</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Business Development</div>
            <ul className="space-y-1">
              <li>• Launch 16-week training program for real estate agents</li>
              <li>• Partner with 2-3 real estate brokerages</li>
              <li>• Hire first admin assistant (part-time)</li>
              <li>• Explore SaaS beta with 1-2 friendly brokers</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700"><strong>Target Revenue:</strong></span>
            <span className="text-2xl font-bold text-orange-600">$40K+/month</span>
          </div>
          <div className="text-xs text-slate-600 mt-2">8-10 deals/month × $5,250 avg commission = $42,000 gross</div>
        </div>
      </div>

      <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-red-900">Months 7-12: Market Dominance</h3>
          <span className="text-sm bg-red-200 text-red-800 px-3 py-1 rounded-full font-medium">Scale Phase</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Revenue Streams</div>
            <ul className="space-y-1 text-slate-700">
              <li>• Core business: 15-20 deals/month</li>
              <li>• SaaS: 5-10 brokerage clients</li>
              <li>• Training programs: Quarterly cohorts</li>
              <li>• Agent tools: 50-100 subscribers</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Team Expansion</div>
            <ul className="space-y-1 text-slate-700">
              <li>• 1-2 junior brokers</li>
              <li>• Full-time admin</li>
              <li>• Part-time developer (Amin's team)</li>
              <li>• Marketing coordinator</li>
            </ul>
          </div>
          <div className="bg-white rounded p-4">
            <div className="font-semibold text-slate-900 mb-2">Strategic Goals</div>
            <ul className="space-y-1 text-slate-700">
              <li>• Patent AI underwriting process</li>
              <li>• Raise seed funding (optional)</li>
              <li>• Expand to other provinces</li>
              <li>• Position for acquisition</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-3 text-center">
          <div className="text-3xl font-bold text-red-600 mb-1">$800K - $1.2M</div>
          <div className="text-sm text-slate-600">Projected Annual Revenue (Year 1)</div>
          <div className="text-xs text-slate-500 mt-2">Each partner: $400K-$600K (50/50 split)</div>
        </div>
      </div>
    </div>

    <div className="bg-slate-900 text-white rounded-lg p-6 mt-8">
      <h3 className="font-semibold mb-4">Key Performance Indicators (KPIs) to Track</h3>
      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-slate-400 mb-1">Marketing</div>
          <ul className="space-y-1">
            <li>• Email open rate (over 25%)</li>
            <li>• Landing page conversion (over 5%)</li>
            <li>• Cost per lead (under $50)</li>
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Sales</div>
          <ul className="space-y-1">
            <li>• Lead-to-consultation (30%)</li>
            <li>• Consultation-to-deal (40%)</li>
            <li>• Average deal size ($750K+)</li>
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Operations</div>
          <ul className="space-y-1">
            <li>• Time per deal (under 2 hours)</li>
            <li>• AI accuracy rate (over 85%)</li>
            <li>• Client satisfaction (over 4.5/5)</li>
          </ul>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Financial</div>
          <ul className="space-y-1">
            <li>• Monthly revenue growth</li>
            <li>• Operating margin (over 70%)</li>
            <li>• Partner income vs. target</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PartnershipProposal;