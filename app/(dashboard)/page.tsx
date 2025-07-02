import AppAreaChart from '@/components/AppAreaChart';
import PieChart from '@/components/PieChart';
import HeaderCards from '@/components/HeaderCards';
import BinStatusTable from '@/components/BinStatusTable';
import SustainabilityRewards from '@/components/SustainabilityRewards';
import RecentActivity from '@/components/RecentActivity';


export default function Home() {
  return (
    <div className="flex flex-1 flex-col px-4 mb-5">
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

          </div>
        </div>
      </div>
    </div>

  );
}
