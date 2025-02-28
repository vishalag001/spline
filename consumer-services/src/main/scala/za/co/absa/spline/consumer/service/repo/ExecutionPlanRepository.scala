/*
 * Copyright 2019 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package za.co.absa.spline.consumer.service.repo

import za.co.absa.spline.consumer.service.model._

import scala.concurrent.{ExecutionContext, Future}

trait ExecutionPlanRepository {

  def execPlanAttributeLineage(attrId: Attribute.Id)(implicit ec: ExecutionContext): Future[AttributeGraph]

  def execPlanAttributeImpact(attrId: Attribute.Id)(implicit ec: ExecutionContext): Future[AttributeGraph]

  def findById(execId: ExecutionPlanInfo.Id)(implicit ec: ExecutionContext): Future[LineageDetailed]

  def getWriteOperationId(planId: ExecutionPlanInfo.Id)(implicit ec: ExecutionContext): Future[Operation.Id]
}
