# mpows
Metric Pipeline for Online Web Services.

Simple creation of pipeline to capture page loads and clicks. Include and configure a simple javascript file to use.

Parameters are used during stack creation and, along with configuring the javascript file, allow you to create bespoke mpows pipelines.

Lambda functions are written in Python 3.9 runtime.

Usage for AWS:

1. Import mpows.yaml into CloudFormation as a new stack. Configure your deployment of mpows by making choices on the Parameters screen of the stack creation.
2. Include mpows.js on any web page you want to capture metrics for.

Key configuration options:

*Choose whether you want to capture page load events, link click events, or both.
*Choose which request headers you want to capture (if any) for either event.
*Choose whether you want to log data to S3. If you do so, it will be done using a Kinesis Data Stream / Kinesis Firehose pipeline, and will be stored as JSON with a single record per row. From here, you can analyze it with Athena or load it into Redshift, Databricks, or another datawarehouse / datalake solution.
*Choose whether you want to log data to DynamoDB. This is the simplest method to be able to just view a history of requests on a webpage.
*Choose whether you want to launch a demo environment.

If you choose to launch a demo environment, a small Elastic Beanstalk website will be launched which will include further instructions, including how to configure DataBricks for AWS to run the included DataBricks workbooks. Of course, if you don't need a demo environment, you can simply read the included source of the site.

Considerations:

The initial build of mpows solely uses Lambda functions with Lambda URLs as an entry point to the pipeline. Lambda has a default quota of around 1,000 concurrent executions per region (10,000 requests). So if you have over 10,000 metrics per second, you will want to either request a quota increase from AWS *or*, more likely, use containers or EC2 instances behind an API Gateway in order to process such a huge amount of traffic.

Also, when choosing number of shards for the kinesis data streams, bear in mind that there is a capacity of 1000 puts and 1 MB per second per shard.
