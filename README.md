# mpows
Metric Pipeline for Online Web Services.

Simple creation of pipeline to capture page loads and clicks. Include and configure a simple javascript file to use.

Usage for AWS:

1. Import mpows.yaml into CloudFormation as a new stack. Configure your deployment of mpows by making choices on the Parameters screen of the stack creation.
2. Include mpows.js on any web page you want to capture metrics for.

If you choose to launch a demo environment, a small website will be launched which will include further instructions, including how to configure DataBricks for AWS to run the included DataBricks workbooks. Of course, if you don't need a demo environment, you can simply read the included source of the Elastic Beanstalk site.

Considerations:

The initial build of mpows solely uses Lambda functions with Lambda URLs as an entry point to the pipeline. Lambda has a default quota of around 1,000 concurrent executions per region (10,000 requests). So if you have over 10,000 metrics per second, you will want to either request a quota increase from AWS *or*, more likely, use containers or EC2 instances behind an API Gateway in order to process such a huge amount of traffic.

Also, when choosing number of shards for the kinesis data streams, bear in mind that there is a capacity of 1000 puts and 1 MB per second per shard.