import { TestParamsPageProps } from './TestParamsPage.utils';

const TestParamsPage = async (props: TestParamsPageProps) => {
  console.log(props.params.testparams);
  return <div>TestParams</div>;
};

export default TestParamsPage;
