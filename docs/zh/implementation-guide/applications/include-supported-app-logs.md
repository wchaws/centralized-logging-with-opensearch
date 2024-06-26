下表列出了每个日志源支持的日志格式。 有关如何为每种日志格式创建日志摄取的更多信息，请参阅[Log Config](./create-log-config.md).

| Log 格式               | EC2 实例组 | EKS 集群 | Amazon S3 桶                   | Syslog |
| ---------------------- | ---------- | -------- | ------------------------------ | ------ |
| Nginx                  | 是         | 是       | 是                             | 否     |
| Apache HTTP Server     | 是         | 是       | 是                             | 否     |
| JSON                   | 是         | 是       | 是                             | 是     |
| 单行文本               | 是         | 是       | 是                             | 是     |
| 多行文本               | 是         | 是       | 是 (Light Engine 模式下不支持) | 否     |
| 多行文本 (Spring Boot) | 是         | 是       | 是 (Light Engine 模式下不支持) | 否     |
| Syslog RFC5424/RFC3164 | 否         | 否       | 否                             | 是     |
| Syslog 自定义          | 否         | 否       | 否                             | 是     |
| Windows Event          | 是         | 否       | 否                             | 否     |
| IIS Configuration Mode | 是         | 否       | 否                             | 否     |
