"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ec2 = require("aws-cdk-lib/aws-ec2");
const ecs = require("aws-cdk-lib/aws-ecs");
const ecs_patterns = require("aws-cdk-lib/aws-ecs-patterns");
const cdk = require("aws-cdk-lib");
class BonjourFargate extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Create VPC and Fargate Cluster
        // NOTE: Limit AZs to avoid reaching resource quotas
        const vpc = new ec2.Vpc(this, 'MyVpc', { maxAzs: 2 });
        const cluster = new ecs.Cluster(this, 'Cluster', { vpc });
        // Instantiate Fargate Service with just cluster and image
        new ecs_patterns.ApplicationLoadBalancedFargateService(this, "FargateService", {
            cluster,
            taskImageOptions: {
                image: ecs.ContainerImage.fromRegistry("chat"),
            },
        });
    }
}
const app = new cdk.App();
new BonjourFargate(app, 'Bonjour');
app.synth();