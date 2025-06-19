import AppAreaChart from '@/components/AppAreaChart';
import PieChart from '@/components/PieChart';
import HeaderCards from '@/components/HeaderCards';
import BinStatusTable from '@/components/BinStatusTable';
import SustainabilityRewards from '@/components/SustainabilityRewards';
import RecentActivity from '@/components/RecentActivity';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">

        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <HeaderCards />
          <div className="px-4 lg:px-6 flex flex-col gap-6.5">
            <AppAreaChart />
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
              <div className='md:col-span-2'>
                <BinStatusTable />
              </div>
              <PieChart />
            </div>
            <SustainabilityRewards />
            <RecentActivity />
            <div className="p-5 space-x-5 text-center bg-card">
              <span className='text-cashcrow-primary'>Hello</span>
              <span className='text-cashcrow-lightgreen'>Hello</span>
              <span className='text-cashcrow-secondary'>Hello</span>
              <span className='text-cashcrow-accent'>Hello</span>
              <span className='text-cashcrow-textmuted'>Hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
